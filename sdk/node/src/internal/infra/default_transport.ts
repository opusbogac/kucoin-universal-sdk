import { Transport } from '@internal/interfaces/transport';
import { Response, Serializable, StaticDeserializable } from '@internal/interfaces/serializable';
import { ClientOption } from '@model/client_option';
import { RestRateLimit, RestResponse } from '@model/common';
import { DomainType } from '@model/constant';
import { DEFAULT_TRANSPORT_OPTION, TransportOption } from '@model/transport_option';
import { KcSigner } from './default_signer';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, CreateAxiosDefaults } from 'axios';
import axios from 'axios';
import 'reflect-metadata';
import axiosRetry from 'axios-retry';
import { Agent as HttpAgent } from 'http';
import { Agent as HttpsAgent } from 'https';

export class DefaultTransport implements Transport {
    private readonly option: ClientOption;
    private readonly version: String;
    private transportOption: TransportOption = {} as TransportOption;
    private signer: KcSigner;
    private httpClient: AxiosInstance;

    constructor(option: ClientOption, version: string) {
        this.option = option;
        this.version = version;

        this.transportOption = option.transportOption || ({} as TransportOption);

        this.signer = new KcSigner(
            option.key,
            option.secret,
            option.passphrase,
            option.brokerName,
            option.brokerPartner,
            option.brokerKey,
        );

        this.httpClient = this.createHttpClient(this.transportOption);
    }

    private createHttpClient(trans_option: TransportOption): AxiosInstance {
        const instance = axios.create({
            timeout: trans_option.timeout || DEFAULT_TRANSPORT_OPTION.timeout,
            headers: {
                Connection: trans_option.keepAlive ? 'keep-alive' : 'close',
            },
            httpAgent: trans_option.keepAlive
                ? new HttpAgent({
                      maxSockets: trans_option.maxConnsPerHost || DEFAULT_TRANSPORT_OPTION.maxConnsPerHost,
                      maxFreeSockets: trans_option.maxIdleConnsPerHost || DEFAULT_TRANSPORT_OPTION.maxIdleConnsPerHost,
                      timeout: trans_option.timeout || DEFAULT_TRANSPORT_OPTION.timeout,
                      keepAlive: true,
                      keepAliveMsecs: trans_option.idleConnTimeout || DEFAULT_TRANSPORT_OPTION.idleConnTimeout,
                  })
                : undefined,
            httpsAgent: trans_option.keepAlive
                ? new HttpsAgent({
                      maxSockets: trans_option.maxConnsPerHost || DEFAULT_TRANSPORT_OPTION.maxConnsPerHost,
                      maxFreeSockets: trans_option.maxIdleConnsPerHost || DEFAULT_TRANSPORT_OPTION.maxIdleConnsPerHost,
                      timeout: trans_option.timeout || DEFAULT_TRANSPORT_OPTION.timeout,
                      keepAlive: true,
                      keepAliveMsecs: trans_option.idleConnTimeout || DEFAULT_TRANSPORT_OPTION.idleConnTimeout,
                  })
                : undefined,
        } as CreateAxiosDefaults);

        // Add retry logic
        axiosRetry(instance, {
            retries: trans_option.maxRetries || DEFAULT_TRANSPORT_OPTION.maxRetries,
            shouldResetTimeout: true,
            retryDelay: (retryCount, error) => {
                const delay = trans_option.retryDelay;
                return delay;
            },
            retryCondition: (error) => {
                // acquire request config
                const currentRetry = (error.config as any)?._retry || 0;
                const maxRetries = trans_option.maxRetries || DEFAULT_TRANSPORT_OPTION.maxRetries;

                // change retry condition here
                const shouldRetry =
                    axiosRetry.isNetworkOrIdempotentRequestError(error) ||
                    error.message.includes('timeout') ||
                    (error.response && error.response.status >= 500) ||
                    error.code === 'ECONNABORTED';
                return shouldRetry && currentRetry < maxRetries;
            },
        });

        // todo: Use user interceptors, avoid defaults.
        instance.interceptors.request.use(
            (config) => {
                console.log('[REQUEST]', {
                    method: config.method?.toUpperCase(),
                    url: config.url,
                });
                return config;
            },
            (error) => {
                console.error('[REQUEST ERROR]', error.message);
                return Promise.reject(error);
            },
        );

        instance.interceptors.response.use(
            (response) => {
                if (response.status >= 400) {
                    console.error('[RESPONSE ERROR]', {
                        status: response.status,
                        data: response.data,
                    });
                }
                return response;
            },
            (error) => {
                console.error('[RESPONSE ERROR]', {
                    message: error.message,
                    status: error.response?.status,
                    data: error.response?.data,
                });
                return Promise.reject(error);
            },
        );

        return instance;
    }

    private processHeaders(
        body: string,
        rawUrl: string,
        config: AxiosRequestConfig,
        method: string,
        broker: boolean,
    ): void {
        const payload = `${method}${rawUrl}${body || ''}`;
        const headers = broker ? this.signer.brokerHeaders(payload) : this.signer.headers(payload);

        config.headers = {
            ...config.headers,
            ...headers,
        };
    }

    private processPathVariable(path: string, requestObj: any | null): string {
        if (!requestObj) {
            return path;
        }

        const pathVariables: { [key: string]: any } = {};

        for (const key of Object.keys(requestObj)) {
            const metadata = Reflect.getMetadata('path', requestObj, key);
            if (metadata) {
                pathVariables[metadata] = requestObj[key];
            }
        }

        const missingPlaceholders = Object.entries(pathVariables)
            .filter(([_, value]) => value == null)
            .map(([key]) => key);

        if (missingPlaceholders.length > 0) {
            throw new Error(
                `Missing path variable value(s) for: ${missingPlaceholders.join(', ')}`,
            );
        }

        return path.replace(/{(.*?)}/g, (_, key) => {
            if (key in pathVariables) {
                return String(pathVariables[key]);
            }
            throw new Error(`Path variable {${key}} is not defined in request object.`);
        });
    }

    private rawQuery(queryDict: Record<string, any>): string {
        return Object.entries(queryDict)
            .map(([key, value]) => {
                if (Array.isArray(value)) {
                    return value.map((val) => `${key}=${encodeURIComponent(val)}`).join('&');
                }
                return `${key}=${encodeURIComponent(value)}`;
            })
            .join('&');
    }

    private processRequest(
        requestObj: Serializable | null,
        broker: boolean,
        path: string,
        rawpath: string,
        endpoint: string,
        method: string,
        requestAsJson: boolean,
        args?: any,
    ): AxiosRequestConfig {
        const fullPath = endpoint + path;
        const rawUrl = path;
        let reqBody = '';
        let queryPath = path;

        if (requestAsJson) {
            if (requestObj) {
                reqBody = requestObj.toJson();
            }
        } else {
            if (method === 'GET' || method === 'DELETE') {
                if (requestObj) {
                    // create a new object for query parameters
                    const queryObj: Record<string, any> = { ...requestObj };
                    
                    // check path variables and remove from query
                    const pathVarPattern = /{([^}]+)}/g;
                    let match;
                    while ((match = pathVarPattern.exec(rawpath)) !== null) {
                        const pathVarName = match[1];
                        if (pathVarName in queryObj) {
                            delete queryObj[pathVarName];
                        }
                    }

                    const queryParams = this.rawQuery(queryObj);
                    if (queryParams) {
                        queryPath = `${path}?${queryParams}`;
                    }
                }
            } else if (method === 'POST') {
                if (requestObj) {
                    reqBody = requestObj.toJson();
                }
            } else {
                throw new Error(`Invalid method: ${method}`);
            }
        }

        const config: AxiosRequestConfig = {
            method: method.toLowerCase() as any,
            url: endpoint + queryPath,
            data: reqBody,
            headers: {
                'User-Agent': `Kucoin-Universal-Node-SDK/${this.version}`,
            },
        };

        // Add Content-Type only for POST and PUT requests
        if (method === 'POST' || method === 'PUT') {
            config.headers = {
                ...config.headers,
                'Content-Type': 'application/json',
            };
        }

        // Use queryPath instead of rawUrl for signature
        this.processHeaders(reqBody, queryPath, config, method, broker);
        return config;
    }

    private processLimit(headers: any): RestRateLimit {
        const limit = parseInt(headers['gw-ratelimit-limit'] || '-1', 10);
        const remaining = parseInt(headers['gw-ratelimit-remaining'] || '-1', 10);
        const reset = parseInt(headers['gw-ratelimit-reset'] || '-1', 10);

        const rateLimit = {
            limit,
            remaining,
            reset,
        };

        return rateLimit;
    }

    private processResponse<T extends Response<RestResponse>>(
        response: AxiosResponse,
        responseCls: StaticDeserializable<T>,
    ): Response<any> {
        // todo missing logic
        if (response.status >= 400) {
            console.error('[RESPONSE ERROR]', {
                status: response.status,
                statusText: response.statusText,
                data: response.data,
            });
        }

        const commonResponse = RestResponse.fromJson(JSON.stringify(response.data));
        commonResponse.rateLimit = this.processLimit(response.headers);

        let responseObj = responseCls.fromObject(commonResponse.data);
        responseObj.setCommonResponse(commonResponse);

        return responseObj;
    }

    call<T extends Response<RestResponse>>(
        domain: string,
        isBroker: boolean,
        method: string,
        path: string,
        requestObj: Serializable | null,
        responseCls: StaticDeserializable<T>,
        requestJson: boolean,
        args?: any,
    ): Promise<any> {
        return Promise.resolve()
            .then((): AxiosRequestConfig<any> => {
                const endpoint = this.getEndpoint(domain);
                const processedPath = this.processPathVariable(path, requestObj);
                return this.processRequest(
                    requestObj,
                    isBroker,
                    processedPath,
                    path,
                    endpoint,
                    method,
                    requestJson,
                    args,
                );
            })
            .then((config: AxiosRequestConfig<any>) => {
                return this.httpClient.request(config);
            })
            .then((response: AxiosResponse) => {
                return this.processResponse(response, responseCls);
            })
            .catch((err: any) => {
                throw err;
            });
    }

    private getEndpoint(domain: string): string {
        switch (domain.toLowerCase()) {
            case DomainType.Spot:
                if (!this.option.spotEndpoint) {
                    throw new Error('Spot endpoint is not set');
                }
                return this.option.spotEndpoint;
            case DomainType.Futures:
                if (!this.option.futuresEndpoint) {
                    throw new Error('Futures endpoint is not set');
                }
                return this.option.futuresEndpoint;
            case DomainType.Broker:
                if (!this.option.brokerEndpoint) {
                    throw new Error('Broker endpoint is not set');
                }
                return this.option.brokerEndpoint;
            default:
                throw new Error(`Invalid domain: ${domain}`);
        }
    }

    close(): Promise<void> {
        // Cancel any pending requests
        if (this.httpClient) {
            // Clear any persistent connections
            if (this.httpClient.defaults.httpAgent) {
                this.httpClient.defaults.httpAgent.destroy();
            }
            if (this.httpClient.defaults.httpsAgent) {
                this.httpClient.defaults.httpsAgent.destroy();
            }

            // Remove reference to the client
            (this.httpClient as any) = null;
        }

        return Promise.resolve(undefined);
    }
}

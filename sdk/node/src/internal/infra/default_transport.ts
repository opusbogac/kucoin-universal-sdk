import { Transport } from '@internal/interfaces/transport';
import { Serializable } from '@internal/interfaces/serializable';
import { Response } from '@internal/interfaces/response';
import { ClientOption } from '@model/client_option';
import { RestRateLimit, RestResponse } from '@model/common';
import { DomainType } from '@model/constant';
import { TransportOption } from '@model/transport_option';
import { KcSigner } from './default_signer';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import type { AxiosResponse } from 'axios';
import "reflect-metadata";

export class DefaultTransport implements Transport {

    private readonly option: ClientOption;
    private readonly version: String;
    private transportOption: TransportOption = {} as TransportOption;
    private signer: KcSigner;
    private httpClient: AxiosInstance;

    constructor(option: ClientOption, version: string) {
        this.option = option;
        this.version = version;

        this.transportOption = option.transportOption || {} as TransportOption;
        
        this.signer = new KcSigner(option.key,
            option.secret,
            option.passphrase,
            option.brokerName,
            option.brokerPartner,
            option.brokerKey);

        this.httpClient = this.createHttpClient(this.transportOption);
    }

    private createHttpClient(trans_option: TransportOption): AxiosInstance {
        const instance = axios.create({
            timeout: trans_option.timeout,
            headers: {
                'Connection': trans_option.keepAlive ? 'keep-alive' : 'close',
            },
        });

        instance.interceptors.request.use(
            config => {
                console.log('[REQUEST]', {
                    method: config.method?.toUpperCase(),
                    url: config.url
                });
                return config;
            },
            error => {
                console.error('[REQUEST ERROR]', error.message);
                return Promise.reject(error);
            }
        );

        instance.interceptors.response.use(
            response => {
                if (response.status >= 400) {
                    console.error('[RESPONSE ERROR]', {
                        status: response.status,
                        data: response.data
                    });
                }
                return response;
            },
            error => {
                console.error('[RESPONSE ERROR]', {
                        message: error.message,
                        status: error.response?.status,
                    data: error.response?.data
                    });
                    return Promise.reject(error);
            }
        );

        return instance;
    }

    private processHeaders(body: string, rawUrl: string, config: AxiosRequestConfig, method: string, broker: boolean): void {
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
            const metadata = Reflect.getMetadata("path", requestObj, key);
            if (metadata) {
                pathVariables[metadata] = requestObj[key];
            }
        }
        
        const missingPlaceholders = Object.entries(pathVariables)
            .filter(([_, value]) => value == null)
            .map(([key]) => key);
        
        if (missingPlaceholders.length > 0) {
            throw new Error(`Missing path variable value(s) for: ${missingPlaceholders.join(", ")}`);
        }
        
        return path.replace(/{(.*?)}/g, (_, key) => {
            if (key in pathVariables) {
                return String(pathVariables[key]);
            }
            throw new Error(`Path variable {${key}} is not defined in request object.`);
        });
    }

    private rawQuery(queryDict: Record<string, any>): string {
        return Object.entries(queryDict).map(([key, value]) => {
            if (Array.isArray(value)) {
                return value.map(val => `${key}=${encodeURIComponent(val)}`).join('&');
            }
            return `${key}=${encodeURIComponent(value)}`;
        }).join('&');
    }

    private async processRequest(
        requestObj: Serializable<any> | null,
        broker: boolean,
        path: string,
        endpoint: string,
        method: string,
        requestAsJson: boolean,
        args?: any
    ): Promise<AxiosRequestConfig> {
        const fullPath = endpoint + path;
        const rawUrl = path;
        let reqBody = '';
        let queryPath = path;

        if (requestAsJson && requestObj) {
            reqBody = JSON.stringify(requestObj);
        } else if (method === 'GET' || method === 'DELETE') {
            const queryParams = this.rawQuery(requestObj || {});
            if (queryParams) {
                queryPath = `${path}?${queryParams}`;
            }
        } else if(requestObj){
            reqBody = JSON.stringify(requestObj);
        } else {
            throw new Error('Invalid request object');
        }

        const config: AxiosRequestConfig = {
            method: method.toLowerCase() as any,
            url: endpoint + queryPath,
            data: reqBody,
            headers: {
                'User-Agent': `Kucoin-Universal-Node-SDK/${this.version}`
            }
        };

        // Add Content-Type only for POST and PUT requests
        if (method === 'POST' || method === 'PUT') {
            config.headers = {
                ...config.headers,
                'Content-Type': 'application/json'
            };
        }

        // Use queryPath instead of rawUrl for signature
        this.processHeaders(reqBody, queryPath, config, method, broker);
        return config;
    }

    private async doWithRetry(req_config: AxiosRequestConfig): Promise<AxiosResponse> {
        try {
            if(this.transportOption.interceptors){
                for (const interceptor of this.transportOption.interceptors) {
                    req_config = interceptor.before(req_config) || req_config;
                }
            }

            let response = await this.httpClient.request(req_config);

            if(this.transportOption.interceptors){
                for (const interceptor of this.transportOption.interceptors) {
                    response = interceptor.after(req_config,response,null);
                }
            }

            return response;
        } catch (err) {
            throw err;
        }
    }

    private processLimit(headers: Record<string, string>): RestRateLimit {
        const limit = parseInt(headers['gw-ratelimit-limit'] || '-1', 10);
        const remaining = parseInt(headers['gw-ratelimit-remaining'] || '-1', 10);
        const reset = parseInt(headers['gw-ratelimit-reset'] || '-1', 10);

        const rateLimit = {
            limit,
            remaining,
            reset
        };
    
        if (remaining <= Math.ceil(limit * 0.1)) {
            console.warn('[RATE LIMIT WARNING]', rateLimit);
        }
    
        return rateLimit;
    }

    private processResponse(response: AxiosResponse, responseObj: Response<any, any>): Response<any, any> {
        if (response.status >= 400) {
            console.error('[RESPONSE ERROR]', {
                status: response.status,
                statusText: response.statusText,
                data: response.data
            });
        }

        const commonResponse = RestResponse.fromJson(JSON.stringify(response.data));
        commonResponse.rateLimit = this.processLimit(response.headers);
        responseObj.setCommonResponse(commonResponse);

        if (commonResponse.data) {
            responseObj = responseObj.fromObject(commonResponse.data);
        }

        return responseObj;
    }

    async call(
        domain: string,
        isBroker: boolean,
        method: string,
        path: string,
        requestObj: Serializable<any> | null,
        responseObj: Response<any, any>,
        requestJson: boolean,
        args?: any
    ): Promise<Response<any, any>> {
        domain = domain.toLowerCase();
        method = method.toUpperCase();

        const endpoint = this.getEndpoint(domain);
        const processedPath = this.processPathVariable(path, requestObj);
        const config = await this.processRequest(requestObj, isBroker, processedPath, endpoint, method, requestJson, args);
        const response = await this.doWithRetry(config);

        return this.processResponse(response, responseObj);
    }

    private getEndpoint(domain: string): string {
        switch (domain.toLowerCase()) {
            case DomainType.Spot:
                return this.option.spotEndpoint;
            case DomainType.Futures:
                return this.option.futuresEndpoint;
            case DomainType.Broker:
                return this.option.brokerEndpoint;
            default:
                throw new Error(`Invalid domain: ${domain}`);
        }
    }

    close(): Promise<void> {
        return Promise.resolve(undefined);
    }
}

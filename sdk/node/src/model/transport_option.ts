import { AxiosInterceptorOptions, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

/**
 * Describes the structure for Axios request interceptors.
 * @template T - The type of the request configuration.
 */
export interface AxiosRequestInterceptor {
    onFulfilled?:
        | ((
              value: InternalAxiosRequestConfig,
          ) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>)
        | null;
    onRejected?: ((error: any) => any) | null;
    options?: AxiosInterceptorOptions;
}

/**
 * Describes the structure for Axios response interceptors.
 * @template T - The type of the response.
 */
export interface AxiosResponseInterceptor {
    onFulfilled?: ((value: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>) | null;
    onRejected?: ((error: any) => any) | null;
}

/**
 * Represents HTTP interceptors for requests and responses.
 */
export interface Interceptor {
    /**
     * Handles modifications to the request before sending.
     */
    before: AxiosRequestInterceptor;

    /**
     * Handles processing of the response or errors.
     */
    after: AxiosResponseInterceptor;
}

export interface ProxyOption {
    http?: { host: string; port: number };
    https?: { host: string; port: number };
    auth?: { username: string; password: string };
}

/**
 * TransportOption interface for storing various HTTP request configurations
 */
export interface TransportOption {
    /**
     * Request timeout duration (in milliseconds)
     */
    timeout: number;
    /**
     * Whether to enable keep-alive (persistent connection)
     */
    keepAlive: boolean;
    /**
     * Maximum number of idle (keep-alive) connections across all hosts
     */
    maxIdleConns: number;
    /**
     * Maximum idle connections per host
     */
    maxIdleConnsPerHost: number;
    /**
     * Total number of connections per host
     */
    maxConnsPerHost: number;
    /**
     * Maximum time an idle connection will remain idle (in milliseconds)
     */
    idleConnTimeout: number;
    /**
     * HTTP(s) proxy options
     */
    proxy?: ProxyOption;
    /**
     * Maximum number of retry attempts
     */
    maxRetries: number;
    /**
     * Delay duration between retries (in milliseconds)
     */
    retryDelay: number;
    /**
     * HTTP interceptors
     */
    interceptors?: Interceptor[];
}

/**
 * Default values for TransportOption
 */
export const DEFAULT_TRANSPORT_OPTION: TransportOption = {
    timeout: 30000, // 30 seconds
    keepAlive: true,
    maxIdleConns: 100,
    maxIdleConnsPerHost: 2,
    maxConnsPerHost: 10,
    idleConnTimeout: 90000, // 90 seconds
    maxRetries: 3,
    retryDelay: 2000, // 2 seconds
    interceptors: [],
};

/**
 * TransportOptionBuilder for creating and customizing TransportOption instances
 */
export class TransportOptionBuilder {
    private option: TransportOption;

    constructor() {
        this.option = { ...DEFAULT_TRANSPORT_OPTION };
    }

    /**
     * Set the request timeout duration (in milliseconds)
     */
    setTimeout(timeout: number): TransportOptionBuilder {
        this.option.timeout = timeout;
        return this;
    }

    /**
     * Set whether to enable keep-alive (persistent connection)
     */
    setKeepAlive(keepAlive: boolean): TransportOptionBuilder {
        this.option.keepAlive = keepAlive;
        return this;
    }

    /**
     * Set the maximum number of idle (keep-alive) connections across all hosts
     */
    setMaxIdleConns(maxIdleConns: number): TransportOptionBuilder {
        this.option.maxIdleConns = maxIdleConns;
        return this;
    }

    /**
     * Set the maximum idle connections per host
     */
    setMaxIdleConnsPerHost(maxIdleConnsPerHost: number): TransportOptionBuilder {
        this.option.maxIdleConnsPerHost = maxIdleConnsPerHost;
        return this;
    }

    /**
     * Set the total number of connections per host
     */
    setMaxConnsPerHost(maxConnsPerHost: number): TransportOptionBuilder {
        this.option.maxConnsPerHost = maxConnsPerHost;
        return this;
    }

    /**
     * Set the maximum time an idle connection will remain idle (in milliseconds)
     */
    setIdleConnTimeout(idleConnTimeout: number): TransportOptionBuilder {
        this.option.idleConnTimeout = idleConnTimeout;
        return this;
    }

    /**
     * Set the HTTP(s) proxy options
     */
    setProxy(proxy: ProxyOption): TransportOptionBuilder {
        this.option.proxy = proxy;
        return this;
    }

    /**
     * Set the maximum number of retry attempts
     */
    setMaxRetries(maxRetries: number): TransportOptionBuilder {
        this.option.maxRetries = maxRetries;
        return this;
    }

    /**
     * Set the delay duration between retries (in milliseconds)
     */
    setRetryDelay(retryDelay: number): TransportOptionBuilder {
        this.option.retryDelay = retryDelay;
        return this;
    }

    /**
     * Set the HTTP interceptors
     */
    setInterceptors(interceptors: Interceptor[]): TransportOptionBuilder {
        this.option.interceptors = interceptors;
        return this;
    }

    /**
     * Add an HTTP interceptor
     */
    addInterceptor(interceptor: Interceptor): TransportOptionBuilder {
        if (!this.option.interceptors) {
            this.option.interceptors = [];
        }
        this.option.interceptors.push(interceptor);
        return this;
    }

    /**
     * Build and return the TransportOption instance
     */
    build(): TransportOption {
        return this.option;
    }
}

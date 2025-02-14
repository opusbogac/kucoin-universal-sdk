import {
    ClientOptionBuilder,
    GlobalApiEndpoint,
    GlobalBrokerApiEndpoint,
    GlobalFuturesApiEndpoint,
    Interceptor,
    RestError,
    TransportOptionBuilder,
} from '@model/index';
import { DefaultClient } from '@api/index';
import { logger, Logger, LoggerOptions} from '@src/common'

describe('Auto Test', () => {
    const jestConsole = console;

    beforeEach(() => {
        global.console = require('console');
    });

    afterEach(() => {
        global.console = jestConsole;
    });

    test('test proxy', () => {
        // Set specific options, others will fall back to default values
        const httpTransportOption = new TransportOptionBuilder()
            .setKeepAlive(true)
            .setMaxConnsPerHost(10)
            .setMaxIdleConns(10)
            .setProxy({
                http: {
                    host: '127.0.0.1',
                    port: 7890,
                },
            })
            .build();

        // Create a client using the specified options
        const clientOption = new ClientOptionBuilder()
            .setKey('')
            .setSecret('')
            .setPassphrase('')
            .setSpotEndpoint(GlobalApiEndpoint)
            .setFuturesEndpoint(GlobalFuturesApiEndpoint)
            .setBrokerEndpoint(GlobalBrokerApiEndpoint)
            .setTransportOption(httpTransportOption)
            .build();

        const client = new DefaultClient(clientOption);

        // Get the Restful Service
        const kucoinRestService = client.restService();
        let api = kucoinRestService.getSpotService().getMarketApi();

        return api.getAllCurrencies().then((result) => {
            console.log(result);
        });
    });

    test('test timeout retry', () => {
        // Set specific options, others will fall back to default values
        const httpTransportOption = new TransportOptionBuilder()
            .setKeepAlive(true)
            .setMaxConnsPerHost(10)
            .setMaxIdleConns(10)
            .setTimeout(1)
            .setRetryDelay(100)
            .setMaxRetries(3)
            .build();

        // Create a client using the specified options
        const clientOption = new ClientOptionBuilder()
            .setKey('')
            .setSecret('')
            .setPassphrase('')
            .setSpotEndpoint(GlobalApiEndpoint)
            .setFuturesEndpoint(GlobalFuturesApiEndpoint)
            .setBrokerEndpoint(GlobalBrokerApiEndpoint)
            .setTransportOption(httpTransportOption)
            .build();

        const client = new DefaultClient(clientOption);

        // Get the Restful Service
        const kucoinRestService = client.restService();
        let api = kucoinRestService.getSpotService().getMarketApi();

        return api
            .getAllCurrencies()
            .then((result) => {
                console.log(result);
            })
            .catch((e) => {
                if (e instanceof RestError) {
                    expect(e.getError()?.name).toEqual('AxiosError');
                }
            });
    });

    test('test interceptor', () => {
        let interceptors: Array<Interceptor> = [
            {
                before: {
                    onFulfilled: (config) => {
                        console.log('debug: ', config.url);
                        return config;
                    },
                    onRejected: (error) => {
                        console.log('debug: ', error);
                        return Promise.reject(error);
                    },
                },
                after: {
                    onFulfilled: (value) => {
                        console.log('debug: ', value);
                        return value;
                    },
                    onRejected: (error) => {
                        console.log('debug: ', error);
                        return Promise.reject(error);
                    },
                },
            },
        ];

        // Set specific options, others will fall back to default values
        const httpTransportOption = new TransportOptionBuilder()
            .setKeepAlive(true)
            .setMaxConnsPerHost(10)
            .setMaxIdleConns(10)
            .setInterceptors(interceptors)
            .build();

        // Create a client using the specified options
        const clientOption = new ClientOptionBuilder()
            .setKey('')
            .setSecret('')
            .setPassphrase('')
            .setSpotEndpoint(GlobalApiEndpoint)
            .setFuturesEndpoint(GlobalFuturesApiEndpoint)
            .setBrokerEndpoint(GlobalBrokerApiEndpoint)
            .setTransportOption(httpTransportOption)
            .build();

        const client = new DefaultClient(clientOption);

        // Get the Restful Service
        const kucoinRestService = client.restService();
        let api = kucoinRestService.getSpotService().getMarketApi();

        return api.getAllCurrencies();
    });

    test('test logger', () => {
        logger.info('info');
        logger.debug('debug');
        logger.warn('warn');
        logger.error('error');
    });


    test('test logger2', () => {
        const customLogger = {
            log: (level: string, message: string, ...meta: any[]) => {
                console.log(`[CUSTOM LOG] [${level.toUpperCase()}] ${message}`, meta);
            },
            info: (message: string, ...meta: any[]) => {
                console.log(`[CUSTOM INFO] ${message}`, meta);
            },
            warn: (message: string, ...meta: any[]) => {
                console.warn(`[CUSTOM WARN] ${message}`, meta);
            },
            error: (message: string, ...meta: any[]) => {
                console.error(`[CUSTOM ERROR] ${message}`, meta);
            },
            debug: (message: string, ...meta: any[]) => {
                console.debug(`[CUSTOM DEBUG] ${message}`, meta);
            },
            setGlobalLogger: (newLogger: Logger, newOptions?: LoggerOptions) => {
                Object.assign(customLogger, newLogger);
            }
        };

        logger.setGlobalLogger(customLogger, {
            level: 'debug',
            format: (level: string, message: string, meta?: any[]) => {
                const time = new Date().toISOString();
                const metaStr = meta && meta.length > 0 ? JSON.stringify(meta) : '';
                return `[TS TEST] ${time} [${level.toUpperCase()}] ${message}${metaStr ? ` ${metaStr}` : ''}`;
            }
        });

        logger.info('info');
        logger.debug('debug');
        logger.warn('warn');
        logger.error('error');

    });
});

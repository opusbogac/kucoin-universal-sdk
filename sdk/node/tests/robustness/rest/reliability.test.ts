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

describe('Auto Test', () => {
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
});

import {
    ClientOptionBuilder,
    GlobalApiEndpoint,
    GlobalBrokerApiEndpoint,
    GlobalFuturesApiEndpoint,
    TransportOptionBuilder,
} from '@model/index';
import { DefaultClient } from '@api/index';

import { execSync } from 'child_process';

// only work on macOS/Linux
function getProcessTCPConnectionsWithLsof(): number {
    try {
        const result = execSync(`lsof -iTCP -n -P | grep ${process.pid} | wc -l`);
        return parseInt(result.toString().trim(), 10) || 0;
    } catch (error) {
        console.error(`Error executing lsof: ${error}`);
        return 0;
    }
}

function logMemoryUsage() {
    const memoryUsage = process.memoryUsage();

    console.log(`Memory Usage:
  - RSS: ${(memoryUsage.rss / 1024 / 1024).toFixed(2)} MB
  - Heap Total: ${(memoryUsage.heapTotal / 1024 / 1024).toFixed(2)} MB
  - Heap Used: ${(memoryUsage.heapUsed / 1024 / 1024).toFixed(2)} MB
  - External: ${(memoryUsage.external / 1024 / 1024).toFixed(2)} MB
  - Array Buffers: ${(memoryUsage.arrayBuffers / 1024 / 1024).toFixed(2)} MB`);
}

describe('Auto Test', () => {
    test('test tcp leak', () => {
        // Set specific options, others will fall back to default values
        const httpTransportOption = new TransportOptionBuilder()
            .setKeepAlive(true)
            .setMaxConnsPerHost(1)
            .setMaxIdleConns(2)
            .setMaxIdleConnsPerHost(1)
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
        let spotApi = kucoinRestService.getSpotService().getMarketApi();
        let futuresApi = kucoinRestService.getFuturesService().getMarketApi();
        let marginApi = kucoinRestService.getMarginService().getMarketApi();

        return Promise.resolve()
            .then(() => {
                console.log(`before : ${getProcessTCPConnectionsWithLsof()}`);
                let promises = [];
                for (let i = 0; i < 10; i++) {
                    promises.push(spotApi.getAllCurrencies());
                    promises.push(futuresApi.getAllTickers());
                    promises.push(marginApi.getMarginConfig());
                }
                return Promise.all(promises);
            })
            .then(() => {
                console.log(`after: ${getProcessTCPConnectionsWithLsof()}`);
            });
    });

    jest.setTimeout(120000);
    test('test memory leak', (done) => {
        // Set specific options, others will fall back to default values
        const httpTransportOption = new TransportOptionBuilder()
            .setKeepAlive(true)
            .setMaxConnsPerHost(1)
            .setMaxIdleConns(2)
            .setMaxIdleConnsPerHost(1)
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
        let spotApi = kucoinRestService.getSpotService().getMarketApi();
        let futuresApi = kucoinRestService.getFuturesService().getMarketApi();
        let marginApi = kucoinRestService.getMarginService().getMarketApi();

        let x = 0;

        let elapsedSeconds = 0;
        const interval = setInterval(async () => {
            elapsedSeconds++;
            logMemoryUsage();
            let promises = [];
            for (let i = 0; i < 10; i++) {
                promises.push(
                    spotApi.getAllCurrencies().then((result) => {
                        x += result.data.length;
                    }),
                );
                promises.push(
                    futuresApi.getAllTickers().then((result) => {
                        x += result.data.length;
                    }),
                );
                promises.push(
                    marginApi.getMarginConfig().then((result) => {
                        x += result.maxLeverage;
                    }),
                );
            }
            await Promise.all(promises);

            if (elapsedSeconds >= 60) {
                clearInterval(interval);
                console.log('\nTest completed. Stopping requests.');
                done();
            }
        }, 1000);
    });
});

import {
    ClientOptionBuilder,
    GlobalApiEndpoint,
    GlobalBrokerApiEndpoint,
    GlobalFuturesApiEndpoint,
    WebSocketClientOptionBuilder,
} from '@model/index';
import { DefaultClient } from '@api/index';
import { execSync } from 'child_process';
import { AllTickersEvent } from '@generate/spot/spotpublic/model_all_tickers_event';
import { TickerEvent } from '@generate/spot/spotpublic/model_ticker_event';
import { WebSocketEvent } from '@model/websocket_option';

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

function getMemoryUsage(): { heapUsed: number; heapTotal: number; rss: number } {
    const memUsage = process.memoryUsage();
    return {
        heapUsed: Math.round(memUsage.heapUsed / 1024 / 1024), // MB
        heapTotal: Math.round(memUsage.heapTotal / 1024 / 1024), // MB
        rss: Math.round(memUsage.rss / 1024 / 1024), // MB
    };
}

function logMemoryUsage() {
    const usage = getMemoryUsage();
    console.log(
        `Memory Usage - Heap Used: ${usage.heapUsed}MB, Heap Total: ${usage.heapTotal}MB, RSS: ${usage.rss}MB`,
    );
}

describe('WebSocket Robustness Test', () => {
    // Test single connection
    test('test single connection', async () => {
        const wsOption = new WebSocketClientOptionBuilder()
            .withReconnect(true)
            .withReconnectInterval(1000)
            .withDialTimeout(5000)
            .withEventCallback((event: WebSocketEvent, msg: string) => {
                console.log(`WebSocket Event: ${event}, Message: ${msg}`);
            })
            .build();

        let start = getProcessTCPConnectionsWithLsof();
        const clientOption = new ClientOptionBuilder()
            .setKey('')
            .setSecret('')
            .setPassphrase('')
            .setSpotEndpoint(GlobalApiEndpoint)
            .setFuturesEndpoint(GlobalFuturesApiEndpoint)
            .setBrokerEndpoint(GlobalBrokerApiEndpoint)
            .setWebSocketClientOption(wsOption)
            .build();

        const client = new DefaultClient(clientOption);
        const wsService = client.wsService();
        const spotPublicWS = wsService.newSpotPublicWS();

        // Start WebSocket client
        return spotPublicWS
            .start()
            .then(() => {
                return spotPublicWS.ticker(
                    ['BTC-USDT'],
                    (topic: string, subject: string, data: TickerEvent) => {
                        console.log('Received message:', data);
                    },
                );
            })
            .then((id) => {
                return spotPublicWS.unSubscribe(id);
            })
            .then(() => {
                return spotPublicWS.stop();
            })
            .then(() => {
                expect(getProcessTCPConnectionsWithLsof()).toEqual(start);
            });
    });

    // Test WebSocket connection leak
    test('test websocket connection leak', async () => {
        const wsOption = new WebSocketClientOptionBuilder()
            .withReconnect(true)
            .withReconnectInterval(1000)
            .withDialTimeout(5000)
            .withEventCallback((event: WebSocketEvent, msg: string) => {
                console.log(`WebSocket Event: ${event}, Message: ${msg}`);
            })
            .build();

        let start = getProcessTCPConnectionsWithLsof();
        const clientOption = new ClientOptionBuilder()
            .setKey('')
            .setSecret('')
            .setPassphrase('')
            .setSpotEndpoint(GlobalApiEndpoint)
            .setFuturesEndpoint(GlobalFuturesApiEndpoint)
            .setBrokerEndpoint(GlobalBrokerApiEndpoint)
            .setWebSocketClientOption(wsOption)
            .build();

        const client = new DefaultClient(clientOption);
        const wsService = client.wsService();

        let promises = [];

        for (let i = 0; i < 10; i++) {
            const spotPublicWS = wsService.newSpotPublicWS();
            promises.push(
                spotPublicWS
                    .start()
                    .then(() => {
                        return new Promise((resolve) => {
                            console.log('TCP connection:', getProcessTCPConnectionsWithLsof());
                            setTimeout(resolve, 1000);
                        });
                    })
                    .then(() => {
                        return spotPublicWS.stop();
                    }),
            );
        }

        return Promise.all(promises).then(() => {
            expect(getProcessTCPConnectionsWithLsof()).toEqual(start);
        });
    });

    // Test WebSocket memory leak
    jest.setTimeout(1200000);
    test('test websocket memory leak', async () => {
        const wsOption = new WebSocketClientOptionBuilder()
            .withReconnect(true)
            .withReconnectInterval(1000)
            .withDialTimeout(5000)
            .withEventCallback((event: WebSocketEvent, msg: string) => {
                console.log(`WebSocket Event: ${event}, Message: ${msg}`);
            })
            .build();

        let start = getProcessTCPConnectionsWithLsof();
        const clientOption = new ClientOptionBuilder()
            .setKey('')
            .setSecret('')
            .setPassphrase('')
            .setSpotEndpoint(GlobalApiEndpoint)
            .setFuturesEndpoint(GlobalFuturesApiEndpoint)
            .setBrokerEndpoint(GlobalBrokerApiEndpoint)
            .setWebSocketClientOption(wsOption)
            .build();

        const client = new DefaultClient(clientOption);
        const wsService = client.wsService();

        let promises = [];
        let counter = 0;
        logMemoryUsage();
        for (let i = 0; i < 5; i++) {
            const spotPublicWS = wsService.newSpotPublicWS();
            promises.push(
                spotPublicWS
                    .start()
                    .then(() => {
                        return spotPublicWS.allTickers(
                            (topic: string, subject: string, data: AllTickersEvent) => {
                                // do something to data
                                counter += data.time;
                            },
                        );
                    })
                    .then((id) => {
                        return new Promise<string>((resolve) => {
                            setTimeout(() => {
                                resolve(id);
                            }, 60000);
                        });
                    })
                    .then((id) => {
                        return spotPublicWS.unSubscribe(id);
                    })
                    .then(() => {
                        return spotPublicWS.stop();
                    }),
            );
        }

        return Promise.all(promises).then(() => {
            expect(getProcessTCPConnectionsWithLsof()).toEqual(start);
            logMemoryUsage();
        });
    });

    // Test WebSocket reconnection
    test('test websocket reconnection', (done) => {
        let callback: () => Promise<void>;

        const wsOption = new WebSocketClientOptionBuilder()
            .withReconnect(true)
            .withReconnectInterval(5000)
            .withDialTimeout(1000)
            .withEventCallback((event: WebSocketEvent, msg: string) => {
                console.log(`WebSocket Event: ${event}, Message: ${msg}`);
                if (event === WebSocketEvent.EventReSubscribeOK) {
                    callback().then(() => {
                        done();
                    });
                }
            })
            .build();

        let start = getProcessTCPConnectionsWithLsof();
        const clientOption = new ClientOptionBuilder()
            .setKey('')
            .setSecret('')
            .setPassphrase('')
            .setSpotEndpoint(GlobalApiEndpoint)
            .setFuturesEndpoint(GlobalFuturesApiEndpoint)
            .setBrokerEndpoint(GlobalBrokerApiEndpoint)
            .setWebSocketClientOption(wsOption)
            .build();

        const client = new DefaultClient(clientOption);
        const wsService = client.wsService();
        const spotPublicWS = wsService.newSpotPublicWS();

        callback = () => {
            return spotPublicWS.stop().then(() => {
                expect(getProcessTCPConnectionsWithLsof()).toEqual(start);
            });
        };

        // Start WebSocket client
        spotPublicWS.start().then(() => {
            return spotPublicWS.ticker(
                ['KCS-USDT'],
                (topic: string, subject: string, data: TickerEvent) => {
                    console.log('Received message');
                },
            );
        });
    });

    // Test duplicate subscriptions should throw error
    test('test duplicateSubscriptionstest', () => {
        const wsOption = new WebSocketClientOptionBuilder()
            .withReconnect(false)
            .withDialTimeout(5000)
            .withEventCallback((event: WebSocketEvent, msg: string) => {
                console.log(`WebSocket Event: ${event}, Message: ${msg}`);
            })
            .build();

        const clientOption = new ClientOptionBuilder()
            .setKey('')
            .setSecret('')
            .setPassphrase('')
            .setSpotEndpoint(GlobalApiEndpoint)
            .setFuturesEndpoint(GlobalFuturesApiEndpoint)
            .setBrokerEndpoint(GlobalBrokerApiEndpoint)
            .setWebSocketClientOption(wsOption)
            .build();

        const client = new DefaultClient(clientOption);
        const wsService = client.wsService();
        const spotPublicWS = wsService.newSpotPublicWS();

        // Start WebSocket client
        return spotPublicWS
            .start()
            .then(() => {
                // First subscription
                return spotPublicWS.ticker(
                    ['BTC-USDT'],
                    (topic: string, subject: string, data: TickerEvent) => {
                        console.log('First subscription received message:', data);
                    },
                );
            })
            .then(async (id) => {
                let error: Error | null = null;
                try {
                    await spotPublicWS.ticker(
                        ['BTC-USDT'],
                        (topic: string, subject: string, data: TickerEvent) => {
                            console.log('Second subscription received message:', data);
                        },
                    );
                } catch (e) {
                    error = e as Error;
                }
                expect(error).not.toBeNull();
                // Second subscription to the same topic should throw error
                expect(error?.message).toContain('Already subscribed');
                return id;
            })
            .then((id) => {
                return spotPublicWS.unSubscribe(id);
            })
            .then(() => {
                return spotPublicWS.stop();
            });
    });
});

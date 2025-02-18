import {
    ClientOptionBuilder,
    GlobalApiEndpoint,
    GlobalBrokerApiEndpoint,
    GlobalFuturesApiEndpoint,
    WebSocketClientOptionBuilder,
} from '@model/index';
import { DefaultClient } from '@api/index';
import { exec } from 'child_process';
import { promisify } from 'util';
import { TickerEvent } from '@generate/spot/spotpublic/model_ticker_event';
import { TickerV2Event } from '@generate/futures/futurespublic/model_ticker_v2_event';
import { WebSocketEvent } from '@model/websocket_option';
import { platform } from 'os';

const execAsync = promisify(exec);

async function getProcessTCPConnections(): Promise<number> {
    try {
        const isWindows = platform() === 'win32';
        let command = '';
        
        if (isWindows) {
            // Windows
            command = `cmd.exe /c "chcp 437 > nul && netstat -n"`;
            const { stdout } = await execAsync(command);
            // count ESTABLISHED lines
            return stdout.split('\n').filter(line => line.includes('ESTABLISHED')).length;
        } else {
            // Linux use ss command
            command = `ss -tn | grep ESTAB | wc -l`;
            const { stdout } = await execAsync(command);
            return parseInt(stdout.trim(), 10);
        }
    } catch (error) {
        console.error('Error getting TCP connections:', error);
        return -1;
    }
}

function getMemoryUsage(): { heapUsed: number, heapTotal: number, rss: number } {
    const memUsage = process.memoryUsage();
    return {
        heapUsed: Math.round(memUsage.heapUsed / 1024 / 1024),  // MB
        heapTotal: Math.round(memUsage.heapTotal / 1024 / 1024), // MB
        rss: Math.round(memUsage.rss / 1024 / 1024)             // MB
    };
}

function logMemoryUsage() {
    const usage = getMemoryUsage();
    console.log(`Memory Usage - Heap Used: ${usage.heapUsed}MB, Heap Total: ${usage.heapTotal}MB, RSS: ${usage.rss}MB`);
}

async function verifyResourceCleanup(initialTCP: number, initialMemory: ReturnType<typeof getMemoryUsage>) {

    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const currentTCP = await getProcessTCPConnections();
    const tcpDiff = currentTCP - initialTCP;
    
    const currentMemory = getMemoryUsage();
    const memoryDiff = {
        heapUsed: currentMemory.heapUsed - initialMemory.heapUsed,
        heapTotal: currentMemory.heapTotal - initialMemory.heapTotal,
        rss: currentMemory.rss - initialMemory.rss
    };
    
    console.log('\nResource Cleanup Verification:');
    console.log(`TCP Connections - Initial: ${initialTCP}, Current: ${currentTCP}, Diff: ${tcpDiff}`);
    console.log('Memory Usage Diff:');
    console.log(`- Heap Used: ${memoryDiff.heapUsed}MB`);
    console.log(`- Heap Total: ${memoryDiff.heapTotal}MB`);
    console.log(`- RSS: ${memoryDiff.rss}MB`);
    
    // 返回验证结果
    return {
        tcpLeaked: tcpDiff > 0,
        memoryLeaked: memoryDiff.heapUsed > 50, // 允许50MB的误差
        tcpDiff,
        memoryDiff
    };
}

describe('WebSocket Robustness Test', () => {
    let initialTCP: number;
    let initialMemory: ReturnType<typeof getMemoryUsage>;
    
    beforeEach(async () => {
        initialTCP = await getProcessTCPConnections();
        initialMemory = getMemoryUsage();
        console.log('\nInitial Resource State:');
        console.log(`TCP Connections: ${initialTCP}`);
        logMemoryUsage();
    });
    
    afterEach(async () => {
        const result = await verifyResourceCleanup(initialTCP, initialMemory);
        
        if (result.tcpLeaked) {
            console.warn(`Warning: TCP connections may be leaking (${result.tcpDiff} unreleased connections)`);
        }
        if (result.memoryLeaked) {
            console.warn(`Warning: Memory may be leaking (${result.memoryDiff.heapUsed}MB increase in heap usage)`);
        }
        
        expect(result.tcpLeaked).toBe(false);
        expect(result.memoryLeaked).toBe(false);
    });

    // Test WebSocket connection leak
    test('test websocket connection leak', async () => {
        let spotConnected = false;
        let futuresConnected = false;
        const wsClients: { ws: any, type: string }[] = [];

        const wsOption = new WebSocketClientOptionBuilder()
            .withReconnect(true)
            .withReconnectInterval(1000)
            .withDialTimeout(5000)
            .withEventCallback((event: WebSocketEvent, msg: string) => {
                console.log(`WebSocket Event: ${event}, Message: ${msg}`);
                if (event === WebSocketEvent.EventConnected) {
                    if (msg.includes('spot')) {
                        spotConnected = true;
                    } else if (msg.includes('futures')) {
                        futuresConnected = true;
                    }
                }
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

        try {
            console.log(`Before connections: ${await getProcessTCPConnections()}`);

            // Subscribe to some topics
            const subscriptionPromises = [];
            for (let i = 0; i < 5; i++) {
                const spotPublicWS = wsService.newSpotPublicWS();
                const futuresPublicWS = wsService.newFuturesPublicWS();

                wsClients.push({ ws: spotPublicWS, type: 'spot' });
                wsClients.push({ ws: futuresPublicWS, type: 'futures' });

                // Start WebSocket clients
                await spotPublicWS.start();
                await futuresPublicWS.start();

                // Wait for connections to be established
                await new Promise<void>((resolve) => {
                    const checkConnections = () => {
                        if (spotConnected && futuresConnected) {
                            resolve();
                        }
                    };
                    const interval = setInterval(checkConnections, 100);
                    setTimeout(() => {
                        clearInterval(interval);
                        resolve(); // Resolve anyway after timeout
                    }, 5000);
                });

                // Reset flags for next iteration
                spotConnected = false;
                futuresConnected = false;

                // Subscribe to some topics and store both the WS instance and subscription ID
                const spotPromise = spotPublicWS.ticker(['BTC-USDT'], (topic: string, subject: string, data: TickerEvent) => {})
                    .then(subId => ({ ws: spotPublicWS, subId }));
                const futuresPromise = futuresPublicWS.tickerV2('XBTUSDTM', (topic: string, subject: string, data: TickerV2Event) => {})
                    .then(subId => ({ ws: futuresPublicWS, subId }));

                subscriptionPromises.push(spotPromise, futuresPromise);
            }

            // Wait for all subscriptions to be established
            const subscriptions = await Promise.all(subscriptionPromises);
            
            // Wait for a moment to ensure all connections are active
            await new Promise(resolve => setTimeout(resolve, 5000));

            console.log(`Current connections: ${await getProcessTCPConnections()}`);

            // Clean up
            console.log('Cleaning up subscriptions...');
            await Promise.all(subscriptions.map(sub => sub.ws.unSubscribe(sub.subId)));

            console.log('Stopping WebSocket clients...');
            await Promise.all(wsClients.map(client => client.ws.stop()));

            // Wait for connections to close
            await new Promise(resolve => setTimeout(resolve, 2000));

            console.log(`After connections: ${await getProcessTCPConnections()}`);
        } catch (error) {
            console.error('Error:', error);
            throw error;
        } finally {
            // Ensure all WebSocket clients are stopped
            await Promise.all(wsClients.map(client => client.ws.stop().catch(console.error)));
        }
    });

    // Test WebSocket memory leak
    jest.setTimeout(1200);
    test('test websocket memory leak', async () => {
        let connected = false;
        const wsClients: { ws: any, type: string }[] = [];

        const wsOption = new WebSocketClientOptionBuilder()
            .withReconnect(true)
            .withReconnectInterval(1000)
            .withDialTimeout(5000)
            .withEventCallback((event: WebSocketEvent, msg: string) => {
                console.log(`WebSocket Event: ${event}, Message: ${msg}`);
                if (event === WebSocketEvent.EventConnected) {
                    connected = true;
                }
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

        let messageCount = 0;
        let elapsedSeconds = 0;
        const subscriptions: any[] = [];

        console.log(`Before connections: ${await getProcessTCPConnections()}`);

        try {
            while (elapsedSeconds < 30) {
                elapsedSeconds++;
                logMemoryUsage();

                if (elapsedSeconds % 5 === 0) {
                    const spotPublicWS = wsService.newSpotPublicWS();
                    const futuresPublicWS = wsService.newFuturesPublicWS();

                    wsClients.push({ ws: spotPublicWS, type: 'spot' });
                    wsClients.push({ ws: futuresPublicWS, type: 'futures' });

                    // Start WebSocket clients
                    await spotPublicWS.start();
                    await futuresPublicWS.start();

                    // Wait for connections to be established
                    await new Promise<void>((resolve) => {
                        const checkConnection = () => {
                            if (connected) {
                                resolve();
                            }
                        };
                        const interval = setInterval(checkConnection, 100);
                        setTimeout(() => {
                            clearInterval(interval);
                            resolve(); // Resolve anyway after timeout
                        }, 5000);
                    });

                    // Reset flag
                    connected = false;

                    const spotSub = await spotPublicWS.ticker(['BTC-USDT'], (topic: string, subject: string, data: TickerEvent) => {
                        messageCount++;
                    });
                    const futuresSub = await futuresPublicWS.tickerV2('XBTUSDTM', (topic: string, subject: string, data: TickerV2Event) => {
                        messageCount++;
                    });

                    subscriptions.push(
                        { ws: spotPublicWS, subId: spotSub },
                        { ws: futuresPublicWS, subId: futuresSub }
                    );

                    console.log(`Current connections: ${await getProcessTCPConnections()}`);
                }

                // 等待1秒
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

            // Clean up
            console.log('Cleaning up subscriptions...');
            for (const sub of subscriptions) {
                try {
                    await sub.ws.unSubscribe(sub.subId);
                } catch (error) {
                    console.error('Error unsubscribing:', error);
                }
            }

            console.log('Stopping WebSocket clients...');
            for (const client of wsClients) {
                try {
                    await client.ws.stop();
                } catch (error) {
                    console.error('Error stopping client:', error);
                }
            }

            // Wait for connections to close
            await new Promise(resolve => setTimeout(resolve, 2000));
            console.log(`After connections: ${await getProcessTCPConnections()}`);

        } catch (error) {
            console.error('Test error:', error);
            throw error;
        } finally {
            // 确保所有WebSocket客户端都被停止
            console.log('Final cleanup in finally block...');
            for (const client of wsClients) {
                try {
                    await client.ws.stop();
                } catch (error) {
                    console.error('Error in final cleanup:', error);
                }
            }
        }
    });

    // Test WebSocket reconnection
    test('test websocket reconnection', async () => {
        let connected = false;

        const wsOption = new WebSocketClientOptionBuilder()
            .withReconnect(true)
            .withReconnectInterval(1000)
            .withDialTimeout(5000)
            .withEventCallback((event: WebSocketEvent, msg: string) => {
                console.log(`WebSocket Event: ${event}, Message: ${msg}`);
                if (event === WebSocketEvent.EventConnected) {
                    connected = true;
                }
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

        try {
            console.log(`Before connections: ${await getProcessTCPConnections()}`);

            // Start WebSocket client
            await spotPublicWS.start();

            // Wait for connection to be established
            await new Promise<void>((resolve) => {
                const checkConnection = () => {
                    if (connected) {
                        resolve();
                    }
                };
                const interval = setInterval(checkConnection, 100);
                setTimeout(() => {
                    clearInterval(interval);
                    resolve(); // Resolve anyway after timeout
                }, 5000);
            });

            console.log(`After connection established: ${await getProcessTCPConnections()}`);

            // Reset flag
            connected = false;

            // Subscribe to a topic
            const subscription = await spotPublicWS.ticker(['BTC-USDT'], (topic: string, subject: string, data: TickerEvent) => {
                console.log('Received message:', data);
            });

            // Wait for some messages
            await new Promise(resolve => setTimeout(resolve, 5000));

            // Clean up
            await spotPublicWS.unSubscribe(subscription);
            await spotPublicWS.stop();

            // Wait for connections to close
            await new Promise(resolve => setTimeout(resolve, 2000));
            console.log(`After cleanup: ${await getProcessTCPConnections()}`);
        } catch (error) {
            console.error('Error:', error);
            throw error;
        } finally {
            // Ensure WebSocket client is stopped
            await spotPublicWS.stop().catch(console.error);
        }
    });

    // Test single connection
    test('test single connection', async () => {
        let connected = false;

        const wsOption = new WebSocketClientOptionBuilder()
            .withReconnect(true)
            .withReconnectInterval(1000)
            .withDialTimeout(5000)
            .withEventCallback((event: WebSocketEvent, msg: string) => {
                console.log(`WebSocket Event: ${event}, Message: ${msg}`);
                if (event === WebSocketEvent.EventConnected) {
                    connected = true;
                }
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

        try {
            console.log(`Before connections: ${await getProcessTCPConnections()}`);

            // Start WebSocket client
            await spotPublicWS.start();

            // Wait for connection to be established
            await new Promise<void>((resolve) => {
                const checkConnection = () => {
                    if (connected) {
                        resolve();
                    }
                };
                const interval = setInterval(checkConnection, 100);
                setTimeout(() => {
                    clearInterval(interval);
                    resolve(); // Resolve anyway after timeout
                }, 5000);
            });

            console.log(`After connection established: ${await getProcessTCPConnections()}`);

            // Reset flag
            connected = false;

            // Subscribe to a topic
            const subscription = await spotPublicWS.ticker(['BTC-USDT'], (topic: string, subject: string, data: TickerEvent) => {
                console.log('Received message:', data);
            });

            // Wait for some messages
            await new Promise(resolve => setTimeout(resolve, 5000));

            // Clean up
            await spotPublicWS.unSubscribe(subscription);
            await spotPublicWS.stop();

            // Wait for connections to close
            await new Promise(resolve => setTimeout(resolve, 2000));
            console.log(`After cleanup: ${await getProcessTCPConnections()}`);
        } catch (error) {
            console.error('Error:', error);
            throw error;
        } finally {
            // Ensure WebSocket client is stopped
            await spotPublicWS.stop().catch(console.error);
        }
    });

    // Test duplicate subscriptions should throw error
    test('test duplicateSubscriptionstest', async () => {
        let connected = false;
        let disconnected = false;
        const CLEANUP_TIMEOUT = 2000;  // Wait 2 seconds for cleanup

        const wsOption = new WebSocketClientOptionBuilder()
            .withReconnect(false)  // Disable auto-reconnect for this test
            .withDialTimeout(5000)
            .withEventCallback((event: WebSocketEvent, msg: string) => {
                console.log(`WebSocket Event: ${event}, Message: ${msg}`);
                if (event === WebSocketEvent.EventConnected) {
                    connected = true;
                } else if (event === WebSocketEvent.EventDisconnected) {
                    disconnected = true;
                }
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

        try {
            // Start WebSocket client
            await spotPublicWS.start();

            // Wait for connection to be established
            await new Promise<void>((resolve, reject) => {
                const checkConnection = () => {
                    if (connected) {
                        clearInterval(interval);
                        clearTimeout(timeout);
                        resolve();
                    }
                };
                const interval = setInterval(checkConnection, 100);
                const timeout = setTimeout(() => {
                    clearInterval(interval);
                    reject(new Error('Connection timeout'));
                }, 5000);
            });

            // First subscription
            const subscription1 = await spotPublicWS.ticker(['BTC-USDT'], (topic: string, subject: string, data: TickerEvent) => {
                console.log('First subscription received message:', data);
            });

            // Second subscription to the same topic should throw error
            let error: Error | null = null;
            try {
                await spotPublicWS.ticker(['BTC-USDT'], (topic: string, subject: string, data: TickerEvent) => {
                    console.log('Second subscription received message:', data);
                });
            } catch (e) {
                error = e as Error;
            }
            expect(error).not.toBeNull();
            expect(error?.message).toContain('already subscribed');

            // Clean up
            console.log('Starting cleanup...');
            await spotPublicWS.unSubscribe(subscription1);
            await spotPublicWS.stop();

            // Wait for disconnect event
            await new Promise<void>((resolve, reject) => {
                const checkDisconnection = () => {
                    if (disconnected) {
                        clearInterval(interval);
                        clearTimeout(timeout);
                        resolve();
                    }
                };
                const interval = setInterval(checkDisconnection, 100);
                const timeout = setTimeout(() => {
                    clearInterval(interval);
                    reject(new Error('Disconnect timeout'));
                }, CLEANUP_TIMEOUT);
            });

            // Additional wait for system to clean up resources
            await new Promise(resolve => setTimeout(resolve, CLEANUP_TIMEOUT));

        } catch (error) {
            console.error('Test error:', error);
            throw error;
        } finally {
            // Force cleanup in case of errors
            try {
                if (!disconnected) {
                    await spotPublicWS.stop();
                    // Wait for resources to be cleaned up
                    await new Promise(resolve => setTimeout(resolve, CLEANUP_TIMEOUT));
                }
            } catch (error) {
                console.error('Error in final cleanup:', error);
            }
        }
    }, 30000);  // Set test timeout to 30 seconds
});

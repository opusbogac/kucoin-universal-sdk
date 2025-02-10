import 'reflect-metadata';
import { EventEmitter } from 'events';
import {
    ClientOptionBuilder,
    DefaultClient,
    GlobalApiEndpoint,
    GlobalBrokerApiEndpoint,
    GlobalFuturesApiEndpoint,
    WebSocketClientOptionBuilder,
    WebSocketEvent,
    SpotPublicWS,
    TransportOptionBuilder
} from 'kucoin-universal-sdk';

// Create a custom event handler class
class WebSocketEventHandler extends EventEmitter {
    constructor() {
        super();
        this.setupEventHandlers();
    }

    private setupEventHandlers() {
        // Connection related events
        this.on('ws_event', (event: WebSocketEvent, msg: string) => {
            switch (event) {
                case WebSocketEvent.EventConnected:
                    console.log('WebSocket Connected');
                    break;
                case WebSocketEvent.EventDisconnected:
                    console.log('WebSocket Disconnected:', msg);
                    break;
                case WebSocketEvent.EventTryReconnect:
                    console.log('Attempting to reconnect:', msg);
                    break;
                case WebSocketEvent.EventReSubscribeOK:
                    console.log('Resubscription successful');
                    break;
                case WebSocketEvent.EventReSubscribeError:
                    console.log('Resubscription failed:', msg);
                    break;
                case WebSocketEvent.EventErrorReceived:
                    console.log('Error occurred:', msg);
                    break;
                case WebSocketEvent.EventClientFail:
                    console.log('Client failure:', msg);
                    break;
                case WebSocketEvent.EventMessageReceived:
                    // Skip logging for regular message events
                    break;
                default:
                    console.log(`Other event - ${event}:`, msg);
            }
        });

        // Ticker event handler
        this.on('ticker_update', (topic: string, data: TickerEvent) => {
            const symbol = topic.split(':')[1];
            console.log(`Price Update: ${symbol} = ${data.price} (${data.size})`);
        });

        // AllTickers event handler
        this.on('all_tickers_update', (topic: string, data: AllTickersEvent) => {
            console.log(`Market-wide Update: ${data.time}`);
            console.log(`   Symbol: ${topic.split(':')[1]}`);
            console.log(`   Latest Price: ${data.price}`);
            console.log(`   Best Bid: ${data.bestBid} (${data.bestBidSize})`);
            console.log(`   Best Ask: ${data.bestAsk} (${data.bestAskSize})`);
        });

        // OrderbookLevel1 event handler
        this.on('level1_update', (topic: string, data: OrderbookLevel1Event) => {
            const symbol = topic.split(':')[1];
            console.log(`Level1 Depth Update: ${symbol}`);
            if (data.bids && data.bids.length >= 2) {
                console.log(`   Best Bid: ${data.bids[0]} (${data.bids[1]})`);
            }
            if (data.asks && data.asks.length >= 2) {
                console.log(`   Best Ask: ${data.asks[0]} (${data.asks[1]})`);
            }
            console.log(`   Update Time: ${data.timestamp}`);
            console.log('   ----------------');
        });

        // OrderbookLevel5 event handler
        this.on('level5_update', (topic: string, data: OrderbookLevel5Event) => {
            const symbol = topic.split(':')[1];
            console.log(`Level5 Depth Update: ${symbol}`);
            console.log(`   Top 5 Bids:`);
            data.bids.slice(0, 5).forEach((bid, index) => {
                console.log(`     ${index + 1}. Price: ${bid[0]}, Size: ${bid[1]}`);
            });
            console.log(`   Top 5 Asks:`);
            data.asks.slice(0, 5).forEach((ask, index) => {
                console.log(`     ${index + 1}. Price: ${ask[0]}, Size: ${ask[1]}`);
            });
            console.log(`   Update Time: ${data.timestamp}`);
        });

        // Level2/Level50 depth update handler
        this.on('level50_update', (topic: string, data: OrderbookLevel50Event) => {
            const symbol = topic.split(':')[1];
            console.log(`Depth Data Update: ${symbol}`);
            try {
                if (data && typeof data === 'object') {
                    if ('changes' in data) {
                        console.log(`   ===== Incremental Depth Update =====`);
                        const changes = data.changes;
                        if (changes.asks && changes.asks.length > 0) {
                            console.log('   Ask Updates:');
                            changes.asks.forEach(([price, size, sequence]) => {
                                const sizeNum = parseFloat(size);
                                const action = sizeNum === 0 ? 'Remove' : 'Update';
                                console.log(`     ${action} - Price: ${price}, Size: ${size}`);
                            });
                        }
                        if (changes.bids && changes.bids.length > 0) {
                            console.log('   Bid Updates:');
                            changes.bids.forEach(([price, size, sequence]) => {
                                const sizeNum = parseFloat(size);
                                const action = sizeNum === 0 ? 'Remove' : 'Update';
                                console.log(`     ${action} - Price: ${price}, Size: ${size}`);
                            });
                        }
                        console.log(`   Sequence: ${data.sequenceStart} - ${data.sequenceEnd}`);
                        console.log(`   Time: ${new Date(data.time).toLocaleString()}`);
                    } else {
                        // Full depth data (if available)
                        console.log(`   Bid Count: ${data?.bids?.length || 0}`);
                        console.log(`   Ask Count: ${data?.asks?.length || 0}`);
                        console.log(`   Update Time: ${data?.timestamp ? new Date(data.timestamp).toLocaleString() : 'N/A'}`);
                    }
                }
            } catch (error) {
                console.error('   Data Processing Error:', error);
            }
        });

        // OrderbookIncrement event handler
        this.on('increment_update', (topic: string, data: OrderbookIncrementEvent) => {
            try {
                const symbol = topic.split(':')[1];
                console.log(`Incremental Depth Update: ${symbol}`);
                
                if (data.changes) {
                    if (data.changes.asks && data.changes.asks.length > 0) {
                        console.log('   Ask Changes:');
                        data.changes.asks.forEach(([price, size, sequence]) => {
                            const sizeNum = parseFloat(size);
                            const action = sizeNum === 0 ? 'Remove' : 'Update';
                            console.log(`     ${action} - Price: ${price}, Size: ${size}`);
                        });
                    }
                    if (data.changes.bids && data.changes.bids.length > 0) {
                        console.log('   Bid Changes:');
                        data.changes.bids.forEach(([price, size, sequence]) => {
                            const sizeNum = parseFloat(size);
                            const action = sizeNum === 0 ? 'Remove' : 'Update';
                            console.log(`     ${action} - Price: ${price}, Size: ${size}`);
                        });
                    }
                }
                
                console.log(`   Change Summary - Asks: ${data.changes?.asks?.length || 0}, Bids: ${data.changes?.bids?.length || 0}`);
                if (data.sequence) {
                    console.log(`   Sequence: ${data.sequence}`);
                }
                console.log(`   Event: ${topic}`);
                console.log('   ----------------');

                // Emit event after successful processing
                this.eventHandler.emit('increment_update', topic, data);
            } catch (error) {
                console.error('Error processing increment update:', error);
            }
        });

        // Trade event handler
        this.on('trade_update', (topic: string, data: TradeEvent) => {
            const symbol = topic.split(':')[1];
            console.log(`Trade Update: ${symbol}`);
            console.log(`   Price: ${data.price}, Size: ${data.size}, Side: ${data.side}`);
        });

        // Klines event handler
        this.on('klines_update', (topic: string, data: KlinesEvent) => {
            const [startTime, open, close, high, low, volume, amount] = data.candles;
            console.log(`Kline Update: ${data.symbol}`);
            console.log(`   Time: ${startTime}`);
            console.log(`   Open: ${open}`);
            console.log(`   Close: ${close}`);
            console.log(`   High: ${high}`);
            console.log(`   Low: ${low}`);
            console.log(`   Volume: ${volume}`);
            console.log(`   Amount: ${amount}`);
        });

        // Symbol snapshot event handler
        this.on('symbol_snapshot_update', (topic: string, data: SymbolSnapshotEvent) => {
            console.log(`Symbol Snapshot: ${data.data.symbol}`);
            console.log(`   Latest Price: ${data.data.close}`);
            console.log(`   24h High: ${data.data.high}`);
            console.log(`   24h Low: ${data.data.low}`);
            console.log(`   24h Volume: ${data.data.vol}`);
            console.log(`   24h Amount: ${data.data.volValue}`);
            console.log(`   Update Time: ${data.data.datetime}`);
        });
    }

    // Add a method to handle WebSocket events
    handleWebSocketEvent(event: WebSocketEvent, msg: string) {
        this.emit('ws_event', event, msg);
    }
}

// Interface configuration type
interface WebSocketConfig {
    ticker: boolean;
    allTickers: boolean;
    depth: {
        level1: boolean;
        level5: boolean;
        level50: boolean;
        increment: boolean;
    };
    trade: boolean;
    klines: boolean;
    snapshot: boolean;
    symbols: string[];
    waitTime: number;
}

// Default configuration
const defaultConfig: WebSocketConfig = {
    ticker: false,
    allTickers: false,
    depth: {
        level1: false,
        level5: false,
        level50: false,
        increment: false
    },
    trade: false,
    klines: false,
    snapshot: false,
    symbols: ["BTC-USDT"],
    waitTime: 30000
};

// Callback handlers for different types of market data
class MarketDataHandlers {
    constructor(private eventHandler: WebSocketEventHandler) {}

    // Ticker handlers
    tickerCallback = (topic: string, subject: string, data: TickerEvent) => {
        this.eventHandler.emit('ticker_update', topic, data);
        console.log(`Received ticker event topic:${topic} subject:${subject} sequence:${data.sequence} price:${data.price} time:${data.time} size:${data.size}`);
    };

    allTickersCallback = (topic: string, subject: string, data: AllTickersEvent) => {
        this.eventHandler.emit('all_tickers_update', topic, data);
        console.log(`Received all tickers event topic:${topic} subject:${subject} time:${data.time}`);
    };

    // Depth handlers
    level1Callback = (topic: string, subject: string, data: OrderbookLevel1Event) => {
        this.eventHandler.emit('level1_update', topic, data);
        const symbol = topic.split(':')[1];
        console.log(`Level1 Depth Update: ${symbol}`);
        if (data.bids && data.bids.length >= 2) {
            console.log(`   Best Bid: ${data.bids[0]} (${data.bids[1]})`);
        }
        if (data.asks && data.asks.length >= 2) {
            console.log(`   Best Ask: ${data.asks[0]} (${data.asks[1]})`);
        }
        console.log(`   Update Time: ${data.timestamp}`);
        console.log('   ----------------');
    };

    level5Callback = (topic: string, subject: string, data: OrderbookLevel5Event) => {
        this.eventHandler.emit('level5_update', topic, data);
        console.log(`Received level5 event topic:${topic} subject:${subject}`);
    };

    level50Callback = (topic: string, subject: string, data: OrderbookLevel50Event) => {
        this.eventHandler.emit('level50_update', topic, data);
        console.log(`Received level50 event topic:${topic} subject:${subject}`);
    };

    incrementCallback = (topic: string, subject: string, data: OrderbookIncrementEvent) => {
        try {
            const symbol = topic.split(':')[1];
            console.log(`Incremental Depth Update: ${symbol}`);
            
            if (data.changes) {
                if (data.changes.asks && data.changes.asks.length > 0) {
                    console.log('   Ask Changes:');
                    data.changes.asks.forEach(([price, size, sequence]) => {
                        const sizeNum = parseFloat(size);
                        const action = sizeNum === 0 ? 'Remove' : 'Update';
                        console.log(`     ${action} - Price: ${price}, Size: ${size}`);
                    });
                }
                if (data.changes.bids && data.changes.bids.length > 0) {
                    console.log('   Bid Changes:');
                    data.changes.bids.forEach(([price, size, sequence]) => {
                        const sizeNum = parseFloat(size);
                        const action = sizeNum === 0 ? 'Remove' : 'Update';
                        console.log(`     ${action} - Price: ${price}, Size: ${size}`);
                    });
                }
            }
            
            console.log(`   Change Summary - Asks: ${data.changes?.asks?.length || 0}, Bids: ${data.changes?.bids?.length || 0}`);
            if (data.sequence) {
                console.log(`   Sequence: ${data.sequence}`);
            }
            if (subject) {
                console.log(`   Event: ${subject}`);
            }
            console.log('   ----------------');

            // Emit event after successful processing
            this.eventHandler.emit('increment_update', topic, data);
        } catch (error) {
            console.error('Error processing increment update:', error);
        }
    };

    // Other market data handlers
    tradeCallback = (topic: string, subject: string, data: TradeEvent) => {
        this.eventHandler.emit('trade_update', topic, data);
        console.log(`Received trade event topic:${topic} subject:${subject} sequence:${data.sequence}`);
    };

    klinesCallback = (topic: string, subject: string, data: KlinesEvent) => {
        this.eventHandler.emit('klines_update', topic, data);
        console.log(`Received klines event topic:${topic} subject:${subject}`);
    };

    symbolSnapshotCallback = (topic: string, subject: string, data: SymbolSnapshotEvent) => {
        this.eventHandler.emit('symbol_snapshot_update', topic, data);
        console.log(`Received symbol snapshot event topic:${topic} subject:${subject}`);
    };
}

async function spotWsExample(spotPublicWs: SpotPublicWS, eventHandler: WebSocketEventHandler, config: Partial<WebSocketConfig> = {}) {
    try {
        // Merge with default config
        const finalConfig: WebSocketConfig = { ...defaultConfig, ...config };
        const handlers = new MarketDataHandlers(eventHandler);

        // Start WebSocket service
        await spotPublicWs.start();
        console.log('Starting to subscribe to interfaces...');

        // Subscribe to market data based on configuration
        if (finalConfig.ticker) {
            await spotPublicWs.ticker(finalConfig.symbols, handlers.tickerCallback);
            console.log(`Subscribed to ${finalConfig.symbols.join(', ')} ticker`);
        }

        if (finalConfig.allTickers) {
            await spotPublicWs.allTickers(handlers.allTickersCallback);
            console.log('Subscribed to all market tickers');
        }

        // Depth data subscription
        if (finalConfig.depth.level1) {
            await spotPublicWs.orderbookLevel1(finalConfig.symbols, handlers.level1Callback);
            console.log(`Subscribed to ${finalConfig.symbols.join(', ')} Level1 depth`);
        }

        if (finalConfig.depth.level5) {
            await spotPublicWs.orderbookLevel5(finalConfig.symbols, handlers.level5Callback);
            console.log(`Subscribed to ${finalConfig.symbols.join(', ')} Level5 depth`);
        }

        if (finalConfig.depth.level50) {
            await spotPublicWs.orderbookLevel50(finalConfig.symbols, handlers.level50Callback);
            console.log(`Subscribed to ${finalConfig.symbols.join(', ')} Level50 depth`);
        }

        if (finalConfig.depth.increment) {
            await spotPublicWs.orderbookIncrement(finalConfig.symbols, handlers.incrementCallback);
            console.log(`Subscribed to ${finalConfig.symbols.join(', ')} incremental depth`);
        }

        if (finalConfig.trade) {
            await spotPublicWs.trade(finalConfig.symbols, handlers.tradeCallback);
            console.log(`Subscribed to ${finalConfig.symbols.join(', ')} trade data`);
        }

        if (finalConfig.klines) {
            for (const symbol of finalConfig.symbols) {
                await spotPublicWs.klines(symbol, "1min", handlers.klinesCallback);
                console.log(`Subscribed to ${symbol} 1min klines`);
            }
        }

        if (finalConfig.snapshot) {
            for (const symbol of finalConfig.symbols) {
                await spotPublicWs.symbolSnapshot(symbol, handlers.symbolSnapshotCallback);
                console.log(`Subscribed to ${symbol} market snapshot`);
            }
        }

        // Wait for specified time
        console.log(`Waiting ${finalConfig.waitTime/1000} seconds to receive data...`);
        await new Promise(resolve => setTimeout(resolve, finalConfig.waitTime));

        // Unsubscribe from all
        console.log('Starting to unsubscribe...');
        try {
            // For single symbol tickers
            if (finalConfig.ticker) {
                for (const symbol of finalConfig.symbols) {
                    try {
                        await spotPublicWs.unSubscribe(`/market/ticker@@${symbol}`);
                        console.log(`Unsubscribed from ticker:${symbol}`);
                    } catch (e) {
                        console.log(`Failed to unsubscribe from ticker:${symbol}`, e);
                    }
                }
            }
            
            // For all tickers - skip unsubscribe as it's handled automatically on disconnect
            if (finalConfig.allTickers) {
                console.log('All tickers subscription will be cleared on disconnect');
            }

            // Depth data unsubscription
            if (finalConfig.depth.level1) {
                for (const symbol of finalConfig.symbols) {
                    try {
                        await spotPublicWs.unSubscribe(`/market/level1@@${symbol}`);
                        console.log(`Unsubscribed from level1:${symbol}`);
                    } catch (e) {
                        console.log(`Failed to unsubscribe from level1:${symbol}`, e);
                    }
                }
            }

            if (finalConfig.depth.level5) {
                for (const symbol of finalConfig.symbols) {
                    try {
                        await spotPublicWs.unSubscribe(`/market/level2Depth5@@${symbol}`);
                        console.log(`Unsubscribed from level5:${symbol}`);
                    } catch (e) {
                        console.log(`Failed to unsubscribe from level5:${symbol}`, e);
                    }
                }
            }

            if (finalConfig.depth.level50) {
                for (const symbol of finalConfig.symbols) {
                    try {
                        await spotPublicWs.unSubscribe(`/market/level2Depth50@@${symbol}`);
                        console.log(`Unsubscribed from level50:${symbol}`);
                    } catch (e) {
                        console.log(`Failed to unsubscribe from level50:${symbol}`, e);
                    }
                }
            }

            if (finalConfig.depth.increment) {
                for (const symbol of finalConfig.symbols) {
                    try {
                        await spotPublicWs.unSubscribe(`/market/level2@@${symbol}`);
                        console.log(`Unsubscribed from increment:${symbol}`);
                    } catch (e) {
                        console.log(`Failed to unsubscribe from increment:${symbol}`, e);
                    }
                }
            }

            if (finalConfig.trade) {
                for (const symbol of finalConfig.symbols) {
                    try {
                        await spotPublicWs.unSubscribe(`/market/match@@${symbol}`);
                        console.log(`Unsubscribed from trade:${symbol}`);
                    } catch (e) {
                        console.log(`Failed to unsubscribe from trade:${symbol}`, e);
                    }
                }
            }

            if (finalConfig.klines) {
                for (const symbol of finalConfig.symbols) {
                    try {
                        await spotPublicWs.unSubscribe(`/market/candles@@${symbol}_1min`);
                        console.log(`Unsubscribed from klines:${symbol}`);
                    } catch (e) {
                        console.log(`Failed to unsubscribe from klines:${symbol}`, e);
                    }
                }
            }

            if (finalConfig.snapshot) {
                for (const symbol of finalConfig.symbols) {
                    try {
                        await spotPublicWs.unSubscribe(`/market/snapshot@@${symbol}`);
                        console.log(`Unsubscribed from snapshot:${symbol}`);
                    } catch (e) {
                        console.log(`Failed to unsubscribe from snapshot:${symbol}`, e);
                    }
                }
            }

            console.log('Unsubscribe process completed');
        } catch (unsubError) {
            console.log('[DEBUG] unsubscribe error:', unsubError);
        }

    } catch (e) {
        console.error("Error occurred:", e);
    } finally {
        // Stop the WebSocket service which will clear all subscriptions
        console.log('Stopping WebSocket service...');
        await spotPublicWs.stop();
        console.log('WebSocket service stopped');
    }
}

// Example usage:
async function main() {
    const eventHandler = new WebSocketEventHandler();
    
    // Retrieve API secret information from environment variables
    const key = process.env.API_KEY || '';
    const secret = process.env.API_SECRET || '';
    const passphrase = process.env.API_PASSPHRASE || '';
    
    // WebSocket client options
    const wsClientOption = new WebSocketClientOptionBuilder()
        .withDialTimeout(10000)
        .withReconnect(true)
        .withReconnectAttempts(20)
        .withReconnectInterval(3000)
        .withWriteTimeout(5000)
        .withReadMessageBuffer(100)
        .withWriteMessageBuffer(100)
        .withEventCallback((event, msg) => {
            eventHandler.handleWebSocketEvent(event, msg);
        })
        .build();

    // Transport options
    const transportOption = new TransportOptionBuilder()
        .setTimeout(5000)
        .setKeepAlive(true)
        .build();

    // Client options
    const clientOption = new ClientOptionBuilder()
        .setKey(key)
        .setSecret(secret)
        .setPassphrase(passphrase)
        .setWebSocketClientOption(wsClientOption)
        .setTransportOption(transportOption)
        .setSpotEndpoint(GlobalApiEndpoint)
        .setFuturesEndpoint(GlobalFuturesApiEndpoint)
        .setBrokerEndpoint(GlobalBrokerApiEndpoint)
        .build();

    const client = new DefaultClient(clientOption);
    const kucoinWsService = client.wsService();

    // Example configuration with all available options
    const config: Partial<WebSocketConfig> = {
        // Market ticker options
        ticker: false,        // Single symbol ticker
        allTickers: false,   // All market tickers

        // Depth data options
        depth: {
            level1: false,    // Level 1 depth (best bid/ask)
            level5: false,    // Level 5 depth (top 5 bids/asks)
            level50: false,   // Level 50 depth (top 50 bids/asks)
            increment: false  // Incremental depth updates
        },

        // Other market data options
        trade: false,        // Trade execution data
        klines: false,       // Kline/Candlestick data
        snapshot: true,     // Market snapshot data

        // General settings
        symbols: ["BTC-USDT"],  // Trading pairs to subscribe
        waitTime: 10000         // How long to wait for data (in milliseconds)
    };

    // Run example with configuration
    await spotWsExample(kucoinWsService.newSpotPublicWS(), eventHandler, config);
}

// Run example
main().catch(console.error);
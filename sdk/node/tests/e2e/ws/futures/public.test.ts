import {
    ClientOptionBuilder,
    GlobalApiEndpoint,
    GlobalBrokerApiEndpoint,
    GlobalFuturesApiEndpoint,
    WebSocketClientOptionBuilder,
} from '@model/index';
import {
    AnnouncementEvent,
    ExecutionEvent,
    FuturesPublicWS,
    InstrumentEvent,
    KlinesEvent,
    OrderbookIncrementEvent,
    OrderbookLevel5Event,
    OrderbookLevel50Event,
    SymbolSnapshotEvent,
    TickerV1Event,
    TickerV2Event
} from '@src/generate/futures/futurespublic';
import { DefaultClient } from '@api/index';

function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// Set longer timeout for WebSocket tests
jest.setTimeout(30000);




describe('Futures Public WebSocket API Tests', () => {
    let api: FuturesPublicWS;
    const TEST_SYMBOL = 'XBTUSDTM';
    const TEST_DURATION = 5000; // 5 seconds for each test

    beforeAll(async () => {
        const key = process.env.API_KEY || '';
        const secret = process.env.API_SECRET || '';
        const passphrase = process.env.API_PASSPHRASE || '';

        const websocketClientOption = new WebSocketClientOptionBuilder().build();

        const clientOption = new ClientOptionBuilder()
            .setKey(key)
            .setSecret(secret)
            .setPassphrase(passphrase)
            .setSpotEndpoint(GlobalApiEndpoint)
            .setFuturesEndpoint(GlobalFuturesApiEndpoint)
            .setBrokerEndpoint(GlobalBrokerApiEndpoint)
            .setWebSocketClientOption(websocketClientOption)
            .build();

        const client = new DefaultClient(clientOption);
        const wsService = client.wsService();
        api = wsService.newFuturesPublicWS();
        await api.start();
    });

    afterAll(() => {
        api.stop();
    });

    test('announcement subscription test', () => {
        const subid = api.announcement(TEST_SYMBOL, (topic: string, subject: string, data: AnnouncementEvent) => {
            expect(data).toBeDefined();
            expect(data.symbol).toEqual(expect.anything());
            expect(data.fundingTime).toEqual(expect.anything());
            expect(data.fundingRate).toEqual(expect.anything());
            expect(data.timestamp).toEqual(expect.anything());
            console.log(data);
        });

        return subid
            .then(async (id) => {
                await delay(5000);
                return id;
            })
            .then((id) => {
                return api.unSubscribe(id);
            });
    });

    test('execution subscription test', () => {
        const subid = api.execution(TEST_SYMBOL, (topic: string, subject: string, data: ExecutionEvent) => {
            expect(data).toBeDefined();
            expect(data.makerOrderId).toEqual(expect.anything());
            expect(data.price).toEqual(expect.anything());
            expect(data.sequence).toEqual(expect.anything());
            expect(data.side).toEqual(expect.anything());
            expect(data.size).toEqual(expect.anything());
            expect(data.symbol).toEqual(expect.anything());
            expect(data.takerOrderId).toEqual(expect.anything());
            expect(data.tradeId).toEqual(expect.anything());
            expect(data.ts).toEqual(expect.anything());
            console.log(data);
        });

        return subid
            .then(async (id) => {
                await delay(5000);
                return id;
            })
            .then((id) => {
                return api.unSubscribe(id);
            });
    });

    test('instrument subscription test', () => {
        const subid = api.instrument(TEST_SYMBOL, (topic: string, subject: string, data: InstrumentEvent) => {
            expect(data).toBeDefined();
            expect(data.granularity).toEqual(expect.anything());
            expect(data.timestamp).toEqual(expect.anything());
            // Optional fields
            if (data.fundingRate !== undefined) {
                expect(data.fundingRate).toEqual(expect.anything());
            }
            if (data.markPrice !== undefined) {
                expect(data.markPrice).toEqual(expect.anything());
            }
            if (data.indexPrice !== undefined) {
                expect(data.indexPrice).toEqual(expect.anything());
            }
            console.log(data);
        });

        return subid
            .then(async (id) => {
                await delay(5000);
                return id;
            })
            .then((id) => {
                return api.unSubscribe(id);
            });
    });

    test('klines subscription test', () => {
        const subid = api.klines(TEST_SYMBOL, '1min', (topic: string, subject: string, data: KlinesEvent) => {
            expect(data).toBeDefined();
            expect(data.candles).toEqual(expect.anything());
            expect(data.time).toEqual(expect.anything());
            expect(data.symbol).toEqual(expect.anything());
            console.log(data);
        });

        return subid
            .then(async (id) => {
                await delay(5000);
                return id;
            })
            .then((id) => {
                return api.unSubscribe(id);
            });
    });

    test('orderbook increment subscription test', () => {
        const subid = api.orderbookIncrement(TEST_SYMBOL, (topic: string, subject: string, data: OrderbookIncrementEvent) => {
            expect(data).toBeDefined();
            expect(data.change).toEqual(expect.anything());
            expect(data.sequence).toEqual(expect.anything());
            expect(data.timestamp).toEqual(expect.anything());
            console.log(data);
        });

        return subid
            .then(async (id) => {
                await delay(5000);
                return id;
            })
            .then((id) => {
                return api.unSubscribe(id);
            });
    });

    test('orderbook level50 subscription test', () => {
        const subid = api.orderbookLevel50(TEST_SYMBOL, (topic: string, subject: string, data: OrderbookLevel50Event) => {
            expect(data).toBeDefined();
            expect(data.asks).toEqual(expect.anything());
            expect(data.bids).toEqual(expect.anything());
            expect(data.sequence).toEqual(expect.anything());
            expect(data.timestamp).toEqual(expect.anything());
            console.log(data);
        });

        return subid
            .then(async (id) => {
                await delay(5000);
                return id;
            })
            .then((id) => {
                return api.unSubscribe(id);
            });
    });

    test('orderbook level5 subscription test', () => {
        const subid = api.orderbookLevel5(TEST_SYMBOL, (topic: string, subject: string, data: OrderbookLevel5Event) => {
            expect(data).toBeDefined();
            expect(data.asks).toEqual(expect.anything());
            expect(data.bids).toEqual(expect.anything());
            expect(data.sequence).toEqual(expect.anything());
            expect(data.timestamp).toEqual(expect.anything());
            console.log(data);
        });

        return subid
            .then(async (id) => {
                await delay(5000);
                return id;
            })
            .then((id) => {
                return api.unSubscribe(id);
            });
    });

    test('symbol snapshot subscription test', () => {
        const subid = api.symbolSnapshot(TEST_SYMBOL, (topic: string, subject: string, data: SymbolSnapshotEvent) => {
            expect(data).toBeDefined();
            expect(data.highPrice).toEqual(expect.anything());
            expect(data.lastPrice).toEqual(expect.anything());
            expect(data.lowPrice).toEqual(expect.anything());
            expect(data.price24HoursBefore).toEqual(expect.anything());

            expect(data.priceChg).toEqual(expect.anything());
            expect(data.priceChgPct).toEqual(expect.anything());
            expect(data.symbol).toEqual(expect.anything());
            expect(data.ts).toEqual(expect.anything());
            expect(data.turnover).toEqual(expect.anything());
            expect(data.volume).toEqual(expect.anything());
            console.log(data);
        });

        return subid
            .then(async (id) => {
                await delay(5000);
                return id;
            })
            .then((id) => {
                return api.unSubscribe(id);
            });
    });

    test('ticker v1 subscription test', () => {
        const subid = api.tickerV1(TEST_SYMBOL, (topic: string, subject: string, data: TickerV1Event) => {
            expect(data).toBeDefined();
            expect(data.symbol).toEqual(expect.anything());
            expect(data.bestAskSize).toEqual(expect.anything());
            expect(data.tradeId).toEqual(expect.anything());
            expect(data.bestBidSize).toEqual(expect.anything());
            expect(data.price).toEqual(expect.anything());
            expect(data.sequence).toEqual(expect.anything());
            expect(data.size).toEqual(expect.anything());
            expect(data.side).toEqual(expect.anything());
            expect(data.ts).toEqual(expect.anything());
            expect(data.bestAskPrice).toEqual(expect.anything());
            expect(data.bestBidPrice).toEqual(expect.anything());
            console.log(data);
        });

        return subid
            .then(async (id) => {
                await delay(5000);
                return id;
            })
            .then((id) => {
                return api.unSubscribe(id);
            });
    });

    test('ticker v2 subscription test', () => {
        const subid = api.tickerV2(TEST_SYMBOL, (topic: string, subject: string, data: TickerV2Event) => {
            expect(data).toBeDefined();
            expect(data.symbol).toEqual(expect.anything());
            expect(data.bestAskSize).toEqual(expect.anything());
            expect(data.bestBidPrice).toEqual(expect.anything());
            expect(data.bestBidSize).toEqual(expect.anything());
            expect(data.bestAskPrice).toEqual(expect.anything());
            expect(data.bestAskSize).toEqual(expect.anything());
            expect(data.sequence).toEqual(expect.anything());
            expect(data.ts).toEqual(expect.anything());
            console.log(data);
        });

        return subid
            .then(async (id) => {
                await delay(5000);
                return id;
            })
            .then((id) => {
                return api.unSubscribe(id);
            });
    });
});

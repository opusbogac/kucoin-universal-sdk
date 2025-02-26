import {
    ClientOptionBuilder,
    GlobalApiEndpoint,
    GlobalBrokerApiEndpoint,
    GlobalFuturesApiEndpoint,
    WebSocketClientOptionBuilder,
} from '@model/index';
import {
    AllOrderEvent,
    AllPositionEvent,
    BalanceEvent,
    CrossLeverageEvent,
    FuturesPrivateWS,
    MarginModeEvent,
    OrderEvent,
    PositionEvent,
    StopOrdersEvent,
} from '@src/generate/futures/futuresprivate';
import { DefaultClient } from '@api/index';

function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

jest.setTimeout(300000);

describe('Futures Private WebSocket API Tests', () => {
    let api: FuturesPrivateWS;

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
        api = wsService.newFuturesPrivateWS();
        await api.start();
    });

    afterAll(() => {
        return api.stop();
    });

    test('allOrder subscription test', (done) => {
        (async () => {
            let subid = await api.allOrder(
                async (topic: string, subject: string, item: AllOrderEvent) => {
                    console.log(item);
                    expect(item).toBeDefined();
                    expect(item.symbol).toEqual(expect.any(String));
                    expect(item.side).toEqual(expect.any(String));
                    expect(item.canceledSize).toEqual(expect.any(String));
                    expect(item.orderId).toEqual(expect.any(String));
                    expect(item.marginMode).toEqual(expect.any(String));
                    expect(item.type).toEqual(expect.any(String));
                    expect(item.orderTime).toEqual(expect.any(Number));
                    expect(item.size).toEqual(expect.any(String));
                    expect(item.filledSize).toEqual(expect.any(String));
                    expect(item.price).toEqual(expect.any(String));
                    expect(item.remainSize).toEqual(expect.any(String));
                    expect(item.status).toEqual(expect.any(String));
                    expect(item.ts).toEqual(expect.any(Number));
                    expect(item.tradeType).toEqual(expect.any(String));

                    api.unSubscribe(subid).then(() => {
                        done();
                    });
                },
            );

            console.log(`subscribe id: ${subid}`);
        })();
    });

    test('allPosition subscription test', (done) => {
        (async () => {
            let subid = await api.allPosition(
                async (topic: string, subject: string, item: AllPositionEvent) => {
                    console.log(item);
                    expect(item.symbol).toEqual(expect.any(String));
                    expect(item.crossMode).toEqual(expect.any(Boolean));
                    expect(item.delevPercentage).toEqual(expect.any(Number));
                    expect(item.openingTimestamp).toEqual(expect.any(Number));
                    expect(item.currentTimestamp).toEqual(expect.any(Number));
                    expect(item.currentQty).toEqual(expect.any(Number));
                    expect(item.currentCost).toEqual(expect.any(Number));
                    expect(item.currentComm).toEqual(expect.any(Number));
                    expect(item.unrealisedCost).toEqual(expect.any(Number));
                    expect(item.realisedGrossCost).toEqual(expect.any(Number));
                    expect(item.realisedCost).toEqual(expect.any(Number));
                    expect(item.isOpen).toEqual(expect.any(Boolean));
                    expect(item.markPrice).toEqual(expect.any(Number));
                    expect(item.markValue).toEqual(expect.any(Number));
                    expect(item.posCost).toEqual(expect.any(Number));
                    expect(item.posInit).toEqual(expect.any(Number));
                    expect(item.posMargin).toEqual(expect.any(Number));
                    expect(item.realisedGrossPnl).toEqual(expect.any(Number));
                    expect(item.realisedPnl).toEqual(expect.any(Number));
                    expect(item.unrealisedPnl).toEqual(expect.any(Number));
                    expect(item.unrealisedPnlPcnt).toEqual(expect.any(Number));
                    expect(item.unrealisedRoePcnt).toEqual(expect.any(Number));
                    expect(item.avgEntryPrice).toEqual(expect.any(Number));

                    api.unSubscribe(subid).then(() => {
                        done();
                    });
                },
            );

            console.log(`subscribe id: ${subid}`);
        })();
    });

    test('balance subscription test', (done) => {
        (async () => {
            let subid = await api.balance(
                async (topic: string, subject: string, item: BalanceEvent) => {
                    console.log(item);
                    try {
                        expect(item.crossPosMargin).toEqual(expect.any(String));
                        expect(item.isolatedOrderMargin).toEqual(expect.any(String));
                        expect(item.holdBalance).toEqual(expect.any(String));
                        expect(item.equity).toEqual(expect.any(String));
                        expect(item.version).toEqual(expect.any(String));
                        expect(item.availableBalance).toEqual(expect.any(String));
                        expect(item.isolatedPosMargin).toEqual(expect.any(String));
                        expect(item.walletBalance).toEqual(expect.any(String));
                        expect(item.isolatedFundingFeeMargin).toEqual(expect.any(String));
                        expect(item.crossUnPnl).toEqual(expect.any(String));
                        expect(item.totalCrossMargin).toEqual(expect.any(String));
                        expect(item.currency).toEqual(expect.any(String));
                        expect(item.isolatedUnPnl).toEqual(expect.any(String));
                        expect(item.crossOrderMargin).toEqual(expect.any(String));
                        expect(item.timestamp).toEqual(expect.any(String));
                    } catch (e) {
                        fail(e);
                    }
                    api.unSubscribe(subid).then(() => {
                        done();
                    });
                },
            );

            console.log(`subscribe id: ${subid}`);
        })();
    });

    test('crossLeverage subscription test', (done) => {
        (async () => {
            let subid = await api.crossLeverage(
                async (topic: string, subject: string, item: CrossLeverageEvent) => {
                    for (let dataKey in item.data) {
                        expect(item.data[dataKey].leverage).toEqual(expect.any(String));
                    }
                    console.log(item);

                    api.unSubscribe(subid).then(() => {
                        done();
                    });
                },
            );

            console.log(`subscribe id: ${subid}`);
        })();
    });

    test('marginMode subscription test', (done) => {
        (async () => {
            let subid = await api.marginMode(
                async (topic: string, subject: string, item: MarginModeEvent) => {
                    console.log(item);
                    api.unSubscribe(subid).then(() => {
                        done();
                    });
                },
            );

            console.log(`subscribe id: ${subid}`);
        })();
    });

    test('order subscription test', (done) => {
        (async () => {
            let subid = await api.order(
                'XBTUSDTM',
                async (topic: string, subject: string, item: OrderEvent) => {
                    console.log(item);
                    try {
                        expect(item.symbol).toEqual(expect.any(String));
                        expect(item.side).toEqual(expect.any(String));
                        expect(item.canceledSize).toEqual(expect.any(String));
                        expect(item.orderId).toEqual(expect.any(String));
                        expect(item.marginMode).toEqual(expect.any(String));
                        expect(item.type).toEqual(expect.any(String));
                        expect(item.orderTime).toEqual(expect.any(Number));
                        expect(item.size).toEqual(expect.any(String));
                        expect(item.filledSize).toEqual(expect.any(String));
                        expect(item.price).toEqual(expect.any(String));
                        expect(item.remainSize).toEqual(expect.any(String));
                        expect(item.status).toEqual(expect.any(String));
                        expect(item.ts).toEqual(expect.any(Number));
                    } catch (e) {
                        done(e);
                    }
                    api.unSubscribe(subid).then(() => {
                        done();
                    });
                },
            );

            console.log(`subscribe id: ${subid}`);
        })();
    });

    test('position subscription test', (done) => {
        (async () => {
            let subid = await api.position(
                'DOGEUSDTM',
                async (topic: string, subject: string, item: PositionEvent) => {
                    console.log(item);
                    try {
                        expect(item.symbol).toEqual(expect.any(String));
                        expect(item.crossMode).toEqual(expect.any(Boolean));
                        expect(item.delevPercentage).toEqual(expect.any(Number));
                        expect(item.openingTimestamp).toEqual(expect.any(Number));
                        expect(item.currentTimestamp).toEqual(expect.any(Number));
                        expect(item.currentQty).toEqual(expect.any(Number));
                        expect(item.currentCost).toEqual(expect.any(Number));
                        expect(item.currentComm).toEqual(expect.any(Number));
                        expect(item.unrealisedCost).toEqual(expect.any(Number));
                        expect(item.realisedGrossCost).toEqual(expect.any(Number));
                        expect(item.realisedCost).toEqual(expect.any(Number));
                        expect(item.isOpen).toEqual(expect.any(Boolean));
                        expect(item.markPrice).toEqual(expect.any(Number));
                        expect(item.markValue).toEqual(expect.any(Number));
                        expect(item.posCost).toEqual(expect.any(Number));
                        expect(item.posInit).toEqual(expect.any(Number));
                        expect(item.realisedGrossPnl).toEqual(expect.any(Number));
                        expect(item.realisedPnl).toEqual(expect.any(Number));
                        expect(item.unrealisedPnl).toEqual(expect.any(Number));
                        expect(item.unrealisedPnlPcnt).toEqual(expect.any(Number));
                        expect(item.unrealisedRoePcnt).toEqual(expect.any(Number));
                        expect(item.avgEntryPrice).toEqual(expect.any(Number));
                        expect(item.liquidationPrice).toEqual(expect.any(Number));
                        expect(item.bankruptPrice).toEqual(expect.any(Number));
                        expect(item.settleCurrency).toEqual(expect.any(String));
                        expect(item.marginMode).toEqual(expect.any(String));
                        expect(item.positionSide).toEqual(expect.any(String));
                        expect(item.leverage).toEqual(expect.any(Number));
                    } catch (e) {
                        done(e);
                    }
                    api.unSubscribe(subid).then(() => {
                        done();
                    });
                },
            );

            console.log(`subscribe id: ${subid}`);
        })();
    });

    test('stopOrders subscription test', (done) => {
        (async () => {
            let subid = await api.stopOrders(
                async (topic: string, subject: string, item: StopOrdersEvent) => {
                    console.log(item);
                    api.unSubscribe(subid).then(() => {
                        done();
                    });
                },
            );

            console.log(`subscribe id: ${subid}`);
        })();
    });
});

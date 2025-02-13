import {
    ClientOptionBuilder,
    GlobalApiEndpoint,
    GlobalBrokerApiEndpoint,
    GlobalFuturesApiEndpoint,
    WebSocketClientOptionBuilder,
} from '@model/index';
import {
    CrossMarginPositionEvent,
    IsolatedMarginPositionEvent,
    MarginPrivateWS,
} from '@src/generate/margin/marginprivate';
import { DefaultClient } from '@api/index';

function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

jest.setTimeout(300000);

describe('Margin Private WebSocket API Tests', () => {
    let api: MarginPrivateWS;

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
        api = wsService.newMarginPrivateWS();
        await api.start();
    });

    afterAll(() => {
        // TODO
        // return api.stop();
    });

    test('crossMarginPosition subscription test', (done) => {
        (async () => {
            let subid = await api.crossMarginPosition(
                async (topic: string, subject: string, item: CrossMarginPositionEvent) => {
                    console.log(item);
                    expect(item.debtRatio).toEqual(expect.any(Number));
                    expect(item.totalAsset).toEqual(expect.any(Number));
                    expect(item.marginCoefficientTotalAsset).toEqual(expect.any(String));
                    expect(item.totalDebt).toEqual(expect.any(String));
                    expect(item.assetList).toEqual(expect.any(Object));
                    expect(item.debtList).toEqual(expect.any(Object));
                    expect(item.timestamp).toEqual(expect.any(Number));
                    expect(item.type).toEqual(expect.any(String));
                    api.unSubscribe(subid).then(() => {
                        done();
                    });
                },
            );

            console.log(`subscribe id: ${subid}`);
        })();
    });

    test('isolatedMarginPosition subscription test', (done) => {
        (async () => {
            let subid = await api.isolatedMarginPosition(
                'BTC-USDT',
                async (topic: string, subject: string, item: IsolatedMarginPositionEvent) => {
                    console.log(item);
                    expect(item.tag).toEqual(expect.any(String));
                    expect(item.status).toEqual(expect.any(String));
                    expect(item.statusBizType).toEqual(expect.any(String));
                    expect(item.accumulatedPrincipal).toEqual(expect.any(String));
                    expect(item.changeAssets).toEqual(expect.any(Object));
                    expect(item.timestamp).toEqual(expect.any(Number));

                    api.unSubscribe(subid).then(() => {
                        done();
                    });
                },
            );

            console.log(`subscribe id: ${subid}`);
        })();
    });
});

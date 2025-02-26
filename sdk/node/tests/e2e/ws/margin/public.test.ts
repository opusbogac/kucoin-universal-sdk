import {
    ClientOptionBuilder,
    GlobalApiEndpoint,
    GlobalBrokerApiEndpoint,
    GlobalFuturesApiEndpoint,
    WebSocketClientOptionBuilder,
} from '@model/index';
import {
    MarginPublicWS,
    IndexPriceEvent,
    MarkPriceEvent,
} from '@src/generate/margin/marginpublic';
import { DefaultClient } from '@api/index';

function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// Set longer timeout for WebSocket tests
jest.setTimeout(30000);

describe('Margin Public WebSocket API Tests', () => {
    let api: MarginPublicWS;
    const TEST_SYMBOL = ['BTC-USDT'];
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
        api = wsService.newMarginPublicWS();
        await api.start();
    });

    afterAll(() => {
        api.stop();
    });

    test('indexPrice subscription test', () => {
        const subid = api.indexPrice(TEST_SYMBOL, (topic: string, subject: string, data: IndexPriceEvent) => {
            expect(data).toBeDefined();
            expect(data.symbol).toEqual(expect.anything());
            expect(data.timestamp).toEqual(expect.anything());
            expect(data.granularity).toEqual(expect.anything());
            expect(data.value).toEqual(expect.anything());
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

    test('markPrice subscription test', () => {
        const subid = api.markPrice(TEST_SYMBOL, (topic: string, subject: string, data: MarkPriceEvent) => {
            expect(data).toBeDefined();
            expect(data.symbol).toEqual(expect.anything());
            expect(data.timestamp).toEqual(expect.anything());
            expect(data.granularity).toEqual(expect.anything());
            expect(data.value).toEqual(expect.anything());
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

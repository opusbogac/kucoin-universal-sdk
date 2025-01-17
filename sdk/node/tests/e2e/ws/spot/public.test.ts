import {
    ClientOptionBuilder,
    GlobalApiEndpoint,
    GlobalBrokerApiEndpoint,
    GlobalFuturesApiEndpoint,
    WebSocketClientOptionBuilder,
} from '@model/index';
import { AllTickersEvent, SpotPublicWS } from '@src/generate/spot/spotpublic';
import { DefaultClient } from '@api/index';

function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

describe('Auto Test', () => {
    let api: SpotPublicWS;

    beforeAll(async () => {
        const key = process.env.API_KEY || '';
        const secret = process.env.API_SECRET || '';
        const passphrase = process.env.API_PASSPHRASE || '';

        // Set specific options, others will fall back to default values
        const websocketClientOption = new WebSocketClientOptionBuilder().build();

        // Create a client using the specified options
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

        // Get the Restful Service
        const wsService = client.wsService();
        api = wsService.newSpotPublicWS();
        await api.start();
    });

    afterAll(() => {
        api.stop();
    });

    test('allTickers test', () => {
        let subid = api.allTickers((topic: string, subject: string, data: AllTickersEvent) => {
            expect(data.bestAsk).toEqual(expect.anything());
            expect(data.bestAskSize).toEqual(expect.anything());
            expect(data.bestBid).toEqual(expect.anything());
            expect(data.bestBidSize).toEqual(expect.anything());
            expect(data.price).toEqual(expect.anything());
            expect(data.sequence).toEqual(expect.anything());
            expect(data.size).toEqual(expect.anything());
            expect(data.time).toEqual(expect.anything());
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

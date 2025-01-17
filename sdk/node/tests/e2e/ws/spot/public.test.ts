import {
    ClientOptionBuilder,
    DefaultClient,
    GlobalApiEndpoint,
    GlobalBrokerApiEndpoint,
    GlobalFuturesApiEndpoint,
    TransportOptionBuilder,
} from '../../../../src';
import { AllTickersEvent, SpotPublicWS } from '@src/generate/spot/spotpublic';

function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

describe('Auto Test', () => {
    let api: SpotPublicWS;

    beforeAll(() => {
        const key = process.env.API_KEY || '';
        const secret = process.env.API_SECRET || '';
        const passphrase = process.env.API_PASSPHRASE || '';

        // Set specific options, others will fall back to default values
        const httpTransportOption = new TransportOptionBuilder()
            .setKeepAlive(true)
            .setMaxConnsPerHost(10)
            .setMaxIdleConns(10)
            .build();

        // Create a client using the specified options
        const clientOption = new ClientOptionBuilder()
            .setKey(key)
            .setSecret(secret)
            .setPassphrase(passphrase)
            .setSpotEndpoint(GlobalApiEndpoint)
            .setFuturesEndpoint(GlobalFuturesApiEndpoint)
            .setBrokerEndpoint(GlobalBrokerApiEndpoint)
            .setTransportOption(httpTransportOption)
            .build();

        const client = new DefaultClient(clientOption);

        // Get the Restful Service
        const wsService = client.wsService();
        api = wsService.newSpotPublicWS();
        api.start();
    });

    afterAll(() => {
        api.stop();
    });

    test('getAccountInfo request test', () => {
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
                await delay(1000);
                return id;
            })
            .then((id) => {
                return api.unSubscribe(id);
            });
    });
});

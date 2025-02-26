import {
    ClientOptionBuilder,
    GlobalApiEndpoint,
    GlobalBrokerApiEndpoint,
    GlobalFuturesApiEndpoint,
    TransportOptionBuilder,
} from '@model/index';
import { VIPLendingAPI } from '@src/generate/viplending/viplending';
import { DefaultClient } from '@api/index';

describe('Auto Test', () => {
    let api: VIPLendingAPI;

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
        const kucoinRestService = client.restService();
        api = kucoinRestService.getVipLendingService().getVIPLendingApi();
    });

    // TODO 401
    test('getAccountDetail request test', () => {
        /**
         * getAccountDetail
         * Get Account Detail
         * /api/v1/otc-loan/loan
         */
        let resp = api.getAccountDetail();
        return resp.then((result) => {
            expect(result.parentUid).toEqual(expect.anything());
            expect(result.orders).toEqual(expect.anything());
            expect(result.ltv).toEqual(expect.anything());
            expect(result.totalMarginAmount).toEqual(expect.anything());
            expect(result.transferMarginAmount).toEqual(expect.anything());
            expect(result.margins).toEqual(expect.anything());
            console.log(resp);
        });
    });

    // TODO 401
    test('getAccounts request test', () => {
        /**
         * getAccounts
         * Get Accounts
         * /api/v1/otc-loan/accounts
         */
        let resp = api.getAccounts();
        return resp.then((result) => {
            expect(result.data).toEqual(expect.anything());
            console.log(resp);
        });
    });
});

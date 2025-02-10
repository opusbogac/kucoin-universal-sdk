import {
    ClientOptionBuilder,
    GlobalApiEndpoint,
    GlobalBrokerApiEndpoint,
    GlobalFuturesApiEndpoint,
    TransportOptionBuilder,
} from '@model/index';
import { APIBrokerAPI, GetRebaseReq } from '@src/generate/broker/apibroker';
import { DefaultClient } from '@api/index';

describe('Auto Test', () => {
    let api: APIBrokerAPI;

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
        api = kucoinRestService.getBrokerService().getAPIBrokerApi();
    });

    test('getRebase request test', () => {
        /**
         * getRebase
         * Get Broker Rebate
         * /api/v1/broker/api/rebase/download
         */
        let builder = GetRebaseReq.builder();
        builder.setBegin('20240610').setEnd('20241010').setTradeType(GetRebaseReq.TradeTypeEnum._1);
        let req = builder.build();
        let resp = api.getRebase(req);
        return resp.then((result) => {
            expect(result.url).toEqual(expect.anything());
            console.log(resp);
        });
    });
});

import {
    ClientOptionBuilder,
    GlobalApiEndpoint,
    GlobalBrokerApiEndpoint,
    GlobalFuturesApiEndpoint,
    TransportOptionBuilder,
} from '@model/index';
import { GetMarginRiskLimitReq, RiskLimitAPI } from '@src/generate/margin/risklimit';
import { DefaultClient } from '@api/index';

describe('Auto Test', () => {
    let api: RiskLimitAPI;

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
        api = kucoinRestService.getMarginService().getRiskLimitApi();
    });

    test('getMarginRiskLimit request test', () => {
        /**
         * getMarginRiskLimit
         * Get Margin Risk Limit
         * /api/v3/margin/currencies
         */
        let builder = GetMarginRiskLimitReq.builder();
        builder.setIsIsolated(false).setCurrency('BTC');
        let req = builder.build();
        let resp = api.getMarginRiskLimit(req);
        return resp.then((result) => {
            result.data.forEach((item) => {
                console.log(item);
            });
            console.log(resp);
        });
    });
    1;
});

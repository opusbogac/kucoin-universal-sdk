import {
    ClientOptionBuilder,
    GlobalApiEndpoint,
    GlobalBrokerApiEndpoint,
    GlobalFuturesApiEndpoint,
    TransportOptionBuilder,
} from '@model/index';
import { DefaultClient } from '@api/index';
import { FeeAPI, GetBasicFeeReq, GetFuturesActualFeeReq, GetSpotActualFeeReq } from '@src/generate/account/fee';


describe('Auto Test', () => {
    let api: FeeAPI;

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
        api = kucoinRestService.getAccountService().getFeeApi();
    });
    test('getBasicFee request test', () => {
        /**
         * getBasicFee
         * Get Basic Fee - Spot/Margin
         * /api/v1/base-fee
         */
        let builder = GetBasicFeeReq.builder();
        builder.setCurrencyType(GetBasicFeeReq.CurrencyTypeEnum._0);
        let req = builder.build();
        let resp = api.getBasicFee(req);
        return resp.then(result => {
            expect(result.takerFeeRate).toEqual(expect.anything());
            expect(result.makerFeeRate).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('getSpotActualFee request test', () => {
        /**
         * getSpotActualFee
         * Get Actual Fee - Spot/Margin
         * /api/v1/trade-fees
         */
        let builder = GetSpotActualFeeReq.builder();
        builder.setSymbols('BTC-USDT');
        let req = builder.build();
        let resp = api.getSpotActualFee(req);
        return resp.then(result => {
            expect(result.data).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('getFuturesActualFee request test', () => {
        /**
         * getFuturesActualFee
         * Get Actual Fee - Futures
         * /api/v1/trade-fees
         */
        let builder = GetFuturesActualFeeReq.builder();
        builder.setSymbol('XBTUSDM');
        let req = builder.build();
        let resp = api.getFuturesActualFee(req);
        return resp.then(result => {
            expect(result.symbol).toEqual(expect.anything());
            expect(result.takerFeeRate).toEqual(expect.anything());
            expect(result.makerFeeRate).toEqual(expect.anything());
            console.log(resp);
        });
    });

});
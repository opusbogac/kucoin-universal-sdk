import {
    ClientOptionBuilder,
    GlobalApiEndpoint,
    GlobalBrokerApiEndpoint,
    GlobalFuturesApiEndpoint,
    TransportOptionBuilder,
} from '@model/index';
import { GetCrossMarginSymbolsReq, GetETFInfoReq, GetMarkPriceDetailReq, MarketAPI } from '@src/generate/margin/market';
import { DefaultClient } from '@api/index';

describe('Auto Test', () => {
    let api: MarketAPI;

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
        api = kucoinRestService.getMarginService().getMarketApi();
    });

    test('getCrossMarginSymbols request test', ()=> {
        /**
         * getCrossMarginSymbols
         * Get Symbols - Cross Margin
         * /api/v3/margin/symbols
         */
        let builder = GetCrossMarginSymbolsReq.builder();
        builder.setSymbol(?);
        let req = builder.build();
        let resp = api.getCrossMarginSymbols(req);
        return resp.then(result => {
            expect(result.timestamp).toEqual(expect.anything());
            expect(result.items).toEqual(expect.anything());
            console.log(resp);
        });
    })

    test('getMarginConfig request test', ()=> {
        /**
         * getMarginConfig
         * Get Margin Config
         * /api/v1/margin/config
         */
        let resp = api.getMarginConfig();
        return resp.then(result => {
            expect(result.currencyList).toEqual(expect.anything());
            expect(result.maxLeverage).toEqual(expect.anything());
            expect(result.warningDebtRatio).toEqual(expect.anything());
            expect(result.liqDebtRatio).toEqual(expect.anything());
            console.log(resp);
        });
    })

    test('getETFInfo request test', ()=> {
        /**
         * getETFInfo
         * Get ETF Info
         * /api/v3/etf/info
         */
        let builder = GetETFInfoReq.builder();
        builder.setCurrency(?);
        let req = builder.build();
        let resp = api.getETFInfo(req);
        return resp.then(result => {
            expect(result.data).toEqual(expect.anything());
            console.log(resp);
        });
    })

    test('getMarkPriceList request test', ()=> {
        /**
         * getMarkPriceList
         * Get Mark Price List
         * /api/v3/mark-price/all-symbols
         */
        let resp = api.getMarkPriceList();
        return resp.then(result => {
            expect(result.data).toEqual(expect.anything());
            console.log(resp);
        });
    })

    test('getMarkPriceDetail request test', ()=> {
        /**
         * getMarkPriceDetail
         * Get Mark Price Detail
         * /api/v1/mark-price/{symbol}/current
         */
        let builder = GetMarkPriceDetailReq.builder();
        builder.setSymbol(?);
        let req = builder.build();
        let resp = api.getMarkPriceDetail(req);
        return resp.then(result => {
            expect(result.symbol).toEqual(expect.anything());
            expect(result.timePoint).toEqual(expect.anything());
            expect(result.value).toEqual(expect.anything());
            console.log(resp);
        });
    })

    test('getIsolatedMarginSymbols request test', ()=> {
        /**
         * getIsolatedMarginSymbols
         * Get Symbols - Isolated Margin
         * /api/v1/isolated/symbols
         */
        let resp = api.getIsolatedMarginSymbols();
        return resp.then(result => {
            expect(result.data).toEqual(expect.anything());
            console.log(resp);
        });
    })
});

import {
    ClientOptionBuilder,
    GlobalApiEndpoint,
    GlobalBrokerApiEndpoint,
    GlobalFuturesApiEndpoint,
    TransportOptionBuilder,
} from '@model/index';
import {
    GetCrossMarginSymbolsReq,
    GetETFInfoReq,
    GetMarkPriceDetailReq,
    MarketAPI,
} from '@src/generate/margin/market';
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

    test('getCrossMarginSymbols request test', () => {
        /**
         * getCrossMarginSymbols
         * Get Symbols - Cross Margin
         * /api/v3/margin/symbols
         */
        let builder = GetCrossMarginSymbolsReq.builder();
        builder.setSymbol('BTC-USDT');
        let req = builder.build();
        let resp = api.getCrossMarginSymbols(req);
        return resp.then((result) => {
            expect(result.timestamp).toEqual(expect.anything());
            result.items.forEach((item) => {
                expect(item.symbol).toEqual(expect.anything());
                expect(item.name).toEqual(expect.anything());
                expect(item.enableTrading).toEqual(expect.any(Boolean));
                expect(item.market).toEqual(expect.anything());
                expect(item.baseCurrency).toEqual(expect.anything());
                expect(item.quoteCurrency).toEqual(expect.anything());
                expect(item.baseIncrement).toEqual(expect.anything());
                expect(item.baseMinSize).toEqual(expect.anything());
                expect(item.quoteIncrement).toEqual(expect.anything());
                expect(item.quoteMinSize).toEqual(expect.anything());
                expect(item.baseMaxSize).toEqual(expect.anything());
                expect(item.quoteMaxSize).toEqual(expect.anything());
                expect(item.priceIncrement).toEqual(expect.anything());
                expect(item.feeCurrency).toEqual(expect.anything());
                expect(item.priceLimitRate).toEqual(expect.anything());
                expect(item.minFunds).toEqual(expect.anything());
            });
            console.log(resp);
        });
    });

    test('getMarginConfig request test', () => {
        /**
         * getMarginConfig
         * Get Margin Config
         * /api/v1/margin/config
         */
        let resp = api.getMarginConfig();
        return resp.then((result) => {
            expect(result.currencyList).toEqual(expect.anything());
            expect(result.maxLeverage).toEqual(expect.anything());
            expect(result.warningDebtRatio).toEqual(expect.anything());
            expect(result.liqDebtRatio).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('getETFInfo request test', () => {
        /**
         * getETFInfo
         * Get ETF Info
         * /api/v3/etf/info
         */
        let builder = GetETFInfoReq.builder();
        builder.setCurrency('BTCUP');
        let req = builder.build();
        let resp = api.getETFInfo(req);
        return resp.then((result) => {
            result.data.forEach((item) => {
                expect(item.currency).toEqual(expect.any(String));
                expect(item.netAsset).toEqual(expect.any(String));
                expect(item.targetLeverage).toEqual(expect.any(String));
                expect(item.actualLeverage).toEqual(expect.any(String));
                expect(item.issuedSize).toEqual(expect.any(String));
                expect(item.basket).toEqual(expect.any(String));
            });
            console.log(resp);
        });
    });

    test('getMarkPriceList request test', () => {
        /**
         * getMarkPriceList
         * Get Mark Price List
         * /api/v3/mark-price/all-symbols
         */
        let resp = api.getMarkPriceList();
        return resp.then((result) => {
            result.data.forEach((item) => {
                expect(item.symbol).toEqual(expect.any(String));
                expect(item.timePoint).toEqual(expect.any(Number));
                expect(item.value).toEqual(expect.any(Number));
            });
            console.log(resp);
        });
    });

    test('getMarkPriceDetail request test', () => {
        /**
         * getMarkPriceDetail
         * Get Mark Price Detail
         * /api/v1/mark-price/{symbol}/current
         */
        let builder = GetMarkPriceDetailReq.builder();
        builder.setSymbol('USDT-BTC');
        let req = builder.build();
        let resp = api.getMarkPriceDetail(req);
        return resp.then((result) => {
            expect(result.symbol).toEqual(expect.anything());
            expect(result.timePoint).toEqual(expect.anything());
            expect(result.value).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('getIsolatedMarginSymbols request test', () => {
        /**
         * getIsolatedMarginSymbols
         * Get Symbols - Isolated Margin
         * /api/v1/isolated/symbols
         */
        let resp = api.getIsolatedMarginSymbols();
        return resp.then((result) => {
            result.data.forEach((item) => {
                expect(item.symbol).toEqual(expect.any(String));
                expect(item.symbolName).toEqual(expect.any(String));
                expect(item.baseCurrency).toEqual(expect.any(String));
                expect(item.quoteCurrency).toEqual(expect.any(String));
                expect(item.maxLeverage).toEqual(expect.any(Number));
                expect(item.flDebtRatio).toEqual(expect.any(String));
                expect(item.tradeEnable).toEqual(expect.any(Boolean));
                expect(item.autoRenewMaxDebtRatio).toEqual(expect.any(String));
                expect(item.baseBorrowEnable).toEqual(expect.any(Boolean));
                expect(item.quoteBorrowEnable).toEqual(expect.any(Boolean));
                expect(item.baseTransferInEnable).toEqual(expect.any(Boolean));
                expect(item.quoteTransferInEnable).toEqual(expect.any(Boolean));
                expect(item.baseBorrowCoefficient).toEqual(expect.any(String));
                expect(item.quoteBorrowCoefficient).toEqual(expect.any(String));
            });
            console.log(resp);
        });
    });
});

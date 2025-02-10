import {
    ClientOptionBuilder,
    GlobalApiEndpoint,
    GlobalBrokerApiEndpoint,
    GlobalFuturesApiEndpoint,
    TransportOptionBuilder,
} from '@model/index';
import {
    CreditAPI,
    GetLoanMarketInterestRateReq,
    GetLoanMarketReq,
    GetPurchaseOrdersReq,
    GetRedeemOrdersReq,
    ModifyPurchaseReq,
    PurchaseReq,
    RedeemReq,
} from '@src/generate/margin/credit';
import { DefaultClient } from '@api/index';

describe('Auto Test', () => {
    let api: CreditAPI;

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
        api = kucoinRestService.getMarginService().getCreditApi();
    });

    test('getLoanMarket request test', () => {
        /**
         * getLoanMarket
         * Get Loan Market
         * /api/v3/project/list
         */
        let builder = GetLoanMarketReq.builder();
        builder.setCurrency('DOGE');
        let req = builder.build();
        let resp = api.getLoanMarket(req);
        return resp.then((result) => {
            expect(result.data).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('getLoanMarketInterestRate request test', () => {
        /**
         * getLoanMarketInterestRate
         * Get Loan Market Interest Rate
         * /api/v3/project/marketInterestRate
         */
        let builder = GetLoanMarketInterestRateReq.builder();
        builder.setCurrency('DOGE');
        let req = builder.build();
        let resp = api.getLoanMarketInterestRate(req);
        return resp.then((result) => {
            expect(result.data).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('purchase request test', () => {
        /**
         * purchase
         * Purchase
         * /api/v3/purchase
         */
        let builder = PurchaseReq.builder();
        builder.setCurrency('DOGE').setSize('10').setInterestRate('0.01');
        let req = builder.build();
        let resp = api.purchase(req);
        return resp.then((result) => {
            expect(result.orderNo).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('modifyPurchase request test', () => {
        /**
         * modifyPurchase
         * Modify Purchase
         * /api/v3/lend/purchase/update
         */
        let builder = ModifyPurchaseReq.builder();
        builder
            .setCurrency('DOGE')
            .setInterestRate('0.02')
            .setPurchaseOrderNo('6745708dad11d500073f083f');
        let req = builder.build();
        let resp = api.modifyPurchase(req);
        return resp.then((result) => {
            expect(result.data).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('getPurchaseOrders request test', () => {
        /**
         * getPurchaseOrders
         * Get Purchase Orders
         * /api/v3/purchase/orders
         */
        let builder = GetPurchaseOrdersReq.builder();
        builder.setCurrency('DOGE').setPurchaseOrderNo('');
        let req = builder.build();
        let resp = api.getPurchaseOrders(req);
        return resp.then((result) => {
            expect(result.currentPage).toEqual(expect.anything());
            expect(result.pageSize).toEqual(expect.anything());
            expect(result.totalNum).toEqual(expect.anything());
            expect(result.totalPage).toEqual(expect.anything());
            expect(result.items).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('redeem request test', () => {
        /**
         * redeem
         * Redeem
         * /api/v3/redeem
         */
        let builder = RedeemReq.builder();
        builder.setCurrency('DOGE').setSize('10').setPurchaseOrderNo('6745708dad11d500073f083f');
        let req = builder.build();
        let resp = api.redeem(req);
        return resp.then((result) => {
            expect(result.orderNo).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('getRedeemOrders request test', () => {
        /**
         * getRedeemOrders
         * Get Redeem Orders
         * /api/v3/redeem/orders
         */
        let builder = GetRedeemOrdersReq.builder();
        builder.setCurrency('DOGE').setStatus(GetRedeemOrdersReq.StatusEnum.DONE);
        let req = builder.build();
        let resp = api.getRedeemOrders(req);
        return resp.then((result) => {
            expect(result.currentPage).toEqual(expect.anything());
            expect(result.pageSize).toEqual(expect.anything());
            expect(result.totalNum).toEqual(expect.anything());
            expect(result.totalPage).toEqual(expect.anything());
            expect(result.items).toEqual(expect.anything());
            console.log(resp);
        });
    });
});

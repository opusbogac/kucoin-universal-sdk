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
            result.data.forEach((element) => {
                expect(element.currency).toEqual(expect.anything());
                expect(element.purchaseEnable).toEqual(expect.anything());
                expect(element.redeemEnable).toEqual(expect.anything());
                expect(element.increment).toEqual(expect.anything());
                expect(element.minPurchaseSize).toEqual(expect.anything());
                expect(element.minInterestRate).toEqual(expect.anything());
                expect(element.maxInterestRate).toEqual(expect.anything());
                expect(element.interestIncrement).toEqual(expect.anything());
                expect(element.maxPurchaseSize).toEqual(expect.anything());
                expect(element.marketInterestRate).toEqual(expect.anything());
                expect(element.autoPurchaseEnable).toEqual(expect.anything());
            })
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
            result.data.forEach((element) => {
                expect(element.marketInterestRate).toEqual(expect.anything());
                expect(element.time).toEqual(expect.anything());
            })
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
            .setPurchaseOrderNo('67aabb111a8c110007ba2e5a');
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
        builder.setCurrency('DOGE').setPurchaseOrderNo('67aabb111a8c110007ba2e5a').setStatus(GetPurchaseOrdersReq.StatusEnum.DONE);
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
        builder.setCurrency('DOGE').setSize('10').setPurchaseOrderNo('67aabb111a8c110007ba2e5a');
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
            result.items.forEach((element) => {
                expect(element.currency).toEqual(expect.anything());
                expect(element.purchaseOrderNo).toEqual(expect.anything());
                expect(element.redeemOrderNo).toEqual(expect.anything());
                expect(element.redeemSize).toEqual(expect.anything());
                expect(element.receiptSize).toEqual(expect.anything());
                expect(element.status).toEqual(expect.anything());
            })
            console.log(resp);
        });
    });
});

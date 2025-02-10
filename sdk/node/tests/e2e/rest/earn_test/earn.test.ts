import {
    ClientOptionBuilder,
    GlobalApiEndpoint,
    GlobalBrokerApiEndpoint,
    GlobalFuturesApiEndpoint,
    TransportOptionBuilder,
} from '@model/index';
import {
    EarnAPI,
    GetAccountHoldingReq,
    GetETHStakingProductsReq,
    GetKcsStakingProductsReq,
    GetPromotionProductsReq,
    GetRedeemPreviewReq,
    GetSavingsProductsReq,
    GetStakingProductsReq,
    PurchaseReq,
    RedeemReq,
} from '@src/generate/earn/earn';
import { DefaultClient } from '@api/index';

describe('Auto Test', () => {
    let api: EarnAPI;

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
        api = kucoinRestService.getEarnService().getEarnApi();
    });

    test('purchase request test', () => {
        /**
         * purchase
         * purchase
         * /api/v1/earn/orders
         */
        let builder = PurchaseReq.builder();
        builder
            .setProductId('2152')
            .setAmount('10.0')
            .setAccountType(PurchaseReq.AccountTypeEnum.MAIN);
        let req = builder.build();
        let resp = api.purchase(req);
        return resp.then((result) => {
            expect(result.orderId).toEqual(expect.anything());
            expect(result.orderTxId).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('getRedeemPreview request test', () => {
        /**
         * getRedeemPreview
         * Get Redeem Preview
         * /api/v1/earn/redeem-preview
         */
        let builder = GetRedeemPreviewReq.builder();
        builder
            .setOrderId('2849600')
            .setFromAccountType(GetRedeemPreviewReq.FromAccountTypeEnum.MAIN);
        let req = builder.build();
        let resp = api.getRedeemPreview(req);
        return resp.then((result) => {
            expect(result.currency).toEqual(expect.anything());
            expect(result.redeemAmount).toEqual(expect.anything());
            expect(result.penaltyInterestAmount).toEqual(expect.anything());
            expect(result.redeemPeriod).toEqual(expect.anything());
            expect(result.deliverTime).toEqual(expect.anything());
            expect(result.manualRedeemable).toEqual(expect.anything());
            expect(result.redeemAll).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('redeem request test', () => {
        /**
         * redeem
         * Redeem
         * /api/v1/earn/orders
         */
        let builder = RedeemReq.builder();
        builder
            .setOrderId('2849600')
            .setAmount('10.0')
            .setFromAccountType(RedeemReq.FromAccountTypeEnum.MAIN)
            .setConfirmPunishRedeem('1');
        let req = builder.build();
        let resp = api.redeem(req);
        return resp.then((result) => {
            expect(result.orderTxId).toEqual(expect.anything());
            expect(result.deliverTime).toEqual(expect.anything());
            expect(result.status).toEqual(expect.anything());
            expect(result.amount).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('getSavingsProducts request test', () => {
        /**
         * getSavingsProducts
         * Get Savings Products
         * /api/v1/earn/saving/products
         */
        let builder = GetSavingsProductsReq.builder();
        builder.setCurrency('USDT');
        let req = builder.build();
        let resp = api.getSavingsProducts(req);
        return resp.then((result) => {
            expect(result.data).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('getPromotionProducts request test', () => {
        /**
         * getPromotionProducts
         * Get Promotion Products
         * /api/v1/earn/promotion/products
         */
        let builder = GetPromotionProductsReq.builder();
        builder.setCurrency('USDT');
        let req = builder.build();
        let resp = api.getPromotionProducts(req);
        return resp.then((result) => {
            expect(result.data).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('getAccountHolding request test', () => {
        /**
         * getAccountHolding
         * Get Account Holding
         * /api/v1/earn/hold-assets
         */
        let builder = GetAccountHoldingReq.builder();
        builder
            .setCurrency('USDT')
            .setProductId('2152')
            .setProductCategory(GetAccountHoldingReq.ProductCategoryEnum.DEMAND);
        let req = builder.build();
        let resp = api.getAccountHolding(req);
        return resp.then((result) => {
            expect(result.totalNum).toEqual(expect.anything());
            expect(result.items).toEqual(expect.anything());
            expect(result.currentPage).toEqual(expect.anything());
            expect(result.pageSize).toEqual(expect.anything());
            expect(result.totalPage).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('getStakingProducts request test', () => {
        /**
         * getStakingProducts
         * Get Staking Products
         * /api/v1/earn/staking/products
         */
        let builder = GetStakingProductsReq.builder();
        builder.setCurrency('ATOM');
        let req = builder.build();
        let resp = api.getStakingProducts(req);
        return resp.then((result) => {
            expect(result.data).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('getKcsStakingProducts request test', () => {
        /**
         * getKcsStakingProducts
         * Get KCS Staking Products
         * /api/v1/earn/kcs-staking/products
         */
        let builder = GetKcsStakingProductsReq.builder();
        builder.setCurrency('KCS');
        let req = builder.build();
        let resp = api.getKcsStakingProducts(req);
        return resp.then((result) => {
            expect(result.data).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('getETHStakingProducts request test', () => {
        /**
         * getETHStakingProducts
         * Get ETH Staking Products
         * /api/v1/earn/eth-staking/products
         */
        let builder = GetETHStakingProductsReq.builder();
        builder.setCurrency('eth');
        let req = builder.build();
        let resp = api.getETHStakingProducts(req);
        return resp.then((result) => {
            expect(result.data).toEqual(expect.anything());
            console.log(resp);
        });
    });
});

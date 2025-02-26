import {
    ClientOptionBuilder,
    GlobalApiEndpoint,
    GlobalBrokerApiEndpoint,
    GlobalFuturesApiEndpoint,
    TransportOptionBuilder,
} from '@model/index';
import {
    BorrowReq,
    DebitAPI,
    GetBorrowHistoryReq,
    GetInterestHistoryReq,
    GetRepayHistoryReq,
    ModifyLeverageReq,
    RepayReq,
} from '@src/generate/margin/debit';
import { DefaultClient } from '@api/index';

describe('Auto Test', () => {
    let api: DebitAPI;

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
        api = kucoinRestService.getMarginService().getDebitApi();
    });

    test('borrow request test', () => {
        /**
         * borrow
         * Borrow
         * /api/v3/margin/borrow
         */
        let builder = BorrowReq.builder();
        builder
            .setCurrency('USDT')
            .setSize(10.0)
            .setTimeInForce(BorrowReq.TimeInForceEnum.IOC)
            .setSymbol('BTC-USDT')
            .setIsIsolated(true)
            .setIsHf(true);
        let req = builder.build();
        let resp = api.borrow(req);
        return resp.then((result) => {
            expect(result.orderNo).toEqual(expect.anything());
            expect(result.actualSize).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('getBorrowHistory request test', () => {
        /**
         * getBorrowHistory
         * Get Borrow History
         * /api/v3/margin/borrow
         */
        let builder = GetBorrowHistoryReq.builder();
        builder.setCurrency('USDT').setIsIsolated(true).setSymbol('BTC-USDT');
        let req = builder.build();
        let resp = api.getBorrowHistory(req);
        return resp.then((result) => {
            expect(result.timestamp).toEqual(expect.anything());
            expect(result.currentPage).toEqual(expect.anything());
            expect(result.pageSize).toEqual(expect.anything());
            expect(result.totalNum).toEqual(expect.anything());
            expect(result.totalPage).toEqual(expect.anything());
            result.items.forEach((item) => {
                expect(item.orderNo).toEqual(expect.anything());
                expect(item.symbol).toEqual(expect.anything());
                expect(item.currency).toEqual(expect.anything());
                expect(item.size).toEqual(expect.anything());
                expect(item.actualSize).toEqual(expect.anything());
                expect(item.status).toEqual(expect.anything());
                expect(item.createdTime).toEqual(expect.anything());
            })
            console.log(resp);
        });
    });

    test('repay request test', () => {
        /**
         * repay
         * Repay
         * /api/v3/margin/repay
         */
        let builder = RepayReq.builder();
        builder
            .setCurrency('USDT')
            .setSize(10.0)
            .setSymbol('BTC-USDT')
            .setIsIsolated(true)
            .setIsHf(true);
        let req = builder.build();
        let resp = api.repay(req);
        return resp.then((result) => {
            expect(result.timestamp).toEqual(expect.anything());
            expect(result.orderNo).toEqual(expect.anything());
            expect(result.actualSize).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('getRepayHistory request test', () => {
        /**
         * getRepayHistory
         * Get Repay History
         * /api/v3/margin/repay
         */
        let builder = GetRepayHistoryReq.builder();
        builder.setCurrency('USDT').setIsIsolated(true).setSymbol('BTC-USDT');
        let req = builder.build();
        let resp = api.getRepayHistory(req);
        return resp.then((result) => {
            expect(result.timestamp).toEqual(expect.anything());
            expect(result.currentPage).toEqual(expect.anything());
            expect(result.pageSize).toEqual(expect.anything());
            expect(result.totalNum).toEqual(expect.anything());
            expect(result.totalPage).toEqual(expect.anything());
            result.items.forEach((item) => {
                expect(item.orderNo).toEqual(expect.anything());
                expect(item.symbol).toEqual(expect.anything());
                expect(item.currency).toEqual(expect.anything());
                expect(item.size).toEqual(expect.anything());
                expect(item.principal).toEqual(expect.anything());
                expect(item.interest).toEqual(expect.anything());
                expect(item.status).toEqual(expect.anything());
                expect(item.createdTime).toEqual(expect.anything());
            })
            console.log(resp);
        });
    });

    test('getInterestHistory request test', () => {
        /**
         * getInterestHistory
         * Get Interest History
         * /api/v3/margin/interest
         */
        let builder = GetInterestHistoryReq.builder();
        builder.setIsIsolated(true).setSymbol('BTC-USDT');
        let req = builder.build();
        let resp = api.getInterestHistory(req);
        return resp.then((result) => {
            expect(result.timestamp).toEqual(expect.anything());
            expect(result.currentPage).toEqual(expect.anything());
            expect(result.pageSize).toEqual(expect.anything());
            expect(result.totalNum).toEqual(expect.anything());
            expect(result.totalPage).toEqual(expect.anything());
            result.items.forEach((item) => {
                expect(item.currency).toEqual(expect.anything());
                expect(item.createdTime).toEqual(expect.anything());
                expect(item.dayRatio).toEqual(expect.anything());
                expect(item.interestAmount).toEqual(expect.anything());
            })
            console.log(resp);
        });
    });

    test('modifyLeverage request test', () => {
        /**
         * modifyLeverage
         * Modify Leverage
         * /api/v3/position/update-user-leverage
         */
        let builder = ModifyLeverageReq.builder();
        builder.setSymbol('BTC-USDT').setIsIsolated(true).setLeverage('3.1');
        let req = builder.build();
        let resp = api.modifyLeverage(req);
        return resp.then((result) => {
            expect(result.data).toEqual(expect.anything());
            console.log(resp);
        });
    });
});

import {
    ClientOptionBuilder,
    GlobalApiEndpoint,
    GlobalBrokerApiEndpoint,
    GlobalFuturesApiEndpoint,
    TransportOptionBuilder,
} from '@model/index';
import {
    AddOrderReq,
    AddOrderTestReq,
    AddOrderTestV1Req,
    AddOrderV1Req,
    CancelAllOrdersBySymbolReq,
    CancelOrderByClientOidReq,
    CancelOrderByOrderIdReq,
    GetClosedOrdersReq,
    GetOpenOrdersReq,
    GetOrderByClientOidReq,
    GetOrderByOrderIdReq,
    GetSymbolsWithOpenOrderReq,
    GetTradeHistoryReq,
    OrderAPI,
} from '@src/generate/margin/order';
import { DefaultClient } from '@api/index';
import { randomUUID } from 'crypto';

describe('Auto Test', () => {
    let api: OrderAPI;

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
        api = kucoinRestService.getMarginService().getOrderApi();
    });

    test('addOrder request test', () => {
        /**
         * addOrder
         * Add Order
         * /api/v3/hf/margin/order
         */
        let builder = AddOrderReq.builder();
        builder
            .setClientOid(randomUUID())
            .setSide(AddOrderReq.SideEnum.BUY)
            .setSymbol('DOGE-USDT')
            .setType(AddOrderReq.TypeEnum.LIMIT)
            .setSize('100')
            .setPrice('0.01')
            .setIsIsolated(false)
            .setAutoBorrow(true)
            .setAutoRepay(true);
        let req = builder.build();
        let resp = api.addOrder(req);
        return resp.then((result) => {
            expect(result.orderId).toEqual(expect.anything());
            expect(result.loanApplyId).toEqual(expect.anything());
            expect(result.borrowSize).toEqual(expect.anything());
            expect(result.clientOid).toEqual(expect.anything());
            console.log(resp);
        });
    });

    // 429
    test('addOrderTest request test', () => {
        /**
         * addOrderTest
         * Add Order Test
         * /api/v3/hf/margin/order/test
         */
        let builder = AddOrderTestReq.builder();
        builder
            .setClientOid(randomUUID())
            .setSide(AddOrderTestReq.SideEnum.BUY)
            .setSymbol('DOGE-USDT')
            .setType(AddOrderTestReq.TypeEnum.MARKET)
            .setFunds('10')
            .setIsIsolated(false)
            .setAutoBorrow(true)
            .setAutoRepay(true);
        let req = builder.build();
        let resp = api.addOrderTest(req);
        return resp.then((result) => {
            expect(result.orderId).toEqual(expect.anything());
            expect(result.loanApplyId).toEqual(expect.anything());
            expect(result.borrowSize).toEqual(expect.anything());
            expect(result.clientOid).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('cancelOrderByOrderId request test', () => {
        /**
         * cancelOrderByOrderId
         * Cancel Order By OrderId
         * /api/v3/hf/margin/orders/{orderId}
         */
        let builder = CancelOrderByOrderIdReq.builder();
        builder.setOrderId('67aaca338930080007f4e36d').setSymbol('DOGE-USDT');
        let req = builder.build();
        let resp = api.cancelOrderByOrderId(req);
        return resp.then((result) => {
            expect(result.orderId).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('cancelOrderByClientOid request test', () => {
        /**
         * cancelOrderByClientOid
         * Cancel Order By ClientOid
         * /api/v3/hf/margin/orders/client-order/{clientOid}
         */
        let builder = CancelOrderByClientOidReq.builder();
        builder.setClientOid('c5157df9-a091-4f26-90e9-0a5b40a2ffa0').setSymbol('DOGE-USDT');
        let req = builder.build();
        let resp = api.cancelOrderByClientOid(req);
        return resp.then((result) => {
            expect(result.clientOid).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('cancelAllOrdersBySymbol request test', () => {
        /**
         * cancelAllOrdersBySymbol
         * Cancel All Orders By Symbol
         * /api/v3/hf/margin/orders
         */
        let builder = CancelAllOrdersBySymbolReq.builder();
        builder
            .setSymbol('DOGE-USDT')
            .setTradeType(CancelAllOrdersBySymbolReq.TradeTypeEnum.MARGIN_ISOLATED_TRADE);
        let req = builder.build();
        let resp = api.cancelAllOrdersBySymbol(req);
        return resp.then((result) => {
            expect(result.data).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('getSymbolsWithOpenOrder request test', () => {
        /**
         * getSymbolsWithOpenOrder
         * Get Symbols With Open Order
         * /api/v3/hf/margin/order/active/symbols
         */
        let builder = GetSymbolsWithOpenOrderReq.builder();
        builder.setTradeType(GetSymbolsWithOpenOrderReq.TradeTypeEnum.MARGIN_ISOLATED_TRADE);
        let req = builder.build();
        let resp = api.getSymbolsWithOpenOrder(req);
        return resp.then((result) => {
            expect(result.symbolSize).toEqual(expect.anything());
            expect(result.symbols).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('getOpenOrders request test', () => {
        /**
         * getOpenOrders
         * Get Open Orders
         * /api/v3/hf/margin/orders/active
         */
        let builder = GetOpenOrdersReq.builder();
        builder.setSymbol('DOGE-USDT').setTradeType(GetOpenOrdersReq.TradeTypeEnum.MARGIN_TRADE);
        let req = builder.build();
        let resp = api.getOpenOrders(req);
        return resp.then((result) => {
            result.data.forEach((item) => {
                expect(item.id).toEqual(expect.any(String));
                expect(item.symbol).toEqual(expect.any(String));
                expect(item.opType).toEqual(expect.any(String));
                expect(item.type).toEqual(expect.any(String));
                expect(item.side).toEqual(expect.any(String));
                expect(item.price).toEqual(expect.any(String));
                expect(item.size).toEqual(expect.any(String));
                expect(item.funds).toEqual(expect.any(String));
                expect(item.dealSize).toEqual(expect.any(String));
                expect(item.dealFunds).toEqual(expect.any(String));
                expect(item.fee).toEqual(expect.any(String));
                expect(item.feeCurrency).toEqual(expect.any(String));
                expect(item.stopTriggered).toEqual(expect.any(Boolean));
                expect(item.stopPrice).toEqual(expect.any(String));
                expect(item.timeInForce).toEqual(expect.any(String));
                expect(item.postOnly).toEqual(expect.any(Boolean));
                expect(item.hidden).toEqual(expect.any(Boolean));
                expect(item.iceberg).toEqual(expect.any(Boolean));
                expect(item.visibleSize).toEqual(expect.any(String));
                expect(item.cancelAfter).toEqual(expect.any(Number));
                expect(item.channel).toEqual(expect.any(String));
                expect(item.clientOid).toEqual(expect.any(String));
                expect(item.cancelExist).toEqual(expect.any(Boolean));
                expect(item.createdAt).toEqual(expect.any(Number));
                expect(item.lastUpdatedAt).toEqual(expect.any(Number));
                expect(item.tradeType).toEqual(expect.any(String));
                expect(item.inOrderBook).toEqual(expect.any(Boolean));
                expect(item.cancelledSize).toEqual(expect.any(String));
                expect(item.cancelledFunds).toEqual(expect.any(String));
                expect(item.remainSize).toEqual(expect.any(String));
                expect(item.remainFunds).toEqual(expect.any(String));
                expect(item.tax).toEqual(expect.any(String));
                expect(item.active).toEqual(expect.any(Boolean));
            });
            console.log(resp);
        });
    });

    test('getClosedOrders request test', () => {
        /**
         * getClosedOrders
         * Get Closed Orders
         * /api/v3/hf/margin/orders/done
         */
        let builder = GetClosedOrdersReq.builder();
        builder
            .setSymbol('DOGE-USDT')
            .setTradeType(GetClosedOrdersReq.TradeTypeEnum.MARGIN_TRADE)
            .setSide(GetClosedOrdersReq.SideEnum.BUY)
            .setType(GetClosedOrdersReq.TypeEnum.MARKET);
        let req = builder.build();
        let resp = api.getClosedOrders(req);
        return resp.then((result) => {
            result.items.forEach(item => {
                expect(item.id).toEqual(expect.any(String));
                expect(item.symbol).toEqual(expect.any(String));
                expect(item.opType).toEqual(expect.any(String));
                expect(item.type).toEqual(expect.any(String));
                expect(item.side).toEqual(expect.any(String));
                expect(item.price).toEqual(expect.any(String));
                expect(item.size).toEqual(expect.any(String));
                expect(item.funds).toEqual(expect.any(String));
                expect(item.dealSize).toEqual(expect.any(String));
                expect(item.dealFunds).toEqual(expect.any(String));
                expect(item.fee).toEqual(expect.any(String));
                expect(item.feeCurrency).toEqual(expect.any(String));
                expect(item.stopTriggered).toEqual(expect.any(Boolean));
                expect(item.stopPrice).toEqual(expect.any(String));
                expect(item.timeInForce).toEqual(expect.any(String));
                expect(item.postOnly).toEqual(expect.any(Boolean));
                expect(item.hidden).toEqual(expect.any(Boolean));
                expect(item.iceberg).toEqual(expect.any(Boolean));
                expect(item.visibleSize).toEqual(expect.any(String));
                expect(item.cancelAfter).toEqual(expect.any(Number));
                expect(item.channel).toEqual(expect.any(String));
                expect(item.clientOid).toEqual(expect.any(String));
                expect(item.cancelExist).toEqual(expect.any(Boolean));
                expect(item.createdAt).toEqual(expect.any(Number));
                expect(item.lastUpdatedAt).toEqual(expect.any(Number));
                expect(item.tradeType).toEqual(expect.any(String));
                expect(item.inOrderBook).toEqual(expect.any(Boolean));
                expect(item.cancelledSize).toEqual(expect.any(String));
                expect(item.cancelledFunds).toEqual(expect.any(String));
                expect(item.remainSize).toEqual(expect.any(String));
                expect(item.tax).toEqual(expect.any(String));
                expect(item.active).toEqual(expect.any(Boolean));
            })
            console.log(resp);
        });
    });

    test('getTradeHistory request test', () => {
        /**
         * getTradeHistory
         * Get Trade History
         * /api/v3/hf/margin/fills
         */
        let builder = GetTradeHistoryReq.builder();
        builder
            .setSymbol('DOGE-USDT')
            .setTradeType(GetTradeHistoryReq.TradeTypeEnum.MARGIN_TRADE)
            .setSide(GetTradeHistoryReq.SideEnum.BUY);
        let req = builder.build();
        let resp = api.getTradeHistory(req);
        return resp.then((result) => {
            result.items.forEach(item=> {
                expect(item.id).toEqual(expect.any(Number));
                expect(item.symbol).toEqual(expect.any(String));
                expect(item.tradeId).toEqual(expect.any(Number));
                expect(item.orderId).toEqual(expect.any(String));
                expect(item.counterOrderId).toEqual(expect.any(String));
                expect(item.side).toEqual(expect.any(String));
                expect(item.liquidity).toEqual(expect.any(String));
                expect(item.forceTaker).toEqual(expect.any(Boolean));
                expect(item.price).toEqual(expect.any(String));
                expect(item.size).toEqual(expect.any(String));
                expect(item.funds).toEqual(expect.any(String));
                expect(item.fee).toEqual(expect.any(String));
                expect(item.feeRate).toEqual(expect.any(String));
                expect(item.feeCurrency).toEqual(expect.any(String));
                expect(item.stop).toEqual(expect.any(String));
                expect(item.tradeType).toEqual(expect.any(String));
                expect(item.tax).toEqual(expect.any(String));
                expect(item.taxRate).toEqual(expect.any(String));
                expect(item.type).toEqual(expect.any(String));
                expect(item.createdAt).toEqual(expect.any(Number));
            })
            expect(result.lastId).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('getOrderByOrderId request test', () => {
        /**
         * getOrderByOrderId
         * Get Order By OrderId
         * /api/v3/hf/margin/orders/{orderId}
         */
        let builder = GetOrderByOrderIdReq.builder();
        builder.setSymbol('DOGE-USDT').setOrderId('67aacc7eb7f57d000798aa0f');
        let req = builder.build();
        let resp = api.getOrderByOrderId(req);
        return resp.then((result) => {
            expect(result.id).toEqual(expect.anything());
            expect(result.symbol).toEqual(expect.anything());
            expect(result.opType).toEqual(expect.anything());
            expect(result.type).toEqual(expect.anything());
            expect(result.side).toEqual(expect.anything());
            expect(result.price).toEqual(expect.anything());
            expect(result.size).toEqual(expect.anything());
            expect(result.funds).toEqual(expect.anything());
            expect(result.dealSize).toEqual(expect.anything());
            expect(result.dealFunds).toEqual(expect.anything());
            expect(result.fee).toEqual(expect.anything());
            expect(result.feeCurrency).toEqual(expect.anything());
            expect(result.stopTriggered).toEqual(expect.anything());
            expect(result.stopPrice).toEqual(expect.anything());
            expect(result.timeInForce).toEqual(expect.anything());
            expect(result.postOnly).toEqual(expect.anything());
            expect(result.hidden).toEqual(expect.anything());
            expect(result.iceberg).toEqual(expect.anything());
            expect(result.visibleSize).toEqual(expect.anything());
            expect(result.cancelAfter).toEqual(expect.anything());
            expect(result.channel).toEqual(expect.anything());
            expect(result.clientOid).toEqual(expect.anything());
            expect(result.cancelExist).toEqual(expect.anything());
            expect(result.createdAt).toEqual(expect.anything());
            expect(result.lastUpdatedAt).toEqual(expect.anything());
            expect(result.tradeType).toEqual(expect.anything());
            expect(result.inOrderBook).toEqual(expect.anything());
            expect(result.cancelledSize).toEqual(expect.anything());
            expect(result.cancelledFunds).toEqual(expect.anything());
            expect(result.remainSize).toEqual(expect.anything());
            expect(result.remainFunds).toEqual(expect.anything());
            expect(result.tax).toEqual(expect.anything());
            expect(result.active).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('getOrderByClientOid request test', () => {
        /**
         * getOrderByClientOid
         * Get Order By ClientOid
         * /api/v3/hf/margin/orders/client-order/{clientOid}
         */
        let builder = GetOrderByClientOidReq.builder();
        builder.setSymbol('DOGE-USDT').setClientOid('7dc5c71f-048d-4a83-8846-eb7b3040e1ea');
        let req = builder.build();
        let resp = api.getOrderByClientOid(req);
        return resp.then((result) => {
            expect(result.id).toEqual(expect.anything());
            expect(result.symbol).toEqual(expect.anything());
            expect(result.opType).toEqual(expect.anything());
            expect(result.type).toEqual(expect.anything());
            expect(result.side).toEqual(expect.anything());
            expect(result.price).toEqual(expect.anything());
            expect(result.size).toEqual(expect.anything());
            expect(result.funds).toEqual(expect.anything());
            expect(result.dealSize).toEqual(expect.anything());
            expect(result.dealFunds).toEqual(expect.anything());
            expect(result.fee).toEqual(expect.anything());
            expect(result.feeCurrency).toEqual(expect.anything());
            expect(result.stopTriggered).toEqual(expect.anything());
            expect(result.stopPrice).toEqual(expect.anything());
            expect(result.timeInForce).toEqual(expect.anything());
            expect(result.postOnly).toEqual(expect.anything());
            expect(result.hidden).toEqual(expect.anything());
            expect(result.iceberg).toEqual(expect.anything());
            expect(result.visibleSize).toEqual(expect.anything());
            expect(result.cancelAfter).toEqual(expect.anything());
            expect(result.channel).toEqual(expect.anything());
            expect(result.clientOid).toEqual(expect.anything());
            expect(result.cancelExist).toEqual(expect.anything());
            expect(result.createdAt).toEqual(expect.anything());
            expect(result.lastUpdatedAt).toEqual(expect.anything());
            expect(result.tradeType).toEqual(expect.anything());
            expect(result.inOrderBook).toEqual(expect.anything());
            expect(result.cancelledSize).toEqual(expect.anything());
            expect(result.cancelledFunds).toEqual(expect.anything());
            expect(result.remainSize).toEqual(expect.anything());
            expect(result.remainFunds).toEqual(expect.anything());
            expect(result.tax).toEqual(expect.anything());
            expect(result.active).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('addOrderV1 request test', () => {
        /**
         * addOrderV1
         * Add Order - V1
         * /api/v1/margin/order
         */
        let builder = AddOrderV1Req.builder();
        builder
            .setClientOid(randomUUID())
            .setSide(AddOrderV1Req.SideEnum.BUY)
            .setSymbol('BTC-USDT')
            .setType(AddOrderV1Req.TypeEnum.LIMIT)
            .setPrice('10000')
            .setSize('0.001')
            .setAutoBorrow(false)
            .setAutoRepay(false)
            .setMarginModel(AddOrderV1Req.MarginModelEnum.ISOLATED);
        let req = builder.build();
        let resp = api.addOrderV1(req);
        return resp.then((result) => {
            expect(result.orderId).toEqual(expect.anything());
            console.log(resp);
        });
    });

    // 429
    test('addOrderTestV1 request test', () => {
        /**
         * addOrderTestV1
         * Add Order Test - V1
         * /api/v1/margin/order/test
         */
        let builder = AddOrderTestV1Req.builder();
        builder
            .setClientOid(randomUUID())
            .setSide(AddOrderTestV1Req.SideEnum.BUY)
            .setSymbol('BTC-USDT')
            .setType(AddOrderTestV1Req.TypeEnum.LIMIT)
            .setPrice('10000')
            .setSize('0.001')
            .setAutoBorrow(false)
            .setAutoRepay(false)
            .setMarginModel(AddOrderTestV1Req.MarginModelEnum.ISOLATED);
        let req = builder.build();
        let resp = api.addOrderTestV1(req);
        return resp.then((result) => {
            expect(result.orderId).toEqual(expect.anything());
            expect(result.loanApplyId).toEqual(expect.anything());
            expect(result.borrowSize).toEqual(expect.anything());
            expect(result.clientOid).toEqual(expect.anything());
            console.log(resp);
        });
    });
});

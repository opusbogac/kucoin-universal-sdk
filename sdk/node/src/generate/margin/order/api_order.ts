// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { Transport } from '@internal/interfaces/transport';
import { GetOrderByOrderIdResp } from './model_get_order_by_order_id_resp';
import { GetTradeHistoryResp } from './model_get_trade_history_resp';
import { GetOrderByClientOidResp } from './model_get_order_by_client_oid_resp';
import { CancelOrderByClientOidReq } from './model_cancel_order_by_client_oid_req';
import { GetClosedOrdersResp } from './model_get_closed_orders_resp';
import { AddOrderV1Req } from './model_add_order_v1_req';
import { AddOrderReq } from './model_add_order_req';
import { GetOpenOrdersResp } from './model_get_open_orders_resp';
import { GetClosedOrdersReq } from './model_get_closed_orders_req';
import { CancelOrderByOrderIdReq } from './model_cancel_order_by_order_id_req';
import { CancelAllOrdersBySymbolResp } from './model_cancel_all_orders_by_symbol_resp';
import { GetSymbolsWithOpenOrderReq } from './model_get_symbols_with_open_order_req';
import { GetOpenOrdersReq } from './model_get_open_orders_req';
import { AddOrderTestV1Req } from './model_add_order_test_v1_req';
import { GetTradeHistoryReq } from './model_get_trade_history_req';
import { CancelAllOrdersBySymbolReq } from './model_cancel_all_orders_by_symbol_req';
import { AddOrderTestReq } from './model_add_order_test_req';
import { AddOrderTestV1Resp } from './model_add_order_test_v1_resp';
import { AddOrderV1Resp } from './model_add_order_v1_resp';
import { CancelOrderByClientOidResp } from './model_cancel_order_by_client_oid_resp';
import { CancelOrderByOrderIdResp } from './model_cancel_order_by_order_id_resp';
import { AddOrderTestResp } from './model_add_order_test_resp';
import { GetOrderByClientOidReq } from './model_get_order_by_client_oid_req';
import { AddOrderResp } from './model_add_order_resp';
import { GetOrderByOrderIdReq } from './model_get_order_by_order_id_req';
import { GetSymbolsWithOpenOrderResp } from './model_get_symbols_with_open_order_resp';

export interface OrderAPI {
    /**
     * addOrder Add Order
     * Description: Place order to the Cross-margin or Isolated-margin trading system, you can place two major types of orders: limit and market. Orders can only be placed if your account has sufficient funds. Once an order is placed, your funds will be put on hold for the duration of the order. The amount of funds on hold depends on the order type and parameters specified.
     * Documentation: https://www.kucoin.com/docs-new/api-3470204
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | SPOT    |
     * | API-CHANNEL         | PRIVATE |
     * | API-PERMISSION      | MARGIN  |
     * | API-RATE-LIMIT-POOL | SPOT    |
     * | API-RATE-LIMIT      | 5       |
     * +---------------------+---------+
     */
    addOrder(req: AddOrderReq): Promise<AddOrderResp>;

    /**
     * addOrderTest Add Order Test
     * Description:  Order test endpoint, the request parameters and return parameters of this endpoint are exactly the same as the order endpoint, and can be used to verify whether the signature is correct and other operations. After placing an order, the order will not enter the matching system, and the order cannot be queried.
     * Documentation: https://www.kucoin.com/docs-new/api-3470205
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | SPOT    |
     * | API-CHANNEL         | PRIVATE |
     * | API-PERMISSION      | MARGIN  |
     * | API-RATE-LIMIT-POOL | SPOT    |
     * | API-RATE-LIMIT      | 5       |
     * +---------------------+---------+
     */
    addOrderTest(req: AddOrderTestReq): Promise<AddOrderTestResp>;

    /**
     * cancelOrderByOrderId Cancel Order By OrderId
     * Description: This endpoint can be used to cancel a margin order by orderId. This endpoint only sends cancellation requests. The results of the requests must be obtained by checking the order status or subscribing to websocket.
     * Documentation: https://www.kucoin.com/docs-new/api-3470195
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | SPOT    |
     * | API-CHANNEL         | PRIVATE |
     * | API-PERMISSION      | MARGIN  |
     * | API-RATE-LIMIT-POOL | SPOT    |
     * | API-RATE-LIMIT      | 5       |
     * +---------------------+---------+
     */
    cancelOrderByOrderId(req: CancelOrderByOrderIdReq): Promise<CancelOrderByOrderIdResp>;

    /**
     * cancelOrderByClientOid Cancel Order By ClientOid
     * Description: This endpoint can be used to cancel a margin order by clientOid. This endpoint only sends cancellation requests. The results of the requests must be obtained by checking the order status or subscribing to websocket.
     * Documentation: https://www.kucoin.com/docs-new/api-3470201
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | SPOT    |
     * | API-CHANNEL         | PRIVATE |
     * | API-PERMISSION      | MARGIN  |
     * | API-RATE-LIMIT-POOL | SPOT    |
     * | API-RATE-LIMIT      | 5       |
     * +---------------------+---------+
     */
    cancelOrderByClientOid(req: CancelOrderByClientOidReq): Promise<CancelOrderByClientOidResp>;

    /**
     * cancelAllOrdersBySymbol Cancel All Orders By Symbol
     * Description: This interface can cancel all open Margin orders by symbol This endpoint only sends cancellation requests. The results of the requests must be obtained by checking the order status or subscribing to websocket.
     * Documentation: https://www.kucoin.com/docs-new/api-3470197
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | SPOT    |
     * | API-CHANNEL         | PRIVATE |
     * | API-PERMISSION      | MARGIN  |
     * | API-RATE-LIMIT-POOL | SPOT    |
     * | API-RATE-LIMIT      | 10      |
     * +---------------------+---------+
     */
    cancelAllOrdersBySymbol(req: CancelAllOrdersBySymbolReq): Promise<CancelAllOrdersBySymbolResp>;

    /**
     * getSymbolsWithOpenOrder Get Symbols With Open Order
     * Description: This interface can query all Margin symbol that has active orders
     * Documentation: https://www.kucoin.com/docs-new/api-3470196
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | SPOT    |
     * | API-CHANNEL         | PRIVATE |
     * | API-PERMISSION      | MARGIN  |
     * | API-RATE-LIMIT-POOL | SPOT    |
     * | API-RATE-LIMIT      | 2       |
     * +---------------------+---------+
     */
    getSymbolsWithOpenOrder(req: GetSymbolsWithOpenOrderReq): Promise<GetSymbolsWithOpenOrderResp>;

    /**
     * getOpenOrders Get Open Orders
     * Description: This interface is to obtain all Margin active order lists, and the return value of the active order interface is the paged data of all uncompleted order lists. The returned data is sorted in descending order according to the latest update time of the order.  After the user successfully places an order, the order is in Active state, and the user can use inOrderBook to determine whether the order has entered the order. Canceled or fully filled orders are marked as completed Done status.
     * Documentation: https://www.kucoin.com/docs-new/api-3470198
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | SPOT    |
     * | API-CHANNEL         | PRIVATE |
     * | API-PERMISSION      | GENERAL |
     * | API-RATE-LIMIT-POOL | SPOT    |
     * | API-RATE-LIMIT      | 4       |
     * +---------------------+---------+
     */
    getOpenOrders(req: GetOpenOrdersReq): Promise<GetOpenOrdersResp>;

    /**
     * getClosedOrders Get Closed Orders
     * Description: This interface is to obtain all Margin closed order lists, and the return value of the active order interface is the paged data of all uncompleted order lists. The returned data is sorted in descending order according to the latest update time of the order.  After the user successfully places an order, the order is in Active state, and the user can use inOrderBook to determine whether the order has entered the order. Canceled or fully filled orders are marked as completed Done status.
     * Documentation: https://www.kucoin.com/docs-new/api-3470199
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | SPOT    |
     * | API-CHANNEL         | PRIVATE |
     * | API-PERMISSION      | GENERAL |
     * | API-RATE-LIMIT-POOL | SPOT    |
     * | API-RATE-LIMIT      | 10      |
     * +---------------------+---------+
     */
    getClosedOrders(req: GetClosedOrdersReq): Promise<GetClosedOrdersResp>;

    /**
     * getTradeHistory Get Trade History
     * Description: This endpoint can be used to obtain a list of the latest Margin transaction details.  The returned data is sorted in descending order according to the latest update time of the order.
     * Documentation: https://www.kucoin.com/docs-new/api-3470200
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | SPOT    |
     * | API-CHANNEL         | PRIVATE |
     * | API-PERMISSION      | GENERAL |
     * | API-RATE-LIMIT-POOL | SPOT    |
     * | API-RATE-LIMIT      | 5       |
     * +---------------------+---------+
     */
    getTradeHistory(req: GetTradeHistoryReq): Promise<GetTradeHistoryResp>;

    /**
     * getOrderByOrderId Get Order By OrderId
     * Description: This endpoint can be used to obtain information for a single Margin order using the order id.  After the user successfully places an order, the order is in Active state, and the user can use inOrderBook to determine whether the order has entered the order. Canceled or fully filled orders are marked as completed Done status.
     * Documentation: https://www.kucoin.com/docs-new/api-3470202
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | SPOT    |
     * | API-CHANNEL         | PRIVATE |
     * | API-PERMISSION      | GENERAL |
     * | API-RATE-LIMIT-POOL | SPOT    |
     * | API-RATE-LIMIT      | 5       |
     * +---------------------+---------+
     */
    getOrderByOrderId(req: GetOrderByOrderIdReq): Promise<GetOrderByOrderIdResp>;

    /**
     * getOrderByClientOid Get Order By ClientOid
     * Description: This endpoint can be used to obtain information for a single Margin order using the client order id.  After the user successfully places an order, the order is in Active state, and the user can use inOrderBook to determine whether the order has entered the order. Canceled or fully filled orders are marked as completed Done status.
     * Documentation: https://www.kucoin.com/docs-new/api-3470203
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | SPOT    |
     * | API-CHANNEL         | PRIVATE |
     * | API-PERMISSION      | GENERAL |
     * | API-RATE-LIMIT-POOL | SPOT    |
     * | API-RATE-LIMIT      | 5       |
     * +---------------------+---------+
     */
    getOrderByClientOid(req: GetOrderByClientOidReq): Promise<GetOrderByClientOidResp>;

    /**
     * @deprecated
     * addOrderV1 Add Order - V1
     * Description: Place order to the Cross-margin or Isolated-margin trading system, you can place two major types of orders: limit and market. Orders can only be placed if your account has sufficient funds. Once an order is placed, your funds will be put on hold for the duration of the order. The amount of funds on hold depends on the order type and parameters specified.
     * Documentation: https://www.kucoin.com/docs-new/api-3470312
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | SPOT    |
     * | API-CHANNEL         | PRIVATE |
     * | API-PERMISSION      | MARGIN  |
     * | API-RATE-LIMIT-POOL | SPOT    |
     * | API-RATE-LIMIT      | 5       |
     * +---------------------+---------+
     */
    addOrderV1(req: AddOrderV1Req): Promise<AddOrderV1Resp>;

    /**
     * @deprecated
     * addOrderTestV1 Add Order Test - V1
     * Description: Order test endpoint, the request parameters and return parameters of this endpoint are exactly the same as the order endpoint, and can be used to verify whether the signature is correct and other operations. After placing an order, the order will not enter the matching system, and the order cannot be queried.
     * Documentation: https://www.kucoin.com/docs-new/api-3470313
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | SPOT    |
     * | API-CHANNEL         | PRIVATE |
     * | API-PERMISSION      | MARGIN  |
     * | API-RATE-LIMIT-POOL | SPOT    |
     * | API-RATE-LIMIT      | 5       |
     * +---------------------+---------+
     */
    addOrderTestV1(req: AddOrderTestV1Req): Promise<AddOrderTestV1Resp>;
}

export class OrderAPIImpl implements OrderAPI {
    constructor(private transport: Transport) {}

    addOrder(req: AddOrderReq): Promise<AddOrderResp> {
        return this.transport.call(
            'spot',
            false,
            'POST',
            '/api/v3/hf/margin/order',
            req,
            new AddOrderResp(),
            false,
        );
    }

    addOrderTest(req: AddOrderTestReq): Promise<AddOrderTestResp> {
        return this.transport.call(
            'spot',
            false,
            'POST',
            '/api/v3/hf/margin/order/test',
            req,
            new AddOrderTestResp(),
            false,
        );
    }

    cancelOrderByOrderId(req: CancelOrderByOrderIdReq): Promise<CancelOrderByOrderIdResp> {
        return this.transport.call(
            'spot',
            false,
            'DELETE',
            '/api/v3/hf/margin/orders/{orderId}',
            req,
            new CancelOrderByOrderIdResp(),
            false,
        );
    }

    cancelOrderByClientOid(req: CancelOrderByClientOidReq): Promise<CancelOrderByClientOidResp> {
        return this.transport.call(
            'spot',
            false,
            'DELETE',
            '/api/v3/hf/margin/orders/client-order/{clientOid}',
            req,
            new CancelOrderByClientOidResp(),
            false,
        );
    }

    cancelAllOrdersBySymbol(req: CancelAllOrdersBySymbolReq): Promise<CancelAllOrdersBySymbolResp> {
        return this.transport.call(
            'spot',
            false,
            'DELETE',
            '/api/v3/hf/margin/orders',
            req,
            new CancelAllOrdersBySymbolResp(),
            false,
        );
    }

    getSymbolsWithOpenOrder(req: GetSymbolsWithOpenOrderReq): Promise<GetSymbolsWithOpenOrderResp> {
        return this.transport.call(
            'spot',
            false,
            'GET',
            '/api/v3/hf/margin/order/active/symbols',
            req,
            new GetSymbolsWithOpenOrderResp(),
            false,
        );
    }

    getOpenOrders(req: GetOpenOrdersReq): Promise<GetOpenOrdersResp> {
        return this.transport.call(
            'spot',
            false,
            'GET',
            '/api/v3/hf/margin/orders/active',
            req,
            new GetOpenOrdersResp(),
            false,
        );
    }

    getClosedOrders(req: GetClosedOrdersReq): Promise<GetClosedOrdersResp> {
        return this.transport.call(
            'spot',
            false,
            'GET',
            '/api/v3/hf/margin/orders/done',
            req,
            new GetClosedOrdersResp(),
            false,
        );
    }

    getTradeHistory(req: GetTradeHistoryReq): Promise<GetTradeHistoryResp> {
        return this.transport.call(
            'spot',
            false,
            'GET',
            '/api/v3/hf/margin/fills',
            req,
            new GetTradeHistoryResp(),
            false,
        );
    }

    getOrderByOrderId(req: GetOrderByOrderIdReq): Promise<GetOrderByOrderIdResp> {
        return this.transport.call(
            'spot',
            false,
            'GET',
            '/api/v3/hf/margin/orders/{orderId}',
            req,
            new GetOrderByOrderIdResp(),
            false,
        );
    }

    getOrderByClientOid(req: GetOrderByClientOidReq): Promise<GetOrderByClientOidResp> {
        return this.transport.call(
            'spot',
            false,
            'GET',
            '/api/v3/hf/margin/orders/client-order/{clientOid}',
            req,
            new GetOrderByClientOidResp(),
            false,
        );
    }

    addOrderV1(req: AddOrderV1Req): Promise<AddOrderV1Resp> {
        return this.transport.call(
            'spot',
            false,
            'POST',
            '/api/v1/margin/order',
            req,
            new AddOrderV1Resp(),
            false,
        );
    }

    addOrderTestV1(req: AddOrderTestV1Req): Promise<AddOrderTestV1Resp> {
        return this.transport.call(
            'spot',
            false,
            'POST',
            '/api/v1/margin/order/test',
            req,
            new AddOrderTestV1Resp(),
            false,
        );
    }
}

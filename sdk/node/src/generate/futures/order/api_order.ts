// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { Transport } from '@internal/interfaces/transport';
import { GetTradeHistoryResp } from './model_get_trade_history_resp';
import { GetOpenOrderValueResp } from './model_get_open_order_value_resp';
import { GetOrderByOrderIdResp } from './model_get_order_by_order_id_resp';
import { CancelAllStopOrdersReq } from './model_cancel_all_stop_orders_req';
import { GetOrderByClientOidResp } from './model_get_order_by_client_oid_resp';
import { CancelOrderByClientOidReq } from './model_cancel_order_by_client_oid_req';
import { GetRecentClosedOrdersReq } from './model_get_recent_closed_orders_req';
import { GetStopOrderListResp } from './model_get_stop_order_list_resp';
import { CancelOrderByIdResp } from './model_cancel_order_by_id_resp';
import { AddTPSLOrderReq } from './model_add_tpsl_order_req';
import { AddOrderReq } from './model_add_order_req';
import { CancelAllStopOrdersResp } from './model_cancel_all_stop_orders_resp';
import { CancelAllOrdersV1Req } from './model_cancel_all_orders_v1_req';
import { GetStopOrderListReq } from './model_get_stop_order_list_req';
import { AddTPSLOrderResp } from './model_add_tpsl_order_resp';
import { GetTradeHistoryReq } from './model_get_trade_history_req';
import { GetOpenOrderValueReq } from './model_get_open_order_value_req';
import { CancelAllOrdersV3Resp } from './model_cancel_all_orders_v3_resp';
import { AddOrderTestReq } from './model_add_order_test_req';
import { GetOrderListResp } from './model_get_order_list_resp';
import { GetOrderListReq } from './model_get_order_list_req';
import { BatchCancelOrdersReq } from './model_batch_cancel_orders_req';
import { CancelAllOrdersV3Req } from './model_cancel_all_orders_v3_req';
import { BatchCancelOrdersResp } from './model_batch_cancel_orders_resp';
import { CancelOrderByClientOidResp } from './model_cancel_order_by_client_oid_resp';
import { AddOrderTestResp } from './model_add_order_test_resp';
import { CancelAllOrdersV1Resp } from './model_cancel_all_orders_v1_resp';
import { GetOrderByClientOidReq } from './model_get_order_by_client_oid_req';
import { BatchAddOrdersResp } from './model_batch_add_orders_resp';
import { BatchAddOrdersReq } from './model_batch_add_orders_req';
import { AddOrderResp } from './model_add_order_resp';
import { GetRecentTradeHistoryReq } from './model_get_recent_trade_history_req';
import { GetRecentTradeHistoryResp } from './model_get_recent_trade_history_resp';
import { GetOrderByOrderIdReq } from './model_get_order_by_order_id_req';
import { CancelOrderByIdReq } from './model_cancel_order_by_id_req';
import { GetRecentClosedOrdersResp } from './model_get_recent_closed_orders_resp';

export interface OrderAPI {
    /**
     * addOrder Add Order
     * Description: Place order to the futures trading system, you can place two major types of orders: limit and market. Orders can only be placed if your account has sufficient funds. Once an order is placed, your funds will be put on hold for the duration of the order. The amount of funds on hold depends on the order type and parameters specified.
     * Documentation: https://www.kucoin.com/docs-new/api-3470235
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | FUTURES |
     * | API-CHANNEL         | PRIVATE |
     * | API-PERMISSION      | FUTURES |
     * | API-RATE-LIMIT-POOL | FUTURES |
     * | API-RATE-LIMIT      | 2       |
     * +---------------------+---------+
     */
    addOrder(req: AddOrderReq): Promise<AddOrderResp>;

    /**
     * addOrderTest Add Order Test
     * Description: Place order to the futures trading system just for validation
     * Documentation: https://www.kucoin.com/docs-new/api-3470238
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | FUTURES |
     * | API-CHANNEL         | PRIVATE |
     * | API-PERMISSION      | FUTURES |
     * | API-RATE-LIMIT-POOL | FUTURES |
     * | API-RATE-LIMIT      | 2       |
     * +---------------------+---------+
     */
    addOrderTest(req: AddOrderTestReq): Promise<AddOrderTestResp>;

    /**
     * batchAddOrders Batch Add Orders
     * Description: Place multiple order to the futures trading system, you can place two major types of orders: limit and market. Orders can only be placed if your account has sufficient funds. Once an order is placed, your funds will be put on hold for the duration of the order. The amount of funds on hold depends on the order type and parameters specified. You can place up to 20 orders at one time, including limit orders, market orders, and stop orders  Please be noted that the system would hold the fees from the orders entered the orderbook in advance.
     * Documentation: https://www.kucoin.com/docs-new/api-3470236
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | FUTURES |
     * | API-CHANNEL         | PRIVATE |
     * | API-PERMISSION      | FUTURES |
     * | API-RATE-LIMIT-POOL | FUTURES |
     * | API-RATE-LIMIT      | 20      |
     * +---------------------+---------+
     */
    batchAddOrders(req: BatchAddOrdersReq): Promise<BatchAddOrdersResp>;

    /**
     * addTPSLOrder Add Take Profit And Stop Loss Order
     * Description: Place take profit and stop loss order supports both take-profit and stop-loss functions, and other functions are exactly the same as the place order interface.
     * Documentation: https://www.kucoin.com/docs-new/api-3470237
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | FUTURES |
     * | API-CHANNEL         | PRIVATE |
     * | API-PERMISSION      | FUTURES |
     * | API-RATE-LIMIT-POOL | FUTURES |
     * | API-RATE-LIMIT      | 2       |
     * +---------------------+---------+
     */
    addTPSLOrder(req: AddTPSLOrderReq): Promise<AddTPSLOrderResp>;

    /**
     * cancelOrderById Cancel Order By OrderId
     * Description: Cancel order by system generated orderId.
     * Documentation: https://www.kucoin.com/docs-new/api-3470239
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | FUTURES |
     * | API-CHANNEL         | PRIVATE |
     * | API-PERMISSION      | FUTURES |
     * | API-RATE-LIMIT-POOL | FUTURES |
     * | API-RATE-LIMIT      | 1       |
     * +---------------------+---------+
     */
    cancelOrderById(req: CancelOrderByIdReq): Promise<CancelOrderByIdResp>;

    /**
     * cancelOrderByClientOid Cancel Order By ClientOid
     * Description: Cancel order by client defined orderId.
     * Documentation: https://www.kucoin.com/docs-new/api-3470240
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | FUTURES |
     * | API-CHANNEL         | PRIVATE |
     * | API-PERMISSION      | FUTURES |
     * | API-RATE-LIMIT-POOL | FUTURES |
     * | API-RATE-LIMIT      | 1       |
     * +---------------------+---------+
     */
    cancelOrderByClientOid(req: CancelOrderByClientOidReq): Promise<CancelOrderByClientOidResp>;

    /**
     * batchCancelOrders Batch Cancel Orders
     * Description: Cancel a bach of orders by client defined orderId or system generated orderId
     * Documentation: https://www.kucoin.com/docs-new/api-3470241
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | FUTURES |
     * | API-CHANNEL         | PRIVATE |
     * | API-PERMISSION      | FUTURES |
     * | API-RATE-LIMIT-POOL | FUTURES |
     * | API-RATE-LIMIT      | 20      |
     * +---------------------+---------+
     */
    batchCancelOrders(req: BatchCancelOrdersReq): Promise<BatchCancelOrdersResp>;

    /**
     * cancelAllOrdersV3 Cancel All Orders
     * Description: Cancel all open orders (excluding stop orders). The response is a list of orderIDs of the canceled orders.
     * Documentation: https://www.kucoin.com/docs-new/api-3470242
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | FUTURES |
     * | API-CHANNEL         | PRIVATE |
     * | API-PERMISSION      | FUTURES |
     * | API-RATE-LIMIT-POOL | FUTURES |
     * | API-RATE-LIMIT      | 10      |
     * +---------------------+---------+
     */
    cancelAllOrdersV3(req: CancelAllOrdersV3Req): Promise<CancelAllOrdersV3Resp>;

    /**
     * cancelAllStopOrders Cancel All Stop orders
     * Description: Cancel all untriggered stop orders. The response is a list of orderIDs of the canceled stop orders. To cancel triggered stop orders, please use \&#39;Cancel Multiple Futures Limit orders\&#39;.
     * Documentation: https://www.kucoin.com/docs-new/api-3470243
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | FUTURES |
     * | API-CHANNEL         | PRIVATE |
     * | API-PERMISSION      | FUTURES |
     * | API-RATE-LIMIT-POOL | FUTURES |
     * | API-RATE-LIMIT      | 15      |
     * +---------------------+---------+
     */
    cancelAllStopOrders(req: CancelAllStopOrdersReq): Promise<CancelAllStopOrdersResp>;

    /**
     * getOrderByOrderId Get Order By OrderId
     * Description: Get a single order by order id (including a stop order).
     * Documentation: https://www.kucoin.com/docs-new/api-3470245
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | FUTURES |
     * | API-CHANNEL         | PRIVATE |
     * | API-PERMISSION      | GENERAL |
     * | API-RATE-LIMIT-POOL | FUTURES |
     * | API-RATE-LIMIT      | 5       |
     * +---------------------+---------+
     */
    getOrderByOrderId(req: GetOrderByOrderIdReq): Promise<GetOrderByOrderIdResp>;

    /**
     * getOrderByClientOid Get Order By ClientOid
     * Description: Get a single order by client order id (including a stop order).
     * Documentation: https://www.kucoin.com/docs-new/api-3470352
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | FUTURES |
     * | API-CHANNEL         | PRIVATE |
     * | API-PERMISSION      | GENERAL |
     * | API-RATE-LIMIT-POOL | FUTURES |
     * | API-RATE-LIMIT      | 5       |
     * +---------------------+---------+
     */
    getOrderByClientOid(req: GetOrderByClientOidReq): Promise<GetOrderByClientOidResp>;

    /**
     * getOrderList Get Order List
     * Description: List your current orders.
     * Documentation: https://www.kucoin.com/docs-new/api-3470244
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | FUTURES |
     * | API-CHANNEL         | PRIVATE |
     * | API-PERMISSION      | FUTURES |
     * | API-RATE-LIMIT-POOL | FUTURES |
     * | API-RATE-LIMIT      | 2       |
     * +---------------------+---------+
     */
    getOrderList(req: GetOrderListReq): Promise<GetOrderListResp>;

    /**
     * getRecentClosedOrders Get Recent Closed Orders
     * Description: Get a list of recent 1000 closed orders in the last 24 hours.  If you need to get your recent traded order history with low latency, you may query this endpoint.
     * Documentation: https://www.kucoin.com/docs-new/api-3470246
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | FUTURES |
     * | API-CHANNEL         | PRIVATE |
     * | API-PERMISSION      | FUTURES |
     * | API-RATE-LIMIT-POOL | FUTURES |
     * | API-RATE-LIMIT      | 5       |
     * +---------------------+---------+
     */
    getRecentClosedOrders(req: GetRecentClosedOrdersReq): Promise<GetRecentClosedOrdersResp>;

    /**
     * getStopOrderList Get Stop Order List
     * Description: Get the un-triggered stop orders list. Stop orders that have been triggered can be queried through the general order interface
     * Documentation: https://www.kucoin.com/docs-new/api-3470247
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | FUTURES |
     * | API-CHANNEL         | PRIVATE |
     * | API-PERMISSION      | FUTURES |
     * | API-RATE-LIMIT-POOL | FUTURES |
     * | API-RATE-LIMIT      | 6       |
     * +---------------------+---------+
     */
    getStopOrderList(req: GetStopOrderListReq): Promise<GetStopOrderListResp>;

    /**
     * getOpenOrderValue Get Open Order Value
     * Description: You can query this endpoint to get the the total number and value of the all your active orders.
     * Documentation: https://www.kucoin.com/docs-new/api-3470250
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | FUTURES |
     * | API-CHANNEL         | PRIVATE |
     * | API-PERMISSION      | FUTURES |
     * | API-RATE-LIMIT-POOL | FUTURES |
     * | API-RATE-LIMIT      | 10      |
     * +---------------------+---------+
     */
    getOpenOrderValue(req: GetOpenOrderValueReq): Promise<GetOpenOrderValueResp>;

    /**
     * getRecentTradeHistory Get Recent Trade History
     * Description: Get a list of recent 1000 fills in the last 24 hours. If you need to get your recent traded order history with low latency, you may query this endpoint.
     * Documentation: https://www.kucoin.com/docs-new/api-3470249
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | FUTURES |
     * | API-CHANNEL         | PRIVATE |
     * | API-PERMISSION      | FUTURES |
     * | API-RATE-LIMIT-POOL | FUTURES |
     * | API-RATE-LIMIT      | 3       |
     * +---------------------+---------+
     */
    getRecentTradeHistory(req: GetRecentTradeHistoryReq): Promise<GetRecentTradeHistoryResp>;

    /**
     * getTradeHistory Get Trade History
     * Description: Get a list of recent fills. If you need to get your recent trade history with low latency, please query endpoint Get List of Orders Completed in 24h. The requested data is not real-time.
     * Documentation: https://www.kucoin.com/docs-new/api-3470248
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | FUTURES |
     * | API-CHANNEL         | PRIVATE |
     * | API-PERMISSION      | FUTURES |
     * | API-RATE-LIMIT-POOL | FUTURES |
     * | API-RATE-LIMIT      | 5       |
     * +---------------------+---------+
     */
    getTradeHistory(req: GetTradeHistoryReq): Promise<GetTradeHistoryResp>;

    /**
     * @deprecated
     * cancelAllOrdersV1 Cancel All Orders - V1
     * Description: Cancel all open orders (excluding stop orders). The response is a list of orderIDs of the canceled orders.
     * Documentation: https://www.kucoin.com/docs-new/api-3470362
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | FUTURES |
     * | API-CHANNEL         | PRIVATE |
     * | API-PERMISSION      | FUTURES |
     * | API-RATE-LIMIT-POOL | FUTURES |
     * | API-RATE-LIMIT      | 200     |
     * +---------------------+---------+
     */
    cancelAllOrdersV1(req: CancelAllOrdersV1Req): Promise<CancelAllOrdersV1Resp>;
}

export class OrderAPIImpl implements OrderAPI {
    constructor(private transport: Transport) {}

    addOrder(req: AddOrderReq): Promise<AddOrderResp> {
        return this.transport.call(
            'futures',
            false,
            'POST',
            '/api/v1/orders',
            req,
            AddOrderResp,
            false,
        );
    }

    addOrderTest(req: AddOrderTestReq): Promise<AddOrderTestResp> {
        return this.transport.call(
            'futures',
            false,
            'POST',
            '/api/v1/orders/test',
            req,
            AddOrderTestResp,
            false,
        );
    }

    batchAddOrders(req: BatchAddOrdersReq): Promise<BatchAddOrdersResp> {
        return this.transport.call(
            'futures',
            false,
            'POST',
            '/api/v1/orders/multi',
            req,
            BatchAddOrdersResp,
            false,
        );
    }

    addTPSLOrder(req: AddTPSLOrderReq): Promise<AddTPSLOrderResp> {
        return this.transport.call(
            'futures',
            false,
            'POST',
            '/api/v1/st-orders',
            req,
            AddTPSLOrderResp,
            false,
        );
    }

    cancelOrderById(req: CancelOrderByIdReq): Promise<CancelOrderByIdResp> {
        return this.transport.call(
            'futures',
            false,
            'DELETE',
            '/api/v1/orders/{orderId}',
            req,
            CancelOrderByIdResp,
            false,
        );
    }

    cancelOrderByClientOid(req: CancelOrderByClientOidReq): Promise<CancelOrderByClientOidResp> {
        return this.transport.call(
            'futures',
            false,
            'DELETE',
            '/api/v1/orders/client-order/{clientOid}',
            req,
            CancelOrderByClientOidResp,
            false,
        );
    }

    batchCancelOrders(req: BatchCancelOrdersReq): Promise<BatchCancelOrdersResp> {
        return this.transport.call(
            'futures',
            false,
            'DELETE',
            '/api/v1/orders/multi-cancel',
            req,
            BatchCancelOrdersResp,
            true,
        );
    }

    cancelAllOrdersV3(req: CancelAllOrdersV3Req): Promise<CancelAllOrdersV3Resp> {
        return this.transport.call(
            'futures',
            false,
            'DELETE',
            '/api/v3/orders',
            req,
            CancelAllOrdersV3Resp,
            false,
        );
    }

    cancelAllStopOrders(req: CancelAllStopOrdersReq): Promise<CancelAllStopOrdersResp> {
        return this.transport.call(
            'futures',
            false,
            'DELETE',
            '/api/v1/stopOrders',
            req,
            CancelAllStopOrdersResp,
            false,
        );
    }

    getOrderByOrderId(req: GetOrderByOrderIdReq): Promise<GetOrderByOrderIdResp> {
        return this.transport.call(
            'futures',
            false,
            'GET',
            '/api/v1/orders/{order-id}',
            req,
            GetOrderByOrderIdResp,
            false,
        );
    }

    getOrderByClientOid(req: GetOrderByClientOidReq): Promise<GetOrderByClientOidResp> {
        return this.transport.call(
            'futures',
            false,
            'GET',
            '/api/v1/orders/byClientOid',
            req,
            GetOrderByClientOidResp,
            false,
        );
    }

    getOrderList(req: GetOrderListReq): Promise<GetOrderListResp> {
        return this.transport.call(
            'futures',
            false,
            'GET',
            '/api/v1/orders',
            req,
            GetOrderListResp,
            false,
        );
    }

    getRecentClosedOrders(req: GetRecentClosedOrdersReq): Promise<GetRecentClosedOrdersResp> {
        return this.transport.call(
            'futures',
            false,
            'GET',
            '/api/v1/recentDoneOrders',
            req,
            GetRecentClosedOrdersResp,
            false,
        );
    }

    getStopOrderList(req: GetStopOrderListReq): Promise<GetStopOrderListResp> {
        return this.transport.call(
            'futures',
            false,
            'GET',
            '/api/v1/stopOrders',
            req,
            GetStopOrderListResp,
            false,
        );
    }

    getOpenOrderValue(req: GetOpenOrderValueReq): Promise<GetOpenOrderValueResp> {
        return this.transport.call(
            'futures',
            false,
            'GET',
            '/api/v1/openOrderStatistics',
            req,
            GetOpenOrderValueResp,
            false,
        );
    }

    getRecentTradeHistory(req: GetRecentTradeHistoryReq): Promise<GetRecentTradeHistoryResp> {
        return this.transport.call(
            'futures',
            false,
            'GET',
            '/api/v1/recentFills',
            req,
            GetRecentTradeHistoryResp,
            false,
        );
    }

    getTradeHistory(req: GetTradeHistoryReq): Promise<GetTradeHistoryResp> {
        return this.transport.call(
            'futures',
            false,
            'GET',
            '/api/v1/fills',
            req,
            GetTradeHistoryResp,
            false,
        );
    }

    cancelAllOrdersV1(req: CancelAllOrdersV1Req): Promise<CancelAllOrdersV1Resp> {
        return this.transport.call(
            'futures',
            false,
            'DELETE',
            '/api/v1/orders',
            req,
            CancelAllOrdersV1Resp,
            false,
        );
    }
}

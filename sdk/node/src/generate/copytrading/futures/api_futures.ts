// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { Transport } from '@internal/interfaces/transport';
import { CancelOrderByClientOidReq } from './model_cancel_order_by_client_oid_req';
import { RemoveIsolatedMarginReq } from './model_remove_isolated_margin_req';
import { CancelOrderByIdResp } from './model_cancel_order_by_id_resp';
import { AddTPSLOrderReq } from './model_add_tpsl_order_req';
import { AddIsolatedMarginReq } from './model_add_isolated_margin_req';
import { ModifyAutoDepositStatusReq } from './model_modify_auto_deposit_status_req';
import { RemoveIsolatedMarginResp } from './model_remove_isolated_margin_resp';
import { GetMaxOpenSizeReq } from './model_get_max_open_size_req';
import { AddOrderTestReq } from './model_add_order_test_req';
import { AddOrderReq } from './model_add_order_req';
import { GetMaxWithdrawMarginResp } from './model_get_max_withdraw_margin_resp';
import { AddIsolatedMarginResp } from './model_add_isolated_margin_resp';
import { ModifyAutoDepositStatusResp } from './model_modify_auto_deposit_status_resp';
import { CancelOrderByClientOidResp } from './model_cancel_order_by_client_oid_resp';
import { AddOrderTestResp } from './model_add_order_test_resp';
import { GetMaxOpenSizeResp } from './model_get_max_open_size_resp';
import { AddOrderResp } from './model_add_order_resp';
import { ModifyIsolatedMarginRiskLimtResp } from './model_modify_isolated_margin_risk_limt_resp';
import { ModifyIsolatedMarginRiskLimtReq } from './model_modify_isolated_margin_risk_limt_req';
import { AddTPSLOrderResp } from './model_add_tpsl_order_resp';
import { CancelOrderByIdReq } from './model_cancel_order_by_id_req';
import { GetMaxWithdrawMarginReq } from './model_get_max_withdraw_margin_req';

export interface FuturesAPI {
    /**
     * addOrder Add Order
     * Description: Place order to the futures trading system, you can place two major types of orders: limit and market. Orders can only be placed if your account has sufficient funds. Once an order is placed, your funds will be put on hold for the duration of the order. The amount of funds on hold depends on the order type and parameters specified.
     * Documentation: https://www.kucoin.com/docs-new/api-3470363
     * +---------------------+------------------+
     * | Extra API Info      | Value            |
     * +---------------------+------------------+
     * | API-DOMAIN          | FUTURES          |
     * | API-CHANNEL         | PRIVATE          |
     * | API-PERMISSION      | LEADTRADEFUTURES |
     * | API-RATE-LIMIT-POOL | COPYTRADING      |
     * | API-RATE-LIMIT      | 2                |
     * +---------------------+------------------+
     */
    addOrder(req: AddOrderReq): Promise<AddOrderResp>;

    /**
     * addOrderTest Add Order Test
     * Description: Place order to the futures trading system just for validation
     * Documentation: https://www.kucoin.com/docs-new/api-3470618
     * +---------------------+-------------+
     * | Extra API Info      | Value       |
     * +---------------------+-------------+
     * | API-DOMAIN          | FUTURES     |
     * | API-CHANNEL         | PRIVATE     |
     * | API-PERMISSION      | FUTURES     |
     * | API-RATE-LIMIT-POOL | COPYTRADING |
     * | API-RATE-LIMIT      | 2           |
     * +---------------------+-------------+
     */
    addOrderTest(req: AddOrderTestReq): Promise<AddOrderTestResp>;

    /**
     * addTPSLOrder Add Take Profit And Stop Loss Order
     * Description: Place take profit and stop loss order supports both take-profit and stop-loss functions, and other functions are exactly the same as the place order interface.
     * Documentation: https://www.kucoin.com/docs-new/api-3470619
     * +---------------------+-------------+
     * | Extra API Info      | Value       |
     * +---------------------+-------------+
     * | API-DOMAIN          | FUTURES     |
     * | API-CHANNEL         | PRIVATE     |
     * | API-PERMISSION      | FUTURES     |
     * | API-RATE-LIMIT-POOL | COPYTRADING |
     * | API-RATE-LIMIT      | 2           |
     * +---------------------+-------------+
     */
    addTPSLOrder(req: AddTPSLOrderReq): Promise<AddTPSLOrderResp>;

    /**
     * cancelOrderById Cancel Order By OrderId
     * Description: Cancel order by system generated orderId.
     * Documentation: https://www.kucoin.com/docs-new/api-3470620
     * +---------------------+-------------+
     * | Extra API Info      | Value       |
     * +---------------------+-------------+
     * | API-DOMAIN          | FUTURES     |
     * | API-CHANNEL         | PRIVATE     |
     * | API-PERMISSION      | FUTURES     |
     * | API-RATE-LIMIT-POOL | COPYTRADING |
     * | API-RATE-LIMIT      | 1           |
     * +---------------------+-------------+
     */
    cancelOrderById(req: CancelOrderByIdReq): Promise<CancelOrderByIdResp>;

    /**
     * cancelOrderByClientOid Cancel Order By ClientOid
     * Description: Cancel order by client defined orderId.
     * Documentation: https://www.kucoin.com/docs-new/api-3470621
     * +---------------------+-------------+
     * | Extra API Info      | Value       |
     * +---------------------+-------------+
     * | API-DOMAIN          | FUTURES     |
     * | API-CHANNEL         | PRIVATE     |
     * | API-PERMISSION      | FUTURES     |
     * | API-RATE-LIMIT-POOL | COPYTRADING |
     * | API-RATE-LIMIT      | 1           |
     * +---------------------+-------------+
     */
    cancelOrderByClientOid(req: CancelOrderByClientOidReq): Promise<CancelOrderByClientOidResp>;

    /**
     * getMaxOpenSize Get Max Open Size
     * Description: Get Maximum Open Position Size.
     * Documentation: https://www.kucoin.com/docs-new/api-3470612
     * +---------------------+-------------+
     * | Extra API Info      | Value       |
     * +---------------------+-------------+
     * | API-DOMAIN          | FUTURES     |
     * | API-CHANNEL         | PRIVATE     |
     * | API-PERMISSION      | FUTURES     |
     * | API-RATE-LIMIT-POOL | COPYTRADING |
     * | API-RATE-LIMIT      | 2           |
     * +---------------------+-------------+
     */
    getMaxOpenSize(req: GetMaxOpenSizeReq): Promise<GetMaxOpenSizeResp>;

    /**
     * getMaxWithdrawMargin Get Max Withdraw Margin
     * Description: This interface can query the maximum amount of margin that the current position supports withdrawal.
     * Documentation: https://www.kucoin.com/docs-new/api-3470616
     * +---------------------+-------------+
     * | Extra API Info      | Value       |
     * +---------------------+-------------+
     * | API-DOMAIN          | FUTURES     |
     * | API-CHANNEL         | PRIVATE     |
     * | API-PERMISSION      | FUTURES     |
     * | API-RATE-LIMIT-POOL | COPYTRADING |
     * | API-RATE-LIMIT      | 10          |
     * +---------------------+-------------+
     */
    getMaxWithdrawMargin(req: GetMaxWithdrawMarginReq): Promise<GetMaxWithdrawMarginResp>;

    /**
     * addIsolatedMargin Add Isolated Margin
     * Description: Add Isolated Margin Manually.
     * Documentation: https://www.kucoin.com/docs-new/api-3470614
     * +---------------------+-------------+
     * | Extra API Info      | Value       |
     * +---------------------+-------------+
     * | API-DOMAIN          | FUTURES     |
     * | API-CHANNEL         | PRIVATE     |
     * | API-PERMISSION      | FUTURES     |
     * | API-RATE-LIMIT-POOL | COPYTRADING |
     * | API-RATE-LIMIT      | 4           |
     * +---------------------+-------------+
     */
    addIsolatedMargin(req: AddIsolatedMarginReq): Promise<AddIsolatedMarginResp>;

    /**
     * removeIsolatedMargin Remove Isolated Margin
     * Description: Remove Isolated Margin Manually.
     * Documentation: https://www.kucoin.com/docs-new/api-3470615
     * +---------------------+-------------+
     * | Extra API Info      | Value       |
     * +---------------------+-------------+
     * | API-DOMAIN          | FUTURES     |
     * | API-CHANNEL         | PRIVATE     |
     * | API-PERMISSION      | FUTURES     |
     * | API-RATE-LIMIT-POOL | COPYTRADING |
     * | API-RATE-LIMIT      | 10          |
     * +---------------------+-------------+
     */
    removeIsolatedMargin(req: RemoveIsolatedMarginReq): Promise<RemoveIsolatedMarginResp>;

    /**
     * modifyIsolatedMarginRiskLimt Modify Isolated Margin Risk Limit
     * Description: This interface can be used to obtain information about risk limit level of a specific contract(Only valid for isolated Margin).
     * Documentation: https://www.kucoin.com/docs-new/api-3470613
     * +---------------------+-------------+
     * | Extra API Info      | Value       |
     * +---------------------+-------------+
     * | API-DOMAIN          | FUTURES     |
     * | API-CHANNEL         | PRIVATE     |
     * | API-PERMISSION      | FUTURES     |
     * | API-RATE-LIMIT-POOL | COPYTRADING |
     * | API-RATE-LIMIT      | 4           |
     * +---------------------+-------------+
     */
    modifyIsolatedMarginRiskLimt(
        req: ModifyIsolatedMarginRiskLimtReq,
    ): Promise<ModifyIsolatedMarginRiskLimtResp>;

    /**
     * modifyAutoDepositStatus Modify Isolated Margin Auto-Deposit Status
     * Description: This endpoint is only applicable to isolated margin and is no longer recommended. It is recommended to use cross margin instead.
     * Documentation: https://www.kucoin.com/docs-new/api-3470617
     * +---------------------+-------------+
     * | Extra API Info      | Value       |
     * +---------------------+-------------+
     * | API-DOMAIN          | FUTURES     |
     * | API-CHANNEL         | PRIVATE     |
     * | API-PERMISSION      | FUTURES     |
     * | API-RATE-LIMIT-POOL | COPYTRADING |
     * | API-RATE-LIMIT      | 4           |
     * +---------------------+-------------+
     */
    modifyAutoDepositStatus(req: ModifyAutoDepositStatusReq): Promise<ModifyAutoDepositStatusResp>;
}

export class FuturesAPIImpl implements FuturesAPI {
    constructor(private transport: Transport) {}

    addOrder(req: AddOrderReq): Promise<AddOrderResp> {
        return this.transport.call(
            'futures',
            false,
            'POST',
            '/api/v1/copy-trade/futures/orders',
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
            '/api/v1/copy-trade/futures/orders/test',
            req,
            AddOrderTestResp,
            false,
        );
    }

    addTPSLOrder(req: AddTPSLOrderReq): Promise<AddTPSLOrderResp> {
        return this.transport.call(
            'futures',
            false,
            'POST',
            '/api/v1/copy-trade/futures/st-orders',
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
            '/api/v1/copy-trade/futures/orders',
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
            '/api/v1/copy-trade/futures/orders/client-order',
            req,
            CancelOrderByClientOidResp,
            false,
        );
    }

    getMaxOpenSize(req: GetMaxOpenSizeReq): Promise<GetMaxOpenSizeResp> {
        return this.transport.call(
            'futures',
            false,
            'GET',
            '/api/v1/copy-trade/futures/get-max-open-size',
            req,
            GetMaxOpenSizeResp,
            false,
        );
    }

    getMaxWithdrawMargin(req: GetMaxWithdrawMarginReq): Promise<GetMaxWithdrawMarginResp> {
        return this.transport.call(
            'futures',
            false,
            'GET',
            '/api/v1/copy-trade/futures/position/margin/max-withdraw-margin',
            req,
            GetMaxWithdrawMarginResp,
            false,
        );
    }

    addIsolatedMargin(req: AddIsolatedMarginReq): Promise<AddIsolatedMarginResp> {
        return this.transport.call(
            'futures',
            false,
            'POST',
            '/api/v1/copy-trade/futures/position/margin/deposit-margin',
            req,
            AddIsolatedMarginResp,
            false,
        );
    }

    removeIsolatedMargin(req: RemoveIsolatedMarginReq): Promise<RemoveIsolatedMarginResp> {
        return this.transport.call(
            'futures',
            false,
            'POST',
            '/api/v1/copy-trade/futures/position/margin/withdraw-margin',
            req,
            RemoveIsolatedMarginResp,
            false,
        );
    }

    modifyIsolatedMarginRiskLimt(
        req: ModifyIsolatedMarginRiskLimtReq,
    ): Promise<ModifyIsolatedMarginRiskLimtResp> {
        return this.transport.call(
            'futures',
            false,
            'POST',
            '/api/v1/copy-trade/futures/position/risk-limit-level/change',
            req,
            ModifyIsolatedMarginRiskLimtResp,
            false,
        );
    }

    modifyAutoDepositStatus(req: ModifyAutoDepositStatusReq): Promise<ModifyAutoDepositStatusResp> {
        return this.transport.call(
            'futures',
            false,
            'POST',
            '/api/v1/copy-trade/futures/position/margin/auto-deposit-status',
            req,
            ModifyAutoDepositStatusResp,
            false,
        );
    }
}

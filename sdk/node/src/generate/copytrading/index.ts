import * as FUTURES from './futures';
export const Copytrading = {
    Futures: FUTURES,
};
export namespace Copytrading {
    export type FuturesAPI = FUTURES.FuturesAPI;
    export namespace Futures {
        export type AddIsolatedMarginReq = FUTURES.AddIsolatedMarginReq;
        export type AddIsolatedMarginResp = FUTURES.AddIsolatedMarginResp;
        export type AddOrderReq = FUTURES.AddOrderReq;
        export type AddOrderResp = FUTURES.AddOrderResp;
        export type AddOrderTestReq = FUTURES.AddOrderTestReq;
        export type AddOrderTestResp = FUTURES.AddOrderTestResp;
        export type AddTPSLOrderReq = FUTURES.AddTPSLOrderReq;
        export type AddTPSLOrderResp = FUTURES.AddTPSLOrderResp;
        export type CancelOrderByClientOidReq = FUTURES.CancelOrderByClientOidReq;
        export type CancelOrderByClientOidResp = FUTURES.CancelOrderByClientOidResp;
        export type CancelOrderByIdReq = FUTURES.CancelOrderByIdReq;
        export type CancelOrderByIdResp = FUTURES.CancelOrderByIdResp;
        export type GetMaxOpenSizeReq = FUTURES.GetMaxOpenSizeReq;
        export type GetMaxOpenSizeResp = FUTURES.GetMaxOpenSizeResp;
        export type GetMaxWithdrawMarginReq = FUTURES.GetMaxWithdrawMarginReq;
        export type GetMaxWithdrawMarginResp = FUTURES.GetMaxWithdrawMarginResp;
        export type ModifyAutoDepositStatusReq = FUTURES.ModifyAutoDepositStatusReq;
        export type ModifyAutoDepositStatusResp = FUTURES.ModifyAutoDepositStatusResp;
        export type ModifyIsolatedMarginRiskLimtReq = FUTURES.ModifyIsolatedMarginRiskLimtReq;
        export type ModifyIsolatedMarginRiskLimtResp = FUTURES.ModifyIsolatedMarginRiskLimtResp;
        export type RemoveIsolatedMarginReq = FUTURES.RemoveIsolatedMarginReq;
        export type RemoveIsolatedMarginResp = FUTURES.RemoveIsolatedMarginResp;
    }
}

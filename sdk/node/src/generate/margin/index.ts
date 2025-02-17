import * as ORDER from './order';
import * as DEBIT from './debit';
import * as CREDIT from './credit';
import * as MARKET from './market';
import * as RISKLIMIT from './risklimit';
import * as MARGINPRIVATE from './marginprivate';
import * as MARGINPUBLIC from './marginpublic';
export const Margin = {
    Order: ORDER,
    Debit: DEBIT,
    Credit: CREDIT,
    Market: MARKET,
    RiskLimit: RISKLIMIT,
    MarginPrivate: MARGINPRIVATE,
    MarginPublic: MARGINPUBLIC,
};
export namespace Margin {
    export type OrderAPI = ORDER.OrderAPI;
    export type DebitAPI = DEBIT.DebitAPI;
    export type CreditAPI = CREDIT.CreditAPI;
    export type MarketAPI = MARKET.MarketAPI;
    export type RiskLimitAPI = RISKLIMIT.RiskLimitAPI;
    export type MarginPrivateWS = MARGINPRIVATE.MarginPrivateWS;
    export type MarginPublicWS = MARGINPUBLIC.MarginPublicWS;
    export namespace Order {
        export type AddOrderReq = ORDER.AddOrderReq;
        export type AddOrderResp = ORDER.AddOrderResp;
        export type AddOrderTestReq = ORDER.AddOrderTestReq;
        export type AddOrderTestResp = ORDER.AddOrderTestResp;
        export type AddOrderTestV1Req = ORDER.AddOrderTestV1Req;
        export type AddOrderTestV1Resp = ORDER.AddOrderTestV1Resp;
        export type AddOrderV1Req = ORDER.AddOrderV1Req;
        export type AddOrderV1Resp = ORDER.AddOrderV1Resp;
        export type CancelAllOrdersBySymbolReq = ORDER.CancelAllOrdersBySymbolReq;
        export type CancelAllOrdersBySymbolResp = ORDER.CancelAllOrdersBySymbolResp;
        export type CancelOrderByClientOidReq = ORDER.CancelOrderByClientOidReq;
        export type CancelOrderByClientOidResp = ORDER.CancelOrderByClientOidResp;
        export type CancelOrderByOrderIdReq = ORDER.CancelOrderByOrderIdReq;
        export type CancelOrderByOrderIdResp = ORDER.CancelOrderByOrderIdResp;
        export type GetClosedOrdersItems = ORDER.GetClosedOrdersItems;
        export type GetClosedOrdersReq = ORDER.GetClosedOrdersReq;
        export type GetClosedOrdersResp = ORDER.GetClosedOrdersResp;
        export type GetOpenOrdersData = ORDER.GetOpenOrdersData;
        export type GetOpenOrdersReq = ORDER.GetOpenOrdersReq;
        export type GetOpenOrdersResp = ORDER.GetOpenOrdersResp;
        export type GetOrderByClientOidReq = ORDER.GetOrderByClientOidReq;
        export type GetOrderByClientOidResp = ORDER.GetOrderByClientOidResp;
        export type GetOrderByOrderIdReq = ORDER.GetOrderByOrderIdReq;
        export type GetOrderByOrderIdResp = ORDER.GetOrderByOrderIdResp;
        export type GetSymbolsWithOpenOrderReq = ORDER.GetSymbolsWithOpenOrderReq;
        export type GetSymbolsWithOpenOrderResp = ORDER.GetSymbolsWithOpenOrderResp;
        export type GetTradeHistoryItems = ORDER.GetTradeHistoryItems;
        export type GetTradeHistoryReq = ORDER.GetTradeHistoryReq;
        export type GetTradeHistoryResp = ORDER.GetTradeHistoryResp;
    }
    export namespace Credit {
        export type GetLoanMarketData = CREDIT.GetLoanMarketData;
        export type GetLoanMarketInterestRateData = CREDIT.GetLoanMarketInterestRateData;
        export type GetLoanMarketInterestRateReq = CREDIT.GetLoanMarketInterestRateReq;
        export type GetLoanMarketInterestRateResp = CREDIT.GetLoanMarketInterestRateResp;
        export type GetLoanMarketReq = CREDIT.GetLoanMarketReq;
        export type GetLoanMarketResp = CREDIT.GetLoanMarketResp;
        export type GetPurchaseOrdersItems = CREDIT.GetPurchaseOrdersItems;
        export type GetPurchaseOrdersReq = CREDIT.GetPurchaseOrdersReq;
        export type GetPurchaseOrdersResp = CREDIT.GetPurchaseOrdersResp;
        export type GetRedeemOrdersItems = CREDIT.GetRedeemOrdersItems;
        export type GetRedeemOrdersReq = CREDIT.GetRedeemOrdersReq;
        export type GetRedeemOrdersResp = CREDIT.GetRedeemOrdersResp;
        export type ModifyPurchaseReq = CREDIT.ModifyPurchaseReq;
        export type ModifyPurchaseResp = CREDIT.ModifyPurchaseResp;
        export type PurchaseReq = CREDIT.PurchaseReq;
        export type PurchaseResp = CREDIT.PurchaseResp;
        export type RedeemReq = CREDIT.RedeemReq;
        export type RedeemResp = CREDIT.RedeemResp;
    }
    export namespace RiskLimit {
        export type GetMarginRiskLimitData = RISKLIMIT.GetMarginRiskLimitData;
        export type GetMarginRiskLimitReq = RISKLIMIT.GetMarginRiskLimitReq;
        export type GetMarginRiskLimitResp = RISKLIMIT.GetMarginRiskLimitResp;
    }
    export namespace Debit {
        export type BorrowReq = DEBIT.BorrowReq;
        export type BorrowResp = DEBIT.BorrowResp;
        export type GetBorrowHistoryItems = DEBIT.GetBorrowHistoryItems;
        export type GetBorrowHistoryReq = DEBIT.GetBorrowHistoryReq;
        export type GetBorrowHistoryResp = DEBIT.GetBorrowHistoryResp;
        export type GetInterestHistoryItems = DEBIT.GetInterestHistoryItems;
        export type GetInterestHistoryReq = DEBIT.GetInterestHistoryReq;
        export type GetInterestHistoryResp = DEBIT.GetInterestHistoryResp;
        export type GetRepayHistoryItems = DEBIT.GetRepayHistoryItems;
        export type GetRepayHistoryReq = DEBIT.GetRepayHistoryReq;
        export type GetRepayHistoryResp = DEBIT.GetRepayHistoryResp;
        export type ModifyLeverageReq = DEBIT.ModifyLeverageReq;
        export type ModifyLeverageResp = DEBIT.ModifyLeverageResp;
        export type RepayReq = DEBIT.RepayReq;
        export type RepayResp = DEBIT.RepayResp;
    }
    export namespace Market {
        export type GetCrossMarginSymbolsItems = MARKET.GetCrossMarginSymbolsItems;
        export type GetCrossMarginSymbolsReq = MARKET.GetCrossMarginSymbolsReq;
        export type GetCrossMarginSymbolsResp = MARKET.GetCrossMarginSymbolsResp;
        export type GetETFInfoData = MARKET.GetETFInfoData;
        export type GetETFInfoReq = MARKET.GetETFInfoReq;
        export type GetETFInfoResp = MARKET.GetETFInfoResp;
        export type GetIsolatedMarginSymbolsData = MARKET.GetIsolatedMarginSymbolsData;
        export type GetIsolatedMarginSymbolsResp = MARKET.GetIsolatedMarginSymbolsResp;
        export type GetMarginConfigResp = MARKET.GetMarginConfigResp;
        export type GetMarkPriceDetailReq = MARKET.GetMarkPriceDetailReq;
        export type GetMarkPriceDetailResp = MARKET.GetMarkPriceDetailResp;
        export type GetMarkPriceListData = MARKET.GetMarkPriceListData;
        export type GetMarkPriceListResp = MARKET.GetMarkPriceListResp;
    }
}

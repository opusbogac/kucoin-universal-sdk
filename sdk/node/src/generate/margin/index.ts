import * as ORDER from './order';
import * as DEBIT from './debit';
import * as CREDIT from './credit';
import * as MARKET from './market';
import * as RISKLIMIT from './risklimit';
import * as MARGINPRIVATE from './marginprivate';
import * as MARGINPUBLIC from './marginpublic';
export const Margin = {
    ...ORDER,
    ...DEBIT,
    ...CREDIT,
    ...MARKET,
    ...RISKLIMIT,
    ...MARGINPRIVATE,
    ...MARGINPUBLIC,
};
export namespace Margin {
    export type OrderAPI = ORDER.OrderAPI;
    export type DebitAPI = DEBIT.DebitAPI;
    export type CreditAPI = CREDIT.CreditAPI;
    export type MarketAPI = MARKET.MarketAPI;
    export type RiskLimitAPI = RISKLIMIT.RiskLimitAPI;
    export type MarginPrivateWS = MARGINPRIVATE.MarginPrivateWS;
    export type MarginPublicWS = MARGINPUBLIC.MarginPublicWS;
}

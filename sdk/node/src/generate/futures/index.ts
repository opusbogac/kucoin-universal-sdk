import * as ORDER from './order';
import * as POSITIONS from './positions';
import * as FUNDINGFEES from './fundingfees';
import * as MARKET from './market';
import * as FUTURESPRIVATE from './futuresprivate';
import * as FUTURESPUBLIC from './futurespublic';
export const Futures = {
    ...ORDER,
    ...POSITIONS,
    ...FUNDINGFEES,
    ...MARKET,
    ...FUTURESPRIVATE,
    ...FUTURESPUBLIC,
};
export namespace Futures {
    export type OrderAPI = ORDER.OrderAPI;
    export type PositionsAPI = POSITIONS.PositionsAPI;
    export type FundingFeesAPI = FUNDINGFEES.FundingFeesAPI;
    export type MarketAPI = MARKET.MarketAPI;
    export type FuturesPrivateWS = FUTURESPRIVATE.FuturesPrivateWS;
    export type FuturesPublicWS = FUTURESPUBLIC.FuturesPublicWS;
}

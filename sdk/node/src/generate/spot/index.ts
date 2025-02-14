import * as ORDER from './order';
import * as MARKET from './market';
import * as SPOTPRIVATE from './spotprivate';
import * as SPOTPUBLIC from './spotpublic';
export const Spot = {
    ...ORDER,
    ...MARKET,
    ...SPOTPRIVATE,
    ...SPOTPUBLIC,
};
export namespace Spot {
    export type OrderAPI = ORDER.OrderAPI;
    export type MarketAPI = MARKET.MarketAPI;
    export type SpotPrivateWS = SPOTPRIVATE.SpotPrivateWS;
    export type SpotPublicWS = SPOTPUBLIC.SpotPublicWS;
}

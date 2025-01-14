import * as ORDER from './order';
import * as POSITIONS from './positions';
import * as FUNDINGFEES from './fundingfees';
import * as MARKET from './market';
export const Futures = {
    ...ORDER,
    ...POSITIONS,
    ...FUNDINGFEES,
    ...MARKET,
};

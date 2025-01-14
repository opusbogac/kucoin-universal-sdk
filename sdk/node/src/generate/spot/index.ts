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

import * as ORDER from './order';
import * as DEBIT from './debit';
import * as CREDIT from './credit';
import * as MARKET from './market';
import * as RISKLIMIT from './risklimit';
export const Margin = {
    ...ORDER,
    ...DEBIT,
    ...CREDIT,
    ...MARKET,
    ...RISKLIMIT,
};

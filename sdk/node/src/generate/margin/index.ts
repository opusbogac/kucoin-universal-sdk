import * as ORDER from './order';
import * as DEBIT from './debit';
import * as CREDIT from './credit';
import * as MARKET from './market';
import * as RISKLIMIT from './risklimit';
const Margin = {
    ...ORDER,
    ...DEBIT,
    ...CREDIT,
    ...MARKET,
    ...RISKLIMIT,
};
export default Margin;

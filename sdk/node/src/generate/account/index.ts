import * as ACCOUNT from './account';
import * as DEPOSIT from './deposit';
import * as WITHDRAWAL from './withdrawal';
import * as FEE from './fee';
import * as SUBACCOUNT from './subaccount';
import * as TRANSFER from './transfer';
export const Account = {
    ...ACCOUNT,
    ...DEPOSIT,
    ...WITHDRAWAL,
    ...FEE,
    ...SUBACCOUNT,
    ...TRANSFER,
};

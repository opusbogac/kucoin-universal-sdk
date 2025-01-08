// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { Transport } from '@internal/interfaces/transport';
import { GetAccountResp } from './model_get_account_resp';

export interface AffiliateAPI {
    /**
     * getAccount Get Account
     * Description: This endpoint allows getting affiliate user rebate information.
     * Documentation: https://www.kucoin.com/docs-new/api-3470279
     * +---------------------+------------+
     * | Extra API Info      | Value      |
     * +---------------------+------------+
     * | API-DOMAIN          | SPOT       |
     * | API-CHANNEL         | PRIVATE    |
     * | API-PERMISSION      | GENERAL    |
     * | API-RATE-LIMIT-POOL | MANAGEMENT |
     * | API-RATE-LIMIT      | 30         |
     * +---------------------+------------+
     */
    getAccount(): Promise<GetAccountResp>;
}

export class AffiliateAPIImpl implements AffiliateAPI {
    constructor(private transport: Transport) {}

    getAccount(): Promise<GetAccountResp> {
        return this.transport.call(
            'spot',
            false,
            'GET',
            '/api/v2/affiliate/inviter/statistics',
            null,
            new GetAccountResp(),
            false,
        );
    }
}

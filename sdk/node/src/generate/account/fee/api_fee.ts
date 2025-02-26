// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { Transport } from '@internal/interfaces/transport';
import { GetSpotActualFeeResp } from './model_get_spot_actual_fee_resp';
import { GetFuturesActualFeeReq } from './model_get_futures_actual_fee_req';
import { GetSpotActualFeeReq } from './model_get_spot_actual_fee_req';
import { GetBasicFeeResp } from './model_get_basic_fee_resp';
import { GetFuturesActualFeeResp } from './model_get_futures_actual_fee_resp';
import { GetBasicFeeReq } from './model_get_basic_fee_req';

export interface FeeAPI {
    /**
     * getBasicFee Get Basic Fee - Spot/Margin
     * Description: This interface is for the spot/margin basic fee rate of users
     * Documentation: https://www.kucoin.com/docs-new/api-3470149
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | SPOT    |
     * | API-CHANNEL         | PRIVATE |
     * | API-PERMISSION      | GENERAL |
     * | API-RATE-LIMIT-POOL | SPOT    |
     * | API-RATE-LIMIT      | 3       |
     * +---------------------+---------+
     */
    getBasicFee(req: GetBasicFeeReq): Promise<GetBasicFeeResp>;

    /**
     * getSpotActualFee Get Actual Fee - Spot/Margin
     * Description: This interface is for the actual fee rate of the trading pair. You can inquire about fee rates of 10 trading pairs each time at most. The fee rate of your sub-account is the same as that of the master account.
     * Documentation: https://www.kucoin.com/docs-new/api-3470150
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | SPOT    |
     * | API-CHANNEL         | PRIVATE |
     * | API-PERMISSION      | GENERAL |
     * | API-RATE-LIMIT-POOL | SPOT    |
     * | API-RATE-LIMIT      | 3       |
     * +---------------------+---------+
     */
    getSpotActualFee(req: GetSpotActualFeeReq): Promise<GetSpotActualFeeResp>;

    /**
     * getFuturesActualFee Get Actual Fee - Futures
     * Description: This interface is for the actual futures fee rate of the trading pair. The fee rate of your sub-account is the same as that of the master account.
     * Documentation: https://www.kucoin.com/docs-new/api-3470151
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | FUTURES |
     * | API-CHANNEL         | PRIVATE |
     * | API-PERMISSION      | GENERAL |
     * | API-RATE-LIMIT-POOL | FUTURES |
     * | API-RATE-LIMIT      | 3       |
     * +---------------------+---------+
     */
    getFuturesActualFee(req: GetFuturesActualFeeReq): Promise<GetFuturesActualFeeResp>;
}

export class FeeAPIImpl implements FeeAPI {
    constructor(private transport: Transport) {}

    getBasicFee(req: GetBasicFeeReq): Promise<GetBasicFeeResp> {
        return this.transport.call(
            'spot',
            false,
            'GET',
            '/api/v1/base-fee',
            req,
            GetBasicFeeResp,
            false,
        );
    }

    getSpotActualFee(req: GetSpotActualFeeReq): Promise<GetSpotActualFeeResp> {
        return this.transport.call(
            'spot',
            false,
            'GET',
            '/api/v1/trade-fees',
            req,
            GetSpotActualFeeResp,
            false,
        );
    }

    getFuturesActualFee(req: GetFuturesActualFeeReq): Promise<GetFuturesActualFeeResp> {
        return this.transport.call(
            'futures',
            false,
            'get',
            '/api/v1/trade-fees',
            req,
            GetFuturesActualFeeResp,
            false,
        );
    }
}

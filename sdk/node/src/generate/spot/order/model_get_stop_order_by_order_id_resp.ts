// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/serializable';

export class GetStopOrderByOrderIdResp implements Response<RestResponse> {
    /**
     * Order ID, the ID of an order.
     */
    id?: string;

    /**
     * Symbol name
     */
    symbol?: string;

    /**
     * User ID
     */
    userId?: string;

    /**
     * Order status, include NEW, TRIGGERED
     */
    status?: string;

    /**
     * Order type,limit, market, limit_stop or market_stop
     */
    type?: string;

    /**
     * transaction direction,include buy and sell
     */
    side?: string;

    /**
     * order price
     */
    price?: string;

    /**
     * order quantity
     */
    size?: string;

    /**
     * order funds
     */
    funds?: string;

    /**
     *
     */
    stp?: string;

    /**
     * time InForce,include GTC,GTT,IOC,FOK
     */
    timeInForce?: string;

    /**
     * cancel orders after n seconds，requires timeInForce to be GTT
     */
    cancelAfter?: number;

    /**
     * postOnly
     */
    postOnly?: boolean;

    /**
     * hidden order
     */
    hidden?: boolean;

    /**
     * Iceberg order
     */
    iceberg?: boolean;

    /**
     * displayed quantity for iceberg order
     */
    visibleSize?: string;

    /**
     * order source
     */
    channel?: string;

    /**
     * user-entered order unique mark
     */
    clientOid?: string;

    /**
     * Remarks at stop order creation
     */
    remark?: string;

    /**
     * tag order source
     */
    tags?: string;

    /**
     * domainId, e.g: kucoin
     */
    domainId?: string;

    /**
     * trade source: USER（Order by user）, MARGIN_SYSTEM（Order by margin system）
     */
    tradeSource?: string;

    /**
     * The type of trading : TRADE（Spot）, MARGIN_TRADE (Cross Margin), MARGIN_ISOLATED_TRADE (Isolated Margin).
     */
    tradeType?: string;

    /**
     * The currency of the fee
     */
    feeCurrency?: string;

    /**
     * Fee Rate of taker
     */
    takerFeeRate?: string;

    /**
     * Fee Rate of maker
     */
    makerFeeRate?: string;

    /**
     * order creation time
     */
    createdAt?: number;

    /**
     * Stop order type, include loss and entry
     */
    stop?: string;

    /**
     * The trigger time of the stop order
     */
    stopTriggerTime?: number;

    /**
     * stop price
     */
    stopPrice?: string;

    /**
     * Time of place a stop order, accurate to nanoseconds
     */
    orderTime?: number;

    private constructor() {}
    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    static fromJson(input: string): GetStopOrderByOrderIdResp {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): GetStopOrderByOrderIdResp {
        return plainToClassFromExist(new GetStopOrderByOrderIdResp(), jsonObject);
    }
}

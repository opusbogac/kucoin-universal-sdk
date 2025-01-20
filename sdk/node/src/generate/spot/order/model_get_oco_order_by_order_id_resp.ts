// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/serializable';

export class GetOcoOrderByOrderIdResp implements Response<RestResponse> {
    /**
     * symbol
     */
    symbol: string;

    /**
     * Client Order Id
     */
    clientOid: string;

    /**
     * The unique order id generated by the trading system,which can be used later for further actions such as canceling the order.
     */
    orderId: string;

    /**
     * Order placement time, milliseconds
     */
    orderTime: number;

    /**
     * Order status: NEW: New, DONE: Completed, TRIGGERED: Triggered, CANCELLED: Cancelled
     */
    status: GetOcoOrderByOrderIdResp.StatusEnum;

    private constructor() {
        // @ts-ignore
        this.symbol = null;
        // @ts-ignore
        this.clientOid = null;
        // @ts-ignore
        this.orderId = null;
        // @ts-ignore
        this.orderTime = null;
        // @ts-ignore
        this.status = null;
    }
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

    static fromJson(input: string): GetOcoOrderByOrderIdResp {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): GetOcoOrderByOrderIdResp {
        return plainToClassFromExist(new GetOcoOrderByOrderIdResp(), jsonObject);
    }
}

export namespace GetOcoOrderByOrderIdResp {
    export enum StatusEnum {
        /**
         * New
         */
        NEW = <any>'NEW',
        /**
         * Completed
         */
        DONE = <any>'DONE',
        /**
         * Triggered
         */
        TRIGGERED = <any>'TRIGGERED',
        /**
         * Cancelled
         */
        CANCELLED = <any>'CANCELLED',
    }
}

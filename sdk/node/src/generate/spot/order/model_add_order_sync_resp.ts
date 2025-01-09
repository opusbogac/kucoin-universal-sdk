// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';

export class AddOrderSyncResp implements Response<AddOrderSyncResp, RestResponse> {
    /**
     * The unique order id generated by the trading system,which can be used later for further actions such as canceling the order.
     */
    orderId?: string;
    /**
     * The user self-defined order id.
     */
    clientOid?: string;
    /**
     *
     */
    orderTime?: number;
    /**
     * original order size
     */
    originSize?: string;
    /**
     * deal size
     */
    dealSize?: string;
    /**
     * remain size
     */
    remainSize?: string;
    /**
     * Cumulative canceled size
     */
    canceledSize?: string;
    /**
     * Order Status. open：order is active; done：order has been completed
     */
    status?: AddOrderSyncResp.StatusEnum;
    /**
     *
     */
    matchTime?: number;
    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): AddOrderSyncResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(AddOrderSyncResp, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): AddOrderSyncResp {
        return plainToInstance(AddOrderSyncResp, jsonObject);
    }
}

export namespace AddOrderSyncResp {
    export enum StatusEnum {
        /**
         *
         */
        OPEN = <any>'open',
        /**
         *
         */
        DONE = <any>'done',
    }
}

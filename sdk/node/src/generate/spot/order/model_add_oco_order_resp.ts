// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/serializable';

export class AddOcoOrderResp implements Response<RestResponse> {
    /**
     * The unique order id generated by the trading system,which can be used later for further actions such as canceling the order.
     */
    orderId: string;

    private constructor() {
        // @ts-ignore
        this.orderId = null;
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

    static fromJson(input: string): AddOcoOrderResp {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): AddOcoOrderResp {
        return plainToClassFromExist(new AddOcoOrderResp(), jsonObject);
    }
}

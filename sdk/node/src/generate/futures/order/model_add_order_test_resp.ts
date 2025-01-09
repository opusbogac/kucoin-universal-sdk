// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';

export class AddOrderTestResp implements Response<AddOrderTestResp, RestResponse> {
    /**
     * The unique order id generated by the trading system,which can be used later for further actions such as canceling the order.
     */
    orderId?: string;
    /**
     * The user self-defined order id.
     */
    clientOid?: string;
    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): AddOrderTestResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(AddOrderTestResp, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): AddOrderTestResp {
        return plainToInstance(AddOrderTestResp, jsonObject);
    }
}

// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';

export class PurchaseResp implements Response<PurchaseResp, RestResponse> {
    /**
     * Purchase order id
     */
    orderNo?: string;

    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): PurchaseResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(PurchaseResp, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): PurchaseResp {
        return plainToInstance(PurchaseResp, jsonObject);
    }
}

// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';

export class RepayResp implements Response<RepayResp, RestResponse> {
    /**
     *
     */
    timestamp?: number;
    /**
     * Repay Order Id
     */
    orderNo?: string;
    /**
     * Actual repay amount
     */
    actualSize?: string;
    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): RepayResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(RepayResp, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): RepayResp {
        return plainToInstance(RepayResp, jsonObject);
    }
}

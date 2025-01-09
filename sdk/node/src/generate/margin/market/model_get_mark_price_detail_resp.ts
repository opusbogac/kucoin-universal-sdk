// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';

export class GetMarkPriceDetailResp implements Response<GetMarkPriceDetailResp, RestResponse> {
    /**
     * symbol
     */
    symbol?: string;
    /**
     * Timestamp (milliseconds)
     */
    timePoint?: number;
    /**
     * Mark price
     */
    value?: number;

    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): GetMarkPriceDetailResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetMarkPriceDetailResp, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetMarkPriceDetailResp {
        return plainToInstance(GetMarkPriceDetailResp, jsonObject);
    }
}

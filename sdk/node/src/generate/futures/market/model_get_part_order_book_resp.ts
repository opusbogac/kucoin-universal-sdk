// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';

export class GetPartOrderBookResp implements Response<GetPartOrderBookResp, RestResponse> {
    /**
     * Sequence number
     */
    sequence?: number;
    /**
     * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
     */
    symbol?: string;
    /**
     * bids, from high to low
     */
    bids?: Array<Array<number>>;
    /**
     * asks, from low to high
     */
    asks?: Array<Array<number>>;
    /**
     * Timestamp(nanosecond)
     */
    ts?: number;

    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): GetPartOrderBookResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetPartOrderBookResp, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetPartOrderBookResp {
        return plainToInstance(GetPartOrderBookResp, jsonObject);
    }
}

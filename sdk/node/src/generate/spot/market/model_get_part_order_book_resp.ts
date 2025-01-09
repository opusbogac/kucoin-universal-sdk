// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';

export class GetPartOrderBookResp implements Response<GetPartOrderBookResp, RestResponse> {
    /**
     * Timestamp(millisecond)
     */
    time?: number;
    /**
     * Sequence number
     */
    sequence?: string;
    /**
     * bids, from high to low
     */
    bids?: Array<Array<string>>;
    /**
     * asks, from low to high
     */
    asks?: Array<Array<string>>;

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

// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/serializable';

export class GetMarkPriceResp implements Response<RestResponse> {
    /**
     * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
     */
    symbol: string;

    /**
     * Granularity (milisecond)
     */
    granularity: number;

    /**
     * Time point (milisecond)
     */
    timePoint: number;

    /**
     * Mark price
     */
    value: number;

    /**
     * Index price
     */
    indexPrice: number;

    private constructor() {
        // @ts-ignore
        this.symbol = null;
        // @ts-ignore
        this.granularity = null;
        // @ts-ignore
        this.timePoint = null;
        // @ts-ignore
        this.value = null;
        // @ts-ignore
        this.indexPrice = null;
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

    static fromJson(input: string): GetMarkPriceResp {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): GetMarkPriceResp {
        return plainToClassFromExist(new GetMarkPriceResp(), jsonObject);
    }
}

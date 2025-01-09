// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';

export class GetMarginConfigResp implements Response<GetMarginConfigResp, RestResponse> {
    /**
     * Available currencies for margin trade
     */
    currencyList?: Array<string>;
    /**
     * Max leverage available
     */
    maxLeverage?: number;
    /**
     * The warning debt ratio of the forced liquidation
     */
    warningDebtRatio?: string;
    /**
     * The debt ratio of the forced liquidation
     */
    liqDebtRatio?: string;

    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): GetMarginConfigResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetMarginConfigResp, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetMarginConfigResp {
        return plainToInstance(GetMarginConfigResp, jsonObject);
    }
}

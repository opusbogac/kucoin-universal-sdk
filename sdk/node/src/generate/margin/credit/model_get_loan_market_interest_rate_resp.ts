// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { Type, instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { GetLoanMarketInterestRateData } from './model_get_loan_market_interest_rate_data';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/serializable';

export class GetLoanMarketInterestRateResp implements Response<RestResponse> {
    /**
     *
     */
    @Type(() => GetLoanMarketInterestRateData)
    data: Array<GetLoanMarketInterestRateData>;

    /**
     * Private constructor, please use the corresponding static methods to construct the object.
     */
    private constructor() {
        // @ts-ignore
        this.data = null;
    }
    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    /**
     * Convert the object to a JSON string.
     */
    toJson(): string {
        return JSON.stringify(instanceToPlain(this.data));
    }
    /**
     * Create an object from a JSON string.
     */
    static fromJson(input: string): GetLoanMarketInterestRateResp {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): GetLoanMarketInterestRateResp {
        return plainToClassFromExist(new GetLoanMarketInterestRateResp(), { data: jsonObject });
    }
}

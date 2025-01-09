// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { Type, instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { GetLoanMarketInterestRateData } from './model_get_loan_market_interest_rate_data';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';

export class GetLoanMarketInterestRateResp
    implements Response<GetLoanMarketInterestRateResp, RestResponse>
{
    /**
     *
     */
    @Type(() => GetLoanMarketInterestRateData)
    data?: Array<GetLoanMarketInterestRateData>;
    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): GetLoanMarketInterestRateResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetLoanMarketInterestRateResp, { data: jsonObject });
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this.data));
    }

    fromObject(jsonObject: Object): GetLoanMarketInterestRateResp {
        return plainToInstance(GetLoanMarketInterestRateResp, { data: jsonObject });
    }
}

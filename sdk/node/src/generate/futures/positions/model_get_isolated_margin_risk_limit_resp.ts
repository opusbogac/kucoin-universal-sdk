// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { Type, instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { GetIsolatedMarginRiskLimitData } from './model_get_isolated_margin_risk_limit_data';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';

export class GetIsolatedMarginRiskLimitResp
    implements Response<GetIsolatedMarginRiskLimitResp, RestResponse>
{
    /**
     *
     */
    @Type(() => GetIsolatedMarginRiskLimitData)
    data?: Array<GetIsolatedMarginRiskLimitData>;
    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): GetIsolatedMarginRiskLimitResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetIsolatedMarginRiskLimitResp, { data: jsonObject });
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this.data));
    }

    fromObject(jsonObject: Object): GetIsolatedMarginRiskLimitResp {
        return plainToInstance(GetIsolatedMarginRiskLimitResp, { data: jsonObject });
    }
}

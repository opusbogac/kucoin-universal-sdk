// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { GetPublicFundingHistoryData } from './model_get_public_funding_history_data';
import { Type, instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';

export class GetPublicFundingHistoryResp
    implements Response<GetPublicFundingHistoryResp, RestResponse>
{
    /**
     *
     */
    @Type(() => GetPublicFundingHistoryData)
    data?: Array<GetPublicFundingHistoryData>;
    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): GetPublicFundingHistoryResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetPublicFundingHistoryResp, { data: jsonObject });
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this.data));
    }

    fromObject(jsonObject: Object): GetPublicFundingHistoryResp {
        return plainToInstance(GetPublicFundingHistoryResp, { data: jsonObject });
    }
}

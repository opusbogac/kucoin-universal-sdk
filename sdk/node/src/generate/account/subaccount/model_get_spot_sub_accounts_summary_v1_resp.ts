// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { Type, instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { GetSpotSubAccountsSummaryV1Data } from './model_get_spot_sub_accounts_summary_v1_data';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';

export class GetSpotSubAccountsSummaryV1Resp
    implements Response<GetSpotSubAccountsSummaryV1Resp, RestResponse>
{
    /**
     *
     */
    @Type(() => GetSpotSubAccountsSummaryV1Data)
    data?: Array<GetSpotSubAccountsSummaryV1Data>;

    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): GetSpotSubAccountsSummaryV1Resp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetSpotSubAccountsSummaryV1Resp, { data: jsonObject });
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this.data));
    }

    fromObject(jsonObject: Object): GetSpotSubAccountsSummaryV1Resp {
        return plainToInstance(GetSpotSubAccountsSummaryV1Resp, { data: jsonObject });
    }
}

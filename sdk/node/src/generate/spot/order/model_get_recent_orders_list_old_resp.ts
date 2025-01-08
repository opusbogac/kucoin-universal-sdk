// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { Type, instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { GetRecentOrdersListOldData } from './model_get_recent_orders_list_old_data';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';
export class GetRecentOrdersListOldResp
    implements Response<GetRecentOrdersListOldResp, RestResponse>
{
    /**
     *
     */
    @Type(() => GetRecentOrdersListOldData)
    data?: Array<GetRecentOrdersListOldData>;
    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): GetRecentOrdersListOldResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetRecentOrdersListOldResp, { data: jsonObject });
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this.data));
    }

    fromObject(jsonObject: Object): GetRecentOrdersListOldResp {
        return plainToInstance(GetRecentOrdersListOldResp, { data: jsonObject });
    }
}

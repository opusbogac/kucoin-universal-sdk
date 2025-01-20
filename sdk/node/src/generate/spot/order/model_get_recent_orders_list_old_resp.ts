// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { Type, instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { GetRecentOrdersListOldData } from './model_get_recent_orders_list_old_data';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/serializable';

export class GetRecentOrdersListOldResp implements Response<RestResponse> {
    /**
     *
     */
    @Type(() => GetRecentOrdersListOldData)
    data: Array<GetRecentOrdersListOldData>;

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

    toJson(): string {
        return JSON.stringify(instanceToPlain(this.data));
    }

    static fromJson(input: string): GetRecentOrdersListOldResp {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): GetRecentOrdersListOldResp {
        return plainToClassFromExist(new GetRecentOrdersListOldResp(), { data: jsonObject });
    }
}

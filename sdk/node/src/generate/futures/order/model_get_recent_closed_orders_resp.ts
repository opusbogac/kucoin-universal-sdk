// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { Type, instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { GetRecentClosedOrdersData } from './model_get_recent_closed_orders_data';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/serializable';

export class GetRecentClosedOrdersResp implements Response<RestResponse> {
    /**
     *
     */
    @Type(() => GetRecentClosedOrdersData)
    data: Array<GetRecentClosedOrdersData>;

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
    static fromJson(input: string): GetRecentClosedOrdersResp {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): GetRecentClosedOrdersResp {
        return plainToClassFromExist(new GetRecentClosedOrdersResp(), { data: jsonObject });
    }
}

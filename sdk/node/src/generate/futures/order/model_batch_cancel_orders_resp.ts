// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { Type, instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { BatchCancelOrdersData } from './model_batch_cancel_orders_data';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/serializable';

export class BatchCancelOrdersResp implements Response<RestResponse> {
    /**
     *
     */
    @Type(() => BatchCancelOrdersData)
    data: Array<BatchCancelOrdersData>;

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

    static fromJson(input: string): BatchCancelOrdersResp {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): BatchCancelOrdersResp {
        return plainToClassFromExist(new BatchCancelOrdersResp(), { data: jsonObject });
    }
}

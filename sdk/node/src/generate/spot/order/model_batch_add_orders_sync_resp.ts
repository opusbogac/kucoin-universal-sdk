// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { Type, instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { BatchAddOrdersSyncData } from './model_batch_add_orders_sync_data';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';

export class BatchAddOrdersSyncResp implements Response<BatchAddOrdersSyncResp, RestResponse> {
    /**
     *
     */
    @Type(() => BatchAddOrdersSyncData)
    data?: Array<BatchAddOrdersSyncData>;
    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): BatchAddOrdersSyncResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(BatchAddOrdersSyncResp, { data: jsonObject });
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this.data));
    }

    fromObject(jsonObject: Object): BatchAddOrdersSyncResp {
        return plainToInstance(BatchAddOrdersSyncResp, { data: jsonObject });
    }
}

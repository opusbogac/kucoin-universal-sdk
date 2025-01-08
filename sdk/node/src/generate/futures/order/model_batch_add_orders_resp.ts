// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { Type, instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { BatchAddOrdersData } from './model_batch_add_orders_data';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';
export class BatchAddOrdersResp implements Response<BatchAddOrdersResp, RestResponse> {
    /**
     *
     */
    @Type(() => BatchAddOrdersData)
    data?: Array<BatchAddOrdersData>;
    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): BatchAddOrdersResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(BatchAddOrdersResp, { data: jsonObject });
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this.data));
    }

    fromObject(jsonObject: Object): BatchAddOrdersResp {
        return plainToInstance(BatchAddOrdersResp, { data: jsonObject });
    }
}

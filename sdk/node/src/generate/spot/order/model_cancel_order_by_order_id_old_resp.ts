// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';

export class CancelOrderByOrderIdOldResp
    implements Response<CancelOrderByOrderIdOldResp, RestResponse>
{
    /**
     *
     */
    cancelledOrderIds?: Array<string>;
    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): CancelOrderByOrderIdOldResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(CancelOrderByOrderIdOldResp, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): CancelOrderByOrderIdOldResp {
        return plainToInstance(CancelOrderByOrderIdOldResp, jsonObject);
    }
}

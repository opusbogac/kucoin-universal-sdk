// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';

export class CancelAllOrdersV1Resp implements Response<CancelAllOrdersV1Resp, RestResponse> {
    /**
     * Unique ID of the cancelled order
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

    fromJson(input: string): CancelAllOrdersV1Resp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(CancelAllOrdersV1Resp, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): CancelAllOrdersV1Resp {
        return plainToInstance(CancelAllOrdersV1Resp, jsonObject);
    }
}

// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';
export class InnerTransferResp implements Response<InnerTransferResp, RestResponse> {
    /**
     * Transfer order ID
     */
    orderId?: string;
    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): InnerTransferResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(InnerTransferResp, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): InnerTransferResp {
        return plainToInstance(InnerTransferResp, jsonObject);
    }
}

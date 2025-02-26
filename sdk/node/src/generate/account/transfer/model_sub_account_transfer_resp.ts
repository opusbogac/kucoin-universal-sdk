// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/serializable';

export class SubAccountTransferResp implements Response<RestResponse> {
    /**
     * Transfer order ID
     */
    orderId: string;

    /**
     * Private constructor, please use the corresponding static methods to construct the object.
     */
    private constructor() {
        // @ts-ignore
        this.orderId = null;
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
        return JSON.stringify(instanceToPlain(this));
    }
    /**
     * Create an object from a JSON string.
     */
    static fromJson(input: string): SubAccountTransferResp {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): SubAccountTransferResp {
        return plainToClassFromExist(new SubAccountTransferResp(), jsonObject);
    }
}

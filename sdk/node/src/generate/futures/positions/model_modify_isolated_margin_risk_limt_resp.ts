// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/serializable';

export class ModifyIsolatedMarginRiskLimtResp implements Response<RestResponse> {
    /**
     * To adjust the level will cancel the open order, the response can only indicate whether the submit of the adjustment request is successful or not.
     */
    data: boolean;

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
    static fromJson(input: string): ModifyIsolatedMarginRiskLimtResp {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): ModifyIsolatedMarginRiskLimtResp {
        return plainToClassFromExist(new ModifyIsolatedMarginRiskLimtResp(), { data: jsonObject });
    }
}

// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';
export class AddSubAccountResp implements Response<AddSubAccountResp, RestResponse> {
    /**
     * Sub-account UID
     */
    uid?: number;
    /**
     * Sub-account name
     */
    subName?: string;
    /**
     * Remarks
     */
    remarks?: string;
    /**
     * Permission
     */
    access?: string;
    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): AddSubAccountResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(AddSubAccountResp, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): AddSubAccountResp {
        return plainToInstance(AddSubAccountResp, jsonObject);
    }
}

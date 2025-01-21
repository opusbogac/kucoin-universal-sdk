// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/serializable';

export class GetApikeyInfoResp implements Response<RestResponse> {
    /**
     * Remarks
     */
    remark: string;

    /**
     * Apikey
     */
    apiKey: string;

    /**
     * API Version
     */
    apiVersion: number;

    /**
     * [Permissions](https://www.kucoin.com/docs-new/doc-338144),  possible values: General, Spot, Margin, Futures, InnerTransfer, Transfer, Earn
     */
    permission: string;

    /**
     * IP whitelist
     */
    ipWhitelist?: string;

    /**
     * Apikey create time
     */
    createdAt: number;

    /**
     * Account UID
     */
    uid: number;

    /**
     * Whether it is the master account.
     */
    isMaster: boolean;

    /**
     * Sub Name, There is no such param for the master account
     */
    subName?: string;

    /**
     * Private constructor, please use the corresponding static methods to construct the object.
     */
    private constructor() {
        // @ts-ignore
        this.remark = null;
        // @ts-ignore
        this.apiKey = null;
        // @ts-ignore
        this.apiVersion = null;
        // @ts-ignore
        this.permission = null;
        // @ts-ignore
        this.createdAt = null;
        // @ts-ignore
        this.uid = null;
        // @ts-ignore
        this.isMaster = null;
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
    static fromJson(input: string): GetApikeyInfoResp {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): GetApikeyInfoResp {
        return plainToClassFromExist(new GetApikeyInfoResp(), jsonObject);
    }
}

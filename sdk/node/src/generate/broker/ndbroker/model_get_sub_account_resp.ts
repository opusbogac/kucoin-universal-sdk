// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { GetSubAccountItems } from './model_get_sub_account_items';
import { Type, instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/serializable';

export class GetSubAccountResp implements Response<RestResponse> {
    /**
     * Current page
     */
    currentPage: number;

    /**
     * Page Size
     */
    pageSize: number;

    /**
     * Total Number
     */
    totalNum: number;

    /**
     * Total Page
     */
    totalPage: number;

    /**
     *
     */
    @Type(() => GetSubAccountItems)
    items: Array<GetSubAccountItems>;

    private constructor() {
        // @ts-ignore
        this.currentPage = null;
        // @ts-ignore
        this.pageSize = null;
        // @ts-ignore
        this.totalNum = null;
        // @ts-ignore
        this.totalPage = null;
        // @ts-ignore
        this.items = null;
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
        return JSON.stringify(instanceToPlain(this));
    }

    static fromJson(input: string): GetSubAccountResp {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): GetSubAccountResp {
        return plainToClassFromExist(new GetSubAccountResp(), jsonObject);
    }
}

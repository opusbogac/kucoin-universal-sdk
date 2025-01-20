// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { Type, instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { GetInterestHistoryItems } from './model_get_interest_history_items';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/serializable';

export class GetInterestHistoryResp implements Response<RestResponse> {
    /**
     *
     */
    timestamp: number;

    /**
     * current page
     */
    currentPage: number;

    /**
     * page size
     */
    pageSize: number;

    /**
     * total number
     */
    totalNum: number;

    /**
     * total page
     */
    totalPage: number;

    /**
     *
     */
    @Type(() => GetInterestHistoryItems)
    items: Array<GetInterestHistoryItems>;

    private constructor() {
        // @ts-ignore
        this.timestamp = null;
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

    static fromJson(input: string): GetInterestHistoryResp {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): GetInterestHistoryResp {
        return plainToClassFromExist(new GetInterestHistoryResp(), jsonObject);
    }
}

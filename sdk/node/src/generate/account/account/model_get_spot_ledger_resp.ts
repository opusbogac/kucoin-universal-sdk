// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { GetSpotLedgerItems } from './model_get_spot_ledger_items';
import { Type, instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/serializable';

export class GetSpotLedgerResp implements Response<RestResponse> {
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
    @Type(() => GetSpotLedgerItems)
    items: Array<GetSpotLedgerItems>;

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

    static fromJson(input: string): GetSpotLedgerResp {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): GetSpotLedgerResp {
        return plainToClassFromExist(new GetSpotLedgerResp(), jsonObject);
    }
}

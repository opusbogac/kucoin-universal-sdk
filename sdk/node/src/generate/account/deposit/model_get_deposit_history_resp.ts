// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { GetDepositHistoryItems } from './model_get_deposit_history_items';
import { Type, instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';

export class GetDepositHistoryResp implements Response<GetDepositHistoryResp, RestResponse> {
    /**
     * current page
     */
    currentPage?: number;
    /**
     * page size
     */
    pageSize?: number;
    /**
     * total number
     */
    totalNum?: number;
    /**
     * total page
     */
    totalPage?: number;
    /**
     *
     */
    @Type(() => GetDepositHistoryItems)
    items?: Array<GetDepositHistoryItems>;
    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): GetDepositHistoryResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetDepositHistoryResp, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetDepositHistoryResp {
        return plainToInstance(GetDepositHistoryResp, jsonObject);
    }
}

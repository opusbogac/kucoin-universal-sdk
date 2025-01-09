// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { GetTradeHistoryItems } from './model_get_trade_history_items';
import { Type, instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';

export class GetTradeHistoryResp implements Response<GetTradeHistoryResp, RestResponse> {
    /**
     *
     */
    @Type(() => GetTradeHistoryItems)
    items?: Array<GetTradeHistoryItems>;
    /**
     * The id of the last set of data from the previous batch of data. By default, the latest information is given. lastId is used to filter data and paginate. If lastId is not entered, the default is a maximum of 100 returned data items. The return results include lastId，which can be used as a query parameter to look up new data from the next page.
     */
    lastId?: number;
    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): GetTradeHistoryResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetTradeHistoryResp, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetTradeHistoryResp {
        return plainToInstance(GetTradeHistoryResp, jsonObject);
    }
}

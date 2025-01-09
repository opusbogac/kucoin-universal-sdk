// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { Type, instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { GetRecentTradeHistoryData } from './model_get_recent_trade_history_data';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';

export class GetRecentTradeHistoryResp
    implements Response<GetRecentTradeHistoryResp, RestResponse>
{
    /**
     *
     */
    @Type(() => GetRecentTradeHistoryData)
    data?: Array<GetRecentTradeHistoryData>;
    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): GetRecentTradeHistoryResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetRecentTradeHistoryResp, { data: jsonObject });
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this.data));
    }

    fromObject(jsonObject: Object): GetRecentTradeHistoryResp {
        return plainToInstance(GetRecentTradeHistoryResp, { data: jsonObject });
    }
}

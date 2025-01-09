// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { GetAccountDetailLtv } from './model_get_account_detail_ltv';
import { Type, instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { GetAccountDetailOrders } from './model_get_account_detail_orders';
import { GetAccountDetailMargins } from './model_get_account_detail_margins';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';

export class GetAccountDetailResp implements Response<GetAccountDetailResp, RestResponse> {
    /**
     * Master UID
     */
    parentUid?: string;
    /**
     * Loan Orders
     */
    @Type(() => GetAccountDetailOrders)
    orders?: Array<GetAccountDetailOrders>;
    /**
     *
     */
    @Type(() => GetAccountDetailLtv)
    ltv?: GetAccountDetailLtv;
    /**
     * Total Margin Amount (USDT)
     */
    totalMarginAmount?: string;
    /**
     * Total Maintenance Margin for Restricted Transfers (USDT)
     */
    transferMarginAmount?: string;
    /**
     *
     */
    @Type(() => GetAccountDetailMargins)
    margins?: Array<GetAccountDetailMargins>;

    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): GetAccountDetailResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetAccountDetailResp, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetAccountDetailResp {
        return plainToInstance(GetAccountDetailResp, jsonObject);
    }
}

// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';

export class GetOpenOrderValueResp implements Response<GetOpenOrderValueResp, RestResponse> {
    /**
     * Total number of the unexecuted buy orders
     */
    openOrderBuySize?: number;
    /**
     * Total number of the unexecuted sell orders
     */
    openOrderSellSize?: number;
    /**
     * Value of all the unexecuted buy orders
     */
    openOrderBuyCost?: string;
    /**
     * Value of all the unexecuted sell orders
     */
    openOrderSellCost?: string;
    /**
     * settlement currency
     */
    settleCurrency?: string;

    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): GetOpenOrderValueResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetOpenOrderValueResp, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetOpenOrderValueResp {
        return plainToInstance(GetOpenOrderValueResp, jsonObject);
    }
}

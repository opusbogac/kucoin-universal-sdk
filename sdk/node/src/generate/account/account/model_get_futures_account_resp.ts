// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';

export class GetFuturesAccountResp implements Response<GetFuturesAccountResp, RestResponse> {
    /**
     * Account equity = marginBalance + Unrealised PNL
     */
    accountEquity?: number;
    /**
     * Unrealised profit and loss
     */
    unrealisedPNL?: number;
    /**
     * Margin balance = positionMargin + orderMargin + frozenFunds + availableBalance - unrealisedPNL
     */
    marginBalance?: number;
    /**
     * Position margin
     */
    positionMargin?: number;
    /**
     * Order margin
     */
    orderMargin?: number;
    /**
     * Frozen funds for out-transfer
     */
    frozenFunds?: number;
    /**
     * Available balance
     */
    availableBalance?: number;
    /**
     * Currency
     */
    currency?: string;
    /**
     * Cross margin risk rate
     */
    riskRatio?: number;
    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): GetFuturesAccountResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetFuturesAccountResp, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetFuturesAccountResp {
        return plainToInstance(GetFuturesAccountResp, jsonObject);
    }
}

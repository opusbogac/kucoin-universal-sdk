// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/serializable';

export class GetFuturesAccountResp implements Response<RestResponse> {
    /**
     * Account equity = marginBalance + Unrealised PNL
     */
    accountEquity: number;

    /**
     * Unrealised profit and loss
     */
    unrealisedPNL: number;

    /**
     * Margin balance = positionMargin + orderMargin + frozenFunds + availableBalance - unrealisedPNL
     */
    marginBalance: number;

    /**
     * Position margin
     */
    positionMargin: number;

    /**
     * Order margin
     */
    orderMargin: number;

    /**
     * Frozen funds for out-transfer
     */
    frozenFunds: number;

    /**
     * Available balance
     */
    availableBalance: number;

    /**
     * Currency
     */
    currency: string;

    /**
     * Cross margin risk rate
     */
    riskRatio: number;

    /**
     * Private constructor, please use the corresponding static methods to construct the object.
     */
    private constructor() {
        // @ts-ignore
        this.accountEquity = null;
        // @ts-ignore
        this.unrealisedPNL = null;
        // @ts-ignore
        this.marginBalance = null;
        // @ts-ignore
        this.positionMargin = null;
        // @ts-ignore
        this.orderMargin = null;
        // @ts-ignore
        this.frozenFunds = null;
        // @ts-ignore
        this.availableBalance = null;
        // @ts-ignore
        this.currency = null;
        // @ts-ignore
        this.riskRatio = null;
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
    static fromJson(input: string): GetFuturesAccountResp {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): GetFuturesAccountResp {
        return plainToClassFromExist(new GetFuturesAccountResp(), jsonObject);
    }
}

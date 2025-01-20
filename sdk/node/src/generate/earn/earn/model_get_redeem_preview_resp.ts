// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/serializable';

export class GetRedeemPreviewResp implements Response<RestResponse> {
    /**
     * currency
     */
    currency: string;

    /**
     * Expected redemption amount
     */
    redeemAmount: string;

    /**
     * Penalty interest amount, incurred for early redemption of fixed-term products
     */
    penaltyInterestAmount: string;

    /**
     * Redemption waiting period (days)
     */
    redeemPeriod: number;

    /**
     * Expected deliver time (milliseconds)
     */
    deliverTime: number;

    /**
     * Whether manual redemption is possible
     */
    manualRedeemable: boolean;

    /**
     * Whether the entire holding must be redeemed, required for early redemption of fixed-term products
     */
    redeemAll: boolean;

    private constructor() {
        // @ts-ignore
        this.currency = null;
        // @ts-ignore
        this.redeemAmount = null;
        // @ts-ignore
        this.penaltyInterestAmount = null;
        // @ts-ignore
        this.redeemPeriod = null;
        // @ts-ignore
        this.deliverTime = null;
        // @ts-ignore
        this.manualRedeemable = null;
        // @ts-ignore
        this.redeemAll = null;
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

    static fromJson(input: string): GetRedeemPreviewResp {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): GetRedeemPreviewResp {
        return plainToClassFromExist(new GetRedeemPreviewResp(), jsonObject);
    }
}

// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';

export class GetRedeemPreviewResp implements Response<GetRedeemPreviewResp, RestResponse> {
    /**
     * currency
     */
    currency?: string;
    /**
     * Expected redemption amount
     */
    redeemAmount?: string;
    /**
     * Penalty interest amount, incurred for early redemption of fixed-term products
     */
    penaltyInterestAmount?: string;
    /**
     * Redemption waiting period (days)
     */
    redeemPeriod?: number;
    /**
     * Expected deliver time (milliseconds)
     */
    deliverTime?: number;
    /**
     * Whether manual redemption is possible
     */
    manualRedeemable?: boolean;
    /**
     * Whether the entire holding must be redeemed, required for early redemption of fixed-term products
     */
    redeemAll?: boolean;

    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): GetRedeemPreviewResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetRedeemPreviewResp, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetRedeemPreviewResp {
        return plainToInstance(GetRedeemPreviewResp, jsonObject);
    }
}

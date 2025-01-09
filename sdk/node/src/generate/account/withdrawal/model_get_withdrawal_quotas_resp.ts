// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';

export class GetWithdrawalQuotasResp implements Response<GetWithdrawalQuotasResp, RestResponse> {
    /**
     *
     */
    currency?: string;
    /**
     *
     */
    limitBTCAmount?: string;
    /**
     *
     */
    usedBTCAmount?: string;
    /**
     * withdrawal limit currency
     */
    quotaCurrency?: string;
    /**
     * The intraday available withdrawal amount(withdrawal limit currency)
     */
    limitQuotaCurrencyAmount?: string;
    /**
     * The intraday cumulative withdrawal amount(withdrawal limit currency)
     */
    usedQuotaCurrencyAmount?: string;
    /**
     * Remaining amount available to withdraw the current day
     */
    remainAmount?: string;
    /**
     * Current available withdrawal amount
     */
    availableAmount?: string;
    /**
     * Minimum withdrawal fee
     */
    withdrawMinFee?: string;
    /**
     * Fees for internal withdrawal
     */
    innerWithdrawMinFee?: string;
    /**
     * Minimum withdrawal amount
     */
    withdrawMinSize?: string;
    /**
     * Is the withdraw function enabled or not
     */
    isWithdrawEnabled?: boolean;
    /**
     * Floating point precision.
     */
    precision?: number;
    /**
     * The chainName of currency
     */
    chain?: string;
    /**
     * Reasons for restriction, Usually empty
     */
    reason?: string;
    /**
     * Total locked amount (including the amount locked into USDT for each currency)
     */
    lockedAmount?: string;
    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): GetWithdrawalQuotasResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetWithdrawalQuotasResp, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetWithdrawalQuotasResp {
        return plainToInstance(GetWithdrawalQuotasResp, jsonObject);
    }
}

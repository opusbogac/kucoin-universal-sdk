// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { Type, instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { GetCrossMarginAccountAccounts } from './model_get_cross_margin_account_accounts';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';

export class GetCrossMarginAccountResp
    implements Response<GetCrossMarginAccountResp, RestResponse>
{
    /**
     * Total Assets in Quote Currency
     */
    totalAssetOfQuoteCurrency?: string;
    /**
     * Total Liability in Quote Currency
     */
    totalLiabilityOfQuoteCurrency?: string;
    /**
     * debt ratio
     */
    debtRatio?: string;
    /**
     * Position status; EFFECTIVE-effective, BANKRUPTCY-bankruptcy liquidation, LIQUIDATION-closing, REPAY-repayment, BORROW borrowing
     */
    status?: GetCrossMarginAccountResp.StatusEnum;
    /**
     * Margin account list
     */
    @Type(() => GetCrossMarginAccountAccounts)
    accounts?: Array<GetCrossMarginAccountAccounts>;
    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): GetCrossMarginAccountResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetCrossMarginAccountResp, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetCrossMarginAccountResp {
        return plainToInstance(GetCrossMarginAccountResp, jsonObject);
    }
}

export namespace GetCrossMarginAccountResp {
    export enum StatusEnum {
        /**
         * Effective
         */
        EFFECTIVE = <any>'EFFECTIVE',
        /**
         * Bankruptcy liquidation
         */
        BANKRUPTCY = <any>'BANKRUPTCY',
        /**
         * Closing
         */
        LIQUIDATION = <any>'LIQUIDATION',
        /**
         * Repayment
         */
        REPAY = <any>'REPAY',
        /**
         * Borrowing
         */
        BORROW = <any>'BORROW',
    }
}

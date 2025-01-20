// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { GetIsolatedMarginAccountDetailV1BaseAsset } from './model_get_isolated_margin_account_detail_v1_base_asset';
import { Type, instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { GetIsolatedMarginAccountDetailV1QuoteAsset } from './model_get_isolated_margin_account_detail_v1_quote_asset';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/serializable';

export class GetIsolatedMarginAccountDetailV1Resp implements Response<RestResponse> {
    /**
     * Symbol
     */
    symbol: string;

    /**
     * The position status: Existing liabilities-DEBT, No liabilities-CLEAR, Bankrupcy (after position enters a negative balance)-BANKRUPTCY, Existing borrowings-IN_BORROW, Existing repayments-IN_REPAY, Under liquidation-IN_LIQUIDATION, Under auto-renewal assets-IN_AUTO_RENEW .
     */
    status: GetIsolatedMarginAccountDetailV1Resp.StatusEnum;

    /**
     * debt ratio
     */
    debtRatio: string;

    /**
     *
     */
    @Type(() => GetIsolatedMarginAccountDetailV1BaseAsset)
    baseAsset: GetIsolatedMarginAccountDetailV1BaseAsset;

    /**
     *
     */
    @Type(() => GetIsolatedMarginAccountDetailV1QuoteAsset)
    quoteAsset: GetIsolatedMarginAccountDetailV1QuoteAsset;

    private constructor() {
        // @ts-ignore
        this.symbol = null;
        // @ts-ignore
        this.status = null;
        // @ts-ignore
        this.debtRatio = null;
        // @ts-ignore
        this.baseAsset = null;
        // @ts-ignore
        this.quoteAsset = null;
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

    static fromJson(input: string): GetIsolatedMarginAccountDetailV1Resp {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): GetIsolatedMarginAccountDetailV1Resp {
        return plainToClassFromExist(new GetIsolatedMarginAccountDetailV1Resp(), jsonObject);
    }
}

export namespace GetIsolatedMarginAccountDetailV1Resp {
    export enum StatusEnum {
        /**
         *
         */
        DEBT = <any>'DEBT',
        /**
         *
         */
        CLEAR = <any>'CLEAR',
        /**
         *
         */
        BANKRUPTCY = <any>'BANKRUPTCY',
        /**
         *
         */
        IN_BORROW = <any>'IN_BORROW',
        /**
         *
         */
        IN_REPAY = <any>'IN_REPAY',
        /**
         *
         */
        IN_LIQUIDATION = <any>'IN_LIQUIDATION',
        /**
         *
         */
        IN_AUTO_RENEW = <any>'IN_AUTO_RENEW',
    }
}

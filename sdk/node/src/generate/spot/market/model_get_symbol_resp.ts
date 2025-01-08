// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';
export class GetSymbolResp implements Response<GetSymbolResp, RestResponse> {
    /**
     * unique code of a symbol, it would not change after renaming
     */
    symbol?: string;
    /**
     * Name of trading pairs, it would change after renaming
     */
    name?: string;
    /**
     * Base currency,e.g. BTC.
     */
    baseCurrency?: string;
    /**
     * Quote currency,e.g. USDT.
     */
    quoteCurrency?: string;
    /**
     * The currency of charged fees.
     */
    feeCurrency?: string;
    /**
     * The trading market.
     */
    market?: string;
    /**
     * The minimum order quantity requried to place an order.
     */
    baseMinSize?: string;
    /**
     * The minimum order funds required to place a market order.
     */
    quoteMinSize?: string;
    /**
     * The maximum order size required to place an order.
     */
    baseMaxSize?: string;
    /**
     * The maximum order funds required to place a market order.
     */
    quoteMaxSize?: string;
    /**
     * Quantity increment: The quantity for an order must be a positive integer multiple of this increment. Here, the size refers to the quantity of the base currency for the order. For example, for the ETH-USDT trading pair, if the baseIncrement is 0.0000001, the order quantity can be 1.0000001 but not 1.00000001.
     */
    baseIncrement?: string;
    /**
     * Quote increment: The funds for a market order must be a positive integer multiple of this increment. The funds refer to the quote currency amount. For example, for the ETH-USDT trading pair, if the quoteIncrement is 0.000001, the amount of USDT for the order can be 3000.000001 but not 3000.0000001.
     */
    quoteIncrement?: string;
    /**
     * Price increment: The price of an order must be a positive integer multiple of this increment. For example, for the ETH-USDT trading pair, if the priceIncrement is 0.01, the order price can be 3000.01 but not 3000.001.
     */
    priceIncrement?: string;
    /**
     * Threshold for price portection
     */
    priceLimitRate?: string;
    /**
     * the minimum trading amounts
     */
    minFunds?: string;
    /**
     * Available for margin or not.
     */
    isMarginEnabled?: boolean;
    /**
     * Available for transaction or not.
     */
    enableTrading?: boolean;
    /**
     * [Fee Type](https://www.kucoin.com/vip/privilege)
     */
    feeCategory?: GetSymbolResp.FeeCategoryEnum;
    /**
     * The maker fee coefficient. The actual fee needs to be multiplied by this coefficient to get the final fee. Most currencies have a coefficient of 1. If set to 0, it means no fee
     */
    makerFeeCoefficient?: string;
    /**
     * The taker fee coefficient. The actual fee needs to be multiplied by this coefficient to get the final fee. Most currencies have a coefficient of 1. If set to 0, it means no fee
     */
    takerFeeCoefficient?: string;
    /**
     *
     */
    st?: boolean;
    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): GetSymbolResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetSymbolResp, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetSymbolResp {
        return plainToInstance(GetSymbolResp, jsonObject);
    }
}

export namespace GetSymbolResp {
    export enum FeeCategoryEnum {
        /**
         * classA
         */
        CLASSA = <any>1,
        /**
         * classB
         */
        CLASSB = <any>2,
        /**
         * classC
         */
        CLASSC = <any>3,
    }
}

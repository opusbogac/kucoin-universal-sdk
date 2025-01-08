// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';
export class GetCrossMarginSymbolsItems implements Serializable<GetCrossMarginSymbolsItems> {
    /**
     * symbol
     */
    symbol?: string;
    /**
     * symbol name
     */
    name?: string;
    /**
     * Whether trading is enabled: true for enabled, false for disabled
     */
    enableTrading?: boolean;
    /**
     * Trading market
     */
    market?: string;
    /**
     * Base currency,e.g. BTC.
     */
    baseCurrency?: string;
    /**
     * Quote currency,e.g. USDT.
     */
    quoteCurrency?: string;
    /**
     * Quantity increment: The quantity for an order must be a positive integer multiple of this increment. Here, the size refers to the quantity of the base currency for the order. For example, for the ETH-USDT trading pair, if the baseIncrement is 0.0000001, the order quantity can be 1.0000001 but not 1.00000001.
     */
    baseIncrement?: string;
    /**
     * The minimum order quantity requried to place an order.
     */
    baseMinSize?: string;
    /**
     * Quote increment: The funds for a market order must be a positive integer multiple of this increment. The funds refer to the quote currency amount. For example, for the ETH-USDT trading pair, if the quoteIncrement is 0.000001, the amount of USDT for the order can be 3000.000001 but not 3000.0000001.
     */
    quoteIncrement?: string;
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
     * Price increment: The price of an order must be a positive integer multiple of this increment. For example, for the ETH-USDT trading pair, if the priceIncrement is 0.01, the order price can be 3000.01 but not 3000.001.  specifies the min order price as well as the price increment.This also applies to quote currency.
     */
    priceIncrement?: string;
    /**
     * The currency of charged fees.
     */
    feeCurrency?: string;
    /**
     * Threshold for price portection
     */
    priceLimitRate?: string;
    /**
     * the minimum trading amounts
     */
    minFunds?: string;
    fromJson(input: string): GetCrossMarginSymbolsItems {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetCrossMarginSymbolsItems, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetCrossMarginSymbolsItems {
        return plainToInstance(GetCrossMarginSymbolsItems, jsonObject);
    }
}

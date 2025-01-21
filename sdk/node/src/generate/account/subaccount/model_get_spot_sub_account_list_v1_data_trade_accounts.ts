// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetSpotSubAccountListV1DataTradeAccounts implements Serializable {
    /**
     * The currency of the account.
     */
    currency?: string;

    /**
     * Total funds in the account.
     */
    balance?: string;

    /**
     * Funds available to withdraw or trade.
     */
    available?: string;

    /**
     * Funds on hold (not available for use).
     */
    holds?: string;

    /**
     * Calculated on this currency.
     */
    baseCurrency?: string;

    /**
     * The base currency price.
     */
    baseCurrencyPrice?: string;

    /**
     * The base currency amount.
     */
    baseAmount?: string;

    /**
     *
     */
    tag?: string;

    /**
     * Private constructor, please use the corresponding static methods to construct the object.
     */
    private constructor() {}
    /**
     * Convert the object to a JSON string.
     */
    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }
    /**
     * Create an object from a JSON string.
     */
    static fromJson(input: string): GetSpotSubAccountListV1DataTradeAccounts {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): GetSpotSubAccountListV1DataTradeAccounts {
        return plainToClassFromExist(new GetSpotSubAccountListV1DataTradeAccounts(), jsonObject);
    }
}

// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetIsolatedMarginAccountListV1AssetsQuoteAsset implements Serializable {
    /**
     * currency
     */
    currency: string;

    /**
     * Current currency total asset amount
     */
    totalBalance: string;

    /**
     * Current currency holding asset amount
     */
    holdBalance: string;

    /**
     * Current available asset amount
     */
    availableBalance: string;

    /**
     * Liabilities
     */
    liability: string;

    /**
     *
     */
    interest: string;

    /**
     *
     */
    borrowableAmount: string;

    /**
     * Private constructor, please use the corresponding static methods to construct the object.
     */
    private constructor() {
        // @ts-ignore
        this.currency = null;
        // @ts-ignore
        this.totalBalance = null;
        // @ts-ignore
        this.holdBalance = null;
        // @ts-ignore
        this.availableBalance = null;
        // @ts-ignore
        this.liability = null;
        // @ts-ignore
        this.interest = null;
        // @ts-ignore
        this.borrowableAmount = null;
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
    static fromJson(input: string): GetIsolatedMarginAccountListV1AssetsQuoteAsset {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): GetIsolatedMarginAccountListV1AssetsQuoteAsset {
        return plainToClassFromExist(
            new GetIsolatedMarginAccountListV1AssetsQuoteAsset(),
            jsonObject,
        );
    }
}

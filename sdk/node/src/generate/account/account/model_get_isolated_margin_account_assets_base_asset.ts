// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetIsolatedMarginAccountAssetsBaseAsset implements Serializable {
    /**
     * currency
     */
    currency: string;

    /**
     * Support borrow or not
     */
    borrowEnabled: boolean;

    /**
     * Support transfer or not
     */
    transferInEnabled: boolean;

    /**
     * Liabilities
     */
    liability: string;

    /**
     * Total Assets
     */
    total: string;

    /**
     * Account available assets (total assets - frozen)
     */
    available: string;

    /**
     * Account frozen assets
     */
    hold: string;

    /**
     * The user\'s remaining maximum loan amount
     */
    maxBorrowSize: string;

    /**
     * Private constructor, please use the corresponding static methods to construct the object.
     */
    private constructor() {
        // @ts-ignore
        this.currency = null;
        // @ts-ignore
        this.borrowEnabled = null;
        // @ts-ignore
        this.transferInEnabled = null;
        // @ts-ignore
        this.liability = null;
        // @ts-ignore
        this.total = null;
        // @ts-ignore
        this.available = null;
        // @ts-ignore
        this.hold = null;
        // @ts-ignore
        this.maxBorrowSize = null;
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
    static fromJson(input: string): GetIsolatedMarginAccountAssetsBaseAsset {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): GetIsolatedMarginAccountAssetsBaseAsset {
        return plainToClassFromExist(new GetIsolatedMarginAccountAssetsBaseAsset(), jsonObject);
    }
}

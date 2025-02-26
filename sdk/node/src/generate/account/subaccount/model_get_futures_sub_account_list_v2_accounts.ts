// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetFuturesSubAccountListV2Accounts implements Serializable {
    /**
     * Account name, main account is main
     */
    accountName: string;

    /**
     *
     */
    accountEquity: number;

    /**
     *
     */
    unrealisedPNL: number;

    /**
     *
     */
    marginBalance: number;

    /**
     *
     */
    positionMargin: number;

    /**
     *
     */
    orderMargin: number;

    /**
     *
     */
    frozenFunds: number;

    /**
     *
     */
    availableBalance: number;

    /**
     * currency
     */
    currency: string;

    /**
     * Private constructor, please use the corresponding static methods to construct the object.
     */
    private constructor() {
        // @ts-ignore
        this.accountName = null;
        // @ts-ignore
        this.accountEquity = null;
        // @ts-ignore
        this.unrealisedPNL = null;
        // @ts-ignore
        this.marginBalance = null;
        // @ts-ignore
        this.positionMargin = null;
        // @ts-ignore
        this.orderMargin = null;
        // @ts-ignore
        this.frozenFunds = null;
        // @ts-ignore
        this.availableBalance = null;
        // @ts-ignore
        this.currency = null;
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
    static fromJson(input: string): GetFuturesSubAccountListV2Accounts {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): GetFuturesSubAccountListV2Accounts {
        return plainToClassFromExist(new GetFuturesSubAccountListV2Accounts(), jsonObject);
    }
}

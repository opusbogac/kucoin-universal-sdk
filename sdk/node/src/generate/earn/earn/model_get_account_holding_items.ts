// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetAccountHoldingItems implements Serializable<GetAccountHoldingItems> {
    /**
     * Holding ID
     */
    orderId?: string;
    /**
     * Product ID
     */
    productId?: string;
    /**
     * Product category
     */
    productCategory?: string;
    /**
     * Product sub-type
     */
    productType?: string;
    /**
     * currency
     */
    currency?: string;
    /**
     * Income currency
     */
    incomeCurrency?: string;
    /**
     * Annualized Rate of Return, for example, 0.035 is equal to 3.5% annualized rate of return
     */
    returnRate?: string;
    /**
     * Holding amount
     */
    holdAmount?: string;
    /**
     * Redeemed amount
     */
    redeemedAmount?: string;
    /**
     * Redeeming amount
     */
    redeemingAmount?: string;
    /**
     * Product earliest interest start time, in milliseconds
     */
    lockStartTime?: number;
    /**
     * Product maturity time, in milliseconds
     */
    lockEndTime?: number;
    /**
     * Most recent subscription time, in milliseconds
     */
    purchaseTime?: number;
    /**
     * Redemption waiting period (days)
     */
    redeemPeriod?: number;
    /**
     * Status: LOCKED (holding), REDEEMING (redeeming)
     */
    status?: GetAccountHoldingItems.StatusEnum;
    /**
     * Whether the fixed product supports early redemption: 0 (no), 1 (yes)
     */
    earlyRedeemSupported?: GetAccountHoldingItems.EarlyRedeemSupportedEnum;

    fromJson(input: string): GetAccountHoldingItems {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetAccountHoldingItems, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetAccountHoldingItems {
        return plainToInstance(GetAccountHoldingItems, jsonObject);
    }
}

export namespace GetAccountHoldingItems {
    export enum StatusEnum {
        /**
         *
         */
        LOCKED = <any>'LOCKED',
        /**
         *
         */
        REDEEMING = <any>'REDEEMING',
    }
    export enum EarlyRedeemSupportedEnum {
        /**
         *
         */
        _0 = <any>0,
        /**
         *
         */
        _1 = <any>1,
    }
}

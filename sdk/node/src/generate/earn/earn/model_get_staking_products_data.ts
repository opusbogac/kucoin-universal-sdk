// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetStakingProductsData implements Serializable {
    /**
     * Product ID
     */
    id: string;

    /**
     * currency
     */
    currency: string;

    /**
     * Product category: STAKING
     */
    category: GetStakingProductsData.CategoryEnum;

    /**
     * Product subtype: TIME (fixed), DEMAND (demand)
     */
    type: GetStakingProductsData.TypeEnum;

    /**
     * Maximum precision supported
     */
    precision: number;

    /**
     * Products total subscribe amount
     */
    productUpperLimit: string;

    /**
     * Max user subscribe amount
     */
    userUpperLimit: string;

    /**
     * Min user subscribe amount
     */
    userLowerLimit: string;

    /**
     * Redemption waiting period (days)
     */
    redeemPeriod: number;

    /**
     * Product earliest interest start time, in milliseconds
     */
    lockStartTime: number;

    /**
     * Product maturity time, in milliseconds
     */
    lockEndTime: number;

    /**
     * Subscription start time, in milliseconds
     */
    applyStartTime: number;

    /**
     * Subscription end time, in milliseconds
     */
    applyEndTime: number;

    /**
     * Annualized Rate of Return, for example, 0.035 is equal to 3.5% annualized rate of return
     */
    returnRate: string;

    /**
     * Income currency
     */
    incomeCurrency: string;

    /**
     * Whether the fixed product supports early redemption: 0 (no), 1 (yes)
     */
    earlyRedeemSupported: GetStakingProductsData.EarlyRedeemSupportedEnum;

    /**
     * Products remain subscribe amount
     */
    productRemainAmount: string;

    /**
     * Product status: ONGOING(Subscription in progress), PENDING(Preheating Subscription), FULL(Subscribed), INTERESTING (Interest in progress)
     */
    status: GetStakingProductsData.StatusEnum;

    /**
     * Redemption channel: MANUAL (manual redemption), TRANS_DEMAND (transfer to corresponding demand product upon maturity), AUTO (redeem to funding account upon maturity)
     */
    redeemType: GetStakingProductsData.RedeemTypeEnum;

    /**
     * Income release type: DAILY (daily release), AFTER (release after product ends)
     */
    incomeReleaseType: GetStakingProductsData.IncomeReleaseTypeEnum;

    /**
     * Most recent interest date(millisecond)
     */
    interestDate: number;

    /**
     * Product duration (days)
     */
    duration: number;

    /**
     * Whether the product is exclusive for new users: 0 (no), 1 (yes)
     */
    newUserOnly: GetStakingProductsData.NewUserOnlyEnum;

    private constructor() {
        // @ts-ignore
        this.id = null;
        // @ts-ignore
        this.currency = null;
        // @ts-ignore
        this.category = null;
        // @ts-ignore
        this.type = null;
        // @ts-ignore
        this.precision = null;
        // @ts-ignore
        this.productUpperLimit = null;
        // @ts-ignore
        this.userUpperLimit = null;
        // @ts-ignore
        this.userLowerLimit = null;
        // @ts-ignore
        this.redeemPeriod = null;
        // @ts-ignore
        this.lockStartTime = null;
        // @ts-ignore
        this.lockEndTime = null;
        // @ts-ignore
        this.applyStartTime = null;
        // @ts-ignore
        this.applyEndTime = null;
        // @ts-ignore
        this.returnRate = null;
        // @ts-ignore
        this.incomeCurrency = null;
        // @ts-ignore
        this.earlyRedeemSupported = null;
        // @ts-ignore
        this.productRemainAmount = null;
        // @ts-ignore
        this.status = null;
        // @ts-ignore
        this.redeemType = null;
        // @ts-ignore
        this.incomeReleaseType = null;
        // @ts-ignore
        this.interestDate = null;
        // @ts-ignore
        this.duration = null;
        // @ts-ignore
        this.newUserOnly = null;
    }
    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    static fromJson(input: string): GetStakingProductsData {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): GetStakingProductsData {
        return plainToClassFromExist(new GetStakingProductsData(), jsonObject);
    }
}

export namespace GetStakingProductsData {
    export enum CategoryEnum {
        /**
         *
         */
        STAKING = <any>'STAKING',
    }
    export enum TypeEnum {
        /**
         * fixed
         */
        TIME = <any>'TIME',
        /**
         * demand
         */
        DEMAND = <any>'DEMAND',
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
    export enum StatusEnum {
        /**
         *
         */
        ONGOING = <any>'ONGOING',
        /**
         *
         */
        PENDING = <any>'PENDING',
        /**
         *
         */
        FULL = <any>'FULL',
        /**
         *
         */
        INTERESTING = <any>'INTERESTING',
    }
    export enum RedeemTypeEnum {
        /**
         *
         */
        MANUAL = <any>'MANUAL',
        /**
         *
         */
        TRANS_DEMAND = <any>'TRANS_DEMAND',
        /**
         *
         */
        AUTO = <any>'AUTO',
    }
    export enum IncomeReleaseTypeEnum {
        /**
         *
         */
        DAILY = <any>'DAILY',
        /**
         *
         */
        AFTER = <any>'AFTER',
    }
    export enum NewUserOnlyEnum {
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

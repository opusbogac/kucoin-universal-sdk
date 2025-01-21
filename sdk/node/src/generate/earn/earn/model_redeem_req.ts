// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class RedeemReq implements Serializable {
    /**
     * Holding ID
     */
    orderId?: string;

    /**
     * Redemption amount
     */
    amount?: string;

    /**
     * Account type: MAIN (funding account), TRADE (spot trading account). This parameter is valid only when orderId=ETH2
     */
    fromAccountType?: RedeemReq.FromAccountTypeEnum;

    /**
     * Confirmation field for early redemption penalty: 1 (confirm early redemption, and the current holding will be fully redeemed). This parameter is valid only for fixed-term products
     */
    confirmPunishRedeem?: string;

    /**
     * Private constructor, please use the corresponding static methods to construct the object.
     */
    private constructor() {}
    /**
     * Creates a new instance of the `RedeemReq` class.
     * The builder pattern allows step-by-step construction of a `RedeemReq` object.
     */
    static builder(): RedeemReqBuilder {
        return new RedeemReqBuilder(new RedeemReq());
    }

    /**
     * Creates a new instance of the `RedeemReq` class with the given data.
     */
    static create(data: {
        /**
         * Holding ID
         */
        orderId?: string;
        /**
         * Redemption amount
         */
        amount?: string;
        /**
         * Account type: MAIN (funding account), TRADE (spot trading account). This parameter is valid only when orderId=ETH2
         */
        fromAccountType?: RedeemReq.FromAccountTypeEnum;
        /**
         * Confirmation field for early redemption penalty: 1 (confirm early redemption, and the current holding will be fully redeemed). This parameter is valid only for fixed-term products
         */
        confirmPunishRedeem?: string;
    }): RedeemReq {
        let obj = new RedeemReq();
        obj.orderId = data.orderId;
        obj.amount = data.amount;
        obj.fromAccountType = data.fromAccountType;
        obj.confirmPunishRedeem = data.confirmPunishRedeem;
        return obj;
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
    static fromJson(input: string): RedeemReq {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): RedeemReq {
        return plainToClassFromExist(new RedeemReq(), jsonObject);
    }
}

export namespace RedeemReq {
    export enum FromAccountTypeEnum {
        /**
         *
         */
        MAIN = <any>'MAIN',
        /**
         *
         */
        TRADE = <any>'TRADE',
    }
}

export class RedeemReqBuilder {
    constructor(readonly obj: RedeemReq) {
        this.obj = obj;
    }
    /**
     * Holding ID
     */
    setOrderId(value: string): RedeemReqBuilder {
        this.obj.orderId = value;
        return this;
    }

    /**
     * Redemption amount
     */
    setAmount(value: string): RedeemReqBuilder {
        this.obj.amount = value;
        return this;
    }

    /**
     * Account type: MAIN (funding account), TRADE (spot trading account). This parameter is valid only when orderId=ETH2
     */
    setFromAccountType(value: RedeemReq.FromAccountTypeEnum): RedeemReqBuilder {
        this.obj.fromAccountType = value;
        return this;
    }

    /**
     * Confirmation field for early redemption penalty: 1 (confirm early redemption, and the current holding will be fully redeemed). This parameter is valid only for fixed-term products
     */
    setConfirmPunishRedeem(value: string): RedeemReqBuilder {
        this.obj.confirmPunishRedeem = value;
        return this;
    }

    /**
     * Get the final object.
     */
    build(): RedeemReq {
        return this.obj;
    }
}

// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class RedeemReq implements Serializable<RedeemReq> {
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
     * Creates a new instance of the `RedeemReq` class.
     * The builder pattern allows step-by-step construction of a `RedeemReq` object.
     */
    static builder(): RedeemReqBuilder {
        return new RedeemReqBuilder();
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

    fromJson(input: string): RedeemReq {
        const jsonObject = JSON.parse(input);
        return plainToInstance(RedeemReq, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): RedeemReq {
        return plainToInstance(RedeemReq, jsonObject);
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
    obj: RedeemReq = new RedeemReq();
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

    build(): RedeemReq {
        return this.obj;
    }
}

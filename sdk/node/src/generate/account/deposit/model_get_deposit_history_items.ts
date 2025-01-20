// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetDepositHistoryItems implements Serializable {
    /**
     * Currency
     */
    currency?: string;

    /**
     * The chainName of currency
     */
    chain?: string;

    /**
     * Status
     */
    status?: GetDepositHistoryItems.StatusEnum;

    /**
     * Deposit address
     */
    address?: string;

    /**
     * Address remark. If there’s no remark, it is empty.
     */
    memo?: string;

    /**
     * Internal deposit or not
     */
    isInner?: boolean;

    /**
     * Deposit amount
     */
    amount?: string;

    /**
     * Fees charged for deposit
     */
    fee?: string;

    /**
     * Wallet Txid
     */
    walletTxId?: string;

    /**
     * Creation time of the database record
     */
    createdAt?: number;

    /**
     * Update time of the database record
     */
    updatedAt?: number;

    /**
     * remark
     */
    remark?: string;

    /**
     * Whether there is any debt.A quick rollback will cause the deposit to fail. If the deposit fails, you will need to repay the balance.
     */
    arrears?: boolean;

    private constructor() {}
    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    static fromJson(input: string): GetDepositHistoryItems {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): GetDepositHistoryItems {
        return plainToClassFromExist(new GetDepositHistoryItems(), jsonObject);
    }
}

export namespace GetDepositHistoryItems {
    export enum StatusEnum {
        /**
         *
         */
        PROCESSING = <any>'PROCESSING',
        /**
         *
         */
        SUCCESS = <any>'SUCCESS',
        /**
         *
         */
        FAILURE = <any>'FAILURE',
    }
}

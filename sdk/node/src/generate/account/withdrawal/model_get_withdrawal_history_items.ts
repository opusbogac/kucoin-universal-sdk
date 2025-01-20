// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetWithdrawalHistoryItems implements Serializable {
    /**
     * Unique id
     */
    id?: string;

    /**
     * Currency
     */
    currency?: string;

    /**
     * The id of currency
     */
    chain?: string;

    /**
     * Status
     */
    status?: GetWithdrawalHistoryItems.StatusEnum;

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

    private constructor() {}
    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    static fromJson(input: string): GetWithdrawalHistoryItems {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): GetWithdrawalHistoryItems {
        return plainToClassFromExist(new GetWithdrawalHistoryItems(), jsonObject);
    }
}

export namespace GetWithdrawalHistoryItems {
    export enum StatusEnum {
        /**
         *
         */
        PROCESSING = <any>'PROCESSING',
        /**
         *
         */
        WALLET_PROCESSING = <any>'WALLET_PROCESSING',
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

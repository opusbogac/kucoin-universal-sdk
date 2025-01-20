// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetWithdrawalHistoryOldItems implements Serializable {
    /**
     * Currency
     */
    currency?: string;

    /**
     * Creation time of the database record
     */
    createAt?: number;

    /**
     * Withdrawal amount
     */
    amount?: string;

    /**
     * Withdrawal address
     */
    address?: string;

    /**
     * Wallet Txid
     */
    walletTxId?: string;

    /**
     * Internal deposit or not
     */
    isInner?: boolean;

    /**
     * Status
     */
    status?: GetWithdrawalHistoryOldItems.StatusEnum;

    private constructor() {}
    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    static fromJson(input: string): GetWithdrawalHistoryOldItems {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): GetWithdrawalHistoryOldItems {
        return plainToClassFromExist(new GetWithdrawalHistoryOldItems(), jsonObject);
    }
}

export namespace GetWithdrawalHistoryOldItems {
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

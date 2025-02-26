// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/serializable';

export class GetWithdrawDetailResp implements Response<RestResponse> {
    /**
     * Withdrawal ID
     */
    id: string;

    /**
     * chain id of currency
     */
    chain: string;

    /**
     * Wallet Transaction ID
     */
    walletTxId: string;

    /**
     * UID
     */
    uid: number;

    /**
     * Update Time (milliseconds)
     */
    updatedAt: number;

    /**
     * Amount
     */
    amount: string;

    /**
     * Memo
     */
    memo: string;

    /**
     * Fee
     */
    fee: string;

    /**
     * Address
     */
    address: string;

    /**
     * Remark
     */
    remark: string;

    /**
     * Is Internal (true or false)
     */
    isInner: boolean;

    /**
     * Currency
     */
    currency: string;

    /**
     * Status (PROCESSING, WALLET_PROCESSING, REVIEW, SUCCESS, FAILURE)
     */
    status: GetWithdrawDetailResp.StatusEnum;

    /**
     * Creation Time (milliseconds)
     */
    createdAt: number;

    /**
     * Private constructor, please use the corresponding static methods to construct the object.
     */
    private constructor() {
        // @ts-ignore
        this.id = null;
        // @ts-ignore
        this.chain = null;
        // @ts-ignore
        this.walletTxId = null;
        // @ts-ignore
        this.uid = null;
        // @ts-ignore
        this.updatedAt = null;
        // @ts-ignore
        this.amount = null;
        // @ts-ignore
        this.memo = null;
        // @ts-ignore
        this.fee = null;
        // @ts-ignore
        this.address = null;
        // @ts-ignore
        this.remark = null;
        // @ts-ignore
        this.isInner = null;
        // @ts-ignore
        this.currency = null;
        // @ts-ignore
        this.status = null;
        // @ts-ignore
        this.createdAt = null;
    }
    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
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
    static fromJson(input: string): GetWithdrawDetailResp {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): GetWithdrawDetailResp {
        return plainToClassFromExist(new GetWithdrawDetailResp(), jsonObject);
    }
}

export namespace GetWithdrawDetailResp {
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
        REVIEW = <any>'REVIEW',
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

// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetFuturesLedgerDataList implements Serializable {
    /**
     * ledger time
     */
    time: number;

    /**
     * Type: RealisedPNL, Deposit, Withdrawal, TransferIn, TransferOut
     */
    type: string;

    /**
     * Transaction amount
     */
    amount: number;

    /**
     * Fee
     */
    fee: number;

    /**
     * Account equity
     */
    accountEquity: number;

    /**
     * Status: Completed, Pending
     */
    status: string;

    /**
     * Ticker symbol of the contract
     */
    remark: string;

    /**
     * Offset
     */
    offset: number;

    /**
     * Currency
     */
    currency: string;

    /**
     * Private constructor, please use the corresponding static methods to construct the object.
     */
    private constructor() {
        // @ts-ignore
        this.time = null;
        // @ts-ignore
        this.type = null;
        // @ts-ignore
        this.amount = null;
        // @ts-ignore
        this.fee = null;
        // @ts-ignore
        this.accountEquity = null;
        // @ts-ignore
        this.status = null;
        // @ts-ignore
        this.remark = null;
        // @ts-ignore
        this.offset = null;
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
    static fromJson(input: string): GetFuturesLedgerDataList {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): GetFuturesLedgerDataList {
        return plainToClassFromExist(new GetFuturesLedgerDataList(), jsonObject);
    }
}

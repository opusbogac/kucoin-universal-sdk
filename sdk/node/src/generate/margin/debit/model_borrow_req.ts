// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class BorrowReq implements Serializable {
    /**
     * currency
     */
    currency: string;

    /**
     * Borrow amount
     */
    size: number;

    /**
     * timeInForce: IOC, FOK
     */
    timeInForce: BorrowReq.TimeInForceEnum;

    /**
     * symbol, mandatory for isolated margin account
     */
    symbol?: string;

    /**
     * true-isolated, false-cross; default is false
     */
    isIsolated?: boolean = false;

    /**
     * true: high frequency borrowing, false: low frequency borrowing; default false
     */
    isHf?: boolean = false;

    /**
     * Private constructor, please use the corresponding static methods to construct the object.
     */
    private constructor() {
        // @ts-ignore
        this.currency = null;
        // @ts-ignore
        this.size = null;
        // @ts-ignore
        this.timeInForce = null;
    }
    /**
     * Creates a new instance of the `BorrowReq` class.
     * The builder pattern allows step-by-step construction of a `BorrowReq` object.
     */
    static builder(): BorrowReqBuilder {
        return new BorrowReqBuilder(new BorrowReq());
    }

    /**
     * Creates a new instance of the `BorrowReq` class with the given data.
     */
    static create(data: {
        /**
         * currency
         */
        currency: string;
        /**
         * Borrow amount
         */
        size: number;
        /**
         * timeInForce: IOC, FOK
         */
        timeInForce: BorrowReq.TimeInForceEnum;
        /**
         * symbol, mandatory for isolated margin account
         */
        symbol?: string;
        /**
         * true-isolated, false-cross; default is false
         */
        isIsolated?: boolean;
        /**
         * true: high frequency borrowing, false: low frequency borrowing; default false
         */
        isHf?: boolean;
    }): BorrowReq {
        let obj = new BorrowReq();
        obj.currency = data.currency;
        obj.size = data.size;
        obj.timeInForce = data.timeInForce;
        obj.symbol = data.symbol;
        if (data.isIsolated) {
            obj.isIsolated = data.isIsolated;
        } else {
            obj.isIsolated = false;
        }
        if (data.isHf) {
            obj.isHf = data.isHf;
        } else {
            obj.isHf = false;
        }
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
    static fromJson(input: string): BorrowReq {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): BorrowReq {
        return plainToClassFromExist(new BorrowReq(), jsonObject);
    }
}

export namespace BorrowReq {
    export enum TimeInForceEnum {
        /**
         *
         */
        IOC = <any>'IOC',
        /**
         *
         */
        FOK = <any>'FOK',
    }
}

export class BorrowReqBuilder {
    constructor(readonly obj: BorrowReq) {
        this.obj = obj;
    }
    /**
     * currency
     */
    setCurrency(value: string): BorrowReqBuilder {
        this.obj.currency = value;
        return this;
    }

    /**
     * Borrow amount
     */
    setSize(value: number): BorrowReqBuilder {
        this.obj.size = value;
        return this;
    }

    /**
     * timeInForce: IOC, FOK
     */
    setTimeInForce(value: BorrowReq.TimeInForceEnum): BorrowReqBuilder {
        this.obj.timeInForce = value;
        return this;
    }

    /**
     * symbol, mandatory for isolated margin account
     */
    setSymbol(value: string): BorrowReqBuilder {
        this.obj.symbol = value;
        return this;
    }

    /**
     * true-isolated, false-cross; default is false
     */
    setIsIsolated(value: boolean): BorrowReqBuilder {
        this.obj.isIsolated = value;
        return this;
    }

    /**
     * true: high frequency borrowing, false: low frequency borrowing; default false
     */
    setIsHf(value: boolean): BorrowReqBuilder {
        this.obj.isHf = value;
        return this;
    }

    /**
     * Get the final object.
     */
    build(): BorrowReq {
        return this.obj;
    }
}

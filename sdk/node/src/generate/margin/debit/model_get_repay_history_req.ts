// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetRepayHistoryReq implements Serializable {
    /**
     * currency
     */
    currency?: string;

    /**
     * true-isolated, false-cross; default is false
     */
    isIsolated?: boolean = false;

    /**
     * symbol, mandatory for isolated margin account
     */
    symbol?: string;

    /**
     * Repay Order Id
     */
    orderNo?: string;

    /**
     * The start and end times are not restricted. If the start time is empty or less than 1680278400000, the default value is set to 1680278400000 (April 1, 2023, 00:00:00)
     */
    startTime?: number;

    /**
     * End time
     */
    endTime?: number;

    /**
     * Current query page, with a starting value of 1. Default:1
     */
    currentPage?: number = 1;

    /**
     * Number of results per page. Default is 50, minimum is 10, maximum is 500
     */
    pageSize?: number = 50;

    /**
     * Private constructor, please use the corresponding static methods to construct the object.
     */
    private constructor() {}
    /**
     * Creates a new instance of the `GetRepayHistoryReq` class.
     * The builder pattern allows step-by-step construction of a `GetRepayHistoryReq` object.
     */
    static builder(): GetRepayHistoryReqBuilder {
        return new GetRepayHistoryReqBuilder(new GetRepayHistoryReq());
    }

    /**
     * Creates a new instance of the `GetRepayHistoryReq` class with the given data.
     */
    static create(data: {
        /**
         * currency
         */
        currency?: string;
        /**
         * true-isolated, false-cross; default is false
         */
        isIsolated?: boolean;
        /**
         * symbol, mandatory for isolated margin account
         */
        symbol?: string;
        /**
         * Repay Order Id
         */
        orderNo?: string;
        /**
         * The start and end times are not restricted. If the start time is empty or less than 1680278400000, the default value is set to 1680278400000 (April 1, 2023, 00:00:00)
         */
        startTime?: number;
        /**
         * End time
         */
        endTime?: number;
        /**
         * Current query page, with a starting value of 1. Default:1
         */
        currentPage?: number;
        /**
         * Number of results per page. Default is 50, minimum is 10, maximum is 500
         */
        pageSize?: number;
    }): GetRepayHistoryReq {
        let obj = new GetRepayHistoryReq();
        obj.currency = data.currency;
        if (data.isIsolated) {
            obj.isIsolated = data.isIsolated;
        } else {
            obj.isIsolated = false;
        }
        obj.symbol = data.symbol;
        obj.orderNo = data.orderNo;
        obj.startTime = data.startTime;
        obj.endTime = data.endTime;
        if (data.currentPage) {
            obj.currentPage = data.currentPage;
        } else {
            obj.currentPage = 1;
        }
        if (data.pageSize) {
            obj.pageSize = data.pageSize;
        } else {
            obj.pageSize = 50;
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
    static fromJson(input: string): GetRepayHistoryReq {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): GetRepayHistoryReq {
        return plainToClassFromExist(new GetRepayHistoryReq(), jsonObject);
    }
}

export class GetRepayHistoryReqBuilder {
    constructor(readonly obj: GetRepayHistoryReq) {
        this.obj = obj;
    }
    /**
     * currency
     */
    setCurrency(value: string): GetRepayHistoryReqBuilder {
        this.obj.currency = value;
        return this;
    }

    /**
     * true-isolated, false-cross; default is false
     */
    setIsIsolated(value: boolean): GetRepayHistoryReqBuilder {
        this.obj.isIsolated = value;
        return this;
    }

    /**
     * symbol, mandatory for isolated margin account
     */
    setSymbol(value: string): GetRepayHistoryReqBuilder {
        this.obj.symbol = value;
        return this;
    }

    /**
     * Repay Order Id
     */
    setOrderNo(value: string): GetRepayHistoryReqBuilder {
        this.obj.orderNo = value;
        return this;
    }

    /**
     * The start and end times are not restricted. If the start time is empty or less than 1680278400000, the default value is set to 1680278400000 (April 1, 2023, 00:00:00)
     */
    setStartTime(value: number): GetRepayHistoryReqBuilder {
        this.obj.startTime = value;
        return this;
    }

    /**
     * End time
     */
    setEndTime(value: number): GetRepayHistoryReqBuilder {
        this.obj.endTime = value;
        return this;
    }

    /**
     * Current query page, with a starting value of 1. Default:1
     */
    setCurrentPage(value: number): GetRepayHistoryReqBuilder {
        this.obj.currentPage = value;
        return this;
    }

    /**
     * Number of results per page. Default is 50, minimum is 10, maximum is 500
     */
    setPageSize(value: number): GetRepayHistoryReqBuilder {
        this.obj.pageSize = value;
        return this;
    }

    /**
     * Get the final object.
     */
    build(): GetRepayHistoryReq {
        return this.obj;
    }
}

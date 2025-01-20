// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetInterestHistoryReq implements Serializable {
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

    private constructor() {}
    /**
     * Creates a new instance of the `GetInterestHistoryReq` class.
     * The builder pattern allows step-by-step construction of a `GetInterestHistoryReq` object.
     */
    static builder(): GetInterestHistoryReqBuilder {
        return new GetInterestHistoryReqBuilder(new GetInterestHistoryReq());
    }

    /**
     * Creates a new instance of the `GetInterestHistoryReq` class with the given data.
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
    }): GetInterestHistoryReq {
        let obj = new GetInterestHistoryReq();
        obj.currency = data.currency;
        if (data.isIsolated) {
            obj.isIsolated = data.isIsolated;
        } else {
            obj.isIsolated = false;
        }
        obj.symbol = data.symbol;
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

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    static fromJson(input: string): GetInterestHistoryReq {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): GetInterestHistoryReq {
        return plainToClassFromExist(new GetInterestHistoryReq(), jsonObject);
    }
}

export class GetInterestHistoryReqBuilder {
    constructor(readonly obj: GetInterestHistoryReq) {
        this.obj = obj;
    }
    /**
     * currency
     */
    setCurrency(value: string): GetInterestHistoryReqBuilder {
        this.obj.currency = value;
        return this;
    }

    /**
     * true-isolated, false-cross; default is false
     */
    setIsIsolated(value: boolean): GetInterestHistoryReqBuilder {
        this.obj.isIsolated = value;
        return this;
    }

    /**
     * symbol, mandatory for isolated margin account
     */
    setSymbol(value: string): GetInterestHistoryReqBuilder {
        this.obj.symbol = value;
        return this;
    }

    /**
     * The start and end times are not restricted. If the start time is empty or less than 1680278400000, the default value is set to 1680278400000 (April 1, 2023, 00:00:00)
     */
    setStartTime(value: number): GetInterestHistoryReqBuilder {
        this.obj.startTime = value;
        return this;
    }

    /**
     * End time
     */
    setEndTime(value: number): GetInterestHistoryReqBuilder {
        this.obj.endTime = value;
        return this;
    }

    /**
     * Current query page, with a starting value of 1. Default:1
     */
    setCurrentPage(value: number): GetInterestHistoryReqBuilder {
        this.obj.currentPage = value;
        return this;
    }

    /**
     * Number of results per page. Default is 50, minimum is 10, maximum is 500
     */
    setPageSize(value: number): GetInterestHistoryReqBuilder {
        this.obj.pageSize = value;
        return this;
    }

    build(): GetInterestHistoryReq {
        return this.obj;
    }
}

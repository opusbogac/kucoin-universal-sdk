// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetWithdrawalHistoryOldReq implements Serializable<GetWithdrawalHistoryOldReq> {
    /**
     * currency
     */
    currency?: string;
    /**
     * Status. Available value: PROCESSING, SUCCESS, and FAILURE
     */
    status?: GetWithdrawalHistoryOldReq.StatusEnum;
    /**
     * Start time (milisecond)
     */
    startAt?: number;
    /**
     * End time (milisecond)
     */
    endAt?: number;
    /**
     * Current request page.
     */
    currentPage?: number = 1;
    /**
     * Number of results per request. Minimum is 10, maximum is 500.
     */
    pageSize?: number = 50;

    /**
     * Creates a new instance of the `GetWithdrawalHistoryOldReq` class.
     * The builder pattern allows step-by-step construction of a `GetWithdrawalHistoryOldReq` object.
     */
    static builder(): GetWithdrawalHistoryOldReqBuilder {
        return new GetWithdrawalHistoryOldReqBuilder();
    }

    /**
     * Creates a new instance of the `GetWithdrawalHistoryOldReq` class with the given data.
     */
    static create(data: {
        /**
         * currency
         */
        currency?: string;
        /**
         * Status. Available value: PROCESSING, SUCCESS, and FAILURE
         */
        status?: GetWithdrawalHistoryOldReq.StatusEnum;
        /**
         * Start time (milisecond)
         */
        startAt?: number;
        /**
         * End time (milisecond)
         */
        endAt?: number;
        /**
         * Current request page.
         */
        currentPage?: number;
        /**
         * Number of results per request. Minimum is 10, maximum is 500.
         */
        pageSize?: number;
    }): GetWithdrawalHistoryOldReq {
        let obj = new GetWithdrawalHistoryOldReq();
        obj.currency = data.currency;
        obj.status = data.status;
        obj.startAt = data.startAt;
        obj.endAt = data.endAt;
        obj.currentPage = data.currentPage;
        obj.pageSize = data.pageSize;
        return obj;
    }

    fromJson(input: string): GetWithdrawalHistoryOldReq {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetWithdrawalHistoryOldReq, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetWithdrawalHistoryOldReq {
        return plainToInstance(GetWithdrawalHistoryOldReq, jsonObject);
    }
}

export namespace GetWithdrawalHistoryOldReq {
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

export class GetWithdrawalHistoryOldReqBuilder {
    obj: GetWithdrawalHistoryOldReq = new GetWithdrawalHistoryOldReq();
    /**
     * currency
     */
    setCurrency(value: string): GetWithdrawalHistoryOldReqBuilder {
        this.obj.currency = value;
        return this;
    }

    /**
     * Status. Available value: PROCESSING, SUCCESS, and FAILURE
     */
    setStatus(value: GetWithdrawalHistoryOldReq.StatusEnum): GetWithdrawalHistoryOldReqBuilder {
        this.obj.status = value;
        return this;
    }

    /**
     * Start time (milisecond)
     */
    setStartAt(value: number): GetWithdrawalHistoryOldReqBuilder {
        this.obj.startAt = value;
        return this;
    }

    /**
     * End time (milisecond)
     */
    setEndAt(value: number): GetWithdrawalHistoryOldReqBuilder {
        this.obj.endAt = value;
        return this;
    }

    /**
     * Current request page.
     */
    setCurrentPage(value: number): GetWithdrawalHistoryOldReqBuilder {
        this.obj.currentPage = value;
        return this;
    }

    /**
     * Number of results per request. Minimum is 10, maximum is 500.
     */
    setPageSize(value: number): GetWithdrawalHistoryOldReqBuilder {
        this.obj.pageSize = value;
        return this;
    }

    build(): GetWithdrawalHistoryOldReq {
        return this.obj;
    }
}

// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetWithdrawalHistoryReq implements Serializable<GetWithdrawalHistoryReq> {
    /**
     * currency
     */
    currency?: string;
    /**
     * Status. Available value: PROCESSING, WALLET_PROCESSING, SUCCESS, and FAILURE
     */
    status?: GetWithdrawalHistoryReq.StatusEnum;
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
     * Creates a new instance of the `GetWithdrawalHistoryReq` class.
     * The builder pattern allows step-by-step construction of a `GetWithdrawalHistoryReq` object.
     */
    static builder(): GetWithdrawalHistoryReqBuilder {
        return new GetWithdrawalHistoryReqBuilder();
    }

    /**
     * Creates a new instance of the `GetWithdrawalHistoryReq` class with the given data.
     */
    static create(data: {
        /**
         * currency
         */
        currency?: string;
        /**
         * Status. Available value: PROCESSING, WALLET_PROCESSING, SUCCESS, and FAILURE
         */
        status?: GetWithdrawalHistoryReq.StatusEnum;
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
    }): GetWithdrawalHistoryReq {
        let obj = new GetWithdrawalHistoryReq();
        obj.currency = data.currency;
        obj.status = data.status;
        obj.startAt = data.startAt;
        obj.endAt = data.endAt;
        obj.currentPage = data.currentPage;
        obj.pageSize = data.pageSize;
        return obj;
    }

    fromJson(input: string): GetWithdrawalHistoryReq {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetWithdrawalHistoryReq, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetWithdrawalHistoryReq {
        return plainToInstance(GetWithdrawalHistoryReq, jsonObject);
    }
}

export namespace GetWithdrawalHistoryReq {
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

export class GetWithdrawalHistoryReqBuilder {
    obj: GetWithdrawalHistoryReq = new GetWithdrawalHistoryReq();
    /**
     * currency
     */
    setCurrency(value: string): GetWithdrawalHistoryReqBuilder {
        this.obj.currency = value;
        return this;
    }

    /**
     * Status. Available value: PROCESSING, WALLET_PROCESSING, SUCCESS, and FAILURE
     */
    setStatus(value: GetWithdrawalHistoryReq.StatusEnum): GetWithdrawalHistoryReqBuilder {
        this.obj.status = value;
        return this;
    }

    /**
     * Start time (milisecond)
     */
    setStartAt(value: number): GetWithdrawalHistoryReqBuilder {
        this.obj.startAt = value;
        return this;
    }

    /**
     * End time (milisecond)
     */
    setEndAt(value: number): GetWithdrawalHistoryReqBuilder {
        this.obj.endAt = value;
        return this;
    }

    /**
     * Current request page.
     */
    setCurrentPage(value: number): GetWithdrawalHistoryReqBuilder {
        this.obj.currentPage = value;
        return this;
    }

    /**
     * Number of results per request. Minimum is 10, maximum is 500.
     */
    setPageSize(value: number): GetWithdrawalHistoryReqBuilder {
        this.obj.pageSize = value;
        return this;
    }

    build(): GetWithdrawalHistoryReq {
        return this.obj;
    }
}

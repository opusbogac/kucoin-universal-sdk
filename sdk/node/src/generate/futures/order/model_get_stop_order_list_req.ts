// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';
export class GetStopOrderListReq implements Serializable<GetStopOrderListReq> {
    /**
     * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
     */
    symbol?: string;
    /**
     * buy or sell
     */
    side?: GetStopOrderListReq.SideEnum;
    /**
     * limit, market
     */
    type?: GetStopOrderListReq.TypeEnum;
    /**
     * Start time (milisecond)
     */
    startAt?: number;
    /**
     * End time (milisecond)
     */
    endAt?: number;
    /**
     * Current request page, The default currentPage is 1
     */
    currentPage?: number;
    /**
     * pageSize, The default pageSize is 50, The maximum cannot exceed 1000
     */
    pageSize?: number = 50;

    /**
     * Creates a new instance of the `GetStopOrderListReq` class.
     * The builder pattern allows step-by-step construction of a `GetStopOrderListReq` object.
     */
    static builder(): GetStopOrderListReqBuilder {
        return new GetStopOrderListReqBuilder();
    }

    /**
     * Creates a new instance of the `GetStopOrderListReq` class with the given data.
     */
    static create(data: {
        /**
         * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
         */
        symbol?: string;
        /**
         * buy or sell
         */
        side?: GetStopOrderListReq.SideEnum;
        /**
         * limit, market
         */
        type?: GetStopOrderListReq.TypeEnum;
        /**
         * Start time (milisecond)
         */
        startAt?: number;
        /**
         * End time (milisecond)
         */
        endAt?: number;
        /**
         * Current request page, The default currentPage is 1
         */
        currentPage?: number;
        /**
         * pageSize, The default pageSize is 50, The maximum cannot exceed 1000
         */
        pageSize?: number;
    }): GetStopOrderListReq {
        let obj = new GetStopOrderListReq();
        obj.symbol = data.symbol;
        obj.side = data.side;
        obj.type = data.type;
        obj.startAt = data.startAt;
        obj.endAt = data.endAt;
        obj.currentPage = data.currentPage;
        obj.pageSize = data.pageSize;
        return obj;
    }

    fromJson(input: string): GetStopOrderListReq {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetStopOrderListReq, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetStopOrderListReq {
        return plainToInstance(GetStopOrderListReq, jsonObject);
    }
}

export namespace GetStopOrderListReq {
    export enum SideEnum {
        /**
         *
         */
        BUY = <any>'buy',
        /**
         *
         */
        SELL = <any>'sell',
    }
    export enum TypeEnum {
        /**
         *
         */
        LIMIT = <any>'limit',
        /**
         *
         */
        MARKET = <any>'market',
    }
}

export class GetStopOrderListReqBuilder {
    obj: GetStopOrderListReq = new GetStopOrderListReq();
    /**
     * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
     */
    setSymbol(value: string): GetStopOrderListReqBuilder {
        this.obj.symbol = value;
        return this;
    }

    /**
     * buy or sell
     */
    setSide(value: GetStopOrderListReq.SideEnum): GetStopOrderListReqBuilder {
        this.obj.side = value;
        return this;
    }

    /**
     * limit, market
     */
    setType(value: GetStopOrderListReq.TypeEnum): GetStopOrderListReqBuilder {
        this.obj.type = value;
        return this;
    }

    /**
     * Start time (milisecond)
     */
    setStartAt(value: number): GetStopOrderListReqBuilder {
        this.obj.startAt = value;
        return this;
    }

    /**
     * End time (milisecond)
     */
    setEndAt(value: number): GetStopOrderListReqBuilder {
        this.obj.endAt = value;
        return this;
    }

    /**
     * Current request page, The default currentPage is 1
     */
    setCurrentPage(value: number): GetStopOrderListReqBuilder {
        this.obj.currentPage = value;
        return this;
    }

    /**
     * pageSize, The default pageSize is 50, The maximum cannot exceed 1000
     */
    setPageSize(value: number): GetStopOrderListReqBuilder {
        this.obj.pageSize = value;
        return this;
    }

    build(): GetStopOrderListReq {
        return this.obj;
    }
}

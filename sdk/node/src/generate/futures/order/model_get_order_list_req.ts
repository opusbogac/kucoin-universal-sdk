// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';
export class GetOrderListReq implements Serializable<GetOrderListReq> {
    /**
     * active or done, done as default. Only list orders for a specific status
     */
    status?: GetOrderListReq.StatusEnum;
    /**
     * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
     */
    symbol?: string;
    /**
     * buy or sell
     */
    side?: GetOrderListReq.SideEnum;
    /**
     * limit, market, limit_stop or market_stop
     */
    type?: GetOrderListReq.TypeEnum;
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

    /**
     * Creates a new instance of the `GetOrderListReq` class.
     * The builder pattern allows step-by-step construction of a `GetOrderListReq` object.
     */
    static builder(): GetOrderListReqBuilder {
        return new GetOrderListReqBuilder();
    }

    /**
     * Creates a new instance of the `GetOrderListReq` class with the given data.
     */
    static create(data: {
        /**
         * active or done, done as default. Only list orders for a specific status
         */
        status?: GetOrderListReq.StatusEnum;
        /**
         * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
         */
        symbol?: string;
        /**
         * buy or sell
         */
        side?: GetOrderListReq.SideEnum;
        /**
         * limit, market, limit_stop or market_stop
         */
        type?: GetOrderListReq.TypeEnum;
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
    }): GetOrderListReq {
        let obj = new GetOrderListReq();
        obj.status = data.status;
        obj.symbol = data.symbol;
        obj.side = data.side;
        obj.type = data.type;
        obj.startAt = data.startAt;
        obj.endAt = data.endAt;
        obj.currentPage = data.currentPage;
        obj.pageSize = data.pageSize;
        return obj;
    }

    fromJson(input: string): GetOrderListReq {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetOrderListReq, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetOrderListReq {
        return plainToInstance(GetOrderListReq, jsonObject);
    }
}

export namespace GetOrderListReq {
    export enum StatusEnum {
        /**
         *
         */
        ACTIVE = <any>'active',
        /**
         *
         */
        DONE = <any>'done',
    }
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

export class GetOrderListReqBuilder {
    obj: GetOrderListReq = new GetOrderListReq();
    /**
     * active or done, done as default. Only list orders for a specific status
     */
    setStatus(value: GetOrderListReq.StatusEnum): GetOrderListReqBuilder {
        this.obj.status = value;
        return this;
    }

    /**
     * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
     */
    setSymbol(value: string): GetOrderListReqBuilder {
        this.obj.symbol = value;
        return this;
    }

    /**
     * buy or sell
     */
    setSide(value: GetOrderListReq.SideEnum): GetOrderListReqBuilder {
        this.obj.side = value;
        return this;
    }

    /**
     * limit, market, limit_stop or market_stop
     */
    setType(value: GetOrderListReq.TypeEnum): GetOrderListReqBuilder {
        this.obj.type = value;
        return this;
    }

    /**
     * Start time (milisecond)
     */
    setStartAt(value: number): GetOrderListReqBuilder {
        this.obj.startAt = value;
        return this;
    }

    /**
     * End time (milisecond)
     */
    setEndAt(value: number): GetOrderListReqBuilder {
        this.obj.endAt = value;
        return this;
    }

    /**
     * Current request page, The default currentPage is 1
     */
    setCurrentPage(value: number): GetOrderListReqBuilder {
        this.obj.currentPage = value;
        return this;
    }

    /**
     * pageSize, The default pageSize is 50, The maximum cannot exceed 1000
     */
    setPageSize(value: number): GetOrderListReqBuilder {
        this.obj.pageSize = value;
        return this;
    }

    build(): GetOrderListReq {
        return this.obj;
    }
}

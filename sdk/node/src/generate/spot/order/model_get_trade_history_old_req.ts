// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetTradeHistoryOldReq implements Serializable {
    /**
     * symbol
     */
    symbol?: string;

    /**
     * The unique order id generated by the trading system (If orderId is specified，please ignore the other query parameters)
     */
    orderId?: string;

    /**
     * specify if the order is to \'buy\' or \'sell\'
     */
    side?: GetTradeHistoryOldReq.SideEnum;

    /**
     * limit, market, limit_stop or market_stop
     */
    type?: GetTradeHistoryOldReq.TypeEnum;

    /**
     * The type of trading:TRADE - Spot Trading(TRADE as default), MARGIN_TRADE - Cross Margin Trading, MARGIN_ISOLATED_TRADE - Isolated Margin Trading.
     */
    tradeType?: GetTradeHistoryOldReq.TradeTypeEnum = GetTradeHistoryOldReq.TradeTypeEnum.TRADE;

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
    pageSize?: number;

    /**
     * Private constructor, please use the corresponding static methods to construct the object.
     */
    private constructor() {}
    /**
     * Creates a new instance of the `GetTradeHistoryOldReq` class.
     * The builder pattern allows step-by-step construction of a `GetTradeHistoryOldReq` object.
     */
    static builder(): GetTradeHistoryOldReqBuilder {
        return new GetTradeHistoryOldReqBuilder(new GetTradeHistoryOldReq());
    }

    /**
     * Creates a new instance of the `GetTradeHistoryOldReq` class with the given data.
     */
    static create(data: {
        /**
         * symbol
         */
        symbol?: string;
        /**
         * The unique order id generated by the trading system (If orderId is specified，please ignore the other query parameters)
         */
        orderId?: string;
        /**
         * specify if the order is to \'buy\' or \'sell\'
         */
        side?: GetTradeHistoryOldReq.SideEnum;
        /**
         * limit, market, limit_stop or market_stop
         */
        type?: GetTradeHistoryOldReq.TypeEnum;
        /**
         * The type of trading:TRADE - Spot Trading(TRADE as default), MARGIN_TRADE - Cross Margin Trading, MARGIN_ISOLATED_TRADE - Isolated Margin Trading.
         */
        tradeType?: GetTradeHistoryOldReq.TradeTypeEnum;
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
    }): GetTradeHistoryOldReq {
        let obj = new GetTradeHistoryOldReq();
        obj.symbol = data.symbol;
        obj.orderId = data.orderId;
        obj.side = data.side;
        obj.type = data.type;
        if (data.tradeType) {
            obj.tradeType = data.tradeType;
        } else {
            obj.tradeType = GetTradeHistoryOldReq.TradeTypeEnum.TRADE;
        }
        obj.startAt = data.startAt;
        obj.endAt = data.endAt;
        if (data.currentPage) {
            obj.currentPage = data.currentPage;
        } else {
            obj.currentPage = 1;
        }
        obj.pageSize = data.pageSize;
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
    static fromJson(input: string): GetTradeHistoryOldReq {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): GetTradeHistoryOldReq {
        return plainToClassFromExist(new GetTradeHistoryOldReq(), jsonObject);
    }
}

export namespace GetTradeHistoryOldReq {
    export enum SideEnum {
        /**
         * buy
         */
        BUY = <any>'buy',
        /**
         * sell
         */
        SELL = <any>'sell',
    }
    export enum TypeEnum {
        /**
         * limit
         */
        LIMIT = <any>'limit',
        /**
         * market
         */
        MARKET = <any>'market',
        /**
         * limit_stop
         */
        LIMIT_STOP = <any>'limit_stop',
        /**
         * market_stop
         */
        MARKET_STOP = <any>'market_stop',
    }
    export enum TradeTypeEnum {
        /**
         * Spot Trading
         */
        TRADE = <any>'TRADE',
        /**
         * Cross Margin Trading
         */
        MARGIN_TRADE = <any>'MARGIN_TRADE',
        /**
         * Isolated Margin Trading
         */
        MARGIN_ISOLATED_TRADE = <any>'MARGIN_ISOLATED_TRADE',
    }
}

export class GetTradeHistoryOldReqBuilder {
    constructor(readonly obj: GetTradeHistoryOldReq) {
        this.obj = obj;
    }
    /**
     * symbol
     */
    setSymbol(value: string): GetTradeHistoryOldReqBuilder {
        this.obj.symbol = value;
        return this;
    }

    /**
     * The unique order id generated by the trading system (If orderId is specified，please ignore the other query parameters)
     */
    setOrderId(value: string): GetTradeHistoryOldReqBuilder {
        this.obj.orderId = value;
        return this;
    }

    /**
     * specify if the order is to \'buy\' or \'sell\'
     */
    setSide(value: GetTradeHistoryOldReq.SideEnum): GetTradeHistoryOldReqBuilder {
        this.obj.side = value;
        return this;
    }

    /**
     * limit, market, limit_stop or market_stop
     */
    setType(value: GetTradeHistoryOldReq.TypeEnum): GetTradeHistoryOldReqBuilder {
        this.obj.type = value;
        return this;
    }

    /**
     * The type of trading:TRADE - Spot Trading(TRADE as default), MARGIN_TRADE - Cross Margin Trading, MARGIN_ISOLATED_TRADE - Isolated Margin Trading.
     */
    setTradeType(value: GetTradeHistoryOldReq.TradeTypeEnum): GetTradeHistoryOldReqBuilder {
        this.obj.tradeType = value;
        return this;
    }

    /**
     * Start time (milisecond)
     */
    setStartAt(value: number): GetTradeHistoryOldReqBuilder {
        this.obj.startAt = value;
        return this;
    }

    /**
     * End time (milisecond)
     */
    setEndAt(value: number): GetTradeHistoryOldReqBuilder {
        this.obj.endAt = value;
        return this;
    }

    /**
     * Current request page.
     */
    setCurrentPage(value: number): GetTradeHistoryOldReqBuilder {
        this.obj.currentPage = value;
        return this;
    }

    /**
     * Number of results per request. Minimum is 10, maximum is 500.
     */
    setPageSize(value: number): GetTradeHistoryOldReqBuilder {
        this.obj.pageSize = value;
        return this;
    }

    /**
     * Get the final object.
     */
    build(): GetTradeHistoryOldReq {
        return this.obj;
    }
}

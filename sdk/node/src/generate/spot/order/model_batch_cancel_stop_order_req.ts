// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class BatchCancelStopOrderReq implements Serializable {
    /**
     * Cancel the open order for the specified symbol
     */
    symbol?: string;

    /**
     * The type of trading : TRADE（Spot）, MARGIN_TRADE (Cross Margin), MARGIN_ISOLATED_TRADE (Isolated Margin). Default is TRADE
     */
    tradeType?: string;

    /**
     * Comma seperated order IDs.
     */
    orderIds?: string;

    private constructor() {}
    /**
     * Creates a new instance of the `BatchCancelStopOrderReq` class.
     * The builder pattern allows step-by-step construction of a `BatchCancelStopOrderReq` object.
     */
    static builder(): BatchCancelStopOrderReqBuilder {
        return new BatchCancelStopOrderReqBuilder(new BatchCancelStopOrderReq());
    }

    /**
     * Creates a new instance of the `BatchCancelStopOrderReq` class with the given data.
     */
    static create(data: {
        /**
         * Cancel the open order for the specified symbol
         */
        symbol?: string;
        /**
         * The type of trading : TRADE（Spot）, MARGIN_TRADE (Cross Margin), MARGIN_ISOLATED_TRADE (Isolated Margin). Default is TRADE
         */
        tradeType?: string;
        /**
         * Comma seperated order IDs.
         */
        orderIds?: string;
    }): BatchCancelStopOrderReq {
        let obj = new BatchCancelStopOrderReq();
        obj.symbol = data.symbol;
        obj.tradeType = data.tradeType;
        obj.orderIds = data.orderIds;
        return obj;
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    static fromJson(input: string): BatchCancelStopOrderReq {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): BatchCancelStopOrderReq {
        return plainToClassFromExist(new BatchCancelStopOrderReq(), jsonObject);
    }
}

export class BatchCancelStopOrderReqBuilder {
    constructor(readonly obj: BatchCancelStopOrderReq) {
        this.obj = obj;
    }
    /**
     * Cancel the open order for the specified symbol
     */
    setSymbol(value: string): BatchCancelStopOrderReqBuilder {
        this.obj.symbol = value;
        return this;
    }

    /**
     * The type of trading : TRADE（Spot）, MARGIN_TRADE (Cross Margin), MARGIN_ISOLATED_TRADE (Isolated Margin). Default is TRADE
     */
    setTradeType(value: string): BatchCancelStopOrderReqBuilder {
        this.obj.tradeType = value;
        return this;
    }

    /**
     * Comma seperated order IDs.
     */
    setOrderIds(value: string): BatchCancelStopOrderReqBuilder {
        this.obj.orderIds = value;
        return this;
    }

    build(): BatchCancelStopOrderReq {
        return this.obj;
    }
}

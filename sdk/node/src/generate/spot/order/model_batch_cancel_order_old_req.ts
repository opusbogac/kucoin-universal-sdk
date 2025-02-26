// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class BatchCancelOrderOldReq implements Serializable {
    /**
     * symbol
     */
    symbol?: string;

    /**
     * The type of trading :TRADE(Spot Trading), MARGIN_TRADE(Cross Margin Trading), MARGIN_ISOLATED_TRADE(Isolated Margin Trading), and the default is TRADE to cancel the spot trading orders.
     */
    tradeType?: BatchCancelOrderOldReq.TradeTypeEnum = BatchCancelOrderOldReq.TradeTypeEnum.TRADE;

    /**
     * Private constructor, please use the corresponding static methods to construct the object.
     */
    private constructor() {}
    /**
     * Creates a new instance of the `BatchCancelOrderOldReq` class.
     * The builder pattern allows step-by-step construction of a `BatchCancelOrderOldReq` object.
     */
    static builder(): BatchCancelOrderOldReqBuilder {
        return new BatchCancelOrderOldReqBuilder(new BatchCancelOrderOldReq());
    }

    /**
     * Creates a new instance of the `BatchCancelOrderOldReq` class with the given data.
     */
    static create(data: {
        /**
         * symbol
         */
        symbol?: string;
        /**
         * The type of trading :TRADE(Spot Trading), MARGIN_TRADE(Cross Margin Trading), MARGIN_ISOLATED_TRADE(Isolated Margin Trading), and the default is TRADE to cancel the spot trading orders.
         */
        tradeType?: BatchCancelOrderOldReq.TradeTypeEnum;
    }): BatchCancelOrderOldReq {
        let obj = new BatchCancelOrderOldReq();
        obj.symbol = data.symbol;
        if (data.tradeType) {
            obj.tradeType = data.tradeType;
        } else {
            obj.tradeType = BatchCancelOrderOldReq.TradeTypeEnum.TRADE;
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
    static fromJson(input: string): BatchCancelOrderOldReq {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): BatchCancelOrderOldReq {
        return plainToClassFromExist(new BatchCancelOrderOldReq(), jsonObject);
    }
}

export namespace BatchCancelOrderOldReq {
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

export class BatchCancelOrderOldReqBuilder {
    constructor(readonly obj: BatchCancelOrderOldReq) {
        this.obj = obj;
    }
    /**
     * symbol
     */
    setSymbol(value: string): BatchCancelOrderOldReqBuilder {
        this.obj.symbol = value;
        return this;
    }

    /**
     * The type of trading :TRADE(Spot Trading), MARGIN_TRADE(Cross Margin Trading), MARGIN_ISOLATED_TRADE(Isolated Margin Trading), and the default is TRADE to cancel the spot trading orders.
     */
    setTradeType(value: BatchCancelOrderOldReq.TradeTypeEnum): BatchCancelOrderOldReqBuilder {
        this.obj.tradeType = value;
        return this;
    }

    /**
     * Get the final object.
     */
    build(): BatchCancelOrderOldReq {
        return this.obj;
    }
}

// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class CancelAllOrdersBySymbolReq implements Serializable {
    /**
     * symbol
     */
    symbol?: string;

    /**
     * Transaction type: MARGIN_TRADE - cross margin trade, MARGIN_ISOLATED_TRADE - isolated margin trade
     */
    tradeType?: CancelAllOrdersBySymbolReq.TradeTypeEnum;

    /**
     * Private constructor, please use the corresponding static methods to construct the object.
     */
    private constructor() {}
    /**
     * Creates a new instance of the `CancelAllOrdersBySymbolReq` class.
     * The builder pattern allows step-by-step construction of a `CancelAllOrdersBySymbolReq` object.
     */
    static builder(): CancelAllOrdersBySymbolReqBuilder {
        return new CancelAllOrdersBySymbolReqBuilder(new CancelAllOrdersBySymbolReq());
    }

    /**
     * Creates a new instance of the `CancelAllOrdersBySymbolReq` class with the given data.
     */
    static create(data: {
        /**
         * symbol
         */
        symbol?: string;
        /**
         * Transaction type: MARGIN_TRADE - cross margin trade, MARGIN_ISOLATED_TRADE - isolated margin trade
         */
        tradeType?: CancelAllOrdersBySymbolReq.TradeTypeEnum;
    }): CancelAllOrdersBySymbolReq {
        let obj = new CancelAllOrdersBySymbolReq();
        obj.symbol = data.symbol;
        obj.tradeType = data.tradeType;
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
    static fromJson(input: string): CancelAllOrdersBySymbolReq {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): CancelAllOrdersBySymbolReq {
        return plainToClassFromExist(new CancelAllOrdersBySymbolReq(), jsonObject);
    }
}

export namespace CancelAllOrdersBySymbolReq {
    export enum TradeTypeEnum {
        /**
         *
         */
        MARGIN_TRADE = <any>'MARGIN_TRADE',
        /**
         *
         */
        MARGIN_ISOLATED_TRADE = <any>'MARGIN_ISOLATED_TRADE',
    }
}

export class CancelAllOrdersBySymbolReqBuilder {
    constructor(readonly obj: CancelAllOrdersBySymbolReq) {
        this.obj = obj;
    }
    /**
     * symbol
     */
    setSymbol(value: string): CancelAllOrdersBySymbolReqBuilder {
        this.obj.symbol = value;
        return this;
    }

    /**
     * Transaction type: MARGIN_TRADE - cross margin trade, MARGIN_ISOLATED_TRADE - isolated margin trade
     */
    setTradeType(
        value: CancelAllOrdersBySymbolReq.TradeTypeEnum,
    ): CancelAllOrdersBySymbolReqBuilder {
        this.obj.tradeType = value;
        return this;
    }

    /**
     * Get the final object.
     */
    build(): CancelAllOrdersBySymbolReq {
        return this.obj;
    }
}

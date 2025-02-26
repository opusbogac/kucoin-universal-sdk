// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetTradeHistoryItems implements Serializable {
    /**
     * Id of transaction detail
     */
    id: number;

    /**
     * symbol
     */
    symbol: string;

    /**
     * Trade Id, symbol latitude increment
     */
    tradeId: number;

    /**
     * The unique order id generated by the trading system
     */
    orderId: string;

    /**
     * Counterparty order Id
     */
    counterOrderId: string;

    /**
     * Buy or sell
     */
    side: GetTradeHistoryItems.SideEnum;

    /**
     * Liquidity type: taker or maker
     */
    liquidity: GetTradeHistoryItems.LiquidityEnum;

    /**
     *
     */
    forceTaker: boolean;

    /**
     * Order price
     */
    price: string;

    /**
     * Order size
     */
    size: string;

    /**
     * Order Funds
     */
    funds: string;

    /**
     * [Handling fees](https://www.kucoin.com/docs-new/api-5327739)
     */
    fee: string;

    /**
     * Fee rate
     */
    feeRate: string;

    /**
     * currency used to calculate trading fee
     */
    feeCurrency: string;

    /**
     * Take Profit and Stop Loss type, currently HFT does not support the Take Profit and Stop Loss type, so it is empty
     */
    stop: string;

    /**
     * Trade type, redundancy param
     */
    tradeType: string;

    /**
     * Tax Rate, Users in some regions need query this field
     */
    taxRate: string;

    /**
     * Users in some regions need query this field
     */
    tax: string;

    /**
     * Specify if the order is an \'limit\' order or \'market\' order.
     */
    type: GetTradeHistoryItems.TypeEnum;

    /**
     *
     */
    createdAt: number;

    /**
     * Private constructor, please use the corresponding static methods to construct the object.
     */
    private constructor() {
        // @ts-ignore
        this.id = null;
        // @ts-ignore
        this.symbol = null;
        // @ts-ignore
        this.tradeId = null;
        // @ts-ignore
        this.orderId = null;
        // @ts-ignore
        this.counterOrderId = null;
        // @ts-ignore
        this.side = null;
        // @ts-ignore
        this.liquidity = null;
        // @ts-ignore
        this.forceTaker = null;
        // @ts-ignore
        this.price = null;
        // @ts-ignore
        this.size = null;
        // @ts-ignore
        this.funds = null;
        // @ts-ignore
        this.fee = null;
        // @ts-ignore
        this.feeRate = null;
        // @ts-ignore
        this.feeCurrency = null;
        // @ts-ignore
        this.stop = null;
        // @ts-ignore
        this.tradeType = null;
        // @ts-ignore
        this.taxRate = null;
        // @ts-ignore
        this.tax = null;
        // @ts-ignore
        this.type = null;
        // @ts-ignore
        this.createdAt = null;
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
    static fromJson(input: string): GetTradeHistoryItems {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): GetTradeHistoryItems {
        return plainToClassFromExist(new GetTradeHistoryItems(), jsonObject);
    }
}

export namespace GetTradeHistoryItems {
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
    export enum LiquidityEnum {
        /**
         *
         */
        TAKER = <any>'taker',
        /**
         *
         */
        MAKER = <any>'maker',
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

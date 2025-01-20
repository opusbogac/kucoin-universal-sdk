// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetTradeHistoryItems implements Serializable {
    /**
     * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
     */
    symbol: string;

    /**
     * Trade ID
     */
    tradeId: string;

    /**
     * Order ID
     */
    orderId: string;

    /**
     * Transaction side
     */
    side: GetTradeHistoryItems.SideEnum;

    /**
     * Liquidity- taker or maker
     */
    liquidity: GetTradeHistoryItems.LiquidityEnum;

    /**
     * Whether to force processing as a taker
     */
    forceTaker: boolean;

    /**
     * Filled price
     */
    price: string;

    /**
     * Filled amount
     */
    size: number;

    /**
     * Order value
     */
    value: string;

    /**
     * Opening transaction fee
     */
    openFeePay: string;

    /**
     * Closing transaction fee
     */
    closeFeePay: string;

    /**
     * A mark to the stop order type
     */
    stop: string;

    /**
     * Fee Rate
     */
    feeRate: string;

    /**
     * Fixed fees(Deprecated field, no actual use of the value field)
     */
    fixFee: string;

    /**
     * Charging currency
     */
    feeCurrency: string;

    /**
     * trade time in nanosecond
     */
    tradeTime: number;

    /**
     * Deprecated field, no actual use of the value field
     */
    subTradeType: string;

    /**
     * Margin mode: ISOLATED (isolated), CROSS (cross margin).
     */
    marginMode: GetTradeHistoryItems.MarginModeEnum;

    /**
     * Settle Currency
     */
    settleCurrency: string;

    /**
     * Order Type
     */
    displayType: GetTradeHistoryItems.DisplayTypeEnum;

    /**
     *
     */
    fee: string;

    /**
     * Order type
     */
    orderType: GetTradeHistoryItems.OrderTypeEnum;

    /**
     * Trade type (trade, liquid, adl or settlement)
     */
    tradeType: GetTradeHistoryItems.TradeTypeEnum;

    /**
     * Time the order created
     */
    createdAt: number;

    private constructor() {
        // @ts-ignore
        this.symbol = null;
        // @ts-ignore
        this.tradeId = null;
        // @ts-ignore
        this.orderId = null;
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
        this.value = null;
        // @ts-ignore
        this.openFeePay = null;
        // @ts-ignore
        this.closeFeePay = null;
        // @ts-ignore
        this.stop = null;
        // @ts-ignore
        this.feeRate = null;
        // @ts-ignore
        this.fixFee = null;
        // @ts-ignore
        this.feeCurrency = null;
        // @ts-ignore
        this.tradeTime = null;
        // @ts-ignore
        this.subTradeType = null;
        // @ts-ignore
        this.marginMode = null;
        // @ts-ignore
        this.settleCurrency = null;
        // @ts-ignore
        this.displayType = null;
        // @ts-ignore
        this.fee = null;
        // @ts-ignore
        this.orderType = null;
        // @ts-ignore
        this.tradeType = null;
        // @ts-ignore
        this.createdAt = null;
    }
    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    static fromJson(input: string): GetTradeHistoryItems {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): GetTradeHistoryItems {
        return plainToClassFromExist(new GetTradeHistoryItems(), jsonObject);
    }
}

export namespace GetTradeHistoryItems {
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
    export enum LiquidityEnum {
        /**
         * taker
         */
        TAKER = <any>'taker',
        /**
         * maker
         */
        MAKER = <any>'maker',
    }
    export enum MarginModeEnum {
        /**
         * Isolated Margin
         */
        ISOLATED = <any>'ISOLATED',
        /**
         * Cross Margin
         */
        CROSS = <any>'CROSS',
    }
    export enum DisplayTypeEnum {
        /**
         * Limit order
         */
        LIMIT = <any>'limit',
        /**
         * Market order
         */
        MARKET = <any>'market',
        /**
         * Stop limit order
         */
        LIMIT_STOP = <any>'limit_stop',
        /**
         * Stop Market order
         */
        MARKET_STOP = <any>'market_stop',
    }
    export enum OrderTypeEnum {
        /**
         * market
         */
        MARKET = <any>'market',
        /**
         * limit
         */
        LIMIT = <any>'limit',
    }
    export enum TradeTypeEnum {
        /**
         * trade
         */
        TRADE = <any>'trade',
        /**
         * liquid
         */
        LIQUID = <any>'liquid',
        /**
         * adl
         */
        ADL = <any>'adl',
        /**
         * settlement
         */
        SETTLEMENT = <any>'settlement',
    }
}

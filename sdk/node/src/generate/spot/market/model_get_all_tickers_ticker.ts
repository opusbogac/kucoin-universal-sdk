// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetAllTickersTicker implements Serializable {
    /**
     * Symbol
     */
    symbol: string;

    /**
     * Name of trading pairs, it would change after renaming
     */
    symbolName: string;

    /**
     * Best bid price
     */
    buy: string;

    /**
     * Best bid size
     */
    bestBidSize: string;

    /**
     * Best ask price
     */
    sell: string;

    /**
     * Best ask size
     */
    bestAskSize: string;

    /**
     * 24h change rate
     */
    changeRate: string;

    /**
     * 24h change price
     */
    changePrice: string;

    /**
     * Highest price in 24h
     */
    high: string;

    /**
     * Lowest price in 24h
     */
    low: string;

    /**
     * 24h volume, executed based on base currency
     */
    vol: string;

    /**
     * 24h traded amount
     */
    volValue: string;

    /**
     * Last traded price
     */
    last: string;

    /**
     * Average trading price in the last 24 hours
     */
    averagePrice: string;

    /**
     * Basic Taker Fee
     */
    takerFeeRate: string;

    /**
     * Basic Maker Fee
     */
    makerFeeRate: string;

    /**
     * The taker fee coefficient. The actual fee needs to be multiplied by this coefficient to get the final fee. Most currencies have a coefficient of 1. If set to 0, it means no fee
     */
    takerCoefficient: GetAllTickersTicker.TakerCoefficientEnum;

    /**
     * The maker fee coefficient. The actual fee needs to be multiplied by this coefficient to get the final fee. Most currencies have a coefficient of 1. If set to 0, it means no fee
     */
    makerCoefficient: GetAllTickersTicker.MakerCoefficientEnum;

    /**
     * Private constructor, please use the corresponding static methods to construct the object.
     */
    private constructor() {
        // @ts-ignore
        this.symbol = null;
        // @ts-ignore
        this.symbolName = null;
        // @ts-ignore
        this.buy = null;
        // @ts-ignore
        this.bestBidSize = null;
        // @ts-ignore
        this.sell = null;
        // @ts-ignore
        this.bestAskSize = null;
        // @ts-ignore
        this.changeRate = null;
        // @ts-ignore
        this.changePrice = null;
        // @ts-ignore
        this.high = null;
        // @ts-ignore
        this.low = null;
        // @ts-ignore
        this.vol = null;
        // @ts-ignore
        this.volValue = null;
        // @ts-ignore
        this.last = null;
        // @ts-ignore
        this.averagePrice = null;
        // @ts-ignore
        this.takerFeeRate = null;
        // @ts-ignore
        this.makerFeeRate = null;
        // @ts-ignore
        this.takerCoefficient = null;
        // @ts-ignore
        this.makerCoefficient = null;
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
    static fromJson(input: string): GetAllTickersTicker {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): GetAllTickersTicker {
        return plainToClassFromExist(new GetAllTickersTicker(), jsonObject);
    }
}

export namespace GetAllTickersTicker {
    export enum TakerCoefficientEnum {
        /**
         * the taker fee coefficient is 1
         */
        _1 = <any>'1',
        /**
         * no fee
         */
        _0 = <any>'0',
    }
    export enum MakerCoefficientEnum {
        /**
         * the maker fee coefficient is 1
         */
        _1 = <any>'1',
        /**
         * no fee
         */
        _0 = <any>'0',
    }
}

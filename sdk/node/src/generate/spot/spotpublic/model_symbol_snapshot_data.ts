// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { Type, instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { SymbolSnapshotDataMarketChange4h } from './model_symbol_snapshot_data_market_change4h';
import { SymbolSnapshotDataMarketChange1h } from './model_symbol_snapshot_data_market_change1h';
import { SymbolSnapshotDataMarketChange24h } from './model_symbol_snapshot_data_market_change24h';
import { Serializable } from '@internal/interfaces/serializable';

export class SymbolSnapshotData implements Serializable {
    /**
     *
     */
    askSize?: number;
    /**
     *
     */
    averagePrice?: number;
    /**
     *
     */
    baseCurrency?: string;
    /**
     *
     */
    bidSize?: number;
    /**
     * Trading pair partition： 0.primary partition 1.KuCoin Plus\", example = \"1\"
     */
    board?: SymbolSnapshotData.BoardEnum;
    /**
     *
     */
    buy?: number;
    /**
     *
     */
    changePrice?: number;
    /**
     *
     */
    changeRate?: number;
    /**
     *
     */
    close?: number;
    /**
     *
     */
    datetime?: number;
    /**
     *
     */
    high?: number;
    /**
     *
     */
    lastTradedPrice?: number;
    /**
     *
     */
    low?: number;
    /**
     *
     */
    makerCoefficient?: number;
    /**
     *
     */
    makerFeeRate?: number;
    /**
     *
     */
    marginTrade?: boolean;
    /**
     * Trading Pair Mark： 0.default 1.ST. 2.NEW\", example = \"1\"
     */
    mark?: SymbolSnapshotData.MarkEnum;
    /**
     *
     */
    market?: string;
    /**
     *
     */
    marketChange1h?: SymbolSnapshotDataMarketChange1h;
    /**
     *
     */
    marketChange24h?: SymbolSnapshotDataMarketChange24h;
    /**
     *
     */
    marketChange4h?: SymbolSnapshotDataMarketChange4h;
    /**
     *
     */
    markets?: Array<string>;
    /**
     *
     */
    open?: number;
    /**
     *
     */
    quoteCurrency?: string;
    /**
     *
     */
    sell?: number;
    /**
     *
     */
    siteTypes?: Array<string>;
    /**
     * sorting number(Pointless)
     */
    sort?: number;
    /**
     *
     */
    symbol?: string;
    /**
     *
     */
    symbolCode?: string;
    /**
     *
     */
    takerCoefficient?: number;
    /**
     *
     */
    takerFeeRate?: number;
    /**
     *
     */
    trading?: boolean;
    /**
     *
     */
    vol?: number;
    /**
     * 24-hour rolling transaction volume, refreshed every 2s
     */
    volValue?: number;

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    static fromJson(input: string): SymbolSnapshotData {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): SymbolSnapshotData {
        return plainToClassFromExist(new SymbolSnapshotData(), jsonObject);
    }
}

export namespace SymbolSnapshotData {
    export enum BoardEnum {
        /**
         * primary partition
         */
        _0 = <any>0,
        /**
         * KuCoin Plus
         */
        _1 = <any>1,
    }
    export enum MarkEnum {
        /**
         * default
         */
        _0 = <any>0,
        /**
         * ST
         */
        _1 = <any>1,
        /**
         * NEW
         */
        _2 = <any>2,
    }
}

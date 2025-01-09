// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetOpenOrdersData implements Serializable<GetOpenOrdersData> {
    /**
     * The unique order id generated by the trading system
     */
    id?: string;
    /**
     * symbol
     */
    symbol?: string;
    /**
     *
     */
    opType?: string;
    /**
     * Specify if the order is an \'limit\' order or \'market\' order.
     */
    type?: GetOpenOrdersData.TypeEnum;
    /**
     * Buy or sell
     */
    side?: GetOpenOrdersData.SideEnum;
    /**
     * Order price
     */
    price?: string;
    /**
     * Order size
     */
    size?: string;
    /**
     * Order Funds
     */
    funds?: string;
    /**
     * Number of filled transactions
     */
    dealSize?: string;
    /**
     * Funds of filled transactions
     */
    dealFunds?: string;
    /**
     * trading fee
     */
    fee?: string;
    /**
     * currency used to calculate trading fee
     */
    feeCurrency?: string;
    /**
     * [Self Trade Prevention](https://www.kucoin.com/docs-new/doc-338146) is divided into these strategies: CN, CO, CB , and DC
     */
    stp?: GetOpenOrdersData.StpEnum;
    /**
     *
     */
    stop?: string;
    /**
     *
     */
    stopTriggered?: boolean;
    /**
     *
     */
    stopPrice?: string;
    /**
     * Time in force
     */
    timeInForce?: GetOpenOrdersData.TimeInForceEnum;
    /**
     * Whether its a postOnly order.
     */
    postOnly?: boolean;
    /**
     * Whether its a hidden order.
     */
    hidden?: boolean;
    /**
     * Whether its a iceberg order.
     */
    iceberg?: boolean;
    /**
     * Visible size of iceberg order in order book.
     */
    visibleSize?: string;
    /**
     * A GTT timeInForce that expires in n seconds
     */
    cancelAfter?: number;
    /**
     *
     */
    channel?: string;
    /**
     * Client Order Id，unique identifier created by the user
     */
    clientOid?: string;
    /**
     * Order placement remarks
     */
    remark?: string;
    /**
     * Order tag
     */
    tags?: string;
    /**
     * Whether there is a cancellation record for the order.
     */
    cancelExist?: boolean;
    /**
     *
     */
    createdAt?: number;
    /**
     *
     */
    lastUpdatedAt?: number;
    /**
     * Trade type, redundancy param
     */
    tradeType?: string;
    /**
     * Whether to enter the orderbook: true: enter the orderbook; false: not enter the orderbook
     */
    inOrderBook?: boolean;
    /**
     * Number of canceled transactions
     */
    cancelledSize?: string;
    /**
     * Funds of canceled transactions
     */
    cancelledFunds?: string;
    /**
     * Number of remain transactions
     */
    remainSize?: string;
    /**
     * Funds of remain transactions
     */
    remainFunds?: string;
    /**
     * Users in some regions need query this field
     */
    tax?: string;
    /**
     * Order status: true-The status of the order isactive; false-The status of the order is done
     */
    active?: boolean;

    fromJson(input: string): GetOpenOrdersData {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetOpenOrdersData, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetOpenOrdersData {
        return plainToInstance(GetOpenOrdersData, jsonObject);
    }
}

export namespace GetOpenOrdersData {
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
    export enum StpEnum {
        /**
         *
         */
        DC = <any>'DC',
        /**
         *
         */
        CO = <any>'CO',
        /**
         *
         */
        CN = <any>'CN',
        /**
         *
         */
        CB = <any>'CB',
    }
    export enum TimeInForceEnum {
        /**
         *
         */
        GTC = <any>'GTC',
        /**
         *
         */
        GTT = <any>'GTT',
        /**
         *
         */
        IOC = <any>'IOC',
        /**
         *
         */
        FOK = <any>'FOK',
    }
}

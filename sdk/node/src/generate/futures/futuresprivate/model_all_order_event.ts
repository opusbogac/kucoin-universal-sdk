// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { WsMessage } from '@model/common';
import { WebSocketMessageCallback } from '@internal/interfaces/websocket';
import { Response } from '@internal/interfaces/serializable';

export class AllOrderEvent implements Response<WsMessage> {
    /**
     * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-221752070)
     */
    symbol: string;
    /**
     * User-specified order type
     */
    orderType?: AllOrderEvent.OrderTypeEnum;
    /**
     * buy or sell
     */
    side: AllOrderEvent.SideEnum;
    /**
     * Cumulative number of cancellations
     */
    canceledSize: string;
    /**
     * The unique order id generated by the trading system
     */
    orderId: string;
    /**
     * Margin Mode
     */
    marginMode: AllOrderEvent.MarginModeEnum;
    /**
     * Order Type
     */
    type: AllOrderEvent.TypeEnum;
    /**
     * Order time(Nanosecond)
     */
    orderTime: number;
    /**
     * User-specified order size
     */
    size: string;
    /**
     * Cumulative number of filled
     */
    filledSize: string;
    /**
     * Price
     */
    price: string;
    /**
     * Remain size
     */
    remainSize: string;
    /**
     * Order Status
     */
    status: AllOrderEvent.StatusEnum;
    /**
     * Push time(Nanosecond)
     */
    ts: number;
    /**
     * Actual transaction order type, If the counterparty order is an [Hidden/Iceberg Order](https://www.kucoin.com/docs-new/doc-338146), even if it is a maker order, this param will be displayed as taker. For actual trading fee, please refer to the **feeType**
     */
    liquidity?: AllOrderEvent.LiquidityEnum;
    /**
     * Actual Fee Type
     */
    feeType?: AllOrderEvent.FeeTypeEnum;
    /**
     * Match Price(when the type is \"match\")
     */
    matchPrice?: string;
    /**
     * Match Size (when the type is \"match\")
     */
    matchSize?: string;
    /**
     * Trade id, it is generated by Matching engine.
     */
    tradeId?: string;
    /**
     * The size before order update
     */
    oldSize?: string;
    /**
     * Client Order Id，The ClientOid field is a unique ID created by the user
     */
    clientOid?: string;
    /**
     * normal order or liquid order
     */
    tradeType: AllOrderEvent.TradeTypeEnum;

    private constructor() {
        // @ts-ignore
        this.symbol = null;
        // @ts-ignore
        this.side = null;
        // @ts-ignore
        this.canceledSize = null;
        // @ts-ignore
        this.orderId = null;
        // @ts-ignore
        this.marginMode = null;
        // @ts-ignore
        this.type = null;
        // @ts-ignore
        this.orderTime = null;
        // @ts-ignore
        this.size = null;
        // @ts-ignore
        this.filledSize = null;
        // @ts-ignore
        this.price = null;
        // @ts-ignore
        this.remainSize = null;
        // @ts-ignore
        this.status = null;
        // @ts-ignore
        this.ts = null;
        // @ts-ignore
        this.tradeType = null;
    }
    /**
     * common response
     */
    @Exclude()
    commonResponse?: WsMessage;

    setCommonResponse(response: WsMessage): void {
        this.commonResponse = response;
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
    static fromJson(input: string): AllOrderEvent {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): AllOrderEvent {
        return plainToClassFromExist(new AllOrderEvent(), jsonObject);
    }
}

export namespace AllOrderEvent {
    export enum OrderTypeEnum {
        /**
         * limit
         */
        LIMIT = <any>'limit',
        /**
         * market
         */
        MARKET = <any>'market',
    }
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
    export enum TypeEnum {
        /**
         * the order is in the order book（maker order）
         */
        OPEN = <any>'open',
        /**
         * the message sent when the order is match,  1. When the status is open and the type is match, it is a maker match.  2. When the status is match and the type is match, it is a taker match.
         */
        MATCH = <any>'match',
        /**
         * The message sent due to the order being modified: STP triggering, partial cancellation of the order. Includes these three situations:  1. When the status is open and the type is update: partial amounts of the order have been canceled, or STP triggers  2. When the status is match and the type is update: STP triggers  3. When the status is done and the type is update: partial amounts of the order have been filled and the unfilled part got canceled, or STP is triggered.
         */
        UPDATE = <any>'update',
        /**
         * The message sent when the status of the order changes to DONE after the transaction
         */
        FILLED = <any>'filled',
        /**
         * The message sent when the status of the order changes to DONE due to being canceled
         */
        CANCELED = <any>'canceled',
    }
    export enum StatusEnum {
        /**
         * the order is in the order book（maker order）
         */
        OPEN = <any>'open',
        /**
         * when taker order executes with orders in the order book, the taker order status is “match”
         */
        MATCH = <any>'match',
        /**
         * the order is fully executed successfully
         */
        DONE = <any>'done',
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
    export enum FeeTypeEnum {
        /**
         * takerFee
         */
        TAKERFEE = <any>'takerFee',
        /**
         * makerFee
         */
        MAKERFEE = <any>'makerFee',
    }
    export enum TradeTypeEnum {
        /**
         * Normal trade order
         */
        TRADE = <any>'trade',
        /**
         * Liquid order, except type&#x3D;update, all other types will be pushed
         */
        LIQUID = <any>'liquid',
    }
}

export type AllOrderEventCallback = (topic: string, subject: string, data: AllOrderEvent) => void;

export class AllOrderEventCallbackWrapper implements WebSocketMessageCallback {
    constructor(private callback: AllOrderEventCallback) {
        this.callback = callback;
    }

    onMessage(msg: WsMessage): void {
        let event = AllOrderEvent.fromObject(msg.data);
        event.setCommonResponse(msg);
        this.callback(msg.topic, msg.subject, event);
    }
}

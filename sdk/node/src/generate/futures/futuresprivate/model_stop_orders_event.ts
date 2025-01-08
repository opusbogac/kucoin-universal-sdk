// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { WsMessage } from '@model/common';
import { WebSocketMessageCallback } from '@internal/interfaces/websocket';
import { Response } from '@internal/interfaces/response';
export class StopOrdersEvent implements Response<StopOrdersEvent, WsMessage> {
    /**
     *
     */
    createdAt?: number;
    /**
     * Margin Mode
     */
    marginMode?: StopOrdersEvent.MarginModeEnum;
    /**
     * The unique order id generated by the trading system
     */
    orderId?: string;
    /**
     * Order price
     */
    orderPrice?: string;
    /**
     * User-specified order type
     */
    orderType?: StopOrdersEvent.OrderTypeEnum;
    /**
     * buy or sell
     */
    side?: StopOrdersEvent.SideEnum;
    /**
     * User-specified order size
     */
    size?: number;
    /**
     * Either \'down\' or \'up\'
     */
    stop?: StopOrdersEvent.StopEnum;
    /**
     * Stop Price
     */
    stopPrice?: string;
    /**
     *
     */
    stopPriceType?: string;
    /**
     * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-221752070)
     */
    symbol?: string;
    /**
     *
     */
    ts?: number;
    /**
     * Order Type
     */
    type?: StopOrdersEvent.TypeEnum;
    /**
     * common response
     */
    @Exclude()
    private commonResponse?: WsMessage;

    setCommonResponse(response: WsMessage): void {
        this.commonResponse = response;
    }

    fromJson(input: string): StopOrdersEvent {
        const jsonObject = JSON.parse(input);
        return plainToInstance(StopOrdersEvent, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }
    fromObject(jsonObject: Object): StopOrdersEvent {
        return plainToInstance(StopOrdersEvent, jsonObject);
    }
}

export namespace StopOrdersEvent {
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
    export enum OrderTypeEnum {
        /**
         * Stop order
         */
        STOP = <any>'stop',
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
    export enum StopEnum {
        /**
         * Triggers when the price reaches or goes below the stopPrice
         */
        DOWN = <any>'down',
        /**
         * Triggers when the price reaches or goes above the stopPrice
         */
        UP = <any>'up',
    }
    export enum TypeEnum {
        /**
         * the order is in the order book（maker order）
         */
        OPEN = <any>'open',
        /**
         * when the stop order has been triggered
         */
        TRIGGERED = <any>'triggered',
        /**
         * when the order has been canceled
         */
        CANCEL = <any>'cancel',
    }
}

export type StopOrdersEventCallback = (
    topic: string,
    subject: string,
    data: StopOrdersEvent,
) => void;

export class StopOrdersEventCallbackWrapper implements WebSocketMessageCallback {
    callback: StopOrdersEventCallback;

    constructor(callback: StopOrdersEventCallback) {
        this.callback = callback;
    }

    onMessage(msg: WsMessage): void {
        let event = new StopOrdersEvent().fromObject(msg.rawData);
        event.setCommonResponse(msg);
        this.callback(msg.topic, msg.subject, event);
    }
}

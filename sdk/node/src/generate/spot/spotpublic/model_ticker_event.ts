// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { WsMessage } from '@model/common';
import { WebSocketMessageCallback } from '@internal/interfaces/websocket';
import { Response } from '@internal/interfaces/response';

export class TickerEvent implements Response<TickerEvent, WsMessage> {
    /**
     * Sequence number
     */
    sequence?: string;
    /**
     * Last traded price
     */
    price?: string;
    /**
     * Last traded amount
     */
    size?: string;
    /**
     * Best ask price
     */
    bestAsk?: string;
    /**
     * Best ask size
     */
    bestAskSize?: string;
    /**
     * Best bid price
     */
    bestBid?: string;
    /**
     * Best bid size
     */
    bestBidSize?: string;
    /**
     * The matching time of the latest transaction
     */
    Time?: number;
    /**
     * common response
     */
    @Exclude()
    private commonResponse?: WsMessage;

    setCommonResponse(response: WsMessage): void {
        this.commonResponse = response;
    }

    fromJson(input: string): TickerEvent {
        const jsonObject = JSON.parse(input);
        return plainToInstance(TickerEvent, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): TickerEvent {
        return plainToInstance(TickerEvent, jsonObject);
    }
}

export type TickerEventCallback = (topic: string, subject: string, data: TickerEvent) => void;

export class TickerEventCallbackWrapper implements WebSocketMessageCallback {
    callback: TickerEventCallback;

    constructor(callback: TickerEventCallback) {
        this.callback = callback;
    }

    onMessage(msg: WsMessage): void {
        let event = new TickerEvent().fromObject(msg.rawData);
        event.setCommonResponse(msg);
        this.callback(msg.topic, msg.subject, event);
    }
}

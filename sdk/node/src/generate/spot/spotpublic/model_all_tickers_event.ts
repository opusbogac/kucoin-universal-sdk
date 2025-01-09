// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { WsMessage } from '@model/common';
import { WebSocketMessageCallback } from '@internal/interfaces/websocket';
import { Response } from '@internal/interfaces/response';

export class AllTickersEvent implements Response<AllTickersEvent, WsMessage> {
    /**
     *
     */
    bestAsk?: string;
    /**
     *
     */
    bestAskSize?: string;
    /**
     *
     */
    bestBid?: string;
    /**
     *
     */
    bestBidSize?: string;
    /**
     *
     */
    price?: string;
    /**
     *
     */
    sequence?: string;
    /**
     *
     */
    size?: string;
    /**
     * The matching time of the latest transaction
     */
    time?: number;
    /**
     * common response
     */
    @Exclude()
    private commonResponse?: WsMessage;

    setCommonResponse(response: WsMessage): void {
        this.commonResponse = response;
    }

    fromJson(input: string): AllTickersEvent {
        const jsonObject = JSON.parse(input);
        return plainToInstance(AllTickersEvent, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): AllTickersEvent {
        return plainToInstance(AllTickersEvent, jsonObject);
    }
}

export type AllTickersEventCallback = (
    topic: string,
    subject: string,
    data: AllTickersEvent,
) => void;

export class AllTickersEventCallbackWrapper implements WebSocketMessageCallback {
    callback: AllTickersEventCallback;

    constructor(callback: AllTickersEventCallback) {
        this.callback = callback;
    }

    onMessage(msg: WsMessage): void {
        let event = new AllTickersEvent().fromObject(msg.rawData);
        event.setCommonResponse(msg);
        this.callback(msg.topic, msg.subject, event);
    }
}

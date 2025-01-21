// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { WsMessage } from '@model/common';
import { WebSocketMessageCallback } from '@internal/interfaces/websocket';
import { Response } from '@internal/interfaces/serializable';

export class TickerV1Event implements Response<WsMessage> {
    /**
     *
     */
    symbol: string;
    /**
     *
     */
    sequence: number;
    /**
     *
     */
    side: string;
    /**
     *
     */
    size: number;
    /**
     *
     */
    price: string;
    /**
     *
     */
    bestBidSize: number;
    /**
     *
     */
    bestBidPrice: string;
    /**
     *
     */
    bestAskPrice: string;
    /**
     *
     */
    tradeId: string;
    /**
     *
     */
    bestAskSize: number;
    /**
     *
     */
    ts: number;

    private constructor() {
        // @ts-ignore
        this.symbol = null;
        // @ts-ignore
        this.sequence = null;
        // @ts-ignore
        this.side = null;
        // @ts-ignore
        this.size = null;
        // @ts-ignore
        this.price = null;
        // @ts-ignore
        this.bestBidSize = null;
        // @ts-ignore
        this.bestBidPrice = null;
        // @ts-ignore
        this.bestAskPrice = null;
        // @ts-ignore
        this.tradeId = null;
        // @ts-ignore
        this.bestAskSize = null;
        // @ts-ignore
        this.ts = null;
    }
    /**
     * common response
     */
    @Exclude()
    private commonResponse?: WsMessage;

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
    static fromJson(input: string): TickerV1Event {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): TickerV1Event {
        return plainToClassFromExist(new TickerV1Event(), jsonObject);
    }
}

export type TickerV1EventCallback = (topic: string, subject: string, data: TickerV1Event) => void;

export class TickerV1EventCallbackWrapper implements WebSocketMessageCallback {
    constructor(private callback: TickerV1EventCallback) {
        this.callback = callback;
    }

    onMessage(msg: WsMessage): void {
        let event = TickerV1Event.fromObject(msg.data);
        event.setCommonResponse(msg);
        this.callback(msg.topic, msg.subject, event);
    }
}

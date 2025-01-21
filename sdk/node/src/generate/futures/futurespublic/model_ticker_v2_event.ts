// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { WsMessage } from '@model/common';
import { WebSocketMessageCallback } from '@internal/interfaces/websocket';
import { Response } from '@internal/interfaces/serializable';

export class TickerV2Event implements Response<WsMessage> {
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
        this.bestBidSize = null;
        // @ts-ignore
        this.bestBidPrice = null;
        // @ts-ignore
        this.bestAskPrice = null;
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
    static fromJson(input: string): TickerV2Event {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): TickerV2Event {
        return plainToClassFromExist(new TickerV2Event(), jsonObject);
    }
}

export type TickerV2EventCallback = (topic: string, subject: string, data: TickerV2Event) => void;

export class TickerV2EventCallbackWrapper implements WebSocketMessageCallback {
    constructor(private callback: TickerV2EventCallback) {
        this.callback = callback;
    }

    onMessage(msg: WsMessage): void {
        let event = TickerV2Event.fromObject(msg.data);
        event.setCommonResponse(msg);
        this.callback(msg.topic, msg.subject, event);
    }
}

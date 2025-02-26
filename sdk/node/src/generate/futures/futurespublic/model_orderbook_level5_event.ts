// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { WsMessage } from '@model/common';
import { WebSocketMessageCallback } from '@internal/interfaces/websocket';
import { Response } from '@internal/interfaces/serializable';

export class OrderbookLevel5Event implements Response<WsMessage> {
    /**
     *
     */
    bids: Array<Array<any>>;
    /**
     *
     */
    sequence: number;
    /**
     *
     */
    timestamp: number;
    /**
     *
     */
    ts: number;
    /**
     *
     */
    asks: Array<Array<any>>;

    private constructor() {
        // @ts-ignore
        this.bids = null;
        // @ts-ignore
        this.sequence = null;
        // @ts-ignore
        this.timestamp = null;
        // @ts-ignore
        this.ts = null;
        // @ts-ignore
        this.asks = null;
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
    static fromJson(input: string): OrderbookLevel5Event {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): OrderbookLevel5Event {
        return plainToClassFromExist(new OrderbookLevel5Event(), jsonObject);
    }
}

export type OrderbookLevel5EventCallback = (
    topic: string,
    subject: string,
    data: OrderbookLevel5Event,
) => void;

export class OrderbookLevel5EventCallbackWrapper implements WebSocketMessageCallback {
    constructor(private callback: OrderbookLevel5EventCallback) {
        this.callback = callback;
    }

    onMessage(msg: WsMessage): void {
        let event = OrderbookLevel5Event.fromObject(msg.data);
        event.setCommonResponse(msg);
        this.callback(msg.topic, msg.subject, event);
    }
}

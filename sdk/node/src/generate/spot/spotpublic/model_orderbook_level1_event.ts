// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { WsMessage } from '@model/common';
import { WebSocketMessageCallback } from '@internal/interfaces/websocket';
import { Response } from '@internal/interfaces/serializable';

export class OrderbookLevel1Event implements Response<WsMessage> {
    /**
     * price, size
     */
    asks: Array<string>;
    /**
     *
     */
    bids: Array<string>;
    /**
     *
     */
    timestamp: number;

    private constructor() {
        // @ts-ignore
        this.asks = null;
        // @ts-ignore
        this.bids = null;
        // @ts-ignore
        this.timestamp = null;
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
    static fromJson(input: string): OrderbookLevel1Event {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): OrderbookLevel1Event {
        return plainToClassFromExist(new OrderbookLevel1Event(), jsonObject);
    }
}

export type OrderbookLevel1EventCallback = (
    topic: string,
    subject: string,
    data: OrderbookLevel1Event,
) => void;

export class OrderbookLevel1EventCallbackWrapper implements WebSocketMessageCallback {
    constructor(private callback: OrderbookLevel1EventCallback) {
        this.callback = callback;
    }

    onMessage(msg: WsMessage): void {
        let event = OrderbookLevel1Event.fromObject(msg.data);
        event.setCommonResponse(msg);
        this.callback(msg.topic, msg.subject, event);
    }
}

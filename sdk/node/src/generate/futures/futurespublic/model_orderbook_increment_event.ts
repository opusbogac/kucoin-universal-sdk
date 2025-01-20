// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { WsMessage } from '@model/common';
import { WebSocketMessageCallback } from '@internal/interfaces/websocket';
import { Response } from '@internal/interfaces/serializable';

export class OrderbookIncrementEvent implements Response<WsMessage> {
    /**
     *
     */
    sequence: number;
    /**
     *
     */
    change: string;
    /**
     *
     */
    timestamp: number;

    private constructor() {
        // @ts-ignore
        this.sequence = null;
        // @ts-ignore
        this.change = null;
        // @ts-ignore
        this.timestamp = null;
    }
    /**
     * common response
     */
    @Exclude()
    private commonResponse?: WsMessage;

    setCommonResponse(response: WsMessage): void {
        this.commonResponse = response;
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    static fromJson(input: string): OrderbookIncrementEvent {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): OrderbookIncrementEvent {
        return plainToClassFromExist(new OrderbookIncrementEvent(), jsonObject);
    }
}

export type OrderbookIncrementEventCallback = (
    topic: string,
    subject: string,
    data: OrderbookIncrementEvent,
) => void;

export class OrderbookIncrementEventCallbackWrapper implements WebSocketMessageCallback {
    constructor(private callback: OrderbookIncrementEventCallback) {
        this.callback = callback;
    }

    onMessage(msg: WsMessage): void {
        let event = OrderbookIncrementEvent.fromObject(msg.data);
        event.setCommonResponse(msg);
        this.callback(msg.topic, msg.subject, event);
    }
}

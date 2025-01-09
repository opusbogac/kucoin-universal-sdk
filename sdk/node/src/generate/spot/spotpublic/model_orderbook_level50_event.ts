// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { Type, instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { OrderbookLevel50Changes } from './model_orderbook_level50_changes';
import { WsMessage } from '@model/common';
import { WebSocketMessageCallback } from '@internal/interfaces/websocket';
import { Response } from '@internal/interfaces/response';

export class OrderbookLevel50Event implements Response<OrderbookLevel50Event, WsMessage> {
    /**
     *
     */
    changes?: OrderbookLevel50Changes;
    /**
     *
     */
    sequenceEnd?: number;
    /**
     *
     */
    sequenceStart?: number;
    /**
     *
     */
    symbol?: string;
    /**
     *
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

    fromJson(input: string): OrderbookLevel50Event {
        const jsonObject = JSON.parse(input);
        return plainToInstance(OrderbookLevel50Event, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): OrderbookLevel50Event {
        return plainToInstance(OrderbookLevel50Event, jsonObject);
    }
}

export type OrderbookLevel50EventCallback = (
    topic: string,
    subject: string,
    data: OrderbookLevel50Event,
) => void;

export class OrderbookLevel50EventCallbackWrapper implements WebSocketMessageCallback {
    constructor(private callback: OrderbookLevel50EventCallback) {
        this.callback = callback;
    }

    onMessage(msg: WsMessage): void {
        let event = new OrderbookLevel50Event().fromObject(msg.data);
        event.setCommonResponse(msg);
        this.callback(msg.topic, msg.subject, event);
    }
}

// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { WsMessage } from '@model/common';
import { WebSocketMessageCallback } from '@internal/interfaces/websocket';
import { Response } from '@internal/interfaces/response';

export class OrderbookLevel5Event implements Response<OrderbookLevel5Event, WsMessage> {
    /**
     * price, size
     */
    asks?: Array<Array<string>>;
    /**
     *
     */
    bids?: Array<Array<string>>;
    /**
     *
     */
    timestamp?: number;
    /**
     * common response
     */
    @Exclude()
    private commonResponse?: WsMessage;

    setCommonResponse(response: WsMessage): void {
        this.commonResponse = response;
    }

    fromJson(input: string): OrderbookLevel5Event {
        const jsonObject = JSON.parse(input);
        return plainToInstance(OrderbookLevel5Event, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): OrderbookLevel5Event {
        return plainToInstance(OrderbookLevel5Event, jsonObject);
    }
}

export type OrderbookLevel5EventCallback = (
    topic: string,
    subject: string,
    data: OrderbookLevel5Event,
) => void;

export class OrderbookLevel5EventCallbackWrapper implements WebSocketMessageCallback {
    callback: OrderbookLevel5EventCallback;

    constructor(callback: OrderbookLevel5EventCallback) {
        this.callback = callback;
    }

    onMessage(msg: WsMessage): void {
        let event = new OrderbookLevel5Event().fromObject(msg.rawData);
        event.setCommonResponse(msg);
        this.callback(msg.topic, msg.subject, event);
    }
}

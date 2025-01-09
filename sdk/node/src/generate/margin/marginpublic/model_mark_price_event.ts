// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { WsMessage } from '@model/common';
import { WebSocketMessageCallback } from '@internal/interfaces/websocket';
import { Response } from '@internal/interfaces/response';

export class MarkPriceEvent implements Response<MarkPriceEvent, WsMessage> {
    /**
     *
     */
    symbol?: string;
    /**
     *
     */
    granularity?: number;
    /**
     *
     */
    timestamp?: number;
    /**
     *
     */
    value?: number;

    /**
     * common response
     */
    @Exclude()
    private commonResponse?: WsMessage;

    setCommonResponse(response: WsMessage): void {
        this.commonResponse = response;
    }

    fromJson(input: string): MarkPriceEvent {
        const jsonObject = JSON.parse(input);
        return plainToInstance(MarkPriceEvent, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): MarkPriceEvent {
        return plainToInstance(MarkPriceEvent, jsonObject);
    }
}

export type MarkPriceEventCallback = (topic: string, subject: string, data: MarkPriceEvent) => void;

export class MarkPriceEventCallbackWrapper implements WebSocketMessageCallback {
    constructor(private callback: MarkPriceEventCallback) {
        this.callback = callback;
    }

    onMessage(msg: WsMessage): void {
        let event = new MarkPriceEvent().fromObject(msg.data);
        event.setCommonResponse(msg);
        this.callback(msg.topic, msg.subject, event);
    }
}

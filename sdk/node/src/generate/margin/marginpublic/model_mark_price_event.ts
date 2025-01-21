// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { WsMessage } from '@model/common';
import { WebSocketMessageCallback } from '@internal/interfaces/websocket';
import { Response } from '@internal/interfaces/serializable';

export class MarkPriceEvent implements Response<WsMessage> {
    /**
     *
     */
    symbol: string;
    /**
     *
     */
    granularity: number;
    /**
     *
     */
    timestamp: number;
    /**
     *
     */
    value: number;

    private constructor() {
        // @ts-ignore
        this.symbol = null;
        // @ts-ignore
        this.granularity = null;
        // @ts-ignore
        this.timestamp = null;
        // @ts-ignore
        this.value = null;
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
    static fromJson(input: string): MarkPriceEvent {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): MarkPriceEvent {
        return plainToClassFromExist(new MarkPriceEvent(), jsonObject);
    }
}

export type MarkPriceEventCallback = (topic: string, subject: string, data: MarkPriceEvent) => void;

export class MarkPriceEventCallbackWrapper implements WebSocketMessageCallback {
    constructor(private callback: MarkPriceEventCallback) {
        this.callback = callback;
    }

    onMessage(msg: WsMessage): void {
        let event = MarkPriceEvent.fromObject(msg.data);
        event.setCommonResponse(msg);
        this.callback(msg.topic, msg.subject, event);
    }
}

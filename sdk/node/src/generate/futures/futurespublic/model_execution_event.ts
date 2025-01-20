// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { WsMessage } from '@model/common';
import { WebSocketMessageCallback } from '@internal/interfaces/websocket';
import { Response } from '@internal/interfaces/serializable';

export class ExecutionEvent implements Response<WsMessage> {
    /**
     *
     */
    symbol?: string;
    /**
     *
     */
    sequence?: number;
    /**
     *
     */
    side?: string;
    /**
     *
     */
    size?: number;
    /**
     *
     */
    price?: string;
    /**
     *
     */
    takerOrderId?: string;
    /**
     *
     */
    makerOrderId?: string;
    /**
     *
     */
    tradeId?: string;
    /**
     *
     */
    ts?: number;

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

    static fromJson(input: string): ExecutionEvent {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): ExecutionEvent {
        return plainToClassFromExist(new ExecutionEvent(), jsonObject);
    }
}

export type ExecutionEventCallback = (topic: string, subject: string, data: ExecutionEvent) => void;

export class ExecutionEventCallbackWrapper implements WebSocketMessageCallback {
    constructor(private callback: ExecutionEventCallback) {
        this.callback = callback;
    }

    onMessage(msg: WsMessage): void {
        let event = ExecutionEvent.fromObject(msg.data);
        event.setCommonResponse(msg);
        this.callback(msg.topic, msg.subject, event);
    }
}

// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { WsMessage } from '@model/common';
import { WebSocketMessageCallback } from '@internal/interfaces/websocket';
import { Response } from '@internal/interfaces/response';

export class SymbolSnapshotEvent implements Response<SymbolSnapshotEvent, WsMessage> {
    /**
     *
     */
    highPrice?: number;
    /**
     *
     */
    lastPrice?: number;
    /**
     *
     */
    lowPrice?: number;
    /**
     *
     */
    price24HoursBefore?: number;
    /**
     *
     */
    priceChg?: number;
    /**
     *
     */
    priceChgPct?: number;
    /**
     *
     */
    symbol?: string;
    /**
     *
     */
    ts?: number;
    /**
     *
     */
    turnover?: number;
    /**
     *
     */
    volume?: number;

    /**
     * common response
     */
    @Exclude()
    private commonResponse?: WsMessage;

    setCommonResponse(response: WsMessage): void {
        this.commonResponse = response;
    }

    fromJson(input: string): SymbolSnapshotEvent {
        const jsonObject = JSON.parse(input);
        return plainToInstance(SymbolSnapshotEvent, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): SymbolSnapshotEvent {
        return plainToInstance(SymbolSnapshotEvent, jsonObject);
    }
}

export type SymbolSnapshotEventCallback = (
    topic: string,
    subject: string,
    data: SymbolSnapshotEvent,
) => void;

export class SymbolSnapshotEventCallbackWrapper implements WebSocketMessageCallback {
    constructor(private callback: SymbolSnapshotEventCallback) {
        this.callback = callback;
    }

    onMessage(msg: WsMessage): void {
        let event = new SymbolSnapshotEvent().fromObject(msg.rawData);
        event.setCommonResponse(msg);
        this.callback(msg.topic, msg.subject, event);
    }
}

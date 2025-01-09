// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { Type, instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { MarketSnapshotData } from './model_market_snapshot_data';
import { WsMessage } from '@model/common';
import { WebSocketMessageCallback } from '@internal/interfaces/websocket';
import { Response } from '@internal/interfaces/response';

export class MarketSnapshotEvent implements Response<MarketSnapshotEvent, WsMessage> {
    /**
     *
     */
    sequence?: string;
    /**
     *
     */
    data?: MarketSnapshotData;
    /**
     * common response
     */
    @Exclude()
    private commonResponse?: WsMessage;

    setCommonResponse(response: WsMessage): void {
        this.commonResponse = response;
    }

    fromJson(input: string): MarketSnapshotEvent {
        const jsonObject = JSON.parse(input);
        return plainToInstance(MarketSnapshotEvent, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): MarketSnapshotEvent {
        return plainToInstance(MarketSnapshotEvent, jsonObject);
    }
}

export type MarketSnapshotEventCallback = (
    topic: string,
    subject: string,
    data: MarketSnapshotEvent,
) => void;

export class MarketSnapshotEventCallbackWrapper implements WebSocketMessageCallback {
    callback: MarketSnapshotEventCallback;

    constructor(callback: MarketSnapshotEventCallback) {
        this.callback = callback;
    }

    onMessage(msg: WsMessage): void {
        let event = new MarketSnapshotEvent().fromObject(msg.rawData);
        event.setCommonResponse(msg);
        this.callback(msg.topic, msg.subject, event);
    }
}

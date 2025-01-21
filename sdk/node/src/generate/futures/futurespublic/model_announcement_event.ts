// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { WsMessage } from '@model/common';
import { WebSocketMessageCallback } from '@internal/interfaces/websocket';
import { Response } from '@internal/interfaces/serializable';

export class AnnouncementEvent implements Response<WsMessage> {
    /**
     * Symbol
     */
    symbol: string;
    /**
     * Funding time
     */
    fundingTime: number;
    /**
     * Funding rate
     */
    fundingRate: number;
    /**
     *
     */
    timestamp: number;

    private constructor() {
        // @ts-ignore
        this.symbol = null;
        // @ts-ignore
        this.fundingTime = null;
        // @ts-ignore
        this.fundingRate = null;
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

    /**
     * Convert the object to a JSON string.
     */
    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }
    /**
     * Create an object from a JSON string.
     */
    static fromJson(input: string): AnnouncementEvent {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): AnnouncementEvent {
        return plainToClassFromExist(new AnnouncementEvent(), jsonObject);
    }
}

export type AnnouncementEventCallback = (
    topic: string,
    subject: string,
    data: AnnouncementEvent,
) => void;

export class AnnouncementEventCallbackWrapper implements WebSocketMessageCallback {
    constructor(private callback: AnnouncementEventCallback) {
        this.callback = callback;
    }

    onMessage(msg: WsMessage): void {
        let event = AnnouncementEvent.fromObject(msg.data);
        event.setCommonResponse(msg);
        this.callback(msg.topic, msg.subject, event);
    }
}

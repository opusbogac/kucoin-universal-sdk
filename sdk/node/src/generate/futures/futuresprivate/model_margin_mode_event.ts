// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { WsMessage } from '@model/common';
import { WebSocketMessageCallback } from '@internal/interfaces/websocket';
import { Response } from '@internal/interfaces/response';

export class MarginModeEvent implements Response<MarginModeEvent, WsMessage> {
    /**
     * The SYMBOL is the key with value  \"CROSS\" or \"ISOLATED\"
     */
    SYMBOL?: string;
    /**
     * common response
     */
    @Exclude()
    private commonResponse?: WsMessage;

    setCommonResponse(response: WsMessage): void {
        this.commonResponse = response;
    }

    fromJson(input: string): MarginModeEvent {
        const jsonObject = JSON.parse(input);
        return plainToInstance(MarginModeEvent, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): MarginModeEvent {
        return plainToInstance(MarginModeEvent, jsonObject);
    }
}

export type MarginModeEventCallback = (
    topic: string,
    subject: string,
    data: MarginModeEvent,
) => void;

export class MarginModeEventCallbackWrapper implements WebSocketMessageCallback {
    callback: MarginModeEventCallback;

    constructor(callback: MarginModeEventCallback) {
        this.callback = callback;
    }

    onMessage(msg: WsMessage): void {
        let event = new MarginModeEvent().fromObject(msg.rawData);
        event.setCommonResponse(msg);
        this.callback(msg.topic, msg.subject, event);
    }
}

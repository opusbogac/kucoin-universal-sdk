// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { Type, instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { CrossLeverageDataValue } from './model_cross_leverage_data_value';
import { WsMessage } from '@model/common';
import { WebSocketMessageCallback } from '@internal/interfaces/websocket';
import { Response } from '@internal/interfaces/response';

export class CrossLeverageEvent implements Response<CrossLeverageEvent, WsMessage> {
    /**
     *
     */
    data?: { [key: string]: CrossLeverageDataValue };

    /**
     * common response
     */
    @Exclude()
    private commonResponse?: WsMessage;

    setCommonResponse(response: WsMessage): void {
        this.commonResponse = response;
    }

    fromJson(input: string): CrossLeverageEvent {
        const jsonObject = JSON.parse(input);
        return plainToInstance(CrossLeverageEvent, { data: jsonObject });
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this.data));
    }

    fromObject(jsonObject: Object): CrossLeverageEvent {
        return plainToInstance(CrossLeverageEvent, { data: jsonObject });
    }
}

export type CrossLeverageEventCallback = (
    topic: string,
    subject: string,
    data: CrossLeverageEvent,
) => void;

export class CrossLeverageEventCallbackWrapper implements WebSocketMessageCallback {
    constructor(private callback: CrossLeverageEventCallback) {
        this.callback = callback;
    }

    onMessage(msg: WsMessage): void {
        let event = new CrossLeverageEvent().fromObject(msg.rawData);
        event.setCommonResponse(msg);
        this.callback(msg.topic, msg.subject, event);
    }
}

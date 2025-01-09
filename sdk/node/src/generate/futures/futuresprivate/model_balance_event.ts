// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { WsMessage } from '@model/common';
import { WebSocketMessageCallback } from '@internal/interfaces/websocket';
import { Response } from '@internal/interfaces/response';

export class BalanceEvent implements Response<BalanceEvent, WsMessage> {
    /**
     * Margin of the cross margin position
     */
    crossPosMargin?: string;
    /**
     * Margin of the isolated margin order
     */
    isolatedOrderMargin?: string;
    /**
     * Frozen Balance
     */
    holdBalance?: string;
    /**
     * Equity
     */
    equity?: string;
    /**
     * Version. When holding a cross margin position, the available balance may change with fluctuations in the mark price, leading to discrepancies in the available balance for the same version number.
     */
    version?: string;
    /**
     * Available Balance
     */
    availableBalance?: string;
    /**
     * Margin of the isolated margin position, including isolated margin funding fees
     */
    isolatedPosMargin?: string;
    /**
     * Wallet Balance
     */
    walletBalance?: string;
    /**
     * Isolated margin funding fee
     */
    isolatedFundingFeeMargin?: string;
    /**
     * Unrealized PNL in cross margin mode
     */
    crossUnPnl?: string;
    /**
     * Total margin under cross margin mode
     */
    totalCrossMargin?: string;
    /**
     * Currency Symbol
     */
    currency?: string;
    /**
     *  Unrealized PNL in isolated margin mode
     */
    isolatedUnPnl?: string;
    /**
     * Margin of the cross margin order
     */
    crossOrderMargin?: string;
    /**
     * Last modified time
     */
    timestamp?: string;

    /**
     * common response
     */
    @Exclude()
    private commonResponse?: WsMessage;

    setCommonResponse(response: WsMessage): void {
        this.commonResponse = response;
    }

    fromJson(input: string): BalanceEvent {
        const jsonObject = JSON.parse(input);
        return plainToInstance(BalanceEvent, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): BalanceEvent {
        return plainToInstance(BalanceEvent, jsonObject);
    }
}

export type BalanceEventCallback = (topic: string, subject: string, data: BalanceEvent) => void;

export class BalanceEventCallbackWrapper implements WebSocketMessageCallback {
    constructor(private callback: BalanceEventCallback) {
        this.callback = callback;
    }

    onMessage(msg: WsMessage): void {
        let event = new BalanceEvent().fromObject(msg.data);
        event.setCommonResponse(msg);
        this.callback(msg.topic, msg.subject, event);
    }
}

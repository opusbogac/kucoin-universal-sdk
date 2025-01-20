// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { Type, instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { IsolatedMarginPositionChangeAssetsValue } from './model_isolated_margin_position_change_assets_value';
import { WsMessage } from '@model/common';
import { WebSocketMessageCallback } from '@internal/interfaces/websocket';
import { Response } from '@internal/interfaces/serializable';

export class IsolatedMarginPositionEvent implements Response<WsMessage> {
    /**
     * Isolated margin symbol
     */
    tag: string;
    /**
     * Position status
     */
    status: IsolatedMarginPositionEvent.StatusEnum;
    /**
     * Status type
     */
    statusBizType: IsolatedMarginPositionEvent.StatusBizTypeEnum;
    /**
     * Accumulated principal
     */
    accumulatedPrincipal: string;
    /**
     *
     */
    changeAssets: { [key: string]: IsolatedMarginPositionChangeAssetsValue };
    /**
     *
     */
    timestamp: number;

    private constructor() {
        // @ts-ignore
        this.tag = null;
        // @ts-ignore
        this.status = null;
        // @ts-ignore
        this.statusBizType = null;
        // @ts-ignore
        this.accumulatedPrincipal = null;
        // @ts-ignore
        this.changeAssets = null;
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

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    static fromJson(input: string): IsolatedMarginPositionEvent {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): IsolatedMarginPositionEvent {
        return plainToClassFromExist(new IsolatedMarginPositionEvent(), jsonObject);
    }
}

export namespace IsolatedMarginPositionEvent {
    export enum StatusEnum {
        /**
         * Debt
         */
        DEBT = <any>'DEBT',
        /**
         * debt-free
         */
        CLEAR = <any>'CLEAR',
        /**
         * Borrowing
         */
        IN_BORROW = <any>'IN_BORROW',
        /**
         * Repayment in progress
         */
        IN_REPAY = <any>'IN_REPAY',
        /**
         * Position closing
         */
        IN_LIQUIDATION = <any>'IN_LIQUIDATION',
        /**
         * Automatically renewing
         */
        IN_AUTO_RENEW = <any>'IN_AUTO_RENEW',
    }
    export enum StatusBizTypeEnum {
        /**
         * Liquidation
         */
        FORCE_LIQUIDATION = <any>'FORCE_LIQUIDATION',
        /**
         * User borrow
         */
        USER_BORROW = <any>'USER_BORROW',
        /**
         * Trade auto borrow
         */
        TRADE_AUTO_BORROW = <any>'TRADE_AUTO_BORROW',
        /**
         * User reply
         */
        USER_REPAY = <any>'USER_REPAY',
        /**
         * Auto reply
         */
        AUTO_REPAY = <any>'AUTO_REPAY',
        /**
         * In debt
         */
        DEFAULT_DEBT = <any>'DEFAULT_DEBT',
        /**
         * No debt
         */
        DEFAULT_CLEAR = <any>'DEFAULT_CLEAR',
        /**
         * One click liquidation
         */
        ONE_CLICK_LIQUIDATION = <any>'ONE_CLICK_LIQUIDATION',
        /**
         * B2C interest settle liquidation
         */
        B2C_INTEREST_SETTLE_LIQUIDATION = <any>'B2C_INTEREST_SETTLE_LIQUIDATION',
        /**
         * Air drop liquidation
         */
        AIR_DROP_LIQUIDATION = <any>'AIR_DROP_LIQUIDATION',
    }
}

export type IsolatedMarginPositionEventCallback = (
    topic: string,
    subject: string,
    data: IsolatedMarginPositionEvent,
) => void;

export class IsolatedMarginPositionEventCallbackWrapper implements WebSocketMessageCallback {
    constructor(private callback: IsolatedMarginPositionEventCallback) {
        this.callback = callback;
    }

    onMessage(msg: WsMessage): void {
        let event = IsolatedMarginPositionEvent.fromObject(msg.data);
        event.setCommonResponse(msg);
        this.callback(msg.topic, msg.subject, event);
    }
}

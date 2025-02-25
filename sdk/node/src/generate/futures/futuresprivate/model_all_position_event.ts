// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { WsMessage } from '@model/common';
import { WebSocketMessageCallback } from '@internal/interfaces/websocket';
import { Response } from '@internal/interfaces/serializable';

export class AllPositionEvent implements Response<WsMessage> {
    /**
     * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-221752070)
     */
    symbol: string;
    /**
     * Whether it is cross margin.
     */
    crossMode: boolean;
    /**
     * ADL ranking percentile
     */
    delevPercentage: number;
    /**
     * Open time
     */
    openingTimestamp: number;
    /**
     * Current timestamp
     */
    currentTimestamp: number;
    /**
     * Current postion quantity
     */
    currentQty: number;
    /**
     * Current postion value
     */
    currentCost: number;
    /**
     * Current commission
     */
    currentComm: number;
    /**
     * Unrealised value
     */
    unrealisedCost: number;
    /**
     * Accumulated realised gross profit value
     */
    realisedGrossCost: number;
    /**
     * Current realised position value
     */
    realisedCost: number;
    /**
     * Opened position or not
     */
    isOpen: boolean;
    /**
     * Mark price
     */
    markPrice: number;
    /**
     * Mark Value
     */
    markValue: number;
    /**
     * Position value
     */
    posCost: number;
    /**
     * Inital margin Cross = opening value/cross leverage; isolated = accumulation of initial margin for each transaction
     */
    posInit: number;
    /**
     * Bankruptcy cost Cross = mark value * imr; Isolated = position margin (accumulation of initial margin, additional margin, generated funding fees, etc.)
     */
    posMargin: number;
    /**
     * Accumulated realised gross profit value
     */
    realisedGrossPnl: number;
    /**
     * Realised profit and loss
     */
    realisedPnl: number;
    /**
     * Unrealised profit and loss
     */
    unrealisedPnl: number;
    /**
     * Profit-loss ratio of the position
     */
    unrealisedPnlPcnt: number;
    /**
     * Rate of return on investment
     */
    unrealisedRoePcnt: number;
    /**
     * Average entry price
     */
    avgEntryPrice: number;
    /**
     * Liquidation price For Cross Margin, you can refer to the liquidationPrice, and the liquidation is based on the risk rate.
     */
    liquidationPrice: number;
    /**
     * Bankruptcy price For Cross Margin, you can refer to the bankruptPrice, and the liquidation is based on the risk rate.
     */
    bankruptPrice: number;
    /**
     * Currency used to clear and settle the trades
     */
    settleCurrency: string;
    /**
     * Margin Mode: CROSS，ISOLATED
     */
    marginMode: AllPositionEvent.MarginModeEnum;
    /**
     * Position Side
     */
    positionSide: AllPositionEvent.PositionSideEnum;
    /**
     * Leverage
     */
    leverage: number;
    /**
     * Auto deposit margin or not **Only applicable to Isolated Margin**
     */
    autoDeposit?: boolean;
    /**
     * Maintenance margin requirement **Only applicable to Isolated Margin**
     */
    maintMarginReq?: number;
    /**
     * Risk limit **Only applicable to Isolated Margin**
     */
    riskLimit?: number;
    /**
     * Leverage of the order **Only applicable to Isolated Margin**
     */
    realLeverage?: number;
    /**
     * added margin **Only applicable to Isolated Margin**
     */
    posCross?: number;
    /**
     * Bankruptcy cost **Only applicable to Isolated Margin**
     */
    posComm?: number;
    /**
     * Funding fees paid out **Only applicable to Isolated Margin**
     */
    posLoss?: number;
    /**
     * The current remaining unsettled funding fee for the position **Only applicable to Isolated Margin**
     */
    posFunding?: number;
    /**
     * Maintenance margin **Only applicable to Isolated Margin**
     */
    posMaint?: number;
    /**
     * Position margin **Only applicable to Isolated Margin**
     */
    maintMargin?: number;
    /**
     * Funding time
     */
    fundingTime?: number;
    /**
     * Position size
     */
    qty?: number;
    /**
     * Funding rate
     */
    fundingRate?: number;
    /**
     * Funding fees
     */
    fundingFee?: number;
    /**
     * Funding Fee Settlement Time (nanosecond)
     */
    ts?: number;
    /**
     * Adjustment isolated margin risk limit level successful or not
     */
    success?: boolean;
    /**
     * Adjustment isolated margin risk limit level failure reason
     */
    msg?: string;

    private constructor() {
        // @ts-ignore
        this.symbol = null;
        // @ts-ignore
        this.crossMode = null;
        // @ts-ignore
        this.delevPercentage = null;
        // @ts-ignore
        this.openingTimestamp = null;
        // @ts-ignore
        this.currentTimestamp = null;
        // @ts-ignore
        this.currentQty = null;
        // @ts-ignore
        this.currentCost = null;
        // @ts-ignore
        this.currentComm = null;
        // @ts-ignore
        this.unrealisedCost = null;
        // @ts-ignore
        this.realisedGrossCost = null;
        // @ts-ignore
        this.realisedCost = null;
        // @ts-ignore
        this.isOpen = null;
        // @ts-ignore
        this.markPrice = null;
        // @ts-ignore
        this.markValue = null;
        // @ts-ignore
        this.posCost = null;
        // @ts-ignore
        this.posInit = null;
        // @ts-ignore
        this.posMargin = null;
        // @ts-ignore
        this.realisedGrossPnl = null;
        // @ts-ignore
        this.realisedPnl = null;
        // @ts-ignore
        this.unrealisedPnl = null;
        // @ts-ignore
        this.unrealisedPnlPcnt = null;
        // @ts-ignore
        this.unrealisedRoePcnt = null;
        // @ts-ignore
        this.avgEntryPrice = null;
        // @ts-ignore
        this.liquidationPrice = null;
        // @ts-ignore
        this.bankruptPrice = null;
        // @ts-ignore
        this.settleCurrency = null;
        // @ts-ignore
        this.marginMode = null;
        // @ts-ignore
        this.positionSide = null;
        // @ts-ignore
        this.leverage = null;
    }
    /**
     * common response
     */
    @Exclude()
    commonResponse?: WsMessage;

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
    static fromJson(input: string): AllPositionEvent {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): AllPositionEvent {
        return plainToClassFromExist(new AllPositionEvent(), jsonObject);
    }
}

export namespace AllPositionEvent {
    export enum MarginModeEnum {
        /**
         * cross margin
         */
        CROSS = <any>'CROSS',
        /**
         * isolated margin
         */
        ISOLATED = <any>'ISOLATED',
    }
    export enum PositionSideEnum {
        /**
         * One-way position
         */
        BOTH = <any>'BOTH',
    }
}

export type AllPositionEventCallback = (
    topic: string,
    subject: string,
    data: AllPositionEvent,
) => void;

export class AllPositionEventCallbackWrapper implements WebSocketMessageCallback {
    constructor(private callback: AllPositionEventCallback) {
        this.callback = callback;
    }

    onMessage(msg: WsMessage): void {
        let event = AllPositionEvent.fromObject(msg.data);
        event.setCommonResponse(msg);
        this.callback(msg.topic, msg.subject, event);
    }
}

// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/serializable';

export class AddIsolatedMarginResp implements Response<RestResponse> {
    /**
     * Position ID
     */
    id: string;

    /**
     * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
     */
    symbol: string;

    /**
     * Auto deposit margin or not
     */
    autoDeposit: boolean;

    /**
     * Maintenance margin requirement
     */
    maintMarginReq: number;

    /**
     * Risk limit
     */
    riskLimit: number;

    /**
     * Leverage o the order
     */
    realLeverage: number;

    /**
     * Cross mode or not
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
     * Mark value
     */
    markValue: number;

    /**
     * Position value
     */
    posCost: number;

    /**
     * added margin
     */
    posCross: number;

    /**
     * Leverage margin
     */
    posInit: number;

    /**
     * Bankruptcy cost
     */
    posComm: number;

    /**
     * Funding fees paid out
     */
    posLoss: number;

    /**
     * Position margin
     */
    posMargin: number;

    /**
     * Maintenance margin
     */
    posMaint: number;

    /**
     * Position margin
     */
    maintMargin: number;

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
     * Liquidation price
     */
    liquidationPrice: number;

    /**
     * Bankruptcy price
     */
    bankruptPrice: number;

    /**
     * userId
     */
    userId: number;

    /**
     * Currency used to clear and settle the trades
     */
    settleCurrency: string;

    /**
     * Private constructor, please use the corresponding static methods to construct the object.
     */
    private constructor() {
        // @ts-ignore
        this.id = null;
        // @ts-ignore
        this.symbol = null;
        // @ts-ignore
        this.autoDeposit = null;
        // @ts-ignore
        this.maintMarginReq = null;
        // @ts-ignore
        this.riskLimit = null;
        // @ts-ignore
        this.realLeverage = null;
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
        this.posCross = null;
        // @ts-ignore
        this.posInit = null;
        // @ts-ignore
        this.posComm = null;
        // @ts-ignore
        this.posLoss = null;
        // @ts-ignore
        this.posMargin = null;
        // @ts-ignore
        this.posMaint = null;
        // @ts-ignore
        this.maintMargin = null;
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
        this.userId = null;
        // @ts-ignore
        this.settleCurrency = null;
    }
    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
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
    static fromJson(input: string): AddIsolatedMarginResp {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): AddIsolatedMarginResp {
        return plainToClassFromExist(new AddIsolatedMarginResp(), jsonObject);
    }
}

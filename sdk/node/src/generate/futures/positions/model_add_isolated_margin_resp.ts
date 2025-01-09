// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';

export class AddIsolatedMarginResp implements Response<AddIsolatedMarginResp, RestResponse> {
    /**
     * Position ID
     */
    id?: string;
    /**
     * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
     */
    symbol?: string;
    /**
     * Auto deposit margin or not
     */
    autoDeposit?: boolean;
    /**
     * Maintenance margin requirement
     */
    maintMarginReq?: number;
    /**
     * Risk limit
     */
    riskLimit?: number;
    /**
     * Leverage o the order
     */
    realLeverage?: number;
    /**
     * Cross mode or not
     */
    crossMode?: boolean;
    /**
     * ADL ranking percentile
     */
    delevPercentage?: number;
    /**
     * Open time
     */
    openingTimestamp?: number;
    /**
     * Current timestamp
     */
    currentTimestamp?: number;
    /**
     * Current postion quantity
     */
    currentQty?: number;
    /**
     * Current postion value
     */
    currentCost?: number;
    /**
     * Current commission
     */
    currentComm?: number;
    /**
     * Unrealised value
     */
    unrealisedCost?: number;
    /**
     * Accumulated realised gross profit value
     */
    realisedGrossCost?: number;
    /**
     * Current realised position value
     */
    realisedCost?: number;
    /**
     * Opened position or not
     */
    isOpen?: boolean;
    /**
     * Mark price
     */
    markPrice?: number;
    /**
     * Mark value
     */
    markValue?: number;
    /**
     * Position value
     */
    posCost?: number;
    /**
     * added margin
     */
    posCross?: number;
    /**
     * Leverage margin
     */
    posInit?: number;
    /**
     * Bankruptcy cost
     */
    posComm?: number;
    /**
     * Funding fees paid out
     */
    posLoss?: number;
    /**
     * Position margin
     */
    posMargin?: number;
    /**
     * Maintenance margin
     */
    posMaint?: number;
    /**
     * Position margin
     */
    maintMargin?: number;
    /**
     * Accumulated realised gross profit value
     */
    realisedGrossPnl?: number;
    /**
     * Realised profit and loss
     */
    realisedPnl?: number;
    /**
     * Unrealised profit and loss
     */
    unrealisedPnl?: number;
    /**
     * Profit-loss ratio of the position
     */
    unrealisedPnlPcnt?: number;
    /**
     * Rate of return on investment
     */
    unrealisedRoePcnt?: number;
    /**
     * Average entry price
     */
    avgEntryPrice?: number;
    /**
     * Liquidation price
     */
    liquidationPrice?: number;
    /**
     * Bankruptcy price
     */
    bankruptPrice?: number;
    /**
     * userId
     */
    userId?: number;
    /**
     * Currency used to clear and settle the trades
     */
    settleCurrency?: string;

    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): AddIsolatedMarginResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(AddIsolatedMarginResp, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): AddIsolatedMarginResp {
        return plainToInstance(AddIsolatedMarginResp, jsonObject);
    }
}

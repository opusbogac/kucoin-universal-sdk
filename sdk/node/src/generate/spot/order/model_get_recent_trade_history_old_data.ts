// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';
export class GetRecentTradeHistoryOldData implements Serializable<GetRecentTradeHistoryOldData> {
    /**
     *
     */
    symbol?: string;
    /**
     *
     */
    tradeId?: string;
    /**
     *
     */
    orderId?: string;
    /**
     *
     */
    counterOrderId?: string;
    /**
     *
     */
    side?: string;
    /**
     *
     */
    liquidity?: string;
    /**
     *
     */
    forceTaker?: boolean;
    /**
     *
     */
    price?: string;
    /**
     *
     */
    size?: string;
    /**
     *
     */
    funds?: string;
    /**
     *
     */
    fee?: string;
    /**
     *
     */
    feeRate?: string;
    /**
     *
     */
    feeCurrency?: string;
    /**
     *
     */
    stop?: string;
    /**
     *
     */
    tradeType?: string;
    /**
     *
     */
    type?: string;
    /**
     *
     */
    createdAt?: number;
    fromJson(input: string): GetRecentTradeHistoryOldData {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetRecentTradeHistoryOldData, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetRecentTradeHistoryOldData {
        return plainToInstance(GetRecentTradeHistoryOldData, jsonObject);
    }
}

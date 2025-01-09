// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetIsolatedMarginSymbolsData implements Serializable<GetIsolatedMarginSymbolsData> {
    /**
     * symbol
     */
    symbol?: string;
    /**
     * symbol name
     */
    symbolName?: string;
    /**
     * Base currency,e.g. BTC.
     */
    baseCurrency?: string;
    /**
     * Quote currency,e.g. USDT.
     */
    quoteCurrency?: string;
    /**
     * Max leverage of this symbol
     */
    maxLeverage?: number;
    /**
     *
     */
    flDebtRatio?: string;
    /**
     *
     */
    tradeEnable?: boolean;
    /**
     *
     */
    autoRenewMaxDebtRatio?: string;
    /**
     *
     */
    baseBorrowEnable?: boolean;
    /**
     *
     */
    quoteBorrowEnable?: boolean;
    /**
     *
     */
    baseTransferInEnable?: boolean;
    /**
     *
     */
    quoteTransferInEnable?: boolean;
    /**
     *
     */
    baseBorrowCoefficient?: string;
    /**
     *
     */
    quoteBorrowCoefficient?: string;
    fromJson(input: string): GetIsolatedMarginSymbolsData {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetIsolatedMarginSymbolsData, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetIsolatedMarginSymbolsData {
        return plainToInstance(GetIsolatedMarginSymbolsData, jsonObject);
    }
}

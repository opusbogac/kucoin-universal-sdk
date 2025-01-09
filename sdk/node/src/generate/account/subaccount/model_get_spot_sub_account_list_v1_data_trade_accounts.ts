// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetSpotSubAccountListV1DataTradeAccounts
    implements Serializable<GetSpotSubAccountListV1DataTradeAccounts>
{
    /**
     * The currency of the account.
     */
    currency?: string;
    /**
     * Total funds in the account.
     */
    balance?: string;
    /**
     * Funds available to withdraw or trade.
     */
    available?: string;
    /**
     * Funds on hold (not available for use).
     */
    holds?: string;
    /**
     * Calculated on this currency.
     */
    baseCurrency?: string;
    /**
     * The base currency price.
     */
    baseCurrencyPrice?: string;
    /**
     * The base currency amount.
     */
    baseAmount?: string;
    /**
     *
     */
    tag?: string;
    fromJson(input: string): GetSpotSubAccountListV1DataTradeAccounts {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetSpotSubAccountListV1DataTradeAccounts, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetSpotSubAccountListV1DataTradeAccounts {
        return plainToInstance(GetSpotSubAccountListV1DataTradeAccounts, jsonObject);
    }
}

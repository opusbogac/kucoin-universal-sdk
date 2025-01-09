// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetSpotSubAccountDetailMainAccounts
    implements Serializable<GetSpotSubAccountDetailMainAccounts>
{
    /**
     * Currency
     */
    currency?: string;
    /**
     * Total funds in an account.
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

    fromJson(input: string): GetSpotSubAccountDetailMainAccounts {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetSpotSubAccountDetailMainAccounts, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetSpotSubAccountDetailMainAccounts {
        return plainToInstance(GetSpotSubAccountDetailMainAccounts, jsonObject);
    }
}

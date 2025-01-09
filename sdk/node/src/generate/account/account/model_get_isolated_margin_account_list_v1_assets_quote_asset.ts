// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetIsolatedMarginAccountListV1AssetsQuoteAsset
    implements Serializable<GetIsolatedMarginAccountListV1AssetsQuoteAsset>
{
    /**
     * currency
     */
    currency?: string;
    /**
     * Current currency total asset amount
     */
    totalBalance?: string;
    /**
     * Current currency holding asset amount
     */
    holdBalance?: string;
    /**
     * Current available asset amount
     */
    availableBalance?: string;
    /**
     * Liabilities
     */
    liability?: string;
    /**
     *
     */
    interest?: string;
    /**
     *
     */
    borrowableAmount?: string;
    fromJson(input: string): GetIsolatedMarginAccountListV1AssetsQuoteAsset {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetIsolatedMarginAccountListV1AssetsQuoteAsset, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetIsolatedMarginAccountListV1AssetsQuoteAsset {
        return plainToInstance(GetIsolatedMarginAccountListV1AssetsQuoteAsset, jsonObject);
    }
}

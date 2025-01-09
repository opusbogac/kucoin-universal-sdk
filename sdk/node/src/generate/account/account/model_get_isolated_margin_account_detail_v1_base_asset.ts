// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetIsolatedMarginAccountDetailV1BaseAsset
    implements Serializable<GetIsolatedMarginAccountDetailV1BaseAsset>
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

    fromJson(input: string): GetIsolatedMarginAccountDetailV1BaseAsset {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetIsolatedMarginAccountDetailV1BaseAsset, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetIsolatedMarginAccountDetailV1BaseAsset {
        return plainToInstance(GetIsolatedMarginAccountDetailV1BaseAsset, jsonObject);
    }
}

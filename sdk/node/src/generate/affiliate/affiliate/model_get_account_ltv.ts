// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetAccountLtv implements Serializable<GetAccountLtv> {
    /**
     * LTV of Restricted Transfers to Funding Account
     */
    transferLtv?: string;
    /**
     * LTV of Reduce Only (Restricted Open Positions)
     */
    onlyClosePosLtv?: string;
    /**
     * LTV of Delayed Liquidation
     */
    delayedLiquidationLtv?: string;
    /**
     * LTV of Instant Liquidation
     */
    instantLiquidationLtv?: string;
    /**
     * Current LTV
     */
    currentLtv?: string;
    fromJson(input: string): GetAccountLtv {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetAccountLtv, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetAccountLtv {
        return plainToInstance(GetAccountLtv, jsonObject);
    }
}

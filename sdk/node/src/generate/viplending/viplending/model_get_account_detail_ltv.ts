// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetAccountDetailLtv implements Serializable<GetAccountDetailLtv> {
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

    fromJson(input: string): GetAccountDetailLtv {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetAccountDetailLtv, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetAccountDetailLtv {
        return plainToInstance(GetAccountDetailLtv, jsonObject);
    }
}

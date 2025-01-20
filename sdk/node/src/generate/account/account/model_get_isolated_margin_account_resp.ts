// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { GetIsolatedMarginAccountAssets } from './model_get_isolated_margin_account_assets';
import { Type, instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/serializable';

export class GetIsolatedMarginAccountResp implements Response<RestResponse> {
    /**
     * Total Assets in Quote Currency
     */
    totalAssetOfQuoteCurrency: string;

    /**
     * Total Liability in Quote Currency
     */
    totalLiabilityOfQuoteCurrency: string;

    /**
     * timestamp
     */
    timestamp: number;

    /**
     *
     */
    @Type(() => GetIsolatedMarginAccountAssets)
    assets: Array<GetIsolatedMarginAccountAssets>;

    private constructor() {
        // @ts-ignore
        this.totalAssetOfQuoteCurrency = null;
        // @ts-ignore
        this.totalLiabilityOfQuoteCurrency = null;
        // @ts-ignore
        this.timestamp = null;
        // @ts-ignore
        this.assets = null;
    }
    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    static fromJson(input: string): GetIsolatedMarginAccountResp {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): GetIsolatedMarginAccountResp {
        return plainToClassFromExist(new GetIsolatedMarginAccountResp(), jsonObject);
    }
}

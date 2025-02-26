// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { Type, instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { GetIsolatedMarginAccountListV1Assets } from './model_get_isolated_margin_account_list_v1_assets';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/serializable';

export class GetIsolatedMarginAccountListV1Resp implements Response<RestResponse> {
    /**
     * The total balance of the isolated margin account(in the request coin)
     */
    totalConversionBalance: string;

    /**
     * Total liabilities of the isolated margin account(in the request coin)
     */
    liabilityConversionBalance: string;

    /**
     * Account list
     */
    @Type(() => GetIsolatedMarginAccountListV1Assets)
    assets: Array<GetIsolatedMarginAccountListV1Assets>;

    /**
     * Private constructor, please use the corresponding static methods to construct the object.
     */
    private constructor() {
        // @ts-ignore
        this.totalConversionBalance = null;
        // @ts-ignore
        this.liabilityConversionBalance = null;
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

    /**
     * Convert the object to a JSON string.
     */
    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }
    /**
     * Create an object from a JSON string.
     */
    static fromJson(input: string): GetIsolatedMarginAccountListV1Resp {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): GetIsolatedMarginAccountListV1Resp {
        return plainToClassFromExist(new GetIsolatedMarginAccountListV1Resp(), jsonObject);
    }
}

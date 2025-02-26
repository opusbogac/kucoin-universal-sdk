// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { GetETHStakingProductsData } from './model_get_eth_staking_products_data';
import { Type, instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/serializable';

export class GetETHStakingProductsResp implements Response<RestResponse> {
    /**
     *
     */
    @Type(() => GetETHStakingProductsData)
    data: Array<GetETHStakingProductsData>;

    /**
     * Private constructor, please use the corresponding static methods to construct the object.
     */
    private constructor() {
        // @ts-ignore
        this.data = null;
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
        return JSON.stringify(instanceToPlain(this.data));
    }
    /**
     * Create an object from a JSON string.
     */
    static fromJson(input: string): GetETHStakingProductsResp {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): GetETHStakingProductsResp {
        return plainToClassFromExist(new GetETHStakingProductsResp(), { data: jsonObject });
    }
}

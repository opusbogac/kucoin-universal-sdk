// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { GetKcsStakingProductsData } from './model_get_kcs_staking_products_data';
import { Type, instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';
export class GetKcsStakingProductsResp
    implements Response<GetKcsStakingProductsResp, RestResponse>
{
    /**
     *
     */
    @Type(() => GetKcsStakingProductsData)
    data?: Array<GetKcsStakingProductsData>;
    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): GetKcsStakingProductsResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetKcsStakingProductsResp, { data: jsonObject });
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this.data));
    }

    fromObject(jsonObject: Object): GetKcsStakingProductsResp {
        return plainToInstance(GetKcsStakingProductsResp, { data: jsonObject });
    }
}

// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { Type, instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { GetIsolatedMarginAccountListV1Assets } from './model_get_isolated_margin_account_list_v1_assets';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';

export class GetIsolatedMarginAccountListV1Resp
    implements Response<GetIsolatedMarginAccountListV1Resp, RestResponse>
{
    /**
     * The total balance of the isolated margin account(in the request coin)
     */
    totalConversionBalance?: string;
    /**
     * Total liabilities of the isolated margin account(in the request coin)
     */
    liabilityConversionBalance?: string;
    /**
     * Account list
     */
    @Type(() => GetIsolatedMarginAccountListV1Assets)
    assets?: Array<GetIsolatedMarginAccountListV1Assets>;
    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): GetIsolatedMarginAccountListV1Resp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetIsolatedMarginAccountListV1Resp, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetIsolatedMarginAccountListV1Resp {
        return plainToInstance(GetIsolatedMarginAccountListV1Resp, jsonObject);
    }
}

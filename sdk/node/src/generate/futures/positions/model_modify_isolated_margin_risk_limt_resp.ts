// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';

export class ModifyIsolatedMarginRiskLimtResp
    implements Response<ModifyIsolatedMarginRiskLimtResp, RestResponse>
{
    /**
     * To adjust the level will cancel the open order, the response can only indicate whether the submit of the adjustment request is successful or not.
     */
    data?: boolean;
    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): ModifyIsolatedMarginRiskLimtResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(ModifyIsolatedMarginRiskLimtResp, { data: jsonObject });
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this.data));
    }

    fromObject(jsonObject: Object): ModifyIsolatedMarginRiskLimtResp {
        return plainToInstance(ModifyIsolatedMarginRiskLimtResp, { data: jsonObject });
    }
}

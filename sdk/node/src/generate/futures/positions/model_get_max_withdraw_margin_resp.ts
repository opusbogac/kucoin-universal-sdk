// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';
export class GetMaxWithdrawMarginResp implements Response<GetMaxWithdrawMarginResp, RestResponse> {
    /**
     * The size of the position that can be deposited. If it is USDT-margin, it represents the amount of USDT. If it is coin-margin, this value represents the number of coins
     */
    data?: string;
    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): GetMaxWithdrawMarginResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetMaxWithdrawMarginResp, { data: jsonObject });
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this.data));
    }

    fromObject(jsonObject: Object): GetMaxWithdrawMarginResp {
        return plainToInstance(GetMaxWithdrawMarginResp, { data: jsonObject });
    }
}

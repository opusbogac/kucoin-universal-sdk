// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';
export class GetMarketListResp implements Response<GetMarketListResp, RestResponse> {
    /**
     *
     */
    data?: Array<string>;
    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): GetMarketListResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetMarketListResp, { data: jsonObject });
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this.data));
    }

    fromObject(jsonObject: Object): GetMarketListResp {
        return plainToInstance(GetMarketListResp, { data: jsonObject });
    }
}

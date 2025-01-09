// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';

export class GetSymbolsWithOpenOrderResp
    implements Response<GetSymbolsWithOpenOrderResp, RestResponse>
{
    /**
     * Symbol Size
     */
    symbolSize?: number;
    /**
     * The symbol that has active orders
     */
    symbols?: Array<string>;

    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): GetSymbolsWithOpenOrderResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetSymbolsWithOpenOrderResp, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetSymbolsWithOpenOrderResp {
        return plainToInstance(GetSymbolsWithOpenOrderResp, jsonObject);
    }
}

// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/serializable';

export class GetCrossMarginLeverageResp implements Response<RestResponse> {
    /**
     * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
     */
    symbol: string;

    /**
     * Leverage multiple
     */
    leverage: string;

    private constructor() {
        // @ts-ignore
        this.symbol = null;
        // @ts-ignore
        this.leverage = null;
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

    static fromJson(input: string): GetCrossMarginLeverageResp {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): GetCrossMarginLeverageResp {
        return plainToClassFromExist(new GetCrossMarginLeverageResp(), jsonObject);
    }
}

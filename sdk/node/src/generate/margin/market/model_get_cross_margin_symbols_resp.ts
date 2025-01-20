// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { GetCrossMarginSymbolsItems } from './model_get_cross_margin_symbols_items';
import { Type, instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/serializable';

export class GetCrossMarginSymbolsResp implements Response<RestResponse> {
    /**
     *
     */
    timestamp: number;

    /**
     *
     */
    @Type(() => GetCrossMarginSymbolsItems)
    items: Array<GetCrossMarginSymbolsItems>;

    private constructor() {
        // @ts-ignore
        this.timestamp = null;
        // @ts-ignore
        this.items = null;
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

    static fromJson(input: string): GetCrossMarginSymbolsResp {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): GetCrossMarginSymbolsResp {
        return plainToClassFromExist(new GetCrossMarginSymbolsResp(), jsonObject);
    }
}

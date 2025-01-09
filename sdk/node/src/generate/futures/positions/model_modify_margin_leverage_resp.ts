// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';

export class ModifyMarginLeverageResp implements Response<ModifyMarginLeverageResp, RestResponse> {
    /**
     *
     */
    symbol?: string;
    /**
     *
     */
    leverage?: string;

    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): ModifyMarginLeverageResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(ModifyMarginLeverageResp, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): ModifyMarginLeverageResp {
        return plainToInstance(ModifyMarginLeverageResp, jsonObject);
    }
}

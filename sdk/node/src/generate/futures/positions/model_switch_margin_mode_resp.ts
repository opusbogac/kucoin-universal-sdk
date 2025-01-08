// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';
export class SwitchMarginModeResp implements Response<SwitchMarginModeResp, RestResponse> {
    /**
     * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
     */
    symbol?: string;
    /**
     * Margin mode: ISOLATED (isolated), CROSS (cross margin).
     */
    marginMode?: SwitchMarginModeResp.MarginModeEnum;
    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): SwitchMarginModeResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(SwitchMarginModeResp, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): SwitchMarginModeResp {
        return plainToInstance(SwitchMarginModeResp, jsonObject);
    }
}

export namespace SwitchMarginModeResp {
    export enum MarginModeEnum {
        /**
         * isolated margin
         */
        ISOLATED = <any>'ISOLATED',
        /**
         * cross margin
         */
        CROSS = <any>'CROSS',
    }
}

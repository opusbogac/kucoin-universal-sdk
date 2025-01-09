// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';

export class Get24hrStatsResp implements Response<Get24hrStatsResp, RestResponse> {
    /**
     * 24-hour platform Futures trading volume. Unit is USD
     */
    turnoverOf24h?: number;
    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): Get24hrStatsResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(Get24hrStatsResp, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): Get24hrStatsResp {
        return plainToInstance(Get24hrStatsResp, jsonObject);
    }
}

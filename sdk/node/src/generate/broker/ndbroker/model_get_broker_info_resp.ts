// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';

export class GetBrokerInfoResp implements Response<GetBrokerInfoResp, RestResponse> {
    /**
     * Number of sub-accounts created
     */
    accountSize?: number;
    /**
     * The maximum number of sub-accounts allowed to be created, null means no limit
     */
    maxAccountSize?: number;
    /**
     * Broker level
     */
    level?: number;
    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): GetBrokerInfoResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetBrokerInfoResp, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetBrokerInfoResp {
        return plainToInstance(GetBrokerInfoResp, jsonObject);
    }
}

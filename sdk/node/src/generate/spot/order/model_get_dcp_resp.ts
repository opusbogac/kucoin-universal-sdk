// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';

export class GetDCPResp implements Response<GetDCPResp, RestResponse> {
    /**
     * Auto cancel order trigger setting time, the unit is second. range: timeout=-1 (meaning unset) or 5 <= timeout <= 86400
     */
    timeout?: number;
    /**
     * List of trading pairs. Separated by commas, empty means all trading pairs
     */
    symbols?: string;
    /**
     * System current time (in seconds)
     */
    currentTime?: number;
    /**
     * Trigger cancellation time (in seconds)
     */
    triggerTime?: number;

    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): GetDCPResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetDCPResp, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetDCPResp {
        return plainToInstance(GetDCPResp, jsonObject);
    }
}

// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';
export class SetDCPResp implements Response<SetDCPResp, RestResponse> {
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

    fromJson(input: string): SetDCPResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(SetDCPResp, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): SetDCPResp {
        return plainToInstance(SetDCPResp, jsonObject);
    }
}

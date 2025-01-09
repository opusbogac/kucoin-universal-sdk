// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';

export class CancelOrderByClientOidResp
    implements Response<CancelOrderByClientOidResp, RestResponse>
{
    /**
     * Client Order Id，unique identifier created by the user
     */
    clientOid?: string;

    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): CancelOrderByClientOidResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(CancelOrderByClientOidResp, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): CancelOrderByClientOidResp {
        return plainToInstance(CancelOrderByClientOidResp, jsonObject);
    }
}

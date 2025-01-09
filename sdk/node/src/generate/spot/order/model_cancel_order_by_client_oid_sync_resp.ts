// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';

export class CancelOrderByClientOidSyncResp
    implements Response<CancelOrderByClientOidSyncResp, RestResponse>
{
    /**
     * Client Order Id，unique identifier created by the user
     */
    clientOid?: string;
    /**
     * original order size
     */
    originSize?: string;
    /**
     * deal size
     */
    dealSize?: string;
    /**
     * remain size
     */
    remainSize?: string;
    /**
     * Cumulative canceled size
     */
    canceledSize?: string;
    /**
     * Order Status. open：order is active; done：order has been completed
     */
    status?: CancelOrderByClientOidSyncResp.StatusEnum;
    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): CancelOrderByClientOidSyncResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(CancelOrderByClientOidSyncResp, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): CancelOrderByClientOidSyncResp {
        return plainToInstance(CancelOrderByClientOidSyncResp, jsonObject);
    }
}

export namespace CancelOrderByClientOidSyncResp {
    export enum StatusEnum {
        /**
         *
         */
        OPEN = <any>'open',
        /**
         *
         */
        DONE = <any>'done',
    }
}

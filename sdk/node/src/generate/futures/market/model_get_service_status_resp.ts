// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';
export class GetServiceStatusResp implements Response<GetServiceStatusResp, RestResponse> {
    /**
     *
     */
    msg?: string;
    /**
     * Status of service: open：normal transaction, close：Stop Trading/Maintenance, cancelonly：can only cancel the order but not place order
     */
    status?: GetServiceStatusResp.StatusEnum;
    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): GetServiceStatusResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetServiceStatusResp, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetServiceStatusResp {
        return plainToInstance(GetServiceStatusResp, jsonObject);
    }
}

export namespace GetServiceStatusResp {
    export enum StatusEnum {
        /**
         * normal transaction
         */
        OPEN = <any>'open',
        /**
         * Stop Trading/Maintenance
         */
        CLOSE = <any>'close',
        /**
         * can only cancel the order but not place order
         */
        CANCELONLY = <any>'cancelonly',
    }
}

// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/serializable';

export class GetServerTimeResp implements Response<RestResponse> {
    /**
     * ServerTime(millisecond)
     */
    data: number;

    private constructor() {
        // @ts-ignore
        this.data = null;
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
        return JSON.stringify(instanceToPlain(this.data));
    }

    static fromJson(input: string): GetServerTimeResp {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): GetServerTimeResp {
        return plainToClassFromExist(new GetServerTimeResp(), { data: jsonObject });
    }
}

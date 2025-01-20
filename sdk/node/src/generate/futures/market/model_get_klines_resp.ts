// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/serializable';

export class GetKlinesResp implements Response<RestResponse> {
    /**
     *
     */
    data: Array<Array<number>>;

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

    static fromJson(input: string): GetKlinesResp {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): GetKlinesResp {
        return plainToClassFromExist(new GetKlinesResp(), { data: jsonObject });
    }
}

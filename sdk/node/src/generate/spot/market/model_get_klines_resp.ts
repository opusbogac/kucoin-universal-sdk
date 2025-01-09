// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';

export class GetKlinesResp implements Response<GetKlinesResp, RestResponse> {
    /**
     *
     */
    data?: Array<Array<string>>;
    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): GetKlinesResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetKlinesResp, { data: jsonObject });
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this.data));
    }

    fromObject(jsonObject: Object): GetKlinesResp {
        return plainToInstance(GetKlinesResp, { data: jsonObject });
    }
}

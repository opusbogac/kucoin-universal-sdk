// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { Type, instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { GetAccountsData } from './model_get_accounts_data';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/serializable';

export class GetAccountsResp implements Response<RestResponse> {
    /**
     *
     */
    @Type(() => GetAccountsData)
    data: Array<GetAccountsData>;

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

    static fromJson(input: string): GetAccountsResp {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): GetAccountsResp {
        return plainToClassFromExist(new GetAccountsResp(), { data: jsonObject });
    }
}

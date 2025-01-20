// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { GetDepositAddressV3Data } from './model_get_deposit_address_v3_data';
import { Type, instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/serializable';

export class GetDepositAddressV3Resp implements Response<RestResponse> {
    /**
     *
     */
    @Type(() => GetDepositAddressV3Data)
    data: Array<GetDepositAddressV3Data>;

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

    static fromJson(input: string): GetDepositAddressV3Resp {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): GetDepositAddressV3Resp {
        return plainToClassFromExist(new GetDepositAddressV3Resp(), { data: jsonObject });
    }
}

// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/serializable';

export class WithdrawalV1Resp implements Response<RestResponse> {
    /**
     * Withdrawal id, a unique ID for a withdrawal
     */
    withdrawalId: string;

    private constructor() {
        // @ts-ignore
        this.withdrawalId = null;
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
        return JSON.stringify(instanceToPlain(this));
    }

    static fromJson(input: string): WithdrawalV1Resp {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): WithdrawalV1Resp {
        return plainToClassFromExist(new WithdrawalV1Resp(), jsonObject);
    }
}

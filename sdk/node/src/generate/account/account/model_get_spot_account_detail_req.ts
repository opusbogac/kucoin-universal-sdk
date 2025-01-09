// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import 'reflect-metadata';
import { Serializable } from '@internal/interfaces/serializable';

export class GetSpotAccountDetailReq implements Serializable<GetSpotAccountDetailReq> {
    /**
     * Path parameter. Account ID
     */
    @Reflect.metadata('path', 'accountId')
    accountId?: string;

    /**
     * Creates a new instance of the `GetSpotAccountDetailReq` class.
     * The builder pattern allows step-by-step construction of a `GetSpotAccountDetailReq` object.
     */
    static builder(): GetSpotAccountDetailReqBuilder {
        return new GetSpotAccountDetailReqBuilder();
    }

    /**
     * Creates a new instance of the `GetSpotAccountDetailReq` class with the given data.
     */
    static create(data: {
        /**
         * Path parameter. Account ID
         */
        accountId?: string;
    }): GetSpotAccountDetailReq {
        let obj = new GetSpotAccountDetailReq();
        obj.accountId = data.accountId;
        return obj;
    }

    fromJson(input: string): GetSpotAccountDetailReq {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetSpotAccountDetailReq, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetSpotAccountDetailReq {
        return plainToInstance(GetSpotAccountDetailReq, jsonObject);
    }
}

export class GetSpotAccountDetailReqBuilder {
    obj: GetSpotAccountDetailReq = new GetSpotAccountDetailReq();
    /**
     * Path parameter. Account ID
     */
    setAccountId(value: string): GetSpotAccountDetailReqBuilder {
        this.obj.accountId = value;
        return this;
    }

    build(): GetSpotAccountDetailReq {
        return this.obj;
    }
}

// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import 'reflect-metadata';
import { Serializable } from '@internal/interfaces/serializable';

export class GetSpotAccountDetailReq implements Serializable {
    /**
     * Path parameter. Account ID
     */
    @Reflect.metadata('path', 'accountId')
    accountId?: string;

    /**
     * Private constructor, please use the corresponding static methods to construct the object.
     */
    private constructor() {}
    /**
     * Creates a new instance of the `GetSpotAccountDetailReq` class.
     * The builder pattern allows step-by-step construction of a `GetSpotAccountDetailReq` object.
     */
    static builder(): GetSpotAccountDetailReqBuilder {
        return new GetSpotAccountDetailReqBuilder(new GetSpotAccountDetailReq());
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

    /**
     * Convert the object to a JSON string.
     */
    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }
    /**
     * Create an object from a JSON string.
     */
    static fromJson(input: string): GetSpotAccountDetailReq {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): GetSpotAccountDetailReq {
        return plainToClassFromExist(new GetSpotAccountDetailReq(), jsonObject);
    }
}

export class GetSpotAccountDetailReqBuilder {
    constructor(readonly obj: GetSpotAccountDetailReq) {
        this.obj = obj;
    }
    /**
     * Path parameter. Account ID
     */
    setAccountId(value: string): GetSpotAccountDetailReqBuilder {
        this.obj.accountId = value;
        return this;
    }

    /**
     * Get the final object.
     */
    build(): GetSpotAccountDetailReq {
        return this.obj;
    }
}

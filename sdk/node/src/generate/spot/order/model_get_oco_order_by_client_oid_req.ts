// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import 'reflect-metadata';
import { Serializable } from '@internal/interfaces/serializable';

export class GetOcoOrderByClientOidReq implements Serializable {
    /**
     * Client Order Id，unique identifier created by the user
     */
    @Reflect.metadata('path', 'clientOid')
    clientOid?: string;

    /**
     * Private constructor, please use the corresponding static methods to construct the object.
     */
    private constructor() {}
    /**
     * Creates a new instance of the `GetOcoOrderByClientOidReq` class.
     * The builder pattern allows step-by-step construction of a `GetOcoOrderByClientOidReq` object.
     */
    static builder(): GetOcoOrderByClientOidReqBuilder {
        return new GetOcoOrderByClientOidReqBuilder(new GetOcoOrderByClientOidReq());
    }

    /**
     * Creates a new instance of the `GetOcoOrderByClientOidReq` class with the given data.
     */
    static create(data: {
        /**
         * Client Order Id，unique identifier created by the user
         */
        clientOid?: string;
    }): GetOcoOrderByClientOidReq {
        let obj = new GetOcoOrderByClientOidReq();
        obj.clientOid = data.clientOid;
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
    static fromJson(input: string): GetOcoOrderByClientOidReq {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): GetOcoOrderByClientOidReq {
        return plainToClassFromExist(new GetOcoOrderByClientOidReq(), jsonObject);
    }
}

export class GetOcoOrderByClientOidReqBuilder {
    constructor(readonly obj: GetOcoOrderByClientOidReq) {
        this.obj = obj;
    }
    /**
     * Client Order Id，unique identifier created by the user
     */
    setClientOid(value: string): GetOcoOrderByClientOidReqBuilder {
        this.obj.clientOid = value;
        return this;
    }

    /**
     * Get the final object.
     */
    build(): GetOcoOrderByClientOidReq {
        return this.obj;
    }
}

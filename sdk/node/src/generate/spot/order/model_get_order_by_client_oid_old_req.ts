// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import 'reflect-metadata';
import { Serializable } from '@internal/interfaces/serializable';
export class GetOrderByClientOidOldReq implements Serializable<GetOrderByClientOidOldReq> {
    /**
     * Unique order id created by users to identify their orders
     */
    @Reflect.metadata('path', 'clientOid')
    clientOid?: string;

    /**
     * Creates a new instance of the `GetOrderByClientOidOldReq` class.
     * The builder pattern allows step-by-step construction of a `GetOrderByClientOidOldReq` object.
     */
    static builder(): GetOrderByClientOidOldReqBuilder {
        return new GetOrderByClientOidOldReqBuilder();
    }

    /**
     * Creates a new instance of the `GetOrderByClientOidOldReq` class with the given data.
     */
    static create(data: {
        /**
         * Unique order id created by users to identify their orders
         */
        clientOid?: string;
    }): GetOrderByClientOidOldReq {
        let obj = new GetOrderByClientOidOldReq();
        obj.clientOid = data.clientOid;
        return obj;
    }

    fromJson(input: string): GetOrderByClientOidOldReq {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetOrderByClientOidOldReq, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetOrderByClientOidOldReq {
        return plainToInstance(GetOrderByClientOidOldReq, jsonObject);
    }
}

export class GetOrderByClientOidOldReqBuilder {
    obj: GetOrderByClientOidOldReq = new GetOrderByClientOidOldReq();
    /**
     * Unique order id created by users to identify their orders
     */
    setClientOid(value: string): GetOrderByClientOidOldReqBuilder {
        this.obj.clientOid = value;
        return this;
    }

    build(): GetOrderByClientOidOldReq {
        return this.obj;
    }
}

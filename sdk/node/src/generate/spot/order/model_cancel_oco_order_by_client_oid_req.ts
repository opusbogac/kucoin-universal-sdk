// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import 'reflect-metadata';
import { Serializable } from '@internal/interfaces/serializable';
export class CancelOcoOrderByClientOidReq implements Serializable<CancelOcoOrderByClientOidReq> {
    /**
     * Client Order Id，unique identifier created by the user
     */
    @Reflect.metadata('path', 'clientOid')
    clientOid?: string;

    /**
     * Creates a new instance of the `CancelOcoOrderByClientOidReq` class.
     * The builder pattern allows step-by-step construction of a `CancelOcoOrderByClientOidReq` object.
     */
    static builder(): CancelOcoOrderByClientOidReqBuilder {
        return new CancelOcoOrderByClientOidReqBuilder();
    }

    /**
     * Creates a new instance of the `CancelOcoOrderByClientOidReq` class with the given data.
     */
    static create(data: {
        /**
         * Client Order Id，unique identifier created by the user
         */
        clientOid?: string;
    }): CancelOcoOrderByClientOidReq {
        let obj = new CancelOcoOrderByClientOidReq();
        obj.clientOid = data.clientOid;
        return obj;
    }

    fromJson(input: string): CancelOcoOrderByClientOidReq {
        const jsonObject = JSON.parse(input);
        return plainToInstance(CancelOcoOrderByClientOidReq, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): CancelOcoOrderByClientOidReq {
        return plainToInstance(CancelOcoOrderByClientOidReq, jsonObject);
    }
}

export class CancelOcoOrderByClientOidReqBuilder {
    obj: CancelOcoOrderByClientOidReq = new CancelOcoOrderByClientOidReq();
    /**
     * Client Order Id，unique identifier created by the user
     */
    setClientOid(value: string): CancelOcoOrderByClientOidReqBuilder {
        this.obj.clientOid = value;
        return this;
    }

    build(): CancelOcoOrderByClientOidReq {
        return this.obj;
    }
}

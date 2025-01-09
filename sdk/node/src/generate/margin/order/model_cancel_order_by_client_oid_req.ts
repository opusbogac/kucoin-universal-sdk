// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import 'reflect-metadata';
import { Serializable } from '@internal/interfaces/serializable';

export class CancelOrderByClientOidReq implements Serializable<CancelOrderByClientOidReq> {
    /**
     * Client Order Id，unique identifier created by the user
     */
    @Reflect.metadata('path', 'clientOid')
    clientOid?: string;
    /**
     * symbol
     */
    symbol?: string;

    /**
     * Creates a new instance of the `CancelOrderByClientOidReq` class.
     * The builder pattern allows step-by-step construction of a `CancelOrderByClientOidReq` object.
     */
    static builder(): CancelOrderByClientOidReqBuilder {
        return new CancelOrderByClientOidReqBuilder();
    }

    /**
     * Creates a new instance of the `CancelOrderByClientOidReq` class with the given data.
     */
    static create(data: {
        /**
         * Client Order Id，unique identifier created by the user
         */
        clientOid?: string;
        /**
         * symbol
         */
        symbol?: string;
    }): CancelOrderByClientOidReq {
        let obj = new CancelOrderByClientOidReq();
        obj.clientOid = data.clientOid;
        obj.symbol = data.symbol;
        return obj;
    }

    fromJson(input: string): CancelOrderByClientOidReq {
        const jsonObject = JSON.parse(input);
        return plainToInstance(CancelOrderByClientOidReq, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): CancelOrderByClientOidReq {
        return plainToInstance(CancelOrderByClientOidReq, jsonObject);
    }
}

export class CancelOrderByClientOidReqBuilder {
    obj: CancelOrderByClientOidReq = new CancelOrderByClientOidReq();
    /**
     * Client Order Id，unique identifier created by the user
     */
    setClientOid(value: string): CancelOrderByClientOidReqBuilder {
        this.obj.clientOid = value;
        return this;
    }

    /**
     * symbol
     */
    setSymbol(value: string): CancelOrderByClientOidReqBuilder {
        this.obj.symbol = value;
        return this;
    }

    build(): CancelOrderByClientOidReq {
        return this.obj;
    }
}

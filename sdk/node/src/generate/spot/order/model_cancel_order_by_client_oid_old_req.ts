// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import 'reflect-metadata';
import { Serializable } from '@internal/interfaces/serializable';

export class CancelOrderByClientOidOldReq implements Serializable<CancelOrderByClientOidOldReq> {
    /**
     * symbol
     */
    symbol?: string;
    /**
     * Client Order Id，unique identifier created by the user
     */
    @Reflect.metadata('path', 'clientOid')
    clientOid?: string;

    /**
     * Creates a new instance of the `CancelOrderByClientOidOldReq` class.
     * The builder pattern allows step-by-step construction of a `CancelOrderByClientOidOldReq` object.
     */
    static builder(): CancelOrderByClientOidOldReqBuilder {
        return new CancelOrderByClientOidOldReqBuilder();
    }

    /**
     * Creates a new instance of the `CancelOrderByClientOidOldReq` class with the given data.
     */
    static create(data: {
        /**
         * symbol
         */
        symbol?: string;
        /**
         * Client Order Id，unique identifier created by the user
         */
        clientOid?: string;
    }): CancelOrderByClientOidOldReq {
        let obj = new CancelOrderByClientOidOldReq();
        obj.symbol = data.symbol;
        obj.clientOid = data.clientOid;
        return obj;
    }

    fromJson(input: string): CancelOrderByClientOidOldReq {
        const jsonObject = JSON.parse(input);
        return plainToInstance(CancelOrderByClientOidOldReq, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): CancelOrderByClientOidOldReq {
        return plainToInstance(CancelOrderByClientOidOldReq, jsonObject);
    }
}

export class CancelOrderByClientOidOldReqBuilder {
    obj: CancelOrderByClientOidOldReq = new CancelOrderByClientOidOldReq();
    /**
     * symbol
     */
    setSymbol(value: string): CancelOrderByClientOidOldReqBuilder {
        this.obj.symbol = value;
        return this;
    }

    /**
     * Client Order Id，unique identifier created by the user
     */
    setClientOid(value: string): CancelOrderByClientOidOldReqBuilder {
        this.obj.clientOid = value;
        return this;
    }

    build(): CancelOrderByClientOidOldReq {
        return this.obj;
    }
}

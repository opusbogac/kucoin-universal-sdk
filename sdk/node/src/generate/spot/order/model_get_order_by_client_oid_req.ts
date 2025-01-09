// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import 'reflect-metadata';
import { Serializable } from '@internal/interfaces/serializable';

export class GetOrderByClientOidReq implements Serializable<GetOrderByClientOidReq> {
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
     * Creates a new instance of the `GetOrderByClientOidReq` class.
     * The builder pattern allows step-by-step construction of a `GetOrderByClientOidReq` object.
     */
    static builder(): GetOrderByClientOidReqBuilder {
        return new GetOrderByClientOidReqBuilder();
    }

    /**
     * Creates a new instance of the `GetOrderByClientOidReq` class with the given data.
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
    }): GetOrderByClientOidReq {
        let obj = new GetOrderByClientOidReq();
        obj.symbol = data.symbol;
        obj.clientOid = data.clientOid;
        return obj;
    }

    fromJson(input: string): GetOrderByClientOidReq {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetOrderByClientOidReq, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetOrderByClientOidReq {
        return plainToInstance(GetOrderByClientOidReq, jsonObject);
    }
}

export class GetOrderByClientOidReqBuilder {
    obj: GetOrderByClientOidReq = new GetOrderByClientOidReq();
    /**
     * symbol
     */
    setSymbol(value: string): GetOrderByClientOidReqBuilder {
        this.obj.symbol = value;
        return this;
    }

    /**
     * Client Order Id，unique identifier created by the user
     */
    setClientOid(value: string): GetOrderByClientOidReqBuilder {
        this.obj.clientOid = value;
        return this;
    }

    build(): GetOrderByClientOidReq {
        return this.obj;
    }
}

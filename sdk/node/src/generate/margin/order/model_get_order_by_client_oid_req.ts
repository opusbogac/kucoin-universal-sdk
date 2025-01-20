// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import 'reflect-metadata';
import { Serializable } from '@internal/interfaces/serializable';

export class GetOrderByClientOidReq implements Serializable {
    /**
     * symbol
     */
    symbol?: string;

    /**
     * Client Order Id，unique identifier created by the user
     */
    @Reflect.metadata('path', 'clientOid')
    clientOid?: string;

    private constructor() {}
    /**
     * Creates a new instance of the `GetOrderByClientOidReq` class.
     * The builder pattern allows step-by-step construction of a `GetOrderByClientOidReq` object.
     */
    static builder(): GetOrderByClientOidReqBuilder {
        return new GetOrderByClientOidReqBuilder(new GetOrderByClientOidReq());
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

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    static fromJson(input: string): GetOrderByClientOidReq {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): GetOrderByClientOidReq {
        return plainToClassFromExist(new GetOrderByClientOidReq(), jsonObject);
    }
}

export class GetOrderByClientOidReqBuilder {
    constructor(readonly obj: GetOrderByClientOidReq) {
        this.obj = obj;
    }
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

// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import 'reflect-metadata';
import { Serializable } from '@internal/interfaces/serializable';

export class GetOcoOrderByOrderIdReq implements Serializable {
    /**
     * The unique order id generated by the trading system
     */
    @Reflect.metadata('path', 'orderId')
    orderId?: string;

    private constructor() {}
    /**
     * Creates a new instance of the `GetOcoOrderByOrderIdReq` class.
     * The builder pattern allows step-by-step construction of a `GetOcoOrderByOrderIdReq` object.
     */
    static builder(): GetOcoOrderByOrderIdReqBuilder {
        return new GetOcoOrderByOrderIdReqBuilder(new GetOcoOrderByOrderIdReq());
    }

    /**
     * Creates a new instance of the `GetOcoOrderByOrderIdReq` class with the given data.
     */
    static create(data: {
        /**
         * The unique order id generated by the trading system
         */
        orderId?: string;
    }): GetOcoOrderByOrderIdReq {
        let obj = new GetOcoOrderByOrderIdReq();
        obj.orderId = data.orderId;
        return obj;
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    static fromJson(input: string): GetOcoOrderByOrderIdReq {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): GetOcoOrderByOrderIdReq {
        return plainToClassFromExist(new GetOcoOrderByOrderIdReq(), jsonObject);
    }
}

export class GetOcoOrderByOrderIdReqBuilder {
    constructor(readonly obj: GetOcoOrderByOrderIdReq) {
        this.obj = obj;
    }
    /**
     * The unique order id generated by the trading system
     */
    setOrderId(value: string): GetOcoOrderByOrderIdReqBuilder {
        this.obj.orderId = value;
        return this;
    }

    build(): GetOcoOrderByOrderIdReq {
        return this.obj;
    }
}

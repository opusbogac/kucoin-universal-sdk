// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import 'reflect-metadata';
import { Serializable } from '@internal/interfaces/serializable';

export class GetOcoOrderDetailByOrderIdReq implements Serializable {
    /**
     * The unique order id generated by the trading system
     */
    @Reflect.metadata('path', 'orderId')
    orderId?: string;

    private constructor() {}
    /**
     * Creates a new instance of the `GetOcoOrderDetailByOrderIdReq` class.
     * The builder pattern allows step-by-step construction of a `GetOcoOrderDetailByOrderIdReq` object.
     */
    static builder(): GetOcoOrderDetailByOrderIdReqBuilder {
        return new GetOcoOrderDetailByOrderIdReqBuilder(new GetOcoOrderDetailByOrderIdReq());
    }

    /**
     * Creates a new instance of the `GetOcoOrderDetailByOrderIdReq` class with the given data.
     */
    static create(data: {
        /**
         * The unique order id generated by the trading system
         */
        orderId?: string;
    }): GetOcoOrderDetailByOrderIdReq {
        let obj = new GetOcoOrderDetailByOrderIdReq();
        obj.orderId = data.orderId;
        return obj;
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    static fromJson(input: string): GetOcoOrderDetailByOrderIdReq {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): GetOcoOrderDetailByOrderIdReq {
        return plainToClassFromExist(new GetOcoOrderDetailByOrderIdReq(), jsonObject);
    }
}

export class GetOcoOrderDetailByOrderIdReqBuilder {
    constructor(readonly obj: GetOcoOrderDetailByOrderIdReq) {
        this.obj = obj;
    }
    /**
     * The unique order id generated by the trading system
     */
    setOrderId(value: string): GetOcoOrderDetailByOrderIdReqBuilder {
        this.obj.orderId = value;
        return this;
    }

    build(): GetOcoOrderDetailByOrderIdReq {
        return this.obj;
    }
}

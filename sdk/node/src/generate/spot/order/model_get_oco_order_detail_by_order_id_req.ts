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

    /**
     * Private constructor, please use the corresponding static methods to construct the object.
     */
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

    /**
     * Convert the object to a JSON string.
     */
    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }
    /**
     * Create an object from a JSON string.
     */
    static fromJson(input: string): GetOcoOrderDetailByOrderIdReq {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
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

    /**
     * Get the final object.
     */
    build(): GetOcoOrderDetailByOrderIdReq {
        return this.obj;
    }
}

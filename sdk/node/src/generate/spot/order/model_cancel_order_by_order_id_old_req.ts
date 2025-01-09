// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import 'reflect-metadata';
import { Serializable } from '@internal/interfaces/serializable';

export class CancelOrderByOrderIdOldReq implements Serializable<CancelOrderByOrderIdOldReq> {
    /**
     * symbol
     */
    symbol?: string;
    /**
     * The unique order id generated by the trading system
     */
    @Reflect.metadata('path', 'orderId')
    orderId?: string;

    /**
     * Creates a new instance of the `CancelOrderByOrderIdOldReq` class.
     * The builder pattern allows step-by-step construction of a `CancelOrderByOrderIdOldReq` object.
     */
    static builder(): CancelOrderByOrderIdOldReqBuilder {
        return new CancelOrderByOrderIdOldReqBuilder();
    }

    /**
     * Creates a new instance of the `CancelOrderByOrderIdOldReq` class with the given data.
     */
    static create(data: {
        /**
         * symbol
         */
        symbol?: string;
        /**
         * The unique order id generated by the trading system
         */
        orderId?: string;
    }): CancelOrderByOrderIdOldReq {
        let obj = new CancelOrderByOrderIdOldReq();
        obj.symbol = data.symbol;
        obj.orderId = data.orderId;
        return obj;
    }

    fromJson(input: string): CancelOrderByOrderIdOldReq {
        const jsonObject = JSON.parse(input);
        return plainToInstance(CancelOrderByOrderIdOldReq, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): CancelOrderByOrderIdOldReq {
        return plainToInstance(CancelOrderByOrderIdOldReq, jsonObject);
    }
}

export class CancelOrderByOrderIdOldReqBuilder {
    obj: CancelOrderByOrderIdOldReq = new CancelOrderByOrderIdOldReq();
    /**
     * symbol
     */
    setSymbol(value: string): CancelOrderByOrderIdOldReqBuilder {
        this.obj.symbol = value;
        return this;
    }

    /**
     * The unique order id generated by the trading system
     */
    setOrderId(value: string): CancelOrderByOrderIdOldReqBuilder {
        this.obj.orderId = value;
        return this;
    }

    build(): CancelOrderByOrderIdOldReq {
        return this.obj;
    }
}

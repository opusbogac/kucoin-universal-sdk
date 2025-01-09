// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import 'reflect-metadata';
import { Serializable } from '@internal/interfaces/serializable';

export class CancelPartialOrderReq implements Serializable<CancelPartialOrderReq> {
    /**
     * The unique order id generated by the trading system
     */
    @Reflect.metadata('path', 'orderId')
    orderId?: string;
    /**
     * symbol
     */
    symbol?: string;
    /**
     * The size you want cancel
     */
    cancelSize?: string;

    /**
     * Creates a new instance of the `CancelPartialOrderReq` class.
     * The builder pattern allows step-by-step construction of a `CancelPartialOrderReq` object.
     */
    static builder(): CancelPartialOrderReqBuilder {
        return new CancelPartialOrderReqBuilder();
    }

    /**
     * Creates a new instance of the `CancelPartialOrderReq` class with the given data.
     */
    static create(data: {
        /**
         * The unique order id generated by the trading system
         */
        orderId?: string;
        /**
         * symbol
         */
        symbol?: string;
        /**
         * The size you want cancel
         */
        cancelSize?: string;
    }): CancelPartialOrderReq {
        let obj = new CancelPartialOrderReq();
        obj.orderId = data.orderId;
        obj.symbol = data.symbol;
        obj.cancelSize = data.cancelSize;
        return obj;
    }

    fromJson(input: string): CancelPartialOrderReq {
        const jsonObject = JSON.parse(input);
        return plainToInstance(CancelPartialOrderReq, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): CancelPartialOrderReq {
        return plainToInstance(CancelPartialOrderReq, jsonObject);
    }
}

export class CancelPartialOrderReqBuilder {
    obj: CancelPartialOrderReq = new CancelPartialOrderReq();
    /**
     * The unique order id generated by the trading system
     */
    setOrderId(value: string): CancelPartialOrderReqBuilder {
        this.obj.orderId = value;
        return this;
    }

    /**
     * symbol
     */
    setSymbol(value: string): CancelPartialOrderReqBuilder {
        this.obj.symbol = value;
        return this;
    }

    /**
     * The size you want cancel
     */
    setCancelSize(value: string): CancelPartialOrderReqBuilder {
        this.obj.cancelSize = value;
        return this;
    }

    build(): CancelPartialOrderReq {
        return this.obj;
    }
}

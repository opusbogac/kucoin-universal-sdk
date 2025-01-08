// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { BatchAddOrdersOldOrderList } from './model_batch_add_orders_old_order_list';
import { Type, instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';
export class BatchAddOrdersOldReq implements Serializable<BatchAddOrdersOldReq> {
    /**
     *
     */
    @Type(() => BatchAddOrdersOldOrderList)
    orderList?: Array<BatchAddOrdersOldOrderList>;
    /**
     *
     */
    symbol?: string;

    /**
     * Creates a new instance of the `BatchAddOrdersOldReq` class.
     * The builder pattern allows step-by-step construction of a `BatchAddOrdersOldReq` object.
     */
    static builder(): BatchAddOrdersOldReqBuilder {
        return new BatchAddOrdersOldReqBuilder();
    }

    /**
     * Creates a new instance of the `BatchAddOrdersOldReq` class with the given data.
     */
    static create(data: {
        /**
         *
         */
        orderList?: Array<BatchAddOrdersOldOrderList>;
        /**
         *
         */
        symbol?: string;
    }): BatchAddOrdersOldReq {
        let obj = new BatchAddOrdersOldReq();
        obj.orderList = data.orderList;
        obj.symbol = data.symbol;
        return obj;
    }

    fromJson(input: string): BatchAddOrdersOldReq {
        const jsonObject = JSON.parse(input);
        return plainToInstance(BatchAddOrdersOldReq, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): BatchAddOrdersOldReq {
        return plainToInstance(BatchAddOrdersOldReq, jsonObject);
    }
}

export class BatchAddOrdersOldReqBuilder {
    obj: BatchAddOrdersOldReq = new BatchAddOrdersOldReq();
    /**
     *
     */
    setOrderList(value: Array<BatchAddOrdersOldOrderList>): BatchAddOrdersOldReqBuilder {
        this.obj.orderList = value;
        return this;
    }

    /**
     *
     */
    setSymbol(value: string): BatchAddOrdersOldReqBuilder {
        this.obj.symbol = value;
        return this;
    }

    build(): BatchAddOrdersOldReq {
        return this.obj;
    }
}

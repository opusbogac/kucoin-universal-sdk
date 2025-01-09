// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { BatchAddOrdersSyncOrderList } from './model_batch_add_orders_sync_order_list';
import { Type, instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class BatchAddOrdersSyncReq implements Serializable<BatchAddOrdersSyncReq> {
    /**
     * Order List
     */
    @Type(() => BatchAddOrdersSyncOrderList)
    orderList?: Array<BatchAddOrdersSyncOrderList>;

    /**
     * Creates a new instance of the `BatchAddOrdersSyncReq` class.
     * The builder pattern allows step-by-step construction of a `BatchAddOrdersSyncReq` object.
     */
    static builder(): BatchAddOrdersSyncReqBuilder {
        return new BatchAddOrdersSyncReqBuilder();
    }

    /**
     * Creates a new instance of the `BatchAddOrdersSyncReq` class with the given data.
     */
    static create(data: {
        /**
         * Order List
         */
        orderList?: Array<BatchAddOrdersSyncOrderList>;
    }): BatchAddOrdersSyncReq {
        let obj = new BatchAddOrdersSyncReq();
        obj.orderList = data.orderList;
        return obj;
    }

    fromJson(input: string): BatchAddOrdersSyncReq {
        const jsonObject = JSON.parse(input);
        return plainToInstance(BatchAddOrdersSyncReq, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): BatchAddOrdersSyncReq {
        return plainToInstance(BatchAddOrdersSyncReq, jsonObject);
    }
}

export class BatchAddOrdersSyncReqBuilder {
    obj: BatchAddOrdersSyncReq = new BatchAddOrdersSyncReq();
    /**
     * Order List
     */
    setOrderList(value: Array<BatchAddOrdersSyncOrderList>): BatchAddOrdersSyncReqBuilder {
        this.obj.orderList = value;
        return this;
    }

    build(): BatchAddOrdersSyncReq {
        return this.obj;
    }
}

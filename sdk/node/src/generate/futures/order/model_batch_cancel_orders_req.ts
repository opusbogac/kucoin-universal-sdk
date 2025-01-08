// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { BatchCancelOrdersClientOidsList } from './model_batch_cancel_orders_client_oids_list';
import { Type, instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';
export class BatchCancelOrdersReq implements Serializable<BatchCancelOrdersReq> {
    /**
     * the list of orderId
     */
    orderIdsList?: Array<string>;
    /**
     * the list of client orderId
     */
    @Type(() => BatchCancelOrdersClientOidsList)
    clientOidsList?: Array<BatchCancelOrdersClientOidsList>;

    /**
     * Creates a new instance of the `BatchCancelOrdersReq` class.
     * The builder pattern allows step-by-step construction of a `BatchCancelOrdersReq` object.
     */
    static builder(): BatchCancelOrdersReqBuilder {
        return new BatchCancelOrdersReqBuilder();
    }

    /**
     * Creates a new instance of the `BatchCancelOrdersReq` class with the given data.
     */
    static create(data: {
        /**
         * the list of orderId
         */
        orderIdsList?: Array<string>;
        /**
         * the list of client orderId
         */
        clientOidsList?: Array<BatchCancelOrdersClientOidsList>;
    }): BatchCancelOrdersReq {
        let obj = new BatchCancelOrdersReq();
        obj.orderIdsList = data.orderIdsList;
        obj.clientOidsList = data.clientOidsList;
        return obj;
    }

    fromJson(input: string): BatchCancelOrdersReq {
        const jsonObject = JSON.parse(input);
        return plainToInstance(BatchCancelOrdersReq, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): BatchCancelOrdersReq {
        return plainToInstance(BatchCancelOrdersReq, jsonObject);
    }
}

export class BatchCancelOrdersReqBuilder {
    obj: BatchCancelOrdersReq = new BatchCancelOrdersReq();
    /**
     * the list of orderId
     */
    setOrderIdsList(value: Array<string>): BatchCancelOrdersReqBuilder {
        this.obj.orderIdsList = value;
        return this;
    }

    /**
     * the list of client orderId
     */
    setClientOidsList(value: Array<BatchCancelOrdersClientOidsList>): BatchCancelOrdersReqBuilder {
        this.obj.clientOidsList = value;
        return this;
    }

    build(): BatchCancelOrdersReq {
        return this.obj;
    }
}

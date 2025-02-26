// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetOcoOrderListItems implements Serializable {
    /**
     * The unique order id generated by the trading system,which can be used later for further actions such as canceling the order.
     */
    orderId: string;

    /**
     * symbol
     */
    symbol: string;

    /**
     * Client Order Id
     */
    clientOid: string;

    /**
     * Order placement time, milliseconds
     */
    orderTime: number;

    /**
     * Order status: NEW: New, DONE: Completed, TRIGGERED: Triggered, CANCELLED: Cancelled
     */
    status: GetOcoOrderListItems.StatusEnum;

    /**
     * Private constructor, please use the corresponding static methods to construct the object.
     */
    private constructor() {
        // @ts-ignore
        this.orderId = null;
        // @ts-ignore
        this.symbol = null;
        // @ts-ignore
        this.clientOid = null;
        // @ts-ignore
        this.orderTime = null;
        // @ts-ignore
        this.status = null;
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
    static fromJson(input: string): GetOcoOrderListItems {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): GetOcoOrderListItems {
        return plainToClassFromExist(new GetOcoOrderListItems(), jsonObject);
    }
}

export namespace GetOcoOrderListItems {
    export enum StatusEnum {
        /**
         * New
         */
        NEW = <any>'NEW',
        /**
         * Completed
         */
        DONE = <any>'DONE',
        /**
         * Triggered
         */
        TRIGGERED = <any>'TRIGGERED',
        /**
         * Cancelled
         */
        CANCELLED = <any>'CANCELLED',
    }
}

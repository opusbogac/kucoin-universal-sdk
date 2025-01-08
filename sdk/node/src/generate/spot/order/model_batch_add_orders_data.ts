// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';
export class BatchAddOrdersData implements Serializable<BatchAddOrdersData> {
    /**
     * The unique order id generated by the trading system,which can be used later for further actions such as canceling the order.
     */
    orderId?: string;
    /**
     * The user self-defined order id.
     */
    clientOid?: string;
    /**
     * Add order success/failure
     */
    success?: boolean;
    /**
     * error message
     */
    failMsg?: string;
    fromJson(input: string): BatchAddOrdersData {
        const jsonObject = JSON.parse(input);
        return plainToInstance(BatchAddOrdersData, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): BatchAddOrdersData {
        return plainToInstance(BatchAddOrdersData, jsonObject);
    }
}

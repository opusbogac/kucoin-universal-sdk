// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class OrderbookIncrementChanges implements Serializable<OrderbookIncrementChanges> {
    /**
     * price,size,sequence
     */
    asks?: Array<Array<string>>;
    /**
     *
     */
    bids?: Array<Array<string>>;

    fromJson(input: string): OrderbookIncrementChanges {
        const jsonObject = JSON.parse(input);
        return plainToInstance(OrderbookIncrementChanges, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): OrderbookIncrementChanges {
        return plainToInstance(OrderbookIncrementChanges, jsonObject);
    }
}

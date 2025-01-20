// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class OrderbookIncrementChanges implements Serializable {
    /**
     * price,size,sequence
     */
    asks?: Array<Array<string>>;
    /**
     *
     */
    bids?: Array<Array<string>>;

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    static fromJson(input: string): OrderbookIncrementChanges {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): OrderbookIncrementChanges {
        return plainToClassFromExist(new OrderbookIncrementChanges(), jsonObject);
    }
}

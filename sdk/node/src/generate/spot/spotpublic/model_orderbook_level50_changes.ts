// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class OrderbookLevel50Changes implements Serializable {
    /**
     *
     */
    asks: Array<Array<string>>;
    /**
     *
     */
    bids: Array<Array<string>>;

    private constructor() {
        // @ts-ignore
        this.asks = null;
        // @ts-ignore
        this.bids = null;
    }
    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    static fromJson(input: string): OrderbookLevel50Changes {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): OrderbookLevel50Changes {
        return plainToClassFromExist(new OrderbookLevel50Changes(), jsonObject);
    }
}

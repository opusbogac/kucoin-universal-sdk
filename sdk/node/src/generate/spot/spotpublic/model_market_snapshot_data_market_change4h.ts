// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class MarketSnapshotDataMarketChange4h implements Serializable {
    /**
     *
     */
    changePrice?: number;
    /**
     *
     */
    changeRate?: number;
    /**
     *
     */
    high?: number;
    /**
     *
     */
    low?: number;
    /**
     *
     */
    open?: number;
    /**
     *
     */
    vol?: number;
    /**
     *
     */
    volValue?: number;

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    static fromJson(input: string): MarketSnapshotDataMarketChange4h {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): MarketSnapshotDataMarketChange4h {
        return plainToClassFromExist(new MarketSnapshotDataMarketChange4h(), jsonObject);
    }
}

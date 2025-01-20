// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class SymbolSnapshotDataMarketChange4h implements Serializable {
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

    static fromJson(input: string): SymbolSnapshotDataMarketChange4h {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): SymbolSnapshotDataMarketChange4h {
        return plainToClassFromExist(new SymbolSnapshotDataMarketChange4h(), jsonObject);
    }
}

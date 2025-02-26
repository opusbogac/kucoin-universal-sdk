// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetTradeHistoryReq implements Serializable {
    /**
     * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
     */
    symbol?: string;

    /**
     * Private constructor, please use the corresponding static methods to construct the object.
     */
    private constructor() {}
    /**
     * Creates a new instance of the `GetTradeHistoryReq` class.
     * The builder pattern allows step-by-step construction of a `GetTradeHistoryReq` object.
     */
    static builder(): GetTradeHistoryReqBuilder {
        return new GetTradeHistoryReqBuilder(new GetTradeHistoryReq());
    }

    /**
     * Creates a new instance of the `GetTradeHistoryReq` class with the given data.
     */
    static create(data: {
        /**
         * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
         */
        symbol?: string;
    }): GetTradeHistoryReq {
        let obj = new GetTradeHistoryReq();
        obj.symbol = data.symbol;
        return obj;
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
    static fromJson(input: string): GetTradeHistoryReq {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): GetTradeHistoryReq {
        return plainToClassFromExist(new GetTradeHistoryReq(), jsonObject);
    }
}

export class GetTradeHistoryReqBuilder {
    constructor(readonly obj: GetTradeHistoryReq) {
        this.obj = obj;
    }
    /**
     * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
     */
    setSymbol(value: string): GetTradeHistoryReqBuilder {
        this.obj.symbol = value;
        return this;
    }

    /**
     * Get the final object.
     */
    build(): GetTradeHistoryReq {
        return this.obj;
    }
}

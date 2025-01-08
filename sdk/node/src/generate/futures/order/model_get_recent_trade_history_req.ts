// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';
export class GetRecentTradeHistoryReq implements Serializable<GetRecentTradeHistoryReq> {
    /**
     * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
     */
    symbol?: string;

    /**
     * Creates a new instance of the `GetRecentTradeHistoryReq` class.
     * The builder pattern allows step-by-step construction of a `GetRecentTradeHistoryReq` object.
     */
    static builder(): GetRecentTradeHistoryReqBuilder {
        return new GetRecentTradeHistoryReqBuilder();
    }

    /**
     * Creates a new instance of the `GetRecentTradeHistoryReq` class with the given data.
     */
    static create(data: {
        /**
         * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
         */
        symbol?: string;
    }): GetRecentTradeHistoryReq {
        let obj = new GetRecentTradeHistoryReq();
        obj.symbol = data.symbol;
        return obj;
    }

    fromJson(input: string): GetRecentTradeHistoryReq {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetRecentTradeHistoryReq, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetRecentTradeHistoryReq {
        return plainToInstance(GetRecentTradeHistoryReq, jsonObject);
    }
}

export class GetRecentTradeHistoryReqBuilder {
    obj: GetRecentTradeHistoryReq = new GetRecentTradeHistoryReq();
    /**
     * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
     */
    setSymbol(value: string): GetRecentTradeHistoryReqBuilder {
        this.obj.symbol = value;
        return this;
    }

    build(): GetRecentTradeHistoryReq {
        return this.obj;
    }
}

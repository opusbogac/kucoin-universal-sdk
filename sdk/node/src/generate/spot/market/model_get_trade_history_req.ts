// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetTradeHistoryReq implements Serializable<GetTradeHistoryReq> {
    /**
     * symbol
     */
    symbol?: string;

    /**
     * Creates a new instance of the `GetTradeHistoryReq` class.
     * The builder pattern allows step-by-step construction of a `GetTradeHistoryReq` object.
     */
    static builder(): GetTradeHistoryReqBuilder {
        return new GetTradeHistoryReqBuilder();
    }

    /**
     * Creates a new instance of the `GetTradeHistoryReq` class with the given data.
     */
    static create(data: {
        /**
         * symbol
         */
        symbol?: string;
    }): GetTradeHistoryReq {
        let obj = new GetTradeHistoryReq();
        obj.symbol = data.symbol;
        return obj;
    }

    fromJson(input: string): GetTradeHistoryReq {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetTradeHistoryReq, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetTradeHistoryReq {
        return plainToInstance(GetTradeHistoryReq, jsonObject);
    }
}

export class GetTradeHistoryReqBuilder {
    obj: GetTradeHistoryReq = new GetTradeHistoryReq();
    /**
     * symbol
     */
    setSymbol(value: string): GetTradeHistoryReqBuilder {
        this.obj.symbol = value;
        return this;
    }

    build(): GetTradeHistoryReq {
        return this.obj;
    }
}

// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetCrossMarginSymbolsReq implements Serializable<GetCrossMarginSymbolsReq> {
    /**
     * If not provided, all cross margin symbol will be queried. If provided, only the specified symbol will be queried.
     */
    symbol?: string;

    /**
     * Creates a new instance of the `GetCrossMarginSymbolsReq` class.
     * The builder pattern allows step-by-step construction of a `GetCrossMarginSymbolsReq` object.
     */
    static builder(): GetCrossMarginSymbolsReqBuilder {
        return new GetCrossMarginSymbolsReqBuilder();
    }

    /**
     * Creates a new instance of the `GetCrossMarginSymbolsReq` class with the given data.
     */
    static create(data: {
        /**
         * If not provided, all cross margin symbol will be queried. If provided, only the specified symbol will be queried.
         */
        symbol?: string;
    }): GetCrossMarginSymbolsReq {
        let obj = new GetCrossMarginSymbolsReq();
        obj.symbol = data.symbol;
        return obj;
    }

    fromJson(input: string): GetCrossMarginSymbolsReq {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetCrossMarginSymbolsReq, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetCrossMarginSymbolsReq {
        return plainToInstance(GetCrossMarginSymbolsReq, jsonObject);
    }
}

export class GetCrossMarginSymbolsReqBuilder {
    obj: GetCrossMarginSymbolsReq = new GetCrossMarginSymbolsReq();
    /**
     * If not provided, all cross margin symbol will be queried. If provided, only the specified symbol will be queried.
     */
    setSymbol(value: string): GetCrossMarginSymbolsReqBuilder {
        this.obj.symbol = value;
        return this;
    }

    build(): GetCrossMarginSymbolsReq {
        return this.obj;
    }
}

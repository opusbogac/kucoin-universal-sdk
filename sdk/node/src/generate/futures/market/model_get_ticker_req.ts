// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetTickerReq implements Serializable<GetTickerReq> {
    /**
     * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
     */
    symbol?: string;

    /**
     * Creates a new instance of the `GetTickerReq` class.
     * The builder pattern allows step-by-step construction of a `GetTickerReq` object.
     */
    static builder(): GetTickerReqBuilder {
        return new GetTickerReqBuilder();
    }

    /**
     * Creates a new instance of the `GetTickerReq` class with the given data.
     */
    static create(data: {
        /**
         * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
         */
        symbol?: string;
    }): GetTickerReq {
        let obj = new GetTickerReq();
        obj.symbol = data.symbol;
        return obj;
    }

    fromJson(input: string): GetTickerReq {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetTickerReq, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetTickerReq {
        return plainToInstance(GetTickerReq, jsonObject);
    }
}

export class GetTickerReqBuilder {
    obj: GetTickerReq = new GetTickerReq();
    /**
     * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
     */
    setSymbol(value: string): GetTickerReqBuilder {
        this.obj.symbol = value;
        return this;
    }

    build(): GetTickerReq {
        return this.obj;
    }
}

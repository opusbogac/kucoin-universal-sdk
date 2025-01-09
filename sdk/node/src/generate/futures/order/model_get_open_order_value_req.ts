// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetOpenOrderValueReq implements Serializable<GetOpenOrderValueReq> {
    /**
     * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
     */
    symbol?: string;

    /**
     * Creates a new instance of the `GetOpenOrderValueReq` class.
     * The builder pattern allows step-by-step construction of a `GetOpenOrderValueReq` object.
     */
    static builder(): GetOpenOrderValueReqBuilder {
        return new GetOpenOrderValueReqBuilder();
    }

    /**
     * Creates a new instance of the `GetOpenOrderValueReq` class with the given data.
     */
    static create(data: {
        /**
         * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
         */
        symbol?: string;
    }): GetOpenOrderValueReq {
        let obj = new GetOpenOrderValueReq();
        obj.symbol = data.symbol;
        return obj;
    }

    fromJson(input: string): GetOpenOrderValueReq {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetOpenOrderValueReq, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetOpenOrderValueReq {
        return plainToInstance(GetOpenOrderValueReq, jsonObject);
    }
}

export class GetOpenOrderValueReqBuilder {
    obj: GetOpenOrderValueReq = new GetOpenOrderValueReq();
    /**
     * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
     */
    setSymbol(value: string): GetOpenOrderValueReqBuilder {
        this.obj.symbol = value;
        return this;
    }

    build(): GetOpenOrderValueReq {
        return this.obj;
    }
}

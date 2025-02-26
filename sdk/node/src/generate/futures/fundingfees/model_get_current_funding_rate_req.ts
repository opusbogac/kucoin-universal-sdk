// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import 'reflect-metadata';
import { Serializable } from '@internal/interfaces/serializable';

export class GetCurrentFundingRateReq implements Serializable {
    /**
     * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
     */
    @Reflect.metadata('path', 'symbol')
    symbol?: string;

    /**
     * Private constructor, please use the corresponding static methods to construct the object.
     */
    private constructor() {}
    /**
     * Creates a new instance of the `GetCurrentFundingRateReq` class.
     * The builder pattern allows step-by-step construction of a `GetCurrentFundingRateReq` object.
     */
    static builder(): GetCurrentFundingRateReqBuilder {
        return new GetCurrentFundingRateReqBuilder(new GetCurrentFundingRateReq());
    }

    /**
     * Creates a new instance of the `GetCurrentFundingRateReq` class with the given data.
     */
    static create(data: {
        /**
         * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
         */
        symbol?: string;
    }): GetCurrentFundingRateReq {
        let obj = new GetCurrentFundingRateReq();
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
    static fromJson(input: string): GetCurrentFundingRateReq {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): GetCurrentFundingRateReq {
        return plainToClassFromExist(new GetCurrentFundingRateReq(), jsonObject);
    }
}

export class GetCurrentFundingRateReqBuilder {
    constructor(readonly obj: GetCurrentFundingRateReq) {
        this.obj = obj;
    }
    /**
     * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
     */
    setSymbol(value: string): GetCurrentFundingRateReqBuilder {
        this.obj.symbol = value;
        return this;
    }

    /**
     * Get the final object.
     */
    build(): GetCurrentFundingRateReq {
        return this.obj;
    }
}

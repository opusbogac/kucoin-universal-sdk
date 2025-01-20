// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetLoanMarketReq implements Serializable {
    /**
     * currency
     */
    currency?: string;

    private constructor() {}
    /**
     * Creates a new instance of the `GetLoanMarketReq` class.
     * The builder pattern allows step-by-step construction of a `GetLoanMarketReq` object.
     */
    static builder(): GetLoanMarketReqBuilder {
        return new GetLoanMarketReqBuilder(new GetLoanMarketReq());
    }

    /**
     * Creates a new instance of the `GetLoanMarketReq` class with the given data.
     */
    static create(data: {
        /**
         * currency
         */
        currency?: string;
    }): GetLoanMarketReq {
        let obj = new GetLoanMarketReq();
        obj.currency = data.currency;
        return obj;
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    static fromJson(input: string): GetLoanMarketReq {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): GetLoanMarketReq {
        return plainToClassFromExist(new GetLoanMarketReq(), jsonObject);
    }
}

export class GetLoanMarketReqBuilder {
    constructor(readonly obj: GetLoanMarketReq) {
        this.obj = obj;
    }
    /**
     * currency
     */
    setCurrency(value: string): GetLoanMarketReqBuilder {
        this.obj.currency = value;
        return this;
    }

    build(): GetLoanMarketReq {
        return this.obj;
    }
}

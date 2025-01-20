// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetETFInfoReq implements Serializable {
    /**
     * ETF Currency, if empty query all currencies
     */
    currency?: string;

    private constructor() {}
    /**
     * Creates a new instance of the `GetETFInfoReq` class.
     * The builder pattern allows step-by-step construction of a `GetETFInfoReq` object.
     */
    static builder(): GetETFInfoReqBuilder {
        return new GetETFInfoReqBuilder(new GetETFInfoReq());
    }

    /**
     * Creates a new instance of the `GetETFInfoReq` class with the given data.
     */
    static create(data: {
        /**
         * ETF Currency, if empty query all currencies
         */
        currency?: string;
    }): GetETFInfoReq {
        let obj = new GetETFInfoReq();
        obj.currency = data.currency;
        return obj;
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    static fromJson(input: string): GetETFInfoReq {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): GetETFInfoReq {
        return plainToClassFromExist(new GetETFInfoReq(), jsonObject);
    }
}

export class GetETFInfoReqBuilder {
    constructor(readonly obj: GetETFInfoReq) {
        this.obj = obj;
    }
    /**
     * ETF Currency, if empty query all currencies
     */
    setCurrency(value: string): GetETFInfoReqBuilder {
        this.obj.currency = value;
        return this;
    }

    build(): GetETFInfoReq {
        return this.obj;
    }
}

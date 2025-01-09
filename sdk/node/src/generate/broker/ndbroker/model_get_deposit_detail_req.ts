// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetDepositDetailReq implements Serializable<GetDepositDetailReq> {
    /**
     * Currency
     */
    currency?: string;
    /**
     * Hash Value
     */
    hash?: string;

    /**
     * Creates a new instance of the `GetDepositDetailReq` class.
     * The builder pattern allows step-by-step construction of a `GetDepositDetailReq` object.
     */
    static builder(): GetDepositDetailReqBuilder {
        return new GetDepositDetailReqBuilder();
    }

    /**
     * Creates a new instance of the `GetDepositDetailReq` class with the given data.
     */
    static create(data: {
        /**
         * Currency
         */
        currency?: string;
        /**
         * Hash Value
         */
        hash?: string;
    }): GetDepositDetailReq {
        let obj = new GetDepositDetailReq();
        obj.currency = data.currency;
        obj.hash = data.hash;
        return obj;
    }

    fromJson(input: string): GetDepositDetailReq {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetDepositDetailReq, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetDepositDetailReq {
        return plainToInstance(GetDepositDetailReq, jsonObject);
    }
}

export class GetDepositDetailReqBuilder {
    obj: GetDepositDetailReq = new GetDepositDetailReq();
    /**
     * Currency
     */
    setCurrency(value: string): GetDepositDetailReqBuilder {
        this.obj.currency = value;
        return this;
    }

    /**
     * Hash Value
     */
    setHash(value: string): GetDepositDetailReqBuilder {
        this.obj.hash = value;
        return this;
    }

    build(): GetDepositDetailReq {
        return this.obj;
    }
}

// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetSpotAccountListReq implements Serializable {
    /**
     * currency
     */
    currency?: string;

    /**
     * Account type main、trade
     */
    type?: GetSpotAccountListReq.TypeEnum;

    private constructor() {}
    /**
     * Creates a new instance of the `GetSpotAccountListReq` class.
     * The builder pattern allows step-by-step construction of a `GetSpotAccountListReq` object.
     */
    static builder(): GetSpotAccountListReqBuilder {
        return new GetSpotAccountListReqBuilder(new GetSpotAccountListReq());
    }

    /**
     * Creates a new instance of the `GetSpotAccountListReq` class with the given data.
     */
    static create(data: {
        /**
         * currency
         */
        currency?: string;
        /**
         * Account type main、trade
         */
        type?: GetSpotAccountListReq.TypeEnum;
    }): GetSpotAccountListReq {
        let obj = new GetSpotAccountListReq();
        obj.currency = data.currency;
        obj.type = data.type;
        return obj;
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    static fromJson(input: string): GetSpotAccountListReq {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): GetSpotAccountListReq {
        return plainToClassFromExist(new GetSpotAccountListReq(), jsonObject);
    }
}

export namespace GetSpotAccountListReq {
    export enum TypeEnum {
        /**
         * Funding account
         */
        MAIN = <any>'main',
        /**
         * Spot account
         */
        TRADE = <any>'trade',
    }
}

export class GetSpotAccountListReqBuilder {
    constructor(readonly obj: GetSpotAccountListReq) {
        this.obj = obj;
    }
    /**
     * currency
     */
    setCurrency(value: string): GetSpotAccountListReqBuilder {
        this.obj.currency = value;
        return this;
    }

    /**
     * Account type main、trade
     */
    setType(value: GetSpotAccountListReq.TypeEnum): GetSpotAccountListReqBuilder {
        this.obj.type = value;
        return this;
    }

    build(): GetSpotAccountListReq {
        return this.obj;
    }
}

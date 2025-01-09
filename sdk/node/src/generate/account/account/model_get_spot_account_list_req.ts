// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetSpotAccountListReq implements Serializable<GetSpotAccountListReq> {
    /**
     * currency
     */
    currency?: string;
    /**
     * Account type main、trade
     */
    type?: GetSpotAccountListReq.TypeEnum;

    /**
     * Creates a new instance of the `GetSpotAccountListReq` class.
     * The builder pattern allows step-by-step construction of a `GetSpotAccountListReq` object.
     */
    static builder(): GetSpotAccountListReqBuilder {
        return new GetSpotAccountListReqBuilder();
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

    fromJson(input: string): GetSpotAccountListReq {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetSpotAccountListReq, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetSpotAccountListReq {
        return plainToInstance(GetSpotAccountListReq, jsonObject);
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
    obj: GetSpotAccountListReq = new GetSpotAccountListReq();
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

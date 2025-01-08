// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';
export class GetTransferQuotasReq implements Serializable<GetTransferQuotasReq> {
    /**
     * currency
     */
    currency?: string;
    /**
     * The account type:MAIN、TRADE、MARGIN、ISOLATED
     */
    type?: GetTransferQuotasReq.TypeEnum;
    /**
     * Trading pair, required when the account type is ISOLATED; other types are not passed, e.g.: BTC-USDT
     */
    tag?: string = 'BTC-USDT';

    /**
     * Creates a new instance of the `GetTransferQuotasReq` class.
     * The builder pattern allows step-by-step construction of a `GetTransferQuotasReq` object.
     */
    static builder(): GetTransferQuotasReqBuilder {
        return new GetTransferQuotasReqBuilder();
    }

    /**
     * Creates a new instance of the `GetTransferQuotasReq` class with the given data.
     */
    static create(data: {
        /**
         * currency
         */
        currency?: string;
        /**
         * The account type:MAIN、TRADE、MARGIN、ISOLATED
         */
        type?: GetTransferQuotasReq.TypeEnum;
        /**
         * Trading pair, required when the account type is ISOLATED; other types are not passed, e.g.: BTC-USDT
         */
        tag?: string;
    }): GetTransferQuotasReq {
        let obj = new GetTransferQuotasReq();
        obj.currency = data.currency;
        obj.type = data.type;
        obj.tag = data.tag;
        return obj;
    }

    fromJson(input: string): GetTransferQuotasReq {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetTransferQuotasReq, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetTransferQuotasReq {
        return plainToInstance(GetTransferQuotasReq, jsonObject);
    }
}

export namespace GetTransferQuotasReq {
    export enum TypeEnum {
        /**
         * Funding account
         */
        MAIN = <any>'MAIN',
        /**
         * Spot account
         */
        TRADE = <any>'TRADE',
        /**
         * Cross margin account
         */
        MARGIN = <any>'MARGIN',
        /**
         * Isolated margin account
         */
        ISOLATED = <any>'ISOLATED',
        /**
         * Option account
         */
        OPTION = <any>'OPTION',
    }
}

export class GetTransferQuotasReqBuilder {
    obj: GetTransferQuotasReq = new GetTransferQuotasReq();
    /**
     * currency
     */
    setCurrency(value: string): GetTransferQuotasReqBuilder {
        this.obj.currency = value;
        return this;
    }

    /**
     * The account type:MAIN、TRADE、MARGIN、ISOLATED
     */
    setType(value: GetTransferQuotasReq.TypeEnum): GetTransferQuotasReqBuilder {
        this.obj.type = value;
        return this;
    }

    /**
     * Trading pair, required when the account type is ISOLATED; other types are not passed, e.g.: BTC-USDT
     */
    setTag(value: string): GetTransferQuotasReqBuilder {
        this.obj.tag = value;
        return this;
    }

    build(): GetTransferQuotasReq {
        return this.obj;
    }
}

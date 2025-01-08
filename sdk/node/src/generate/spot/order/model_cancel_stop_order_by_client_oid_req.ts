// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';
export class CancelStopOrderByClientOidReq implements Serializable<CancelStopOrderByClientOidReq> {
    /**
     * symbol
     */
    symbol?: string;
    /**
     * Unique order id created by users to identify their orders
     */
    clientOid?: string;

    /**
     * Creates a new instance of the `CancelStopOrderByClientOidReq` class.
     * The builder pattern allows step-by-step construction of a `CancelStopOrderByClientOidReq` object.
     */
    static builder(): CancelStopOrderByClientOidReqBuilder {
        return new CancelStopOrderByClientOidReqBuilder();
    }

    /**
     * Creates a new instance of the `CancelStopOrderByClientOidReq` class with the given data.
     */
    static create(data: {
        /**
         * symbol
         */
        symbol?: string;
        /**
         * Unique order id created by users to identify their orders
         */
        clientOid?: string;
    }): CancelStopOrderByClientOidReq {
        let obj = new CancelStopOrderByClientOidReq();
        obj.symbol = data.symbol;
        obj.clientOid = data.clientOid;
        return obj;
    }

    fromJson(input: string): CancelStopOrderByClientOidReq {
        const jsonObject = JSON.parse(input);
        return plainToInstance(CancelStopOrderByClientOidReq, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): CancelStopOrderByClientOidReq {
        return plainToInstance(CancelStopOrderByClientOidReq, jsonObject);
    }
}

export class CancelStopOrderByClientOidReqBuilder {
    obj: CancelStopOrderByClientOidReq = new CancelStopOrderByClientOidReq();
    /**
     * symbol
     */
    setSymbol(value: string): CancelStopOrderByClientOidReqBuilder {
        this.obj.symbol = value;
        return this;
    }

    /**
     * Unique order id created by users to identify their orders
     */
    setClientOid(value: string): CancelStopOrderByClientOidReqBuilder {
        this.obj.clientOid = value;
        return this;
    }

    build(): CancelStopOrderByClientOidReq {
        return this.obj;
    }
}

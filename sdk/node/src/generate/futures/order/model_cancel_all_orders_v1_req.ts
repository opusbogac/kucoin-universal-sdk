// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';
export class CancelAllOrdersV1Req implements Serializable<CancelAllOrdersV1Req> {
    /**
     * Cancel all limit orders for a specific contract only,  If not specified, all the limit orders will be deleted, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
     */
    symbol?: string;

    /**
     * Creates a new instance of the `CancelAllOrdersV1Req` class.
     * The builder pattern allows step-by-step construction of a `CancelAllOrdersV1Req` object.
     */
    static builder(): CancelAllOrdersV1ReqBuilder {
        return new CancelAllOrdersV1ReqBuilder();
    }

    /**
     * Creates a new instance of the `CancelAllOrdersV1Req` class with the given data.
     */
    static create(data: {
        /**
         * Cancel all limit orders for a specific contract only,  If not specified, all the limit orders will be deleted, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
         */
        symbol?: string;
    }): CancelAllOrdersV1Req {
        let obj = new CancelAllOrdersV1Req();
        obj.symbol = data.symbol;
        return obj;
    }

    fromJson(input: string): CancelAllOrdersV1Req {
        const jsonObject = JSON.parse(input);
        return plainToInstance(CancelAllOrdersV1Req, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): CancelAllOrdersV1Req {
        return plainToInstance(CancelAllOrdersV1Req, jsonObject);
    }
}

export class CancelAllOrdersV1ReqBuilder {
    obj: CancelAllOrdersV1Req = new CancelAllOrdersV1Req();
    /**
     * Cancel all limit orders for a specific contract only,  If not specified, all the limit orders will be deleted, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
     */
    setSymbol(value: string): CancelAllOrdersV1ReqBuilder {
        this.obj.symbol = value;
        return this;
    }

    build(): CancelAllOrdersV1Req {
        return this.obj;
    }
}

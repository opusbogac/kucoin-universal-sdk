// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';
export class GetSpotActualFeeReq implements Serializable<GetSpotActualFeeReq> {
    /**
     * Trading pair (optional, you can inquire fee rates of 10 trading pairs each time at most)
     */
    symbols?: string;

    /**
     * Creates a new instance of the `GetSpotActualFeeReq` class.
     * The builder pattern allows step-by-step construction of a `GetSpotActualFeeReq` object.
     */
    static builder(): GetSpotActualFeeReqBuilder {
        return new GetSpotActualFeeReqBuilder();
    }

    /**
     * Creates a new instance of the `GetSpotActualFeeReq` class with the given data.
     */
    static create(data: {
        /**
         * Trading pair (optional, you can inquire fee rates of 10 trading pairs each time at most)
         */
        symbols?: string;
    }): GetSpotActualFeeReq {
        let obj = new GetSpotActualFeeReq();
        obj.symbols = data.symbols;
        return obj;
    }

    fromJson(input: string): GetSpotActualFeeReq {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetSpotActualFeeReq, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetSpotActualFeeReq {
        return plainToInstance(GetSpotActualFeeReq, jsonObject);
    }
}

export class GetSpotActualFeeReqBuilder {
    obj: GetSpotActualFeeReq = new GetSpotActualFeeReq();
    /**
     * Trading pair (optional, you can inquire fee rates of 10 trading pairs each time at most)
     */
    setSymbols(value: string): GetSpotActualFeeReqBuilder {
        this.obj.symbols = value;
        return this;
    }

    build(): GetSpotActualFeeReq {
        return this.obj;
    }
}

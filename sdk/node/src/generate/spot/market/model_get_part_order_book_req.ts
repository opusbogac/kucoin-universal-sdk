// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import 'reflect-metadata';
import { Serializable } from '@internal/interfaces/serializable';

export class GetPartOrderBookReq implements Serializable<GetPartOrderBookReq> {
    /**
     * symbol
     */
    symbol?: string;
    /**
     * Get the depth layer, optional value: 20, 100
     */
    @Reflect.metadata('path', 'size')
    size?: string;

    /**
     * Creates a new instance of the `GetPartOrderBookReq` class.
     * The builder pattern allows step-by-step construction of a `GetPartOrderBookReq` object.
     */
    static builder(): GetPartOrderBookReqBuilder {
        return new GetPartOrderBookReqBuilder();
    }

    /**
     * Creates a new instance of the `GetPartOrderBookReq` class with the given data.
     */
    static create(data: {
        /**
         * symbol
         */
        symbol?: string;
        /**
         * Get the depth layer, optional value: 20, 100
         */
        size?: string;
    }): GetPartOrderBookReq {
        let obj = new GetPartOrderBookReq();
        obj.symbol = data.symbol;
        obj.size = data.size;
        return obj;
    }

    fromJson(input: string): GetPartOrderBookReq {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetPartOrderBookReq, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetPartOrderBookReq {
        return plainToInstance(GetPartOrderBookReq, jsonObject);
    }
}

export class GetPartOrderBookReqBuilder {
    obj: GetPartOrderBookReq = new GetPartOrderBookReq();
    /**
     * symbol
     */
    setSymbol(value: string): GetPartOrderBookReqBuilder {
        this.obj.symbol = value;
        return this;
    }

    /**
     * Get the depth layer, optional value: 20, 100
     */
    setSize(value: string): GetPartOrderBookReqBuilder {
        this.obj.size = value;
        return this;
    }

    build(): GetPartOrderBookReq {
        return this.obj;
    }
}

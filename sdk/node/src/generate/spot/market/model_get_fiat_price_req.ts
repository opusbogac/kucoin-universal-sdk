// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetFiatPriceReq implements Serializable {
    /**
     * Ticker symbol of a base currency,eg.USD,EUR. Default is USD
     */
    base?: string = 'USD';

    /**
     * Comma-separated cryptocurrencies to be converted into fiat, e.g.: BTC,ETH, etc. Default to return the fiat price of all currencies.
     */
    currencies?: string;

    private constructor() {}
    /**
     * Creates a new instance of the `GetFiatPriceReq` class.
     * The builder pattern allows step-by-step construction of a `GetFiatPriceReq` object.
     */
    static builder(): GetFiatPriceReqBuilder {
        return new GetFiatPriceReqBuilder(new GetFiatPriceReq());
    }

    /**
     * Creates a new instance of the `GetFiatPriceReq` class with the given data.
     */
    static create(data: {
        /**
         * Ticker symbol of a base currency,eg.USD,EUR. Default is USD
         */
        base?: string;
        /**
         * Comma-separated cryptocurrencies to be converted into fiat, e.g.: BTC,ETH, etc. Default to return the fiat price of all currencies.
         */
        currencies?: string;
    }): GetFiatPriceReq {
        let obj = new GetFiatPriceReq();
        if (data.base) {
            obj.base = data.base;
        } else {
            obj.base = 'USD';
        }
        obj.currencies = data.currencies;
        return obj;
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    static fromJson(input: string): GetFiatPriceReq {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): GetFiatPriceReq {
        return plainToClassFromExist(new GetFiatPriceReq(), jsonObject);
    }
}

export class GetFiatPriceReqBuilder {
    constructor(readonly obj: GetFiatPriceReq) {
        this.obj = obj;
    }
    /**
     * Ticker symbol of a base currency,eg.USD,EUR. Default is USD
     */
    setBase(value: string): GetFiatPriceReqBuilder {
        this.obj.base = value;
        return this;
    }

    /**
     * Comma-separated cryptocurrencies to be converted into fiat, e.g.: BTC,ETH, etc. Default to return the fiat price of all currencies.
     */
    setCurrencies(value: string): GetFiatPriceReqBuilder {
        this.obj.currencies = value;
        return this;
    }

    build(): GetFiatPriceReq {
        return this.obj;
    }
}

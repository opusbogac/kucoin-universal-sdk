// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetPremiumIndexReq implements Serializable<GetPremiumIndexReq> {
    /**
     * Symbol of the contract, Please refer to [Get Symbol endpoint: premiumsSymbol1M, premiumsSymbol8H](https://www.kucoin.com/docs-new/api-3470220)
     */
    symbol?: string;
    /**
     * Start time (milisecond)
     */
    startAt?: number;
    /**
     * End time (milisecond)
     */
    endAt?: number;
    /**
     * This parameter functions to judge whether the lookup is reverse. True means “yes”. False means no. This parameter is set as True by default.
     */
    reverse?: boolean = true;
    /**
     * Start offset. The unique attribute of the last returned result of the last request. The data of the first page will be returned by default.
     */
    offset?: number;
    /**
     * This parameter functions to judge whether the lookup is forward or not. True means “yes” and False means “no”. This parameter is set as true by default
     */
    forward?: boolean = true;
    /**
     * Max record count. The default record count is 10, The maximum length cannot exceed 100
     */
    maxCount?: number = 10;

    /**
     * Creates a new instance of the `GetPremiumIndexReq` class.
     * The builder pattern allows step-by-step construction of a `GetPremiumIndexReq` object.
     */
    static builder(): GetPremiumIndexReqBuilder {
        return new GetPremiumIndexReqBuilder();
    }

    /**
     * Creates a new instance of the `GetPremiumIndexReq` class with the given data.
     */
    static create(data: {
        /**
         * Symbol of the contract, Please refer to [Get Symbol endpoint: premiumsSymbol1M, premiumsSymbol8H](https://www.kucoin.com/docs-new/api-3470220)
         */
        symbol?: string;
        /**
         * Start time (milisecond)
         */
        startAt?: number;
        /**
         * End time (milisecond)
         */
        endAt?: number;
        /**
         * This parameter functions to judge whether the lookup is reverse. True means “yes”. False means no. This parameter is set as True by default.
         */
        reverse?: boolean;
        /**
         * Start offset. The unique attribute of the last returned result of the last request. The data of the first page will be returned by default.
         */
        offset?: number;
        /**
         * This parameter functions to judge whether the lookup is forward or not. True means “yes” and False means “no”. This parameter is set as true by default
         */
        forward?: boolean;
        /**
         * Max record count. The default record count is 10, The maximum length cannot exceed 100
         */
        maxCount?: number;
    }): GetPremiumIndexReq {
        let obj = new GetPremiumIndexReq();
        obj.symbol = data.symbol;
        obj.startAt = data.startAt;
        obj.endAt = data.endAt;
        obj.reverse = data.reverse;
        obj.offset = data.offset;
        obj.forward = data.forward;
        obj.maxCount = data.maxCount;
        return obj;
    }

    fromJson(input: string): GetPremiumIndexReq {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetPremiumIndexReq, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetPremiumIndexReq {
        return plainToInstance(GetPremiumIndexReq, jsonObject);
    }
}

export class GetPremiumIndexReqBuilder {
    obj: GetPremiumIndexReq = new GetPremiumIndexReq();
    /**
     * Symbol of the contract, Please refer to [Get Symbol endpoint: premiumsSymbol1M, premiumsSymbol8H](https://www.kucoin.com/docs-new/api-3470220)
     */
    setSymbol(value: string): GetPremiumIndexReqBuilder {
        this.obj.symbol = value;
        return this;
    }

    /**
     * Start time (milisecond)
     */
    setStartAt(value: number): GetPremiumIndexReqBuilder {
        this.obj.startAt = value;
        return this;
    }

    /**
     * End time (milisecond)
     */
    setEndAt(value: number): GetPremiumIndexReqBuilder {
        this.obj.endAt = value;
        return this;
    }

    /**
     * This parameter functions to judge whether the lookup is reverse. True means “yes”. False means no. This parameter is set as True by default.
     */
    setReverse(value: boolean): GetPremiumIndexReqBuilder {
        this.obj.reverse = value;
        return this;
    }

    /**
     * Start offset. The unique attribute of the last returned result of the last request. The data of the first page will be returned by default.
     */
    setOffset(value: number): GetPremiumIndexReqBuilder {
        this.obj.offset = value;
        return this;
    }

    /**
     * This parameter functions to judge whether the lookup is forward or not. True means “yes” and False means “no”. This parameter is set as true by default
     */
    setForward(value: boolean): GetPremiumIndexReqBuilder {
        this.obj.forward = value;
        return this;
    }

    /**
     * Max record count. The default record count is 10, The maximum length cannot exceed 100
     */
    setMaxCount(value: number): GetPremiumIndexReqBuilder {
        this.obj.maxCount = value;
        return this;
    }

    build(): GetPremiumIndexReq {
        return this.obj;
    }
}

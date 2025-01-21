// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/serializable';

export class GetTickerResp implements Response<RestResponse> {
    /**
     * timestamp
     */
    time: number;

    /**
     * Sequence
     */
    sequence: string;

    /**
     * Last traded price
     */
    price: string;

    /**
     * Last traded size
     */
    size: string;

    /**
     * Best bid price
     */
    bestBid: string;

    /**
     * Best bid size
     */
    bestBidSize: string;

    /**
     * Best ask price
     */
    bestAsk: string;

    /**
     * Best ask size
     */
    bestAskSize: string;

    /**
     * Private constructor, please use the corresponding static methods to construct the object.
     */
    private constructor() {
        // @ts-ignore
        this.time = null;
        // @ts-ignore
        this.sequence = null;
        // @ts-ignore
        this.price = null;
        // @ts-ignore
        this.size = null;
        // @ts-ignore
        this.bestBid = null;
        // @ts-ignore
        this.bestBidSize = null;
        // @ts-ignore
        this.bestAsk = null;
        // @ts-ignore
        this.bestAskSize = null;
    }
    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    /**
     * Convert the object to a JSON string.
     */
    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }
    /**
     * Create an object from a JSON string.
     */
    static fromJson(input: string): GetTickerResp {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): GetTickerResp {
        return plainToClassFromExist(new GetTickerResp(), jsonObject);
    }
}

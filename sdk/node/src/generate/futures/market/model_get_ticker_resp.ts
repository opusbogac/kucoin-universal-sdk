// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';
export class GetTickerResp implements Response<GetTickerResp, RestResponse> {
    /**
     * Sequence number, used to judge whether the messages pushed by Websocket is continuous.
     */
    sequence?: number;
    /**
     * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
     */
    symbol?: string;
    /**
     * Filled side, The trade side indicates the taker order side. A taker order is the order that was matched with orders opened on the order book.
     */
    side?: GetTickerResp.SideEnum;
    /**
     * Filled quantity
     */
    size?: number;
    /**
     * Transaction ID
     */
    tradeId?: string;
    /**
     * Filled price
     */
    price?: string;
    /**
     * Best bid price
     */
    bestBidPrice?: string;
    /**
     * Best bid size
     */
    bestBidSize?: number;
    /**
     * Best ask price
     */
    bestAskPrice?: string;
    /**
     * Best ask size
     */
    bestAskSize?: number;
    /**
     * Filled time(nanosecond)
     */
    ts?: number;
    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): GetTickerResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetTickerResp, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetTickerResp {
        return plainToInstance(GetTickerResp, jsonObject);
    }
}

export namespace GetTickerResp {
    export enum SideEnum {
        /**
         * buy
         */
        BUY = <any>'buy',
        /**
         * sell
         */
        SELL = <any>'sell',
    }
}

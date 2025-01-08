// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';
export class GetClosedOrdersReq implements Serializable<GetClosedOrdersReq> {
    /**
     * symbol
     */
    symbol?: string;
    /**
     * Transaction type: MARGIN_TRADE - cross margin trade, MARGIN_ISOLATED_TRADE - isolated margin trade
     */
    tradeType?: GetClosedOrdersReq.TradeTypeEnum;
    /**
     * specify if the order is to \'buy\' or \'sell\'
     */
    side?: GetClosedOrdersReq.SideEnum;
    /**
     * specify if the order is an \'limit\' order or \'market\' order.
     */
    type?: GetClosedOrdersReq.TypeEnum;
    /**
     * The id of the last set of data from the previous batch of data. By default, the latest information is given. lastId is used to filter data and paginate. If lastId is not entered, the default is a maximum of 100 returned data items. The return results include lastId，which can be used as a query parameter to look up new data from the next page.
     */
    lastId?: number;
    /**
     * Default20，Max100
     */
    limit?: number = 20;
    /**
     * Start time (milisecond)
     */
    startAt?: number;
    /**
     * End time (milisecond)
     */
    endAt?: number;

    /**
     * Creates a new instance of the `GetClosedOrdersReq` class.
     * The builder pattern allows step-by-step construction of a `GetClosedOrdersReq` object.
     */
    static builder(): GetClosedOrdersReqBuilder {
        return new GetClosedOrdersReqBuilder();
    }

    /**
     * Creates a new instance of the `GetClosedOrdersReq` class with the given data.
     */
    static create(data: {
        /**
         * symbol
         */
        symbol?: string;
        /**
         * Transaction type: MARGIN_TRADE - cross margin trade, MARGIN_ISOLATED_TRADE - isolated margin trade
         */
        tradeType?: GetClosedOrdersReq.TradeTypeEnum;
        /**
         * specify if the order is to \'buy\' or \'sell\'
         */
        side?: GetClosedOrdersReq.SideEnum;
        /**
         * specify if the order is an \'limit\' order or \'market\' order.
         */
        type?: GetClosedOrdersReq.TypeEnum;
        /**
         * The id of the last set of data from the previous batch of data. By default, the latest information is given. lastId is used to filter data and paginate. If lastId is not entered, the default is a maximum of 100 returned data items. The return results include lastId，which can be used as a query parameter to look up new data from the next page.
         */
        lastId?: number;
        /**
         * Default20，Max100
         */
        limit?: number;
        /**
         * Start time (milisecond)
         */
        startAt?: number;
        /**
         * End time (milisecond)
         */
        endAt?: number;
    }): GetClosedOrdersReq {
        let obj = new GetClosedOrdersReq();
        obj.symbol = data.symbol;
        obj.tradeType = data.tradeType;
        obj.side = data.side;
        obj.type = data.type;
        obj.lastId = data.lastId;
        obj.limit = data.limit;
        obj.startAt = data.startAt;
        obj.endAt = data.endAt;
        return obj;
    }

    fromJson(input: string): GetClosedOrdersReq {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetClosedOrdersReq, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetClosedOrdersReq {
        return plainToInstance(GetClosedOrdersReq, jsonObject);
    }
}

export namespace GetClosedOrdersReq {
    export enum TradeTypeEnum {
        /**
         *
         */
        MARGIN_TRADE = <any>'MARGIN_TRADE',
        /**
         *
         */
        MARGIN_ISOLATED_TRADE = <any>'MARGIN_ISOLATED_TRADE',
    }
    export enum SideEnum {
        /**
         *
         */
        BUY = <any>'buy',
        /**
         *
         */
        SELL = <any>'sell',
    }
    export enum TypeEnum {
        /**
         *
         */
        LIMIT = <any>'limit',
        /**
         *
         */
        MARKET = <any>'market',
    }
}

export class GetClosedOrdersReqBuilder {
    obj: GetClosedOrdersReq = new GetClosedOrdersReq();
    /**
     * symbol
     */
    setSymbol(value: string): GetClosedOrdersReqBuilder {
        this.obj.symbol = value;
        return this;
    }

    /**
     * Transaction type: MARGIN_TRADE - cross margin trade, MARGIN_ISOLATED_TRADE - isolated margin trade
     */
    setTradeType(value: GetClosedOrdersReq.TradeTypeEnum): GetClosedOrdersReqBuilder {
        this.obj.tradeType = value;
        return this;
    }

    /**
     * specify if the order is to \'buy\' or \'sell\'
     */
    setSide(value: GetClosedOrdersReq.SideEnum): GetClosedOrdersReqBuilder {
        this.obj.side = value;
        return this;
    }

    /**
     * specify if the order is an \'limit\' order or \'market\' order.
     */
    setType(value: GetClosedOrdersReq.TypeEnum): GetClosedOrdersReqBuilder {
        this.obj.type = value;
        return this;
    }

    /**
     * The id of the last set of data from the previous batch of data. By default, the latest information is given. lastId is used to filter data and paginate. If lastId is not entered, the default is a maximum of 100 returned data items. The return results include lastId，which can be used as a query parameter to look up new data from the next page.
     */
    setLastId(value: number): GetClosedOrdersReqBuilder {
        this.obj.lastId = value;
        return this;
    }

    /**
     * Default20，Max100
     */
    setLimit(value: number): GetClosedOrdersReqBuilder {
        this.obj.limit = value;
        return this;
    }

    /**
     * Start time (milisecond)
     */
    setStartAt(value: number): GetClosedOrdersReqBuilder {
        this.obj.startAt = value;
        return this;
    }

    /**
     * End time (milisecond)
     */
    setEndAt(value: number): GetClosedOrdersReqBuilder {
        this.obj.endAt = value;
        return this;
    }

    build(): GetClosedOrdersReq {
        return this.obj;
    }
}

// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class AddOrderTestReq implements Serializable<AddOrderTestReq> {
    /**
     * Unique order id created by users to identify their orders, the maximum length cannot exceed 40, e.g. UUID, Only allows numbers, characters, underline(_), and separator(-)
     */
    clientOid?: string;
    /**
     * specify if the order is to \'buy\' or \'sell\'
     */
    side?: AddOrderTestReq.SideEnum;
    /**
     * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
     */
    symbol?: string;
    /**
     * Used to calculate the margin to be frozen for the order. If you are to close the position, this parameter is not required.
     */
    leverage?: number;
    /**
     * specify if the order is an \'limit\' order or \'market\' order
     */
    type?: AddOrderTestReq.TypeEnum = AddOrderTestReq.TypeEnum.LIMIT;
    /**
     * remark for the order, length cannot exceed 100 utf8 characters
     */
    remark?: string;
    /**
     * Either \'down\' or \'up\'.  If stop is used,parameter stopPrice and stopPriceType also need to be provieded.
     */
    stop?: AddOrderTestReq.StopEnum;
    /**
     * Either \'TP\', \'IP\' or \'MP\', Need to be defined if stop is specified.
     */
    stopPriceType?: AddOrderTestReq.StopPriceTypeEnum;
    /**
     * Need to be defined if stop is specified.
     */
    stopPrice?: string;
    /**
     * A mark to reduce the position size only. Set to false by default. Need to set the position size when reduceOnly is true. If set to true, only the orders reducing the position size will be executed. If the reduce-only order size exceeds the position size, the extra size will be canceled.
     */
    reduceOnly?: boolean = false;
    /**
     * A mark to close the position. Set to false by default. If closeOrder is set to true, the system will close the position and the position size will become 0. Side, Size and Leverage fields can be left empty and the system will determine the side and size automatically.
     */
    closeOrder?: boolean = false;
    /**
     * A mark to forcely hold the funds for an order, even though it\'s an order to reduce the position size. This helps the order stay on the order book and not get canceled when the position size changes. Set to false by default. The system will forcely freeze certain amount of funds for this order, including orders whose direction is opposite to the current positions. This feature is to ensure that the order won’t be canceled by the matching engine in such a circumstance that not enough funds are frozen for the order.
     */
    forceHold?: boolean = false;
    /**
     * Margin mode: ISOLATED, CROSS, default: ISOLATED
     */
    marginMode?: AddOrderTestReq.MarginModeEnum = AddOrderTestReq.MarginModeEnum.ISOLATED;
    /**
     * Required for type is \'limit\' order, indicating the operating price
     */
    price?: string;
    /**
     * Order size (Lot), must be a positive integer. The quantity unit of coin-swap contracts is size(lot), and other units are not supported.
     */
    size?: number;
    /**
     * Optional for type is \'limit\' order, [Time in force](https://www.kucoin.com/docs-new/doc-338146) is a special strategy used during trading, default is GTC
     */
    timeInForce?: AddOrderTestReq.TimeInForceEnum =
        AddOrderTestReq.TimeInForceEnum.GOOD_TILL_CANCELED;
    /**
     * Optional for type is \'limit\' order,  post only flag, invalid when timeInForce is IOC. When postOnly is true, not allowed choose hidden or iceberg. The post-only flag ensures that the trader always pays the maker fee and provides liquidity to the order book. If any part of the order is going to pay taker fee, the order will be fully rejected.
     */
    postOnly?: boolean = false;
    /**
     * Optional for type is \'limit\' order, orders not displaying in order book. When hidden chose, not allowed choose postOnly.
     */
    hidden?: boolean = false;
    /**
     * Optional for type is \'limit\' order, Only visible portion of the order is displayed in the order book. When iceberg chose, not allowed choose postOnly.
     */
    iceberg?: boolean = false;
    /**
     * Optional for type is \'limit\' order, The maximum visible size of an iceberg order. please place order in size (lots), The units of qty (base currency) and valueQty (value) are not supported.
     */
    visibleSize?: string;

    /**
     * Creates a new instance of the `AddOrderTestReq` class.
     * The builder pattern allows step-by-step construction of a `AddOrderTestReq` object.
     */
    static builder(): AddOrderTestReqBuilder {
        return new AddOrderTestReqBuilder();
    }

    /**
     * Creates a new instance of the `AddOrderTestReq` class with the given data.
     */
    static create(data: {
        /**
         * Unique order id created by users to identify their orders, the maximum length cannot exceed 40, e.g. UUID, Only allows numbers, characters, underline(_), and separator(-)
         */
        clientOid?: string;
        /**
         * specify if the order is to \'buy\' or \'sell\'
         */
        side?: AddOrderTestReq.SideEnum;
        /**
         * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
         */
        symbol?: string;
        /**
         * Used to calculate the margin to be frozen for the order. If you are to close the position, this parameter is not required.
         */
        leverage?: number;
        /**
         * specify if the order is an \'limit\' order or \'market\' order
         */
        type?: AddOrderTestReq.TypeEnum;
        /**
         * remark for the order, length cannot exceed 100 utf8 characters
         */
        remark?: string;
        /**
         * Either \'down\' or \'up\'.  If stop is used,parameter stopPrice and stopPriceType also need to be provieded.
         */
        stop?: AddOrderTestReq.StopEnum;
        /**
         * Either \'TP\', \'IP\' or \'MP\', Need to be defined if stop is specified.
         */
        stopPriceType?: AddOrderTestReq.StopPriceTypeEnum;
        /**
         * Need to be defined if stop is specified.
         */
        stopPrice?: string;
        /**
         * A mark to reduce the position size only. Set to false by default. Need to set the position size when reduceOnly is true. If set to true, only the orders reducing the position size will be executed. If the reduce-only order size exceeds the position size, the extra size will be canceled.
         */
        reduceOnly?: boolean;
        /**
         * A mark to close the position. Set to false by default. If closeOrder is set to true, the system will close the position and the position size will become 0. Side, Size and Leverage fields can be left empty and the system will determine the side and size automatically.
         */
        closeOrder?: boolean;
        /**
         * A mark to forcely hold the funds for an order, even though it\'s an order to reduce the position size. This helps the order stay on the order book and not get canceled when the position size changes. Set to false by default. The system will forcely freeze certain amount of funds for this order, including orders whose direction is opposite to the current positions. This feature is to ensure that the order won’t be canceled by the matching engine in such a circumstance that not enough funds are frozen for the order.
         */
        forceHold?: boolean;
        /**
         * Margin mode: ISOLATED, CROSS, default: ISOLATED
         */
        marginMode?: AddOrderTestReq.MarginModeEnum;
        /**
         * Required for type is \'limit\' order, indicating the operating price
         */
        price?: string;
        /**
         * Order size (Lot), must be a positive integer. The quantity unit of coin-swap contracts is size(lot), and other units are not supported.
         */
        size?: number;
        /**
         * Optional for type is \'limit\' order, [Time in force](https://www.kucoin.com/docs-new/doc-338146) is a special strategy used during trading, default is GTC
         */
        timeInForce?: AddOrderTestReq.TimeInForceEnum;
        /**
         * Optional for type is \'limit\' order,  post only flag, invalid when timeInForce is IOC. When postOnly is true, not allowed choose hidden or iceberg. The post-only flag ensures that the trader always pays the maker fee and provides liquidity to the order book. If any part of the order is going to pay taker fee, the order will be fully rejected.
         */
        postOnly?: boolean;
        /**
         * Optional for type is \'limit\' order, orders not displaying in order book. When hidden chose, not allowed choose postOnly.
         */
        hidden?: boolean;
        /**
         * Optional for type is \'limit\' order, Only visible portion of the order is displayed in the order book. When iceberg chose, not allowed choose postOnly.
         */
        iceberg?: boolean;
        /**
         * Optional for type is \'limit\' order, The maximum visible size of an iceberg order. please place order in size (lots), The units of qty (base currency) and valueQty (value) are not supported.
         */
        visibleSize?: string;
    }): AddOrderTestReq {
        let obj = new AddOrderTestReq();
        obj.clientOid = data.clientOid;
        obj.side = data.side;
        obj.symbol = data.symbol;
        obj.leverage = data.leverage;
        obj.type = data.type;
        obj.remark = data.remark;
        obj.stop = data.stop;
        obj.stopPriceType = data.stopPriceType;
        obj.stopPrice = data.stopPrice;
        obj.reduceOnly = data.reduceOnly;
        obj.closeOrder = data.closeOrder;
        obj.forceHold = data.forceHold;
        obj.marginMode = data.marginMode;
        obj.price = data.price;
        obj.size = data.size;
        obj.timeInForce = data.timeInForce;
        obj.postOnly = data.postOnly;
        obj.hidden = data.hidden;
        obj.iceberg = data.iceberg;
        obj.visibleSize = data.visibleSize;
        return obj;
    }

    fromJson(input: string): AddOrderTestReq {
        const jsonObject = JSON.parse(input);
        return plainToInstance(AddOrderTestReq, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): AddOrderTestReq {
        return plainToInstance(AddOrderTestReq, jsonObject);
    }
}

export namespace AddOrderTestReq {
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
    export enum StopEnum {
        /**
         * Triggers when the price reaches or goes below the stopPrice.
         */
        DOWN = <any>'down',
        /**
         * Triggers when the price reaches or goes above the stopPrice
         */
        UP = <any>'up',
    }
    export enum StopPriceTypeEnum {
        /**
         * TP for trade price, The last trade price is the last price at which an order was filled. This price can be found in the latest match message.
         */
        TRADE_PRICE = <any>'TP',
        /**
         * MP for mark price, The mark price can be obtained through relevant OPEN API for index services
         */
        MARK_PRICE = <any>'MP',
        /**
         * IP for index price, The index price can be obtained through relevant OPEN API for index services
         */
        INDEX_PRICE = <any>'IP',
    }
    export enum MarginModeEnum {
        /**
         *
         */
        ISOLATED = <any>'ISOLATED',
        /**
         *
         */
        CROSS = <any>'CROSS',
    }
    export enum TimeInForceEnum {
        /**
         * order remains open on the order book until canceled. This is the default type if the field is left empty.
         */
        GOOD_TILL_CANCELED = <any>'GTC',
        /**
         * being matched or not, the remaining size of the order will be instantly canceled instead of entering the order book.
         */
        IMMEDIATE_OR_CANCEL = <any>'IOC',
    }
}

export class AddOrderTestReqBuilder {
    obj: AddOrderTestReq = new AddOrderTestReq();
    /**
     * Unique order id created by users to identify their orders, the maximum length cannot exceed 40, e.g. UUID, Only allows numbers, characters, underline(_), and separator(-)
     */
    setClientOid(value: string): AddOrderTestReqBuilder {
        this.obj.clientOid = value;
        return this;
    }

    /**
     * specify if the order is to \'buy\' or \'sell\'
     */
    setSide(value: AddOrderTestReq.SideEnum): AddOrderTestReqBuilder {
        this.obj.side = value;
        return this;
    }

    /**
     * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
     */
    setSymbol(value: string): AddOrderTestReqBuilder {
        this.obj.symbol = value;
        return this;
    }

    /**
     * Used to calculate the margin to be frozen for the order. If you are to close the position, this parameter is not required.
     */
    setLeverage(value: number): AddOrderTestReqBuilder {
        this.obj.leverage = value;
        return this;
    }

    /**
     * specify if the order is an \'limit\' order or \'market\' order
     */
    setType(value: AddOrderTestReq.TypeEnum): AddOrderTestReqBuilder {
        this.obj.type = value;
        return this;
    }

    /**
     * remark for the order, length cannot exceed 100 utf8 characters
     */
    setRemark(value: string): AddOrderTestReqBuilder {
        this.obj.remark = value;
        return this;
    }

    /**
     * Either \'down\' or \'up\'.  If stop is used,parameter stopPrice and stopPriceType also need to be provieded.
     */
    setStop(value: AddOrderTestReq.StopEnum): AddOrderTestReqBuilder {
        this.obj.stop = value;
        return this;
    }

    /**
     * Either \'TP\', \'IP\' or \'MP\', Need to be defined if stop is specified.
     */
    setStopPriceType(value: AddOrderTestReq.StopPriceTypeEnum): AddOrderTestReqBuilder {
        this.obj.stopPriceType = value;
        return this;
    }

    /**
     * Need to be defined if stop is specified.
     */
    setStopPrice(value: string): AddOrderTestReqBuilder {
        this.obj.stopPrice = value;
        return this;
    }

    /**
     * A mark to reduce the position size only. Set to false by default. Need to set the position size when reduceOnly is true. If set to true, only the orders reducing the position size will be executed. If the reduce-only order size exceeds the position size, the extra size will be canceled.
     */
    setReduceOnly(value: boolean): AddOrderTestReqBuilder {
        this.obj.reduceOnly = value;
        return this;
    }

    /**
     * A mark to close the position. Set to false by default. If closeOrder is set to true, the system will close the position and the position size will become 0. Side, Size and Leverage fields can be left empty and the system will determine the side and size automatically.
     */
    setCloseOrder(value: boolean): AddOrderTestReqBuilder {
        this.obj.closeOrder = value;
        return this;
    }

    /**
     * A mark to forcely hold the funds for an order, even though it\'s an order to reduce the position size. This helps the order stay on the order book and not get canceled when the position size changes. Set to false by default. The system will forcely freeze certain amount of funds for this order, including orders whose direction is opposite to the current positions. This feature is to ensure that the order won’t be canceled by the matching engine in such a circumstance that not enough funds are frozen for the order.
     */
    setForceHold(value: boolean): AddOrderTestReqBuilder {
        this.obj.forceHold = value;
        return this;
    }

    /**
     * Margin mode: ISOLATED, CROSS, default: ISOLATED
     */
    setMarginMode(value: AddOrderTestReq.MarginModeEnum): AddOrderTestReqBuilder {
        this.obj.marginMode = value;
        return this;
    }

    /**
     * Required for type is \'limit\' order, indicating the operating price
     */
    setPrice(value: string): AddOrderTestReqBuilder {
        this.obj.price = value;
        return this;
    }

    /**
     * Order size (Lot), must be a positive integer. The quantity unit of coin-swap contracts is size(lot), and other units are not supported.
     */
    setSize(value: number): AddOrderTestReqBuilder {
        this.obj.size = value;
        return this;
    }

    /**
     * Optional for type is \'limit\' order, [Time in force](https://www.kucoin.com/docs-new/doc-338146) is a special strategy used during trading, default is GTC
     */
    setTimeInForce(value: AddOrderTestReq.TimeInForceEnum): AddOrderTestReqBuilder {
        this.obj.timeInForce = value;
        return this;
    }

    /**
     * Optional for type is \'limit\' order,  post only flag, invalid when timeInForce is IOC. When postOnly is true, not allowed choose hidden or iceberg. The post-only flag ensures that the trader always pays the maker fee and provides liquidity to the order book. If any part of the order is going to pay taker fee, the order will be fully rejected.
     */
    setPostOnly(value: boolean): AddOrderTestReqBuilder {
        this.obj.postOnly = value;
        return this;
    }

    /**
     * Optional for type is \'limit\' order, orders not displaying in order book. When hidden chose, not allowed choose postOnly.
     */
    setHidden(value: boolean): AddOrderTestReqBuilder {
        this.obj.hidden = value;
        return this;
    }

    /**
     * Optional for type is \'limit\' order, Only visible portion of the order is displayed in the order book. When iceberg chose, not allowed choose postOnly.
     */
    setIceberg(value: boolean): AddOrderTestReqBuilder {
        this.obj.iceberg = value;
        return this;
    }

    /**
     * Optional for type is \'limit\' order, The maximum visible size of an iceberg order. please place order in size (lots), The units of qty (base currency) and valueQty (value) are not supported.
     */
    setVisibleSize(value: string): AddOrderTestReqBuilder {
        this.obj.visibleSize = value;
        return this;
    }

    build(): AddOrderTestReq {
        return this.obj;
    }
}

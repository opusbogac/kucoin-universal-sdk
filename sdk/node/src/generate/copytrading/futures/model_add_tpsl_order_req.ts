// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class AddTPSLOrderReq implements Serializable {
    /**
     * Unique order id created by users to identify their orders, the maximum length cannot exceed 40, e.g. UUID, Only allows numbers, characters, underline(_), and separator(-)
     */
    clientOid: string;

    /**
     * specify if the order is to \'buy\' or \'sell\'
     */
    side: AddTPSLOrderReq.SideEnum;

    /**
     * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
     */
    symbol: string;

    /**
     * Used to calculate the margin to be frozen for the order. If you are to close the position, this parameter is not required.
     */
    leverage: number;

    /**
     * specify if the order is an \'limit\' order or \'market\' order
     */
    type: AddTPSLOrderReq.TypeEnum = AddTPSLOrderReq.TypeEnum.LIMIT;

    /**
     * remark for the order, length cannot exceed 100 utf8 characters
     */
    remark?: string;

    /**
     * Either \'TP\', \'IP\' or \'MP\'
     */
    stopPriceType?: AddTPSLOrderReq.StopPriceTypeEnum;

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
    marginMode?: AddTPSLOrderReq.MarginModeEnum = AddTPSLOrderReq.MarginModeEnum.ISOLATED;

    /**
     * Required for type is \'limit\' order, indicating the operating price
     */
    price?: string;

    /**
     * Order size (Lot), must be a positive integer. The quantity unit of coin-swap contracts is size(lot), and other units are not supported.
     */
    size: number;

    /**
     * Optional for type is \'limit\' order, [Time in force](https://www.kucoin.com/docs-new/doc-338146) is a special strategy used during trading, default is GTC
     */
    timeInForce?: AddTPSLOrderReq.TimeInForceEnum =
        AddTPSLOrderReq.TimeInForceEnum.GOOD_TILL_CANCELED;

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
     * Take profit price
     */
    triggerStopUpPrice?: string;

    /**
     * Stop loss price
     */
    triggerStopDownPrice?: string;

    private constructor() {
        // @ts-ignore
        this.clientOid = null;
        // @ts-ignore
        this.side = null;
        // @ts-ignore
        this.symbol = null;
        // @ts-ignore
        this.leverage = null;
        // @ts-ignore
        this.type = null;
        // @ts-ignore
        this.size = null;
    }
    /**
     * Creates a new instance of the `AddTPSLOrderReq` class.
     * The builder pattern allows step-by-step construction of a `AddTPSLOrderReq` object.
     */
    static builder(): AddTPSLOrderReqBuilder {
        return new AddTPSLOrderReqBuilder(new AddTPSLOrderReq());
    }

    /**
     * Creates a new instance of the `AddTPSLOrderReq` class with the given data.
     */
    static create(data: {
        /**
         * Unique order id created by users to identify their orders, the maximum length cannot exceed 40, e.g. UUID, Only allows numbers, characters, underline(_), and separator(-)
         */
        clientOid: string;
        /**
         * specify if the order is to \'buy\' or \'sell\'
         */
        side: AddTPSLOrderReq.SideEnum;
        /**
         * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
         */
        symbol: string;
        /**
         * Used to calculate the margin to be frozen for the order. If you are to close the position, this parameter is not required.
         */
        leverage: number;
        /**
         * specify if the order is an \'limit\' order or \'market\' order
         */
        type: AddTPSLOrderReq.TypeEnum;
        /**
         * remark for the order, length cannot exceed 100 utf8 characters
         */
        remark?: string;
        /**
         * Either \'TP\', \'IP\' or \'MP\'
         */
        stopPriceType?: AddTPSLOrderReq.StopPriceTypeEnum;
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
        marginMode?: AddTPSLOrderReq.MarginModeEnum;
        /**
         * Required for type is \'limit\' order, indicating the operating price
         */
        price?: string;
        /**
         * Order size (Lot), must be a positive integer. The quantity unit of coin-swap contracts is size(lot), and other units are not supported.
         */
        size: number;
        /**
         * Optional for type is \'limit\' order, [Time in force](https://www.kucoin.com/docs-new/doc-338146) is a special strategy used during trading, default is GTC
         */
        timeInForce?: AddTPSLOrderReq.TimeInForceEnum;
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
        /**
         * Take profit price
         */
        triggerStopUpPrice?: string;
        /**
         * Stop loss price
         */
        triggerStopDownPrice?: string;
    }): AddTPSLOrderReq {
        let obj = new AddTPSLOrderReq();
        obj.clientOid = data.clientOid;
        obj.side = data.side;
        obj.symbol = data.symbol;
        obj.leverage = data.leverage;
        if (data.type) {
            obj.type = data.type;
        } else {
            obj.type = AddTPSLOrderReq.TypeEnum.LIMIT;
        }
        obj.remark = data.remark;
        obj.stopPriceType = data.stopPriceType;
        if (data.reduceOnly) {
            obj.reduceOnly = data.reduceOnly;
        } else {
            obj.reduceOnly = false;
        }
        if (data.closeOrder) {
            obj.closeOrder = data.closeOrder;
        } else {
            obj.closeOrder = false;
        }
        if (data.forceHold) {
            obj.forceHold = data.forceHold;
        } else {
            obj.forceHold = false;
        }
        if (data.marginMode) {
            obj.marginMode = data.marginMode;
        } else {
            obj.marginMode = AddTPSLOrderReq.MarginModeEnum.ISOLATED;
        }
        obj.price = data.price;
        obj.size = data.size;
        if (data.timeInForce) {
            obj.timeInForce = data.timeInForce;
        } else {
            obj.timeInForce = AddTPSLOrderReq.TimeInForceEnum.GOOD_TILL_CANCELED;
        }
        if (data.postOnly) {
            obj.postOnly = data.postOnly;
        } else {
            obj.postOnly = false;
        }
        if (data.hidden) {
            obj.hidden = data.hidden;
        } else {
            obj.hidden = false;
        }
        if (data.iceberg) {
            obj.iceberg = data.iceberg;
        } else {
            obj.iceberg = false;
        }
        obj.visibleSize = data.visibleSize;
        obj.triggerStopUpPrice = data.triggerStopUpPrice;
        obj.triggerStopDownPrice = data.triggerStopDownPrice;
        return obj;
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    static fromJson(input: string): AddTPSLOrderReq {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): AddTPSLOrderReq {
        return plainToClassFromExist(new AddTPSLOrderReq(), jsonObject);
    }
}

export namespace AddTPSLOrderReq {
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
         * limit order
         */
        LIMIT = <any>'limit',
        /**
         * market order
         */
        MARKET = <any>'market',
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

export class AddTPSLOrderReqBuilder {
    constructor(readonly obj: AddTPSLOrderReq) {
        this.obj = obj;
    }
    /**
     * Unique order id created by users to identify their orders, the maximum length cannot exceed 40, e.g. UUID, Only allows numbers, characters, underline(_), and separator(-)
     */
    setClientOid(value: string): AddTPSLOrderReqBuilder {
        this.obj.clientOid = value;
        return this;
    }

    /**
     * specify if the order is to \'buy\' or \'sell\'
     */
    setSide(value: AddTPSLOrderReq.SideEnum): AddTPSLOrderReqBuilder {
        this.obj.side = value;
        return this;
    }

    /**
     * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
     */
    setSymbol(value: string): AddTPSLOrderReqBuilder {
        this.obj.symbol = value;
        return this;
    }

    /**
     * Used to calculate the margin to be frozen for the order. If you are to close the position, this parameter is not required.
     */
    setLeverage(value: number): AddTPSLOrderReqBuilder {
        this.obj.leverage = value;
        return this;
    }

    /**
     * specify if the order is an \'limit\' order or \'market\' order
     */
    setType(value: AddTPSLOrderReq.TypeEnum): AddTPSLOrderReqBuilder {
        this.obj.type = value;
        return this;
    }

    /**
     * remark for the order, length cannot exceed 100 utf8 characters
     */
    setRemark(value: string): AddTPSLOrderReqBuilder {
        this.obj.remark = value;
        return this;
    }

    /**
     * Either \'TP\', \'IP\' or \'MP\'
     */
    setStopPriceType(value: AddTPSLOrderReq.StopPriceTypeEnum): AddTPSLOrderReqBuilder {
        this.obj.stopPriceType = value;
        return this;
    }

    /**
     * A mark to reduce the position size only. Set to false by default. Need to set the position size when reduceOnly is true. If set to true, only the orders reducing the position size will be executed. If the reduce-only order size exceeds the position size, the extra size will be canceled.
     */
    setReduceOnly(value: boolean): AddTPSLOrderReqBuilder {
        this.obj.reduceOnly = value;
        return this;
    }

    /**
     * A mark to close the position. Set to false by default. If closeOrder is set to true, the system will close the position and the position size will become 0. Side, Size and Leverage fields can be left empty and the system will determine the side and size automatically.
     */
    setCloseOrder(value: boolean): AddTPSLOrderReqBuilder {
        this.obj.closeOrder = value;
        return this;
    }

    /**
     * A mark to forcely hold the funds for an order, even though it\'s an order to reduce the position size. This helps the order stay on the order book and not get canceled when the position size changes. Set to false by default. The system will forcely freeze certain amount of funds for this order, including orders whose direction is opposite to the current positions. This feature is to ensure that the order won’t be canceled by the matching engine in such a circumstance that not enough funds are frozen for the order.
     */
    setForceHold(value: boolean): AddTPSLOrderReqBuilder {
        this.obj.forceHold = value;
        return this;
    }

    /**
     * Margin mode: ISOLATED, CROSS, default: ISOLATED
     */
    setMarginMode(value: AddTPSLOrderReq.MarginModeEnum): AddTPSLOrderReqBuilder {
        this.obj.marginMode = value;
        return this;
    }

    /**
     * Required for type is \'limit\' order, indicating the operating price
     */
    setPrice(value: string): AddTPSLOrderReqBuilder {
        this.obj.price = value;
        return this;
    }

    /**
     * Order size (Lot), must be a positive integer. The quantity unit of coin-swap contracts is size(lot), and other units are not supported.
     */
    setSize(value: number): AddTPSLOrderReqBuilder {
        this.obj.size = value;
        return this;
    }

    /**
     * Optional for type is \'limit\' order, [Time in force](https://www.kucoin.com/docs-new/doc-338146) is a special strategy used during trading, default is GTC
     */
    setTimeInForce(value: AddTPSLOrderReq.TimeInForceEnum): AddTPSLOrderReqBuilder {
        this.obj.timeInForce = value;
        return this;
    }

    /**
     * Optional for type is \'limit\' order,  post only flag, invalid when timeInForce is IOC. When postOnly is true, not allowed choose hidden or iceberg. The post-only flag ensures that the trader always pays the maker fee and provides liquidity to the order book. If any part of the order is going to pay taker fee, the order will be fully rejected.
     */
    setPostOnly(value: boolean): AddTPSLOrderReqBuilder {
        this.obj.postOnly = value;
        return this;
    }

    /**
     * Optional for type is \'limit\' order, orders not displaying in order book. When hidden chose, not allowed choose postOnly.
     */
    setHidden(value: boolean): AddTPSLOrderReqBuilder {
        this.obj.hidden = value;
        return this;
    }

    /**
     * Optional for type is \'limit\' order, Only visible portion of the order is displayed in the order book. When iceberg chose, not allowed choose postOnly.
     */
    setIceberg(value: boolean): AddTPSLOrderReqBuilder {
        this.obj.iceberg = value;
        return this;
    }

    /**
     * Optional for type is \'limit\' order, The maximum visible size of an iceberg order. please place order in size (lots), The units of qty (base currency) and valueQty (value) are not supported.
     */
    setVisibleSize(value: string): AddTPSLOrderReqBuilder {
        this.obj.visibleSize = value;
        return this;
    }

    /**
     * Take profit price
     */
    setTriggerStopUpPrice(value: string): AddTPSLOrderReqBuilder {
        this.obj.triggerStopUpPrice = value;
        return this;
    }

    /**
     * Stop loss price
     */
    setTriggerStopDownPrice(value: string): AddTPSLOrderReqBuilder {
        this.obj.triggerStopDownPrice = value;
        return this;
    }

    build(): AddTPSLOrderReq {
        return this.obj;
    }
}

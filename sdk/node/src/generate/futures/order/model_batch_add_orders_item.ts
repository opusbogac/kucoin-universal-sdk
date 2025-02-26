// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class BatchAddOrdersItem implements Serializable {
    /**
     * Unique order id created by users to identify their orders, the maximum length cannot exceed 40, e.g. UUID, Only allows numbers, characters, underline(_), and separator(-)
     */
    clientOid: string;

    /**
     * specify if the order is to \'buy\' or \'sell\'
     */
    side: BatchAddOrdersItem.SideEnum;

    /**
     * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-221752070)
     */
    symbol: string;

    /**
     * Used to calculate the margin to be frozen for the order. If you are to close the position, this parameter is not required.
     */
    leverage: number;

    /**
     * specify if the order is an \'limit\' order or \'market\' order
     */
    type: BatchAddOrdersItem.TypeEnum = BatchAddOrdersItem.TypeEnum.LIMIT;

    /**
     * remark for the order, length cannot exceed 100 utf8 characters
     */
    remark?: string;

    /**
     * Either \'down\' or \'up\'.  If stop is used,parameter stopPrice and stopPriceType also need to be provieded.
     */
    stop?: BatchAddOrdersItem.StopEnum;

    /**
     * Either \'TP\', \'IP\' or \'MP\', Need to be defined if stop is specified.
     */
    stopPriceType?: BatchAddOrdersItem.StopPriceTypeEnum;

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
     * [Self Trade Prevention](https://www.kucoin.com/docs-new/doc-338146) is divided into these strategies: CN, CO, CB. Not supported DC at the moment.
     */
    stp?: BatchAddOrdersItem.StpEnum;

    /**
     * Margin mode: ISOLATED, CROSS, default: ISOLATED
     */
    marginMode?: BatchAddOrdersItem.MarginModeEnum = BatchAddOrdersItem.MarginModeEnum.ISOLATED;

    /**
     * Required for type is \'limit\' order, indicating the operating price
     */
    price?: string;

    /**
     * **Choose one of size, qty, valueQty**, Order size (Lot), must be a positive integer. The quantity unit of coin-swap contracts is size(lot), and other units are not supported.
     */
    size?: number;

    /**
     * Optional for type is \'limit\' order, [Time in force](https://www.kucoin.com/docs-new/doc-338146) is a special strategy used during trading, default is GTC
     */
    timeInForce?: BatchAddOrdersItem.TimeInForceEnum =
        BatchAddOrdersItem.TimeInForceEnum.GOOD_TILL_CANCELED;

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
     * **Choose one of size, qty, valueQty**, Order size (Base currency) must be an integer multiple of the multiplier. The unit of the quantity of coin-swap is size(lot), which is not supported
     */
    qty?: string;

    /**
     * **Choose one of size, qty, valueQty**, Order size (Value), USDS-Swap correspond to USDT or USDC. The unit of the quantity of coin-swap is size(lot), which is not supported
     */
    valueQty?: string;

    /**
     * Private constructor, please use the corresponding static methods to construct the object.
     */
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
    }
    /**
     * Creates a new instance of the `BatchAddOrdersItem` class.
     * The builder pattern allows step-by-step construction of a `BatchAddOrdersItem` object.
     */
    static builder(): BatchAddOrdersItemBuilder {
        return new BatchAddOrdersItemBuilder(new BatchAddOrdersItem());
    }

    /**
     * Creates a new instance of the `BatchAddOrdersItem` class with the given data.
     */
    static create(data: {
        /**
         * Unique order id created by users to identify their orders, the maximum length cannot exceed 40, e.g. UUID, Only allows numbers, characters, underline(_), and separator(-)
         */
        clientOid: string;
        /**
         * specify if the order is to \'buy\' or \'sell\'
         */
        side: BatchAddOrdersItem.SideEnum;
        /**
         * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-221752070)
         */
        symbol: string;
        /**
         * Used to calculate the margin to be frozen for the order. If you are to close the position, this parameter is not required.
         */
        leverage: number;
        /**
         * specify if the order is an \'limit\' order or \'market\' order
         */
        type: BatchAddOrdersItem.TypeEnum;
        /**
         * remark for the order, length cannot exceed 100 utf8 characters
         */
        remark?: string;
        /**
         * Either \'down\' or \'up\'.  If stop is used,parameter stopPrice and stopPriceType also need to be provieded.
         */
        stop?: BatchAddOrdersItem.StopEnum;
        /**
         * Either \'TP\', \'IP\' or \'MP\', Need to be defined if stop is specified.
         */
        stopPriceType?: BatchAddOrdersItem.StopPriceTypeEnum;
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
         * [Self Trade Prevention](https://www.kucoin.com/docs-new/doc-338146) is divided into these strategies: CN, CO, CB. Not supported DC at the moment.
         */
        stp?: BatchAddOrdersItem.StpEnum;
        /**
         * Margin mode: ISOLATED, CROSS, default: ISOLATED
         */
        marginMode?: BatchAddOrdersItem.MarginModeEnum;
        /**
         * Required for type is \'limit\' order, indicating the operating price
         */
        price?: string;
        /**
         * **Choose one of size, qty, valueQty**, Order size (Lot), must be a positive integer. The quantity unit of coin-swap contracts is size(lot), and other units are not supported.
         */
        size?: number;
        /**
         * Optional for type is \'limit\' order, [Time in force](https://www.kucoin.com/docs-new/doc-338146) is a special strategy used during trading, default is GTC
         */
        timeInForce?: BatchAddOrdersItem.TimeInForceEnum;
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
         * **Choose one of size, qty, valueQty**, Order size (Base currency) must be an integer multiple of the multiplier. The unit of the quantity of coin-swap is size(lot), which is not supported
         */
        qty?: string;
        /**
         * **Choose one of size, qty, valueQty**, Order size (Value), USDS-Swap correspond to USDT or USDC. The unit of the quantity of coin-swap is size(lot), which is not supported
         */
        valueQty?: string;
    }): BatchAddOrdersItem {
        let obj = new BatchAddOrdersItem();
        obj.clientOid = data.clientOid;
        obj.side = data.side;
        obj.symbol = data.symbol;
        obj.leverage = data.leverage;
        if (data.type) {
            obj.type = data.type;
        } else {
            obj.type = BatchAddOrdersItem.TypeEnum.LIMIT;
        }
        obj.remark = data.remark;
        obj.stop = data.stop;
        obj.stopPriceType = data.stopPriceType;
        obj.stopPrice = data.stopPrice;
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
        obj.stp = data.stp;
        if (data.marginMode) {
            obj.marginMode = data.marginMode;
        } else {
            obj.marginMode = BatchAddOrdersItem.MarginModeEnum.ISOLATED;
        }
        obj.price = data.price;
        obj.size = data.size;
        if (data.timeInForce) {
            obj.timeInForce = data.timeInForce;
        } else {
            obj.timeInForce = BatchAddOrdersItem.TimeInForceEnum.GOOD_TILL_CANCELED;
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
        obj.qty = data.qty;
        obj.valueQty = data.valueQty;
        return obj;
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
    static fromJson(input: string): BatchAddOrdersItem {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): BatchAddOrdersItem {
        return plainToClassFromExist(new BatchAddOrdersItem(), jsonObject);
    }
}

export namespace BatchAddOrdersItem {
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
    export enum StpEnum {
        /**
         * Cancel new, Cancel the new order
         */
        CN = <any>'CN',
        /**
         * Cancel old, Cancel the old order
         */
        CO = <any>'CO',
        /**
         * Cancel both, Cancel both sides
         */
        CB = <any>'CB',
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

export class BatchAddOrdersItemBuilder {
    constructor(readonly obj: BatchAddOrdersItem) {
        this.obj = obj;
    }
    /**
     * Unique order id created by users to identify their orders, the maximum length cannot exceed 40, e.g. UUID, Only allows numbers, characters, underline(_), and separator(-)
     */
    setClientOid(value: string): BatchAddOrdersItemBuilder {
        this.obj.clientOid = value;
        return this;
    }

    /**
     * specify if the order is to \'buy\' or \'sell\'
     */
    setSide(value: BatchAddOrdersItem.SideEnum): BatchAddOrdersItemBuilder {
        this.obj.side = value;
        return this;
    }

    /**
     * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-221752070)
     */
    setSymbol(value: string): BatchAddOrdersItemBuilder {
        this.obj.symbol = value;
        return this;
    }

    /**
     * Used to calculate the margin to be frozen for the order. If you are to close the position, this parameter is not required.
     */
    setLeverage(value: number): BatchAddOrdersItemBuilder {
        this.obj.leverage = value;
        return this;
    }

    /**
     * specify if the order is an \'limit\' order or \'market\' order
     */
    setType(value: BatchAddOrdersItem.TypeEnum): BatchAddOrdersItemBuilder {
        this.obj.type = value;
        return this;
    }

    /**
     * remark for the order, length cannot exceed 100 utf8 characters
     */
    setRemark(value: string): BatchAddOrdersItemBuilder {
        this.obj.remark = value;
        return this;
    }

    /**
     * Either \'down\' or \'up\'.  If stop is used,parameter stopPrice and stopPriceType also need to be provieded.
     */
    setStop(value: BatchAddOrdersItem.StopEnum): BatchAddOrdersItemBuilder {
        this.obj.stop = value;
        return this;
    }

    /**
     * Either \'TP\', \'IP\' or \'MP\', Need to be defined if stop is specified.
     */
    setStopPriceType(value: BatchAddOrdersItem.StopPriceTypeEnum): BatchAddOrdersItemBuilder {
        this.obj.stopPriceType = value;
        return this;
    }

    /**
     * Need to be defined if stop is specified.
     */
    setStopPrice(value: string): BatchAddOrdersItemBuilder {
        this.obj.stopPrice = value;
        return this;
    }

    /**
     * A mark to reduce the position size only. Set to false by default. Need to set the position size when reduceOnly is true. If set to true, only the orders reducing the position size will be executed. If the reduce-only order size exceeds the position size, the extra size will be canceled.
     */
    setReduceOnly(value: boolean): BatchAddOrdersItemBuilder {
        this.obj.reduceOnly = value;
        return this;
    }

    /**
     * A mark to close the position. Set to false by default. If closeOrder is set to true, the system will close the position and the position size will become 0. Side, Size and Leverage fields can be left empty and the system will determine the side and size automatically.
     */
    setCloseOrder(value: boolean): BatchAddOrdersItemBuilder {
        this.obj.closeOrder = value;
        return this;
    }

    /**
     * A mark to forcely hold the funds for an order, even though it\'s an order to reduce the position size. This helps the order stay on the order book and not get canceled when the position size changes. Set to false by default. The system will forcely freeze certain amount of funds for this order, including orders whose direction is opposite to the current positions. This feature is to ensure that the order won’t be canceled by the matching engine in such a circumstance that not enough funds are frozen for the order.
     */
    setForceHold(value: boolean): BatchAddOrdersItemBuilder {
        this.obj.forceHold = value;
        return this;
    }

    /**
     * [Self Trade Prevention](https://www.kucoin.com/docs-new/doc-338146) is divided into these strategies: CN, CO, CB. Not supported DC at the moment.
     */
    setStp(value: BatchAddOrdersItem.StpEnum): BatchAddOrdersItemBuilder {
        this.obj.stp = value;
        return this;
    }

    /**
     * Margin mode: ISOLATED, CROSS, default: ISOLATED
     */
    setMarginMode(value: BatchAddOrdersItem.MarginModeEnum): BatchAddOrdersItemBuilder {
        this.obj.marginMode = value;
        return this;
    }

    /**
     * Required for type is \'limit\' order, indicating the operating price
     */
    setPrice(value: string): BatchAddOrdersItemBuilder {
        this.obj.price = value;
        return this;
    }

    /**
     * **Choose one of size, qty, valueQty**, Order size (Lot), must be a positive integer. The quantity unit of coin-swap contracts is size(lot), and other units are not supported.
     */
    setSize(value: number): BatchAddOrdersItemBuilder {
        this.obj.size = value;
        return this;
    }

    /**
     * Optional for type is \'limit\' order, [Time in force](https://www.kucoin.com/docs-new/doc-338146) is a special strategy used during trading, default is GTC
     */
    setTimeInForce(value: BatchAddOrdersItem.TimeInForceEnum): BatchAddOrdersItemBuilder {
        this.obj.timeInForce = value;
        return this;
    }

    /**
     * Optional for type is \'limit\' order,  post only flag, invalid when timeInForce is IOC. When postOnly is true, not allowed choose hidden or iceberg. The post-only flag ensures that the trader always pays the maker fee and provides liquidity to the order book. If any part of the order is going to pay taker fee, the order will be fully rejected.
     */
    setPostOnly(value: boolean): BatchAddOrdersItemBuilder {
        this.obj.postOnly = value;
        return this;
    }

    /**
     * Optional for type is \'limit\' order, orders not displaying in order book. When hidden chose, not allowed choose postOnly.
     */
    setHidden(value: boolean): BatchAddOrdersItemBuilder {
        this.obj.hidden = value;
        return this;
    }

    /**
     * Optional for type is \'limit\' order, Only visible portion of the order is displayed in the order book. When iceberg chose, not allowed choose postOnly.
     */
    setIceberg(value: boolean): BatchAddOrdersItemBuilder {
        this.obj.iceberg = value;
        return this;
    }

    /**
     * Optional for type is \'limit\' order, The maximum visible size of an iceberg order. please place order in size (lots), The units of qty (base currency) and valueQty (value) are not supported.
     */
    setVisibleSize(value: string): BatchAddOrdersItemBuilder {
        this.obj.visibleSize = value;
        return this;
    }

    /**
     * **Choose one of size, qty, valueQty**, Order size (Base currency) must be an integer multiple of the multiplier. The unit of the quantity of coin-swap is size(lot), which is not supported
     */
    setQty(value: string): BatchAddOrdersItemBuilder {
        this.obj.qty = value;
        return this;
    }

    /**
     * **Choose one of size, qty, valueQty**, Order size (Value), USDS-Swap correspond to USDT or USDC. The unit of the quantity of coin-swap is size(lot), which is not supported
     */
    setValueQty(value: string): BatchAddOrdersItemBuilder {
        this.obj.valueQty = value;
        return this;
    }

    /**
     * Get the final object.
     */
    build(): BatchAddOrdersItem {
        return this.obj;
    }
}

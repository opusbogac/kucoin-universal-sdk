// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class BatchAddOrdersOrderList implements Serializable {
    /**
     * Client Order Id，The ClientOid field is a unique ID created by the user（we recommend using a UUID）, and can only contain numbers, letters, underscores （_）, and hyphens （-）. This field is returned when order information is obtained. You can use clientOid to tag your orders. ClientOid is different from the order ID created by the service provider. Please do not initiate requests using the same clientOid. The maximum length for the ClientOid is 40 characters.
     */
    clientOid?: string;

    /**
     * symbol
     */
    symbol: string;

    /**
     * Specify if the order is an \'limit\' order or \'market\' order.
     */
    type: BatchAddOrdersOrderList.TypeEnum;

    /**
     * [Time in force](https://www.kucoin.com/docs-new/doc-338146) is a special strategy used during trading
     */
    timeInForce?: BatchAddOrdersOrderList.TimeInForceEnum =
        BatchAddOrdersOrderList.TimeInForceEnum.GTC;

    /**
     * Specify if the order is to \'buy\' or \'sell\'
     */
    side: BatchAddOrdersOrderList.SideEnum;

    /**
     * Specify price for order
     */
    price: string;

    /**
     * Specify quantity for order  When **type** is limit, select one out of two: size or funds, size refers to the amount of trading targets (the asset name written in front) for the trading pair. Teh Size must be based on the baseIncrement of the trading pair. The baseIncrement represents the precision for the trading pair. The size of an order must be a positive-integer multiple of baseIncrement and must be between baseMinSize and baseMaxSize.  When **type** is market, select one out of two: size or funds
     */
    size?: string;

    /**
     * [Self Trade Prevention](https://www.kucoin.com/docs-new/doc-338146) is divided into four strategies: CN, CO, CB , and DC
     */
    stp?: BatchAddOrdersOrderList.StpEnum;

    /**
     * Cancel after n seconds，the order timing strategy is GTT
     */
    cancelAfter?: number;

    /**
     * passive order labels, this is disabled when the order timing strategy is IOC or FOK
     */
    postOnly?: boolean = false;

    /**
     * [Hidden order](https://www.kucoin.com/docs-new/doc-338146) or not (not shown in order book)
     */
    hidden?: boolean = false;

    /**
     * Whether or not only visible portions of orders are shown in [Iceberg orders](https://www.kucoin.com/docs-new/doc-338146)
     */
    iceberg?: boolean = false;

    /**
     * Maximum visible quantity in iceberg orders
     */
    visibleSize?: string;

    /**
     * Order tag, length cannot exceed 20 characters (ASCII)
     */
    tags?: string;

    /**
     * Order placement remarks, length cannot exceed 20 characters (ASCII)
     */
    remark?: string;

    /**
     * When **type** is market, select one out of two: size or funds
     */
    funds?: string;

    private constructor() {
        // @ts-ignore
        this.symbol = null;
        // @ts-ignore
        this.type = null;
        // @ts-ignore
        this.side = null;
        // @ts-ignore
        this.price = null;
    }
    /**
     * Creates a new instance of the `BatchAddOrdersOrderList` class.
     * The builder pattern allows step-by-step construction of a `BatchAddOrdersOrderList` object.
     */
    static builder(): BatchAddOrdersOrderListBuilder {
        return new BatchAddOrdersOrderListBuilder(new BatchAddOrdersOrderList());
    }

    /**
     * Creates a new instance of the `BatchAddOrdersOrderList` class with the given data.
     */
    static create(data: {
        /**
         * Client Order Id，The ClientOid field is a unique ID created by the user（we recommend using a UUID）, and can only contain numbers, letters, underscores （_）, and hyphens （-）. This field is returned when order information is obtained. You can use clientOid to tag your orders. ClientOid is different from the order ID created by the service provider. Please do not initiate requests using the same clientOid. The maximum length for the ClientOid is 40 characters.
         */
        clientOid?: string;
        /**
         * symbol
         */
        symbol: string;
        /**
         * Specify if the order is an \'limit\' order or \'market\' order.
         */
        type: BatchAddOrdersOrderList.TypeEnum;
        /**
         * [Time in force](https://www.kucoin.com/docs-new/doc-338146) is a special strategy used during trading
         */
        timeInForce?: BatchAddOrdersOrderList.TimeInForceEnum;
        /**
         * Specify if the order is to \'buy\' or \'sell\'
         */
        side: BatchAddOrdersOrderList.SideEnum;
        /**
         * Specify price for order
         */
        price: string;
        /**
         * Specify quantity for order  When **type** is limit, select one out of two: size or funds, size refers to the amount of trading targets (the asset name written in front) for the trading pair. Teh Size must be based on the baseIncrement of the trading pair. The baseIncrement represents the precision for the trading pair. The size of an order must be a positive-integer multiple of baseIncrement and must be between baseMinSize and baseMaxSize.  When **type** is market, select one out of two: size or funds
         */
        size?: string;
        /**
         * [Self Trade Prevention](https://www.kucoin.com/docs-new/doc-338146) is divided into four strategies: CN, CO, CB , and DC
         */
        stp?: BatchAddOrdersOrderList.StpEnum;
        /**
         * Cancel after n seconds，the order timing strategy is GTT
         */
        cancelAfter?: number;
        /**
         * passive order labels, this is disabled when the order timing strategy is IOC or FOK
         */
        postOnly?: boolean;
        /**
         * [Hidden order](https://www.kucoin.com/docs-new/doc-338146) or not (not shown in order book)
         */
        hidden?: boolean;
        /**
         * Whether or not only visible portions of orders are shown in [Iceberg orders](https://www.kucoin.com/docs-new/doc-338146)
         */
        iceberg?: boolean;
        /**
         * Maximum visible quantity in iceberg orders
         */
        visibleSize?: string;
        /**
         * Order tag, length cannot exceed 20 characters (ASCII)
         */
        tags?: string;
        /**
         * Order placement remarks, length cannot exceed 20 characters (ASCII)
         */
        remark?: string;
        /**
         * When **type** is market, select one out of two: size or funds
         */
        funds?: string;
    }): BatchAddOrdersOrderList {
        let obj = new BatchAddOrdersOrderList();
        obj.clientOid = data.clientOid;
        obj.symbol = data.symbol;
        obj.type = data.type;
        if (data.timeInForce) {
            obj.timeInForce = data.timeInForce;
        } else {
            obj.timeInForce = BatchAddOrdersOrderList.TimeInForceEnum.GTC;
        }
        obj.side = data.side;
        obj.price = data.price;
        obj.size = data.size;
        obj.stp = data.stp;
        obj.cancelAfter = data.cancelAfter;
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
        obj.tags = data.tags;
        obj.remark = data.remark;
        obj.funds = data.funds;
        return obj;
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    static fromJson(input: string): BatchAddOrdersOrderList {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): BatchAddOrdersOrderList {
        return plainToClassFromExist(new BatchAddOrdersOrderList(), jsonObject);
    }
}

export namespace BatchAddOrdersOrderList {
    export enum TypeEnum {
        /**
         *
         */
        LIMIT = <any>'limit',
    }
    export enum TimeInForceEnum {
        /**
         *
         */
        GTC = <any>'GTC',
        /**
         *
         */
        GTT = <any>'GTT',
        /**
         *
         */
        IOC = <any>'IOC',
        /**
         *
         */
        FOK = <any>'FOK',
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
    export enum StpEnum {
        /**
         *
         */
        DC = <any>'DC',
        /**
         *
         */
        CO = <any>'CO',
        /**
         *
         */
        CN = <any>'CN',
        /**
         *
         */
        CB = <any>'CB',
    }
}

export class BatchAddOrdersOrderListBuilder {
    constructor(readonly obj: BatchAddOrdersOrderList) {
        this.obj = obj;
    }
    /**
     * Client Order Id，The ClientOid field is a unique ID created by the user（we recommend using a UUID）, and can only contain numbers, letters, underscores （_）, and hyphens （-）. This field is returned when order information is obtained. You can use clientOid to tag your orders. ClientOid is different from the order ID created by the service provider. Please do not initiate requests using the same clientOid. The maximum length for the ClientOid is 40 characters.
     */
    setClientOid(value: string): BatchAddOrdersOrderListBuilder {
        this.obj.clientOid = value;
        return this;
    }

    /**
     * symbol
     */
    setSymbol(value: string): BatchAddOrdersOrderListBuilder {
        this.obj.symbol = value;
        return this;
    }

    /**
     * Specify if the order is an \'limit\' order or \'market\' order.
     */
    setType(value: BatchAddOrdersOrderList.TypeEnum): BatchAddOrdersOrderListBuilder {
        this.obj.type = value;
        return this;
    }

    /**
     * [Time in force](https://www.kucoin.com/docs-new/doc-338146) is a special strategy used during trading
     */
    setTimeInForce(value: BatchAddOrdersOrderList.TimeInForceEnum): BatchAddOrdersOrderListBuilder {
        this.obj.timeInForce = value;
        return this;
    }

    /**
     * Specify if the order is to \'buy\' or \'sell\'
     */
    setSide(value: BatchAddOrdersOrderList.SideEnum): BatchAddOrdersOrderListBuilder {
        this.obj.side = value;
        return this;
    }

    /**
     * Specify price for order
     */
    setPrice(value: string): BatchAddOrdersOrderListBuilder {
        this.obj.price = value;
        return this;
    }

    /**
     * Specify quantity for order  When **type** is limit, select one out of two: size or funds, size refers to the amount of trading targets (the asset name written in front) for the trading pair. Teh Size must be based on the baseIncrement of the trading pair. The baseIncrement represents the precision for the trading pair. The size of an order must be a positive-integer multiple of baseIncrement and must be between baseMinSize and baseMaxSize.  When **type** is market, select one out of two: size or funds
     */
    setSize(value: string): BatchAddOrdersOrderListBuilder {
        this.obj.size = value;
        return this;
    }

    /**
     * [Self Trade Prevention](https://www.kucoin.com/docs-new/doc-338146) is divided into four strategies: CN, CO, CB , and DC
     */
    setStp(value: BatchAddOrdersOrderList.StpEnum): BatchAddOrdersOrderListBuilder {
        this.obj.stp = value;
        return this;
    }

    /**
     * Cancel after n seconds，the order timing strategy is GTT
     */
    setCancelAfter(value: number): BatchAddOrdersOrderListBuilder {
        this.obj.cancelAfter = value;
        return this;
    }

    /**
     * passive order labels, this is disabled when the order timing strategy is IOC or FOK
     */
    setPostOnly(value: boolean): BatchAddOrdersOrderListBuilder {
        this.obj.postOnly = value;
        return this;
    }

    /**
     * [Hidden order](https://www.kucoin.com/docs-new/doc-338146) or not (not shown in order book)
     */
    setHidden(value: boolean): BatchAddOrdersOrderListBuilder {
        this.obj.hidden = value;
        return this;
    }

    /**
     * Whether or not only visible portions of orders are shown in [Iceberg orders](https://www.kucoin.com/docs-new/doc-338146)
     */
    setIceberg(value: boolean): BatchAddOrdersOrderListBuilder {
        this.obj.iceberg = value;
        return this;
    }

    /**
     * Maximum visible quantity in iceberg orders
     */
    setVisibleSize(value: string): BatchAddOrdersOrderListBuilder {
        this.obj.visibleSize = value;
        return this;
    }

    /**
     * Order tag, length cannot exceed 20 characters (ASCII)
     */
    setTags(value: string): BatchAddOrdersOrderListBuilder {
        this.obj.tags = value;
        return this;
    }

    /**
     * Order placement remarks, length cannot exceed 20 characters (ASCII)
     */
    setRemark(value: string): BatchAddOrdersOrderListBuilder {
        this.obj.remark = value;
        return this;
    }

    /**
     * When **type** is market, select one out of two: size or funds
     */
    setFunds(value: string): BatchAddOrdersOrderListBuilder {
        this.obj.funds = value;
        return this;
    }

    build(): BatchAddOrdersOrderList {
        return this.obj;
    }
}

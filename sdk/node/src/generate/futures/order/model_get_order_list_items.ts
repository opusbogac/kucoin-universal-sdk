// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetOrderListItems implements Serializable {
    /**
     * Order ID
     */
    id: string;

    /**
     * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
     */
    symbol: string;

    /**
     * Order type, market order or limit order
     */
    type: string;

    /**
     * Transaction side
     */
    side: string;

    /**
     * Order price
     */
    price: string;

    /**
     * Order quantity
     */
    size: number;

    /**
     * Order value
     */
    value: string;

    /**
     * Executed size of funds
     */
    dealValue: string;

    /**
     * Executed quantity
     */
    dealSize: number;

    /**
     * self trade prevention
     */
    stp: string;

    /**
     * Stop order type (stop limit or stop market)
     */
    stop: string;

    /**
     * Trigger price type of stop orders
     */
    stopPriceType: string;

    /**
     * Mark to show whether the stop order is triggered
     */
    stopTriggered: boolean;

    /**
     * Trigger price of stop orders
     */
    stopPrice: number;

    /**
     * Time in force policy type
     */
    timeInForce: string;

    /**
     * Mark of post only
     */
    postOnly: boolean;

    /**
     * Mark of the hidden order
     */
    hidden: boolean;

    /**
     * Mark of the iceberg order
     */
    iceberg: boolean;

    /**
     * Leverage of the order
     */
    leverage: string;

    /**
     * A mark to forcely hold the funds for an order
     */
    forceHold: boolean;

    /**
     * A mark to close the position
     */
    closeOrder: boolean;

    /**
     * Visible size of the iceberg order
     */
    visibleSize: number;

    /**
     * Unique order id created by users to identify their orders
     */
    clientOid: string;

    /**
     * Remark of the order
     */
    remark: string;

    /**
     * tag order source
     */
    tags: string;

    /**
     * Mark of the active orders
     */
    isActive: boolean;

    /**
     * Mark of the canceled orders
     */
    cancelExist: boolean;

    /**
     * Time the order created
     */
    createdAt: number;

    /**
     * last update time
     */
    updatedAt: number;

    /**
     * End time
     */
    endAt: number;

    /**
     * Order create time in nanosecond
     */
    orderTime: number;

    /**
     * settlement currency
     */
    settleCurrency: string;

    /**
     * Margin mode: ISOLATED (isolated), CROSS (cross margin).
     */
    marginMode: string;

    /**
     * Average transaction price, forward contract average transaction price = sum (transaction value) / sum (transaction quantity), reverse contract average transaction price = sum (transaction quantity) / sum (transaction value). Transaction quantity = lots * multiplier
     */
    avgDealPrice: string;

    /**
     * order status: “open” or “done”
     */
    status: string;

    /**
     * Value of the executed orders
     */
    filledSize: number;

    /**
     * Executed order quantity
     */
    filledValue: string;

    /**
     * A mark to reduce the position size only
     */
    reduceOnly: boolean;

    /**
     * Private constructor, please use the corresponding static methods to construct the object.
     */
    private constructor() {
        // @ts-ignore
        this.id = null;
        // @ts-ignore
        this.symbol = null;
        // @ts-ignore
        this.type = null;
        // @ts-ignore
        this.side = null;
        // @ts-ignore
        this.price = null;
        // @ts-ignore
        this.size = null;
        // @ts-ignore
        this.value = null;
        // @ts-ignore
        this.dealValue = null;
        // @ts-ignore
        this.dealSize = null;
        // @ts-ignore
        this.stp = null;
        // @ts-ignore
        this.stop = null;
        // @ts-ignore
        this.stopPriceType = null;
        // @ts-ignore
        this.stopTriggered = null;
        // @ts-ignore
        this.stopPrice = null;
        // @ts-ignore
        this.timeInForce = null;
        // @ts-ignore
        this.postOnly = null;
        // @ts-ignore
        this.hidden = null;
        // @ts-ignore
        this.iceberg = null;
        // @ts-ignore
        this.leverage = null;
        // @ts-ignore
        this.forceHold = null;
        // @ts-ignore
        this.closeOrder = null;
        // @ts-ignore
        this.visibleSize = null;
        // @ts-ignore
        this.clientOid = null;
        // @ts-ignore
        this.remark = null;
        // @ts-ignore
        this.tags = null;
        // @ts-ignore
        this.isActive = null;
        // @ts-ignore
        this.cancelExist = null;
        // @ts-ignore
        this.createdAt = null;
        // @ts-ignore
        this.updatedAt = null;
        // @ts-ignore
        this.endAt = null;
        // @ts-ignore
        this.orderTime = null;
        // @ts-ignore
        this.settleCurrency = null;
        // @ts-ignore
        this.marginMode = null;
        // @ts-ignore
        this.avgDealPrice = null;
        // @ts-ignore
        this.status = null;
        // @ts-ignore
        this.filledSize = null;
        // @ts-ignore
        this.filledValue = null;
        // @ts-ignore
        this.reduceOnly = null;
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
    static fromJson(input: string): GetOrderListItems {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): GetOrderListItems {
        return plainToClassFromExist(new GetOrderListItems(), jsonObject);
    }
}

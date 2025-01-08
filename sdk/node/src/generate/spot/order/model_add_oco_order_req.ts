// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';
export class AddOcoOrderReq implements Serializable<AddOcoOrderReq> {
    /**
     * Client Order Id，The ClientOid field is a unique ID created by the user（we recommend using a UUID）, and can only contain numbers, letters, underscores （_）, and hyphens （-）. This field is returned when order information is obtained. You can use clientOid to tag your orders. ClientOid is different from the order ID created by the service provider. Please do not initiate requests using the same clientOid. The maximum length for the ClientOid is 40 characters.  Please remember the orderId created by the service provider, it used to check for updates in order status.
     */
    clientOid?: string;
    /**
     * specify if the order is to \'buy\' or \'sell\'
     */
    side?: AddOcoOrderReq.SideEnum;
    /**
     * symbol
     */
    symbol?: string;
    /**
     * Order placement remarks, length cannot exceed 20 characters (ASCII)
     */
    remark?: string;
    /**
     * Specify price for order
     */
    price?: string;
    /**
     * Specify quantity for order
     */
    size?: string;
    /**
     * trigger price.
     */
    stopPrice?: string;
    /**
     * The limit order price after take-profit and stop-loss are triggered.
     */
    limitPrice?: string;
    /**
     * Transaction Type, currently only supports TRADE (spot transactions), the default is TRADE
     */
    tradeType?: AddOcoOrderReq.TradeTypeEnum;

    /**
     * Creates a new instance of the `AddOcoOrderReq` class.
     * The builder pattern allows step-by-step construction of a `AddOcoOrderReq` object.
     */
    static builder(): AddOcoOrderReqBuilder {
        return new AddOcoOrderReqBuilder();
    }

    /**
     * Creates a new instance of the `AddOcoOrderReq` class with the given data.
     */
    static create(data: {
        /**
         * Client Order Id，The ClientOid field is a unique ID created by the user（we recommend using a UUID）, and can only contain numbers, letters, underscores （_）, and hyphens （-）. This field is returned when order information is obtained. You can use clientOid to tag your orders. ClientOid is different from the order ID created by the service provider. Please do not initiate requests using the same clientOid. The maximum length for the ClientOid is 40 characters.  Please remember the orderId created by the service provider, it used to check for updates in order status.
         */
        clientOid?: string;
        /**
         * specify if the order is to \'buy\' or \'sell\'
         */
        side?: AddOcoOrderReq.SideEnum;
        /**
         * symbol
         */
        symbol?: string;
        /**
         * Order placement remarks, length cannot exceed 20 characters (ASCII)
         */
        remark?: string;
        /**
         * Specify price for order
         */
        price?: string;
        /**
         * Specify quantity for order
         */
        size?: string;
        /**
         * trigger price.
         */
        stopPrice?: string;
        /**
         * The limit order price after take-profit and stop-loss are triggered.
         */
        limitPrice?: string;
        /**
         * Transaction Type, currently only supports TRADE (spot transactions), the default is TRADE
         */
        tradeType?: AddOcoOrderReq.TradeTypeEnum;
    }): AddOcoOrderReq {
        let obj = new AddOcoOrderReq();
        obj.clientOid = data.clientOid;
        obj.side = data.side;
        obj.symbol = data.symbol;
        obj.remark = data.remark;
        obj.price = data.price;
        obj.size = data.size;
        obj.stopPrice = data.stopPrice;
        obj.limitPrice = data.limitPrice;
        obj.tradeType = data.tradeType;
        return obj;
    }

    fromJson(input: string): AddOcoOrderReq {
        const jsonObject = JSON.parse(input);
        return plainToInstance(AddOcoOrderReq, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): AddOcoOrderReq {
        return plainToInstance(AddOcoOrderReq, jsonObject);
    }
}

export namespace AddOcoOrderReq {
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
    export enum TradeTypeEnum {
        /**
         * Spot Trading
         */
        TRADE = <any>'TRADE',
    }
}

export class AddOcoOrderReqBuilder {
    obj: AddOcoOrderReq = new AddOcoOrderReq();
    /**
     * Client Order Id，The ClientOid field is a unique ID created by the user（we recommend using a UUID）, and can only contain numbers, letters, underscores （_）, and hyphens （-）. This field is returned when order information is obtained. You can use clientOid to tag your orders. ClientOid is different from the order ID created by the service provider. Please do not initiate requests using the same clientOid. The maximum length for the ClientOid is 40 characters.  Please remember the orderId created by the service provider, it used to check for updates in order status.
     */
    setClientOid(value: string): AddOcoOrderReqBuilder {
        this.obj.clientOid = value;
        return this;
    }

    /**
     * specify if the order is to \'buy\' or \'sell\'
     */
    setSide(value: AddOcoOrderReq.SideEnum): AddOcoOrderReqBuilder {
        this.obj.side = value;
        return this;
    }

    /**
     * symbol
     */
    setSymbol(value: string): AddOcoOrderReqBuilder {
        this.obj.symbol = value;
        return this;
    }

    /**
     * Order placement remarks, length cannot exceed 20 characters (ASCII)
     */
    setRemark(value: string): AddOcoOrderReqBuilder {
        this.obj.remark = value;
        return this;
    }

    /**
     * Specify price for order
     */
    setPrice(value: string): AddOcoOrderReqBuilder {
        this.obj.price = value;
        return this;
    }

    /**
     * Specify quantity for order
     */
    setSize(value: string): AddOcoOrderReqBuilder {
        this.obj.size = value;
        return this;
    }

    /**
     * trigger price.
     */
    setStopPrice(value: string): AddOcoOrderReqBuilder {
        this.obj.stopPrice = value;
        return this;
    }

    /**
     * The limit order price after take-profit and stop-loss are triggered.
     */
    setLimitPrice(value: string): AddOcoOrderReqBuilder {
        this.obj.limitPrice = value;
        return this;
    }

    /**
     * Transaction Type, currently only supports TRADE (spot transactions), the default is TRADE
     */
    setTradeType(value: AddOcoOrderReq.TradeTypeEnum): AddOcoOrderReqBuilder {
        this.obj.tradeType = value;
        return this;
    }

    build(): AddOcoOrderReq {
        return this.obj;
    }
}

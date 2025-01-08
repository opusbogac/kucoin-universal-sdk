// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';
export class GetRedeemPreviewReq implements Serializable<GetRedeemPreviewReq> {
    /**
     * Holding ID
     */
    orderId?: string;
    /**
     * Account type: MAIN (funding account), TRADE (spot trading account). This parameter is valid only when orderId=ETH2
     */
    fromAccountType?: GetRedeemPreviewReq.FromAccountTypeEnum;

    /**
     * Creates a new instance of the `GetRedeemPreviewReq` class.
     * The builder pattern allows step-by-step construction of a `GetRedeemPreviewReq` object.
     */
    static builder(): GetRedeemPreviewReqBuilder {
        return new GetRedeemPreviewReqBuilder();
    }

    /**
     * Creates a new instance of the `GetRedeemPreviewReq` class with the given data.
     */
    static create(data: {
        /**
         * Holding ID
         */
        orderId?: string;
        /**
         * Account type: MAIN (funding account), TRADE (spot trading account). This parameter is valid only when orderId=ETH2
         */
        fromAccountType?: GetRedeemPreviewReq.FromAccountTypeEnum;
    }): GetRedeemPreviewReq {
        let obj = new GetRedeemPreviewReq();
        obj.orderId = data.orderId;
        obj.fromAccountType = data.fromAccountType;
        return obj;
    }

    fromJson(input: string): GetRedeemPreviewReq {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetRedeemPreviewReq, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetRedeemPreviewReq {
        return plainToInstance(GetRedeemPreviewReq, jsonObject);
    }
}

export namespace GetRedeemPreviewReq {
    export enum FromAccountTypeEnum {
        /**
         *
         */
        MAIN = <any>'MAIN',
        /**
         *
         */
        TRADE = <any>'TRADE',
    }
}

export class GetRedeemPreviewReqBuilder {
    obj: GetRedeemPreviewReq = new GetRedeemPreviewReq();
    /**
     * Holding ID
     */
    setOrderId(value: string): GetRedeemPreviewReqBuilder {
        this.obj.orderId = value;
        return this;
    }

    /**
     * Account type: MAIN (funding account), TRADE (spot trading account). This parameter is valid only when orderId=ETH2
     */
    setFromAccountType(value: GetRedeemPreviewReq.FromAccountTypeEnum): GetRedeemPreviewReqBuilder {
        this.obj.fromAccountType = value;
        return this;
    }

    build(): GetRedeemPreviewReq {
        return this.obj;
    }
}

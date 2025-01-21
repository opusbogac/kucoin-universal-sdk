// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class ModifyPurchaseReq implements Serializable {
    /**
     * Currency
     */
    currency: string;

    /**
     * Modified purchase interest rate
     */
    interestRate: string;

    /**
     * Purchase order id
     */
    purchaseOrderNo: string;

    /**
     * Private constructor, please use the corresponding static methods to construct the object.
     */
    private constructor() {
        // @ts-ignore
        this.currency = null;
        // @ts-ignore
        this.interestRate = null;
        // @ts-ignore
        this.purchaseOrderNo = null;
    }
    /**
     * Creates a new instance of the `ModifyPurchaseReq` class.
     * The builder pattern allows step-by-step construction of a `ModifyPurchaseReq` object.
     */
    static builder(): ModifyPurchaseReqBuilder {
        return new ModifyPurchaseReqBuilder(new ModifyPurchaseReq());
    }

    /**
     * Creates a new instance of the `ModifyPurchaseReq` class with the given data.
     */
    static create(data: {
        /**
         * Currency
         */
        currency: string;
        /**
         * Modified purchase interest rate
         */
        interestRate: string;
        /**
         * Purchase order id
         */
        purchaseOrderNo: string;
    }): ModifyPurchaseReq {
        let obj = new ModifyPurchaseReq();
        obj.currency = data.currency;
        obj.interestRate = data.interestRate;
        obj.purchaseOrderNo = data.purchaseOrderNo;
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
    static fromJson(input: string): ModifyPurchaseReq {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): ModifyPurchaseReq {
        return plainToClassFromExist(new ModifyPurchaseReq(), jsonObject);
    }
}

export class ModifyPurchaseReqBuilder {
    constructor(readonly obj: ModifyPurchaseReq) {
        this.obj = obj;
    }
    /**
     * Currency
     */
    setCurrency(value: string): ModifyPurchaseReqBuilder {
        this.obj.currency = value;
        return this;
    }

    /**
     * Modified purchase interest rate
     */
    setInterestRate(value: string): ModifyPurchaseReqBuilder {
        this.obj.interestRate = value;
        return this;
    }

    /**
     * Purchase order id
     */
    setPurchaseOrderNo(value: string): ModifyPurchaseReqBuilder {
        this.obj.purchaseOrderNo = value;
        return this;
    }

    /**
     * Get the final object.
     */
    build(): ModifyPurchaseReq {
        return this.obj;
    }
}

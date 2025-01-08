// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';
export class ModifyPurchaseReq implements Serializable<ModifyPurchaseReq> {
    /**
     * Currency
     */
    currency?: string;
    /**
     * Modified purchase interest rate
     */
    interestRate?: string;
    /**
     * Purchase order id
     */
    purchaseOrderNo?: string;

    /**
     * Creates a new instance of the `ModifyPurchaseReq` class.
     * The builder pattern allows step-by-step construction of a `ModifyPurchaseReq` object.
     */
    static builder(): ModifyPurchaseReqBuilder {
        return new ModifyPurchaseReqBuilder();
    }

    /**
     * Creates a new instance of the `ModifyPurchaseReq` class with the given data.
     */
    static create(data: {
        /**
         * Currency
         */
        currency?: string;
        /**
         * Modified purchase interest rate
         */
        interestRate?: string;
        /**
         * Purchase order id
         */
        purchaseOrderNo?: string;
    }): ModifyPurchaseReq {
        let obj = new ModifyPurchaseReq();
        obj.currency = data.currency;
        obj.interestRate = data.interestRate;
        obj.purchaseOrderNo = data.purchaseOrderNo;
        return obj;
    }

    fromJson(input: string): ModifyPurchaseReq {
        const jsonObject = JSON.parse(input);
        return plainToInstance(ModifyPurchaseReq, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): ModifyPurchaseReq {
        return plainToInstance(ModifyPurchaseReq, jsonObject);
    }
}

export class ModifyPurchaseReqBuilder {
    obj: ModifyPurchaseReq = new ModifyPurchaseReq();
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

    build(): ModifyPurchaseReq {
        return this.obj;
    }
}

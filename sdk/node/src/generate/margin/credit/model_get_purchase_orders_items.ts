// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetPurchaseOrdersItems implements Serializable<GetPurchaseOrdersItems> {
    /**
     * Currency
     */
    currency?: string;
    /**
     * Purchase order id
     */
    purchaseOrderNo?: string;
    /**
     * Total purchase size
     */
    purchaseSize?: string;
    /**
     * Executed size
     */
    matchSize?: string;
    /**
     * Target annualized interest rate
     */
    interestRate?: string;
    /**
     * Redeemed amount
     */
    incomeSize?: string;
    /**
     * Time of purchase
     */
    applyTime?: number;
    /**
     * Status: DONE-completed; PENDING-settling
     */
    status?: GetPurchaseOrdersItems.StatusEnum;

    fromJson(input: string): GetPurchaseOrdersItems {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetPurchaseOrdersItems, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetPurchaseOrdersItems {
        return plainToInstance(GetPurchaseOrdersItems, jsonObject);
    }
}

export namespace GetPurchaseOrdersItems {
    export enum StatusEnum {
        /**
         *
         */
        DONE = <any>'DONE',
        /**
         *
         */
        PENDING = <any>'PENDING',
    }
}

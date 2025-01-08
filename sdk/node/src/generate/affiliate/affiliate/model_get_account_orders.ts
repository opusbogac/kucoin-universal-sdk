// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';
export class GetAccountOrders implements Serializable<GetAccountOrders> {
    /**
     * Loan Orders ID
     */
    orderId?: string;
    /**
     * Loan Currency
     */
    currency?: string;
    /**
     * Principal to Be Repaid
     */
    principal?: string;
    /**
     * Interest to Be Repaid
     */
    interest?: string;
    fromJson(input: string): GetAccountOrders {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetAccountOrders, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetAccountOrders {
        return plainToInstance(GetAccountOrders, jsonObject);
    }
}

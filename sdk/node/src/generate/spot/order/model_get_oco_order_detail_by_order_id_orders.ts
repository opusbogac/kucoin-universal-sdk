// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';
export class GetOcoOrderDetailByOrderIdOrders
    implements Serializable<GetOcoOrderDetailByOrderIdOrders>
{
    /**
     *
     */
    id?: string;
    /**
     *
     */
    symbol?: string;
    /**
     *
     */
    side?: string;
    /**
     *
     */
    price?: string;
    /**
     *
     */
    stopPrice?: string;
    /**
     *
     */
    size?: string;
    /**
     *
     */
    status?: string;
    fromJson(input: string): GetOcoOrderDetailByOrderIdOrders {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetOcoOrderDetailByOrderIdOrders, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetOcoOrderDetailByOrderIdOrders {
        return plainToInstance(GetOcoOrderDetailByOrderIdOrders, jsonObject);
    }
}

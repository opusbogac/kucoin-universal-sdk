// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class AccountRelationContext implements Serializable {
    /**
     *
     */
    symbol?: string;
    /**
     *
     */
    orderId?: string;

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    static fromJson(input: string): AccountRelationContext {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): AccountRelationContext {
        return plainToClassFromExist(new AccountRelationContext(), jsonObject);
    }
}

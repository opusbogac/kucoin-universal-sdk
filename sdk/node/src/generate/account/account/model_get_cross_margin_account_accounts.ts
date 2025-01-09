// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetCrossMarginAccountAccounts implements Serializable<GetCrossMarginAccountAccounts> {
    /**
     * currency
     */
    currency?: string;
    /**
     * Total Assets
     */
    total?: string;
    /**
     * Account available assets (total assets - frozen)
     */
    available?: string;
    /**
     * Account frozen assets
     */
    hold?: string;
    /**
     * Liabilities
     */
    liability?: string;
    /**
     * The user\'s remaining maximum loan amount
     */
    maxBorrowSize?: string;
    /**
     * Support borrow or not
     */
    borrowEnabled?: boolean;
    /**
     * Support transfer or not
     */
    transferInEnabled?: boolean;

    fromJson(input: string): GetCrossMarginAccountAccounts {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetCrossMarginAccountAccounts, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetCrossMarginAccountAccounts {
        return plainToInstance(GetCrossMarginAccountAccounts, jsonObject);
    }
}

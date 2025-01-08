// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { Type, instanceToPlain, Exclude, plainToInstance } from 'class-transformer';
import { GetCurrencyChains } from './model_get_currency_chains';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/response';
export class GetCurrencyResp implements Response<GetCurrencyResp, RestResponse> {
    /**
     * A unique currency code that will never change
     */
    currency?: string;
    /**
     * Currency name, will change after renaming
     */
    name?: string;
    /**
     * Full name of a currency, will change after renaming
     */
    fullName?: string;
    /**
     * Currency precision
     */
    precision?: number;
    /**
     * Number of block confirmations
     */
    confirms?: number;
    /**
     * Contract address
     */
    contractAddress?: string;
    /**
     * Support margin or not
     */
    isMarginEnabled?: boolean;
    /**
     * Support debit or not
     */
    isDebitEnabled?: boolean;
    /**
     * chain list
     */
    @Type(() => GetCurrencyChains)
    chains?: Array<GetCurrencyChains>;
    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    fromJson(input: string): GetCurrencyResp {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetCurrencyResp, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetCurrencyResp {
        return plainToInstance(GetCurrencyResp, jsonObject);
    }
}

// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';
export class GetLoanMarketInterestRateData implements Serializable<GetLoanMarketInterestRateData> {
    /**
     * Time: YYYYMMDDHH00
     */
    time?: string;
    /**
     * Market lending rate
     */
    marketInterestRate?: string;
    fromJson(input: string): GetLoanMarketInterestRateData {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetLoanMarketInterestRateData, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetLoanMarketInterestRateData {
        return plainToInstance(GetLoanMarketInterestRateData, jsonObject);
    }
}

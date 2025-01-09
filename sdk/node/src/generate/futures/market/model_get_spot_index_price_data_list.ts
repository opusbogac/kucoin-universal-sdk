// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { GetSpotIndexPriceDataListDecomposionList } from './model_get_spot_index_price_data_list_decomposion_list';
import { Type, instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetSpotIndexPriceDataList implements Serializable<GetSpotIndexPriceDataList> {
    /**
     * Symbol of the contract, Please refer to [Get Symbol endpoint: indexSymbol](https://www.kucoin.com/docs-new/api-3470220)
     */
    symbol?: string;
    /**
     * Granularity (milisecond)
     */
    granularity?: number;
    /**
     * Timestamp (milisecond)
     */
    timePoint?: number;
    /**
     * Index Value
     */
    value?: number;
    /**
     * Component List
     */
    @Type(() => GetSpotIndexPriceDataListDecomposionList)
    decomposionList?: Array<GetSpotIndexPriceDataListDecomposionList>;

    fromJson(input: string): GetSpotIndexPriceDataList {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetSpotIndexPriceDataList, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetSpotIndexPriceDataList {
        return plainToInstance(GetSpotIndexPriceDataList, jsonObject);
    }
}

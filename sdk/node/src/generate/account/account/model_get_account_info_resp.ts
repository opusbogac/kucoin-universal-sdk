// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/serializable';

export class GetAccountInfoResp implements Response<RestResponse> {
    /**
     * User VIP level
     */
    level: number;

    /**
     * Number of sub-accounts
     */
    subQuantity: number;

    /**
     * Number of sub-accounts with spot trading permissions enabled
     */
    spotSubQuantity: number;

    /**
     * Number of sub-accounts with margin trading permissions enabled
     */
    marginSubQuantity: number;

    /**
     * Number of sub-accounts with futures trading permissions enabled
     */
    futuresSubQuantity: number;

    /**
     * Number of sub-accounts with option trading permissions enabled
     */
    optionSubQuantity: number;

    /**
     * Max number of sub-accounts = maxDefaultSubQuantity + maxSpotSubQuantity
     */
    maxSubQuantity: number;

    /**
     * Max number of default open sub-accounts (according to VIP level)
     */
    maxDefaultSubQuantity: number;

    /**
     * Max number of sub-accounts with additional Spot trading permissions
     */
    maxSpotSubQuantity: number;

    /**
     * Max number of sub-accounts with additional margin trading permissions
     */
    maxMarginSubQuantity: number;

    /**
     * Max number of sub-accounts with additional futures trading permissions
     */
    maxFuturesSubQuantity: number;

    /**
     * Max number of sub-accounts with additional Option trading permissions
     */
    maxOptionSubQuantity: number;

    /**
     * Private constructor, please use the corresponding static methods to construct the object.
     */
    private constructor() {
        // @ts-ignore
        this.level = null;
        // @ts-ignore
        this.subQuantity = null;
        // @ts-ignore
        this.spotSubQuantity = null;
        // @ts-ignore
        this.marginSubQuantity = null;
        // @ts-ignore
        this.futuresSubQuantity = null;
        // @ts-ignore
        this.optionSubQuantity = null;
        // @ts-ignore
        this.maxSubQuantity = null;
        // @ts-ignore
        this.maxDefaultSubQuantity = null;
        // @ts-ignore
        this.maxSpotSubQuantity = null;
        // @ts-ignore
        this.maxMarginSubQuantity = null;
        // @ts-ignore
        this.maxFuturesSubQuantity = null;
        // @ts-ignore
        this.maxOptionSubQuantity = null;
    }
    /**
     * common response
     */
    @Exclude()
    commonResponse?: RestResponse;

    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
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
    static fromJson(input: string): GetAccountInfoResp {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): GetAccountInfoResp {
        return plainToClassFromExist(new GetAccountInfoResp(), jsonObject);
    }
}

// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetSubAccountAPIData implements Serializable {
    /**
     * Sub-Account UID
     */
    uid: string;

    /**
     * apikey remarks
     */
    label: string;

    /**
     * apiKey
     */
    apiKey: string;

    /**
     * apiVersion
     */
    apiVersion: number;

    /**
     * [Permissions](https://www.kucoin.com/docs-new/doc-338144) group list
     */
    permissions: Array<GetSubAccountAPIData.PermissionsEnum>;

    /**
     * IP whitelist list
     */
    ipWhitelist: Array<string>;

    /**
     * Creation time, unix timestamp (milliseconds)
     */
    createdAt: number;

    /**
     * Private constructor, please use the corresponding static methods to construct the object.
     */
    private constructor() {
        // @ts-ignore
        this.uid = null;
        // @ts-ignore
        this.label = null;
        // @ts-ignore
        this.apiKey = null;
        // @ts-ignore
        this.apiVersion = null;
        // @ts-ignore
        this.permissions = null;
        // @ts-ignore
        this.ipWhitelist = null;
        // @ts-ignore
        this.createdAt = null;
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
    static fromJson(input: string): GetSubAccountAPIData {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): GetSubAccountAPIData {
        return plainToClassFromExist(new GetSubAccountAPIData(), jsonObject);
    }
}

export namespace GetSubAccountAPIData {
    export enum PermissionsEnum {
        /**
         *
         */
        GENERAL = <any>'General',
        /**
         *
         */
        SPOT = <any>'Spot',
        /**
         *
         */
        FUTURES = <any>'Futures',
    }
}

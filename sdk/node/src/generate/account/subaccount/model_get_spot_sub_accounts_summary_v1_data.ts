// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetSpotSubAccountsSummaryV1Data implements Serializable {
    /**
     *
     */
    userId: string;

    /**
     *
     */
    uid: number;

    /**
     *
     */
    subName: string;

    /**
     *
     */
    type: number;

    /**
     *
     */
    remarks: string;

    /**
     * Sub-account Permission
     */
    access: string;

    private constructor() {
        // @ts-ignore
        this.userId = null;
        // @ts-ignore
        this.uid = null;
        // @ts-ignore
        this.subName = null;
        // @ts-ignore
        this.type = null;
        // @ts-ignore
        this.remarks = null;
        // @ts-ignore
        this.access = null;
    }
    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    static fromJson(input: string): GetSpotSubAccountsSummaryV1Data {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): GetSpotSubAccountsSummaryV1Data {
        return plainToClassFromExist(new GetSpotSubAccountsSummaryV1Data(), jsonObject);
    }
}

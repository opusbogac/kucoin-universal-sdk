// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import 'reflect-metadata';
import { Serializable } from '@internal/interfaces/serializable';

export class GetSpotSubAccountDetailReq implements Serializable {
    /**
     * the userID of a sub-account.
     */
    @Reflect.metadata('path', 'subUserId')
    subUserId?: string;

    /**
     * false: do not display the currency which asset is 0, true: display all currency
     */
    includeBaseAmount?: boolean;

    /**
     * Private constructor, please use the corresponding static methods to construct the object.
     */
    private constructor() {}
    /**
     * Creates a new instance of the `GetSpotSubAccountDetailReq` class.
     * The builder pattern allows step-by-step construction of a `GetSpotSubAccountDetailReq` object.
     */
    static builder(): GetSpotSubAccountDetailReqBuilder {
        return new GetSpotSubAccountDetailReqBuilder(new GetSpotSubAccountDetailReq());
    }

    /**
     * Creates a new instance of the `GetSpotSubAccountDetailReq` class with the given data.
     */
    static create(data: {
        /**
         * the userID of a sub-account.
         */
        subUserId?: string;
        /**
         * false: do not display the currency which asset is 0, true: display all currency
         */
        includeBaseAmount?: boolean;
    }): GetSpotSubAccountDetailReq {
        let obj = new GetSpotSubAccountDetailReq();
        obj.subUserId = data.subUserId;
        obj.includeBaseAmount = data.includeBaseAmount;
        return obj;
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
    static fromJson(input: string): GetSpotSubAccountDetailReq {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): GetSpotSubAccountDetailReq {
        return plainToClassFromExist(new GetSpotSubAccountDetailReq(), jsonObject);
    }
}

export class GetSpotSubAccountDetailReqBuilder {
    constructor(readonly obj: GetSpotSubAccountDetailReq) {
        this.obj = obj;
    }
    /**
     * the userID of a sub-account.
     */
    setSubUserId(value: string): GetSpotSubAccountDetailReqBuilder {
        this.obj.subUserId = value;
        return this;
    }

    /**
     * false: do not display the currency which asset is 0, true: display all currency
     */
    setIncludeBaseAmount(value: boolean): GetSpotSubAccountDetailReqBuilder {
        this.obj.includeBaseAmount = value;
        return this;
    }

    /**
     * Get the final object.
     */
    build(): GetSpotSubAccountDetailReq {
        return this.obj;
    }
}

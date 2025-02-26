// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class DeleteSubAccountAPIReq implements Serializable {
    /**
     * Sub-account UID
     */
    uid?: string;

    /**
     * Sub-account apiKey
     */
    apiKey?: string;

    /**
     * Private constructor, please use the corresponding static methods to construct the object.
     */
    private constructor() {}
    /**
     * Creates a new instance of the `DeleteSubAccountAPIReq` class.
     * The builder pattern allows step-by-step construction of a `DeleteSubAccountAPIReq` object.
     */
    static builder(): DeleteSubAccountAPIReqBuilder {
        return new DeleteSubAccountAPIReqBuilder(new DeleteSubAccountAPIReq());
    }

    /**
     * Creates a new instance of the `DeleteSubAccountAPIReq` class with the given data.
     */
    static create(data: {
        /**
         * Sub-account UID
         */
        uid?: string;
        /**
         * Sub-account apiKey
         */
        apiKey?: string;
    }): DeleteSubAccountAPIReq {
        let obj = new DeleteSubAccountAPIReq();
        obj.uid = data.uid;
        obj.apiKey = data.apiKey;
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
    static fromJson(input: string): DeleteSubAccountAPIReq {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): DeleteSubAccountAPIReq {
        return plainToClassFromExist(new DeleteSubAccountAPIReq(), jsonObject);
    }
}

export class DeleteSubAccountAPIReqBuilder {
    constructor(readonly obj: DeleteSubAccountAPIReq) {
        this.obj = obj;
    }
    /**
     * Sub-account UID
     */
    setUid(value: string): DeleteSubAccountAPIReqBuilder {
        this.obj.uid = value;
        return this;
    }

    /**
     * Sub-account apiKey
     */
    setApiKey(value: string): DeleteSubAccountAPIReqBuilder {
        this.obj.apiKey = value;
        return this;
    }

    /**
     * Get the final object.
     */
    build(): DeleteSubAccountAPIReq {
        return this.obj;
    }
}

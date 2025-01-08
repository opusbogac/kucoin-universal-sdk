// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';
export class GetSubAccountReq implements Serializable<GetSubAccountReq> {
    /**
     * Sub-account UID
     */
    uid?: string;
    /**
     * Current page, default is 1
     */
    currentPage?: number = 1;
    /**
     * The number returned per page, the default is 20, the maximum is 100
     */
    pageSize?: number = 20;

    /**
     * Creates a new instance of the `GetSubAccountReq` class.
     * The builder pattern allows step-by-step construction of a `GetSubAccountReq` object.
     */
    static builder(): GetSubAccountReqBuilder {
        return new GetSubAccountReqBuilder();
    }

    /**
     * Creates a new instance of the `GetSubAccountReq` class with the given data.
     */
    static create(data: {
        /**
         * Sub-account UID
         */
        uid?: string;
        /**
         * Current page, default is 1
         */
        currentPage?: number;
        /**
         * The number returned per page, the default is 20, the maximum is 100
         */
        pageSize?: number;
    }): GetSubAccountReq {
        let obj = new GetSubAccountReq();
        obj.uid = data.uid;
        obj.currentPage = data.currentPage;
        obj.pageSize = data.pageSize;
        return obj;
    }

    fromJson(input: string): GetSubAccountReq {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetSubAccountReq, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetSubAccountReq {
        return plainToInstance(GetSubAccountReq, jsonObject);
    }
}

export class GetSubAccountReqBuilder {
    obj: GetSubAccountReq = new GetSubAccountReq();
    /**
     * Sub-account UID
     */
    setUid(value: string): GetSubAccountReqBuilder {
        this.obj.uid = value;
        return this;
    }

    /**
     * Current page, default is 1
     */
    setCurrentPage(value: number): GetSubAccountReqBuilder {
        this.obj.currentPage = value;
        return this;
    }

    /**
     * The number returned per page, the default is 20, the maximum is 100
     */
    setPageSize(value: number): GetSubAccountReqBuilder {
        this.obj.pageSize = value;
        return this;
    }

    build(): GetSubAccountReq {
        return this.obj;
    }
}

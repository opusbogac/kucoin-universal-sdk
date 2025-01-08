// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';
export class GetRecentOrdersListOldReq implements Serializable<GetRecentOrdersListOldReq> {
    /**
     * Current request page.
     */
    currentPage?: number = 1;
    /**
     * Number of results per request. Minimum is 10, maximum is 500.
     */
    pageSize?: number = 50;

    /**
     * Creates a new instance of the `GetRecentOrdersListOldReq` class.
     * The builder pattern allows step-by-step construction of a `GetRecentOrdersListOldReq` object.
     */
    static builder(): GetRecentOrdersListOldReqBuilder {
        return new GetRecentOrdersListOldReqBuilder();
    }

    /**
     * Creates a new instance of the `GetRecentOrdersListOldReq` class with the given data.
     */
    static create(data: {
        /**
         * Current request page.
         */
        currentPage?: number;
        /**
         * Number of results per request. Minimum is 10, maximum is 500.
         */
        pageSize?: number;
    }): GetRecentOrdersListOldReq {
        let obj = new GetRecentOrdersListOldReq();
        obj.currentPage = data.currentPage;
        obj.pageSize = data.pageSize;
        return obj;
    }

    fromJson(input: string): GetRecentOrdersListOldReq {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetRecentOrdersListOldReq, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetRecentOrdersListOldReq {
        return plainToInstance(GetRecentOrdersListOldReq, jsonObject);
    }
}

export class GetRecentOrdersListOldReqBuilder {
    obj: GetRecentOrdersListOldReq = new GetRecentOrdersListOldReq();
    /**
     * Current request page.
     */
    setCurrentPage(value: number): GetRecentOrdersListOldReqBuilder {
        this.obj.currentPage = value;
        return this;
    }

    /**
     * Number of results per request. Minimum is 10, maximum is 500.
     */
    setPageSize(value: number): GetRecentOrdersListOldReqBuilder {
        this.obj.pageSize = value;
        return this;
    }

    build(): GetRecentOrdersListOldReq {
        return this.obj;
    }
}

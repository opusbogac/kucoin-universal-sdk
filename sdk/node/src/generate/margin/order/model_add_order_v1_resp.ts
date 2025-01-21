// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, Exclude, plainToClassFromExist } from 'class-transformer';
import { RestResponse } from '@model/common';
import { Response } from '@internal/interfaces/serializable';

export class AddOrderV1Resp implements Response<RestResponse> {
    /**
     * The unique order id generated by the trading system,which can be used later for further actions such as canceling the order.
     */
    orderId: string;

    /**
     * Borrow order id. The field is returned only after placing the order under the mode of Auto-Borrow.
     */
    loanApplyId: string;

    /**
     * Borrowed amount. The field is returned only after placing the order under the mode of Auto-Borrow.
     */
    borrowSize: string;

    /**
     * This return value is invalid
     */
    clientOid: string;

    /**
     * Private constructor, please use the corresponding static methods to construct the object.
     */
    private constructor() {
        // @ts-ignore
        this.orderId = null;
        // @ts-ignore
        this.loanApplyId = null;
        // @ts-ignore
        this.borrowSize = null;
        // @ts-ignore
        this.clientOid = null;
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
    static fromJson(input: string): AddOrderV1Resp {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): AddOrderV1Resp {
        return plainToClassFromExist(new AddOrderV1Resp(), jsonObject);
    }
}

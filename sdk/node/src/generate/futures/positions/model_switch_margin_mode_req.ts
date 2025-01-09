// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class SwitchMarginModeReq implements Serializable<SwitchMarginModeReq> {
    /**
     * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
     */
    symbol?: string;
    /**
     * Modified margin model: ISOLATED (isolated), CROSS (cross margin).
     */
    marginMode?: SwitchMarginModeReq.MarginModeEnum;

    /**
     * Creates a new instance of the `SwitchMarginModeReq` class.
     * The builder pattern allows step-by-step construction of a `SwitchMarginModeReq` object.
     */
    static builder(): SwitchMarginModeReqBuilder {
        return new SwitchMarginModeReqBuilder();
    }

    /**
     * Creates a new instance of the `SwitchMarginModeReq` class with the given data.
     */
    static create(data: {
        /**
         * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
         */
        symbol?: string;
        /**
         * Modified margin model: ISOLATED (isolated), CROSS (cross margin).
         */
        marginMode?: SwitchMarginModeReq.MarginModeEnum;
    }): SwitchMarginModeReq {
        let obj = new SwitchMarginModeReq();
        obj.symbol = data.symbol;
        obj.marginMode = data.marginMode;
        return obj;
    }

    fromJson(input: string): SwitchMarginModeReq {
        const jsonObject = JSON.parse(input);
        return plainToInstance(SwitchMarginModeReq, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): SwitchMarginModeReq {
        return plainToInstance(SwitchMarginModeReq, jsonObject);
    }
}

export namespace SwitchMarginModeReq {
    export enum MarginModeEnum {
        /**
         * Isolated Margin Mode
         */
        ISOLATED = <any>'ISOLATED',
        /**
         * Cross Margin MOde
         */
        CROSS = <any>'CROSS',
    }
}

export class SwitchMarginModeReqBuilder {
    obj: SwitchMarginModeReq = new SwitchMarginModeReq();
    /**
     * Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
     */
    setSymbol(value: string): SwitchMarginModeReqBuilder {
        this.obj.symbol = value;
        return this;
    }

    /**
     * Modified margin model: ISOLATED (isolated), CROSS (cross margin).
     */
    setMarginMode(value: SwitchMarginModeReq.MarginModeEnum): SwitchMarginModeReqBuilder {
        this.obj.marginMode = value;
        return this;
    }

    build(): SwitchMarginModeReq {
        return this.obj;
    }
}

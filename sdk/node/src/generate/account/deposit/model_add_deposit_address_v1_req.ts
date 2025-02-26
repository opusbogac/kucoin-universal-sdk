// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class AddDepositAddressV1Req implements Serializable {
    /**
     * currency
     */
    currency: string;

    /**
     * The chainId of currency, e.g. The available value for USDT are OMNI, ERC20, TRC20, default is ERC20. The available value for BTC are Native, Segwit, TRC20, the parameters are bech32, btc, trx, default is Native. This only apply for multi-chain currency, and there is no need for single chain currency.
     */
    chain?: string = 'eth';

    /**
     * Private constructor, please use the corresponding static methods to construct the object.
     */
    private constructor() {
        // @ts-ignore
        this.currency = null;
    }
    /**
     * Creates a new instance of the `AddDepositAddressV1Req` class.
     * The builder pattern allows step-by-step construction of a `AddDepositAddressV1Req` object.
     */
    static builder(): AddDepositAddressV1ReqBuilder {
        return new AddDepositAddressV1ReqBuilder(new AddDepositAddressV1Req());
    }

    /**
     * Creates a new instance of the `AddDepositAddressV1Req` class with the given data.
     */
    static create(data: {
        /**
         * currency
         */
        currency: string;
        /**
         * The chainId of currency, e.g. The available value for USDT are OMNI, ERC20, TRC20, default is ERC20. The available value for BTC are Native, Segwit, TRC20, the parameters are bech32, btc, trx, default is Native. This only apply for multi-chain currency, and there is no need for single chain currency.
         */
        chain?: string;
    }): AddDepositAddressV1Req {
        let obj = new AddDepositAddressV1Req();
        obj.currency = data.currency;
        if (data.chain) {
            obj.chain = data.chain;
        } else {
            obj.chain = 'eth';
        }
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
    static fromJson(input: string): AddDepositAddressV1Req {
        return this.fromObject(JSON.parse(input));
    }
    /**
     * Create an object from Js Object.
     */
    static fromObject(jsonObject: Object): AddDepositAddressV1Req {
        return plainToClassFromExist(new AddDepositAddressV1Req(), jsonObject);
    }
}

export class AddDepositAddressV1ReqBuilder {
    constructor(readonly obj: AddDepositAddressV1Req) {
        this.obj = obj;
    }
    /**
     * currency
     */
    setCurrency(value: string): AddDepositAddressV1ReqBuilder {
        this.obj.currency = value;
        return this;
    }

    /**
     * The chainId of currency, e.g. The available value for USDT are OMNI, ERC20, TRC20, default is ERC20. The available value for BTC are Native, Segwit, TRC20, the parameters are bech32, btc, trx, default is Native. This only apply for multi-chain currency, and there is no need for single chain currency.
     */
    setChain(value: string): AddDepositAddressV1ReqBuilder {
        this.obj.chain = value;
        return this;
    }

    /**
     * Get the final object.
     */
    build(): AddDepositAddressV1Req {
        return this.obj;
    }
}

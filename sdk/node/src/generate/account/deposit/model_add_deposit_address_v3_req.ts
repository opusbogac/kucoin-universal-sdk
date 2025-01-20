// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class AddDepositAddressV3Req implements Serializable {
    /**
     * currency
     */
    currency: string;

    /**
     * The chainId of currency, e.g. The available value for USDT are OMNI, ERC20, TRC20, default is ERC20. The available value for BTC are Native, Segwit, TRC20, the parameters are bech32, btc, trx, default is Native. This only apply for multi-chain currency, and there is no need for single chain currency.
     */
    chain?: string = 'eth';

    /**
     * Deposit account type: main (funding account), trade (spot trading account), the default is main
     */
    to?: AddDepositAddressV3Req.ToEnum = AddDepositAddressV3Req.ToEnum.MAIN;

    /**
     * Deposit amount. This parameter is only used when applying for invoices on the Lightning Network. This parameter is invalid if it is not passed through the Lightning Network.
     */
    amount?: string;

    private constructor() {
        // @ts-ignore
        this.currency = null;
    }
    /**
     * Creates a new instance of the `AddDepositAddressV3Req` class.
     * The builder pattern allows step-by-step construction of a `AddDepositAddressV3Req` object.
     */
    static builder(): AddDepositAddressV3ReqBuilder {
        return new AddDepositAddressV3ReqBuilder(new AddDepositAddressV3Req());
    }

    /**
     * Creates a new instance of the `AddDepositAddressV3Req` class with the given data.
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
        /**
         * Deposit account type: main (funding account), trade (spot trading account), the default is main
         */
        to?: AddDepositAddressV3Req.ToEnum;
        /**
         * Deposit amount. This parameter is only used when applying for invoices on the Lightning Network. This parameter is invalid if it is not passed through the Lightning Network.
         */
        amount?: string;
    }): AddDepositAddressV3Req {
        let obj = new AddDepositAddressV3Req();
        obj.currency = data.currency;
        if (data.chain) {
            obj.chain = data.chain;
        } else {
            obj.chain = 'eth';
        }
        if (data.to) {
            obj.to = data.to;
        } else {
            obj.to = AddDepositAddressV3Req.ToEnum.MAIN;
        }
        obj.amount = data.amount;
        return obj;
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    static fromJson(input: string): AddDepositAddressV3Req {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): AddDepositAddressV3Req {
        return plainToClassFromExist(new AddDepositAddressV3Req(), jsonObject);
    }
}

export namespace AddDepositAddressV3Req {
    export enum ToEnum {
        /**
         *
         */
        MAIN = <any>'main',
        /**
         *
         */
        TRADE = <any>'trade',
    }
}

export class AddDepositAddressV3ReqBuilder {
    constructor(readonly obj: AddDepositAddressV3Req) {
        this.obj = obj;
    }
    /**
     * currency
     */
    setCurrency(value: string): AddDepositAddressV3ReqBuilder {
        this.obj.currency = value;
        return this;
    }

    /**
     * The chainId of currency, e.g. The available value for USDT are OMNI, ERC20, TRC20, default is ERC20. The available value for BTC are Native, Segwit, TRC20, the parameters are bech32, btc, trx, default is Native. This only apply for multi-chain currency, and there is no need for single chain currency.
     */
    setChain(value: string): AddDepositAddressV3ReqBuilder {
        this.obj.chain = value;
        return this;
    }

    /**
     * Deposit account type: main (funding account), trade (spot trading account), the default is main
     */
    setTo(value: AddDepositAddressV3Req.ToEnum): AddDepositAddressV3ReqBuilder {
        this.obj.to = value;
        return this;
    }

    /**
     * Deposit amount. This parameter is only used when applying for invoices on the Lightning Network. This parameter is invalid if it is not passed through the Lightning Network.
     */
    setAmount(value: string): AddDepositAddressV3ReqBuilder {
        this.obj.amount = value;
        return this;
    }

    build(): AddDepositAddressV3Req {
        return this.obj;
    }
}

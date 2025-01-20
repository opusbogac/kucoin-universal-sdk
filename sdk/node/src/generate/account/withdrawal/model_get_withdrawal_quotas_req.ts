// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetWithdrawalQuotasReq implements Serializable {
    /**
     * currency
     */
    currency?: string;

    /**
     * The chainId of currency, e.g. The available value for USDT are OMNI, ERC20, TRC20, default is ERC20. The available value for BTC are Native, Segwit, TRC20, the parameters are bech32, btc, trx, default is Native. This only apply for multi-chain currency, and there is no need for single chain currency.
     */
    chain?: string = 'eth';

    private constructor() {}
    /**
     * Creates a new instance of the `GetWithdrawalQuotasReq` class.
     * The builder pattern allows step-by-step construction of a `GetWithdrawalQuotasReq` object.
     */
    static builder(): GetWithdrawalQuotasReqBuilder {
        return new GetWithdrawalQuotasReqBuilder(new GetWithdrawalQuotasReq());
    }

    /**
     * Creates a new instance of the `GetWithdrawalQuotasReq` class with the given data.
     */
    static create(data: {
        /**
         * currency
         */
        currency?: string;
        /**
         * The chainId of currency, e.g. The available value for USDT are OMNI, ERC20, TRC20, default is ERC20. The available value for BTC are Native, Segwit, TRC20, the parameters are bech32, btc, trx, default is Native. This only apply for multi-chain currency, and there is no need for single chain currency.
         */
        chain?: string;
    }): GetWithdrawalQuotasReq {
        let obj = new GetWithdrawalQuotasReq();
        obj.currency = data.currency;
        if (data.chain) {
            obj.chain = data.chain;
        } else {
            obj.chain = 'eth';
        }
        return obj;
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    static fromJson(input: string): GetWithdrawalQuotasReq {
        return this.fromObject(JSON.parse(input));
    }

    static fromObject(jsonObject: Object): GetWithdrawalQuotasReq {
        return plainToClassFromExist(new GetWithdrawalQuotasReq(), jsonObject);
    }
}

export class GetWithdrawalQuotasReqBuilder {
    constructor(readonly obj: GetWithdrawalQuotasReq) {
        this.obj = obj;
    }
    /**
     * currency
     */
    setCurrency(value: string): GetWithdrawalQuotasReqBuilder {
        this.obj.currency = value;
        return this;
    }

    /**
     * The chainId of currency, e.g. The available value for USDT are OMNI, ERC20, TRC20, default is ERC20. The available value for BTC are Native, Segwit, TRC20, the parameters are bech32, btc, trx, default is Native. This only apply for multi-chain currency, and there is no need for single chain currency.
     */
    setChain(value: string): GetWithdrawalQuotasReqBuilder {
        this.obj.chain = value;
        return this;
    }

    build(): GetWithdrawalQuotasReq {
        return this.obj;
    }
}

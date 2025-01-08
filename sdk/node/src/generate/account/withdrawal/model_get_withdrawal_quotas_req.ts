// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';
export class GetWithdrawalQuotasReq implements Serializable<GetWithdrawalQuotasReq> {
    /**
     * currency
     */
    currency?: string;
    /**
     * The chainId of currency, e.g. The available value for USDT are OMNI, ERC20, TRC20, default is ERC20. The available value for BTC are Native, Segwit, TRC20, the parameters are bech32, btc, trx, default is Native. This only apply for multi-chain currency, and there is no need for single chain currency.
     */
    chain?: string = 'eth';

    /**
     * Creates a new instance of the `GetWithdrawalQuotasReq` class.
     * The builder pattern allows step-by-step construction of a `GetWithdrawalQuotasReq` object.
     */
    static builder(): GetWithdrawalQuotasReqBuilder {
        return new GetWithdrawalQuotasReqBuilder();
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
        obj.chain = data.chain;
        return obj;
    }

    fromJson(input: string): GetWithdrawalQuotasReq {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetWithdrawalQuotasReq, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetWithdrawalQuotasReq {
        return plainToInstance(GetWithdrawalQuotasReq, jsonObject);
    }
}

export class GetWithdrawalQuotasReqBuilder {
    obj: GetWithdrawalQuotasReq = new GetWithdrawalQuotasReq();
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

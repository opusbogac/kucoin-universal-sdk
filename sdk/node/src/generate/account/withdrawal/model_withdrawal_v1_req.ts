// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class WithdrawalV1Req implements Serializable<WithdrawalV1Req> {
    /**
     * currency
     */
    currency?: string;
    /**
     * The chainId of currency, For a currency with multiple chains, it is recommended to specify chain parameter instead of using the default chain; you can query the chainId through the response of the GET /api/v3/currencies/{currency} interface.
     */
    chain?: string = 'eth';
    /**
     * Withdrawal address
     */
    address?: string;
    /**
     * Withdrawal amount, a positive number which is a multiple of the amount precision
     */
    amount?: number;
    /**
     * Address remark. If there’s no remark, it is empty. When you withdraw from other platforms to the KuCoin, you need to fill in memo(tag). If you do not fill memo (tag), your deposit may not be available, please be cautious.
     */
    memo?: string;
    /**
     * Internal withdrawal or not. Default : false
     */
    isInner?: boolean = false;
    /**
     * remark
     */
    remark?: string;
    /**
     * Withdrawal fee deduction type: INTERNAL or EXTERNAL or not specified  1. INTERNAL- deduct the transaction fees from your withdrawal amount 2. EXTERNAL- deduct the transaction fees from your main account 3. If you don\'t specify the feeDeductType parameter, when the balance in your main account is sufficient to support the withdrawal, the system will initially deduct the transaction fees from your main account. But if the balance in your main account is not sufficient to support the withdrawal, the system will deduct the fees from your withdrawal amount. For example: Suppose you are going to withdraw 1 BTC from the KuCoin platform (transaction fee: 0.0001BTC), if the balance in your main account is insufficient, the system will deduct the transaction fees from your withdrawal amount. In this case, you will be receiving 0.9999BTC.
     */
    feeDeductType?: string;

    /**
     * Creates a new instance of the `WithdrawalV1Req` class.
     * The builder pattern allows step-by-step construction of a `WithdrawalV1Req` object.
     */
    static builder(): WithdrawalV1ReqBuilder {
        return new WithdrawalV1ReqBuilder();
    }

    /**
     * Creates a new instance of the `WithdrawalV1Req` class with the given data.
     */
    static create(data: {
        /**
         * currency
         */
        currency?: string;
        /**
         * The chainId of currency, For a currency with multiple chains, it is recommended to specify chain parameter instead of using the default chain; you can query the chainId through the response of the GET /api/v3/currencies/{currency} interface.
         */
        chain?: string;
        /**
         * Withdrawal address
         */
        address?: string;
        /**
         * Withdrawal amount, a positive number which is a multiple of the amount precision
         */
        amount?: number;
        /**
         * Address remark. If there’s no remark, it is empty. When you withdraw from other platforms to the KuCoin, you need to fill in memo(tag). If you do not fill memo (tag), your deposit may not be available, please be cautious.
         */
        memo?: string;
        /**
         * Internal withdrawal or not. Default : false
         */
        isInner?: boolean;
        /**
         * remark
         */
        remark?: string;
        /**
         * Withdrawal fee deduction type: INTERNAL or EXTERNAL or not specified  1. INTERNAL- deduct the transaction fees from your withdrawal amount 2. EXTERNAL- deduct the transaction fees from your main account 3. If you don\'t specify the feeDeductType parameter, when the balance in your main account is sufficient to support the withdrawal, the system will initially deduct the transaction fees from your main account. But if the balance in your main account is not sufficient to support the withdrawal, the system will deduct the fees from your withdrawal amount. For example: Suppose you are going to withdraw 1 BTC from the KuCoin platform (transaction fee: 0.0001BTC), if the balance in your main account is insufficient, the system will deduct the transaction fees from your withdrawal amount. In this case, you will be receiving 0.9999BTC.
         */
        feeDeductType?: string;
    }): WithdrawalV1Req {
        let obj = new WithdrawalV1Req();
        obj.currency = data.currency;
        obj.chain = data.chain;
        obj.address = data.address;
        obj.amount = data.amount;
        obj.memo = data.memo;
        obj.isInner = data.isInner;
        obj.remark = data.remark;
        obj.feeDeductType = data.feeDeductType;
        return obj;
    }

    fromJson(input: string): WithdrawalV1Req {
        const jsonObject = JSON.parse(input);
        return plainToInstance(WithdrawalV1Req, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): WithdrawalV1Req {
        return plainToInstance(WithdrawalV1Req, jsonObject);
    }
}

export class WithdrawalV1ReqBuilder {
    obj: WithdrawalV1Req = new WithdrawalV1Req();
    /**
     * currency
     */
    setCurrency(value: string): WithdrawalV1ReqBuilder {
        this.obj.currency = value;
        return this;
    }

    /**
     * The chainId of currency, For a currency with multiple chains, it is recommended to specify chain parameter instead of using the default chain; you can query the chainId through the response of the GET /api/v3/currencies/{currency} interface.
     */
    setChain(value: string): WithdrawalV1ReqBuilder {
        this.obj.chain = value;
        return this;
    }

    /**
     * Withdrawal address
     */
    setAddress(value: string): WithdrawalV1ReqBuilder {
        this.obj.address = value;
        return this;
    }

    /**
     * Withdrawal amount, a positive number which is a multiple of the amount precision
     */
    setAmount(value: number): WithdrawalV1ReqBuilder {
        this.obj.amount = value;
        return this;
    }

    /**
     * Address remark. If there’s no remark, it is empty. When you withdraw from other platforms to the KuCoin, you need to fill in memo(tag). If you do not fill memo (tag), your deposit may not be available, please be cautious.
     */
    setMemo(value: string): WithdrawalV1ReqBuilder {
        this.obj.memo = value;
        return this;
    }

    /**
     * Internal withdrawal or not. Default : false
     */
    setIsInner(value: boolean): WithdrawalV1ReqBuilder {
        this.obj.isInner = value;
        return this;
    }

    /**
     * remark
     */
    setRemark(value: string): WithdrawalV1ReqBuilder {
        this.obj.remark = value;
        return this;
    }

    /**
     * Withdrawal fee deduction type: INTERNAL or EXTERNAL or not specified  1. INTERNAL- deduct the transaction fees from your withdrawal amount 2. EXTERNAL- deduct the transaction fees from your main account 3. If you don\'t specify the feeDeductType parameter, when the balance in your main account is sufficient to support the withdrawal, the system will initially deduct the transaction fees from your main account. But if the balance in your main account is not sufficient to support the withdrawal, the system will deduct the fees from your withdrawal amount. For example: Suppose you are going to withdraw 1 BTC from the KuCoin platform (transaction fee: 0.0001BTC), if the balance in your main account is insufficient, the system will deduct the transaction fees from your withdrawal amount. In this case, you will be receiving 0.9999BTC.
     */
    setFeeDeductType(value: string): WithdrawalV1ReqBuilder {
        this.obj.feeDeductType = value;
        return this;
    }

    build(): WithdrawalV1Req {
        return this.obj;
    }
}

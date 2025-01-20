import {
    ClientOptionBuilder,
    GlobalApiEndpoint,
    GlobalBrokerApiEndpoint,
    GlobalFuturesApiEndpoint,
    TransportOptionBuilder,
} from '@model/index';
import { DefaultClient } from '@api/index';
import {
    FlexTransferReq,
    FuturesAccountTransferInReq,
    FuturesAccountTransferOutReq,
    GetFuturesAccountTransferOutLedgerReq,
    GetTransferQuotasReq,
    InnerTransferReq,
    SubAccountTransferReq,
    TransferAPI,
} from '@src/generate/account/transfer';
import { randomUUID } from 'crypto';

describe('Auto Test', () => {
    let api: TransferAPI;

    beforeAll(() => {
        const key = process.env.API_KEY || '';
        const secret = process.env.API_SECRET || '';
        const passphrase = process.env.API_PASSPHRASE || '';

        // Set specific options, others will fall back to default values
        const httpTransportOption = new TransportOptionBuilder()
            .setKeepAlive(true)
            .setMaxConnsPerHost(10)
            .setMaxIdleConns(10)
            .build();

        // Create a client using the specified options
        const clientOption = new ClientOptionBuilder()
            .setKey(key)
            .setSecret(secret)
            .setPassphrase(passphrase)
            .setSpotEndpoint(GlobalApiEndpoint)
            .setFuturesEndpoint(GlobalFuturesApiEndpoint)
            .setBrokerEndpoint(GlobalBrokerApiEndpoint)
            .setTransportOption(httpTransportOption)
            .build();

        const client = new DefaultClient(clientOption);

        // Get the Restful Service
        const kucoinRestService = client.restService();
        api = kucoinRestService.getAccountService().getTransferApi();
    });

    test('getTransferQuotas request test', () => {
        /**
         * getTransferQuotas
         * Get Transfer Quotas
         * /api/v1/accounts/transferable
         */
        let builder = GetTransferQuotasReq.builder();
        builder.setCurrency('').setType(GetTransferQuotasReq.TypeEnum.MAIN).setTag('');
        let req = builder.build();
        let resp = api.getTransferQuotas(req);
        return resp.then(result => {
            expect(result.currency).toEqual(expect.anything());
            expect(result.balance).toEqual(expect.anything());
            expect(result.available).toEqual(expect.anything());
            expect(result.holds).toEqual(expect.anything());
            expect(result.transferable).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('flexTransfer request test', () => {
        /**
         * flexTransfer
         * Flex Transfer
         * /api/v3/accounts/universal-transfer
         */
        let builder = FlexTransferReq.builder();
        builder.setClientOid(randomUUID().toString()).setCurrency('USDT').setAmount('1').setFromUserId('6744227ce235b300012232d6').setFromAccountType(FlexTransferReq.FromAccountTypeEnum.MAIN).setType(FlexTransferReq.TypeEnum.INTERNAL).setToUserId('6744227ce235b300012232d6').setToAccountType(FlexTransferReq.ToAccountTypeEnum.TRADE);
        let req = builder.build();
        let resp = api.flexTransfer(req);
        return resp.then(result => {
            expect(result.orderId).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('subAccountTransfer request test', () => {
        /**
         * subAccountTransfer
         * SubAccount Transfer
         * /api/v2/accounts/sub-transfer
         */
        let builder = SubAccountTransferReq.builder();
        // builder.setClientOid(?).setCurrency(?).setAmount(?).setDirection(?).setAccountType(?).setSubAccountType(?).setSubUserId(?);
        let req = builder.build();
        let resp = api.subAccountTransfer(req);
        return resp.then(result => {
            expect(result.orderId).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('innerTransfer request test', () => {
        /**
         * innerTransfer
         * Inner Transfer
         * /api/v2/accounts/inner-transfer
         */
        let builder = InnerTransferReq.builder();
        // builder.setClientOid(?).setCurrency(?).setAmount(?).setTo(?).setFromTag(?).setToTag(?).setFrom(?);
        let req = builder.build();
        let resp = api.innerTransfer(req);
        return resp.then(result => {
            expect(result.orderId).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('futuresAccountTransferOut request test', () => {
        /**
         * futuresAccountTransferOut
         * Futures Account Transfer Out
         * /api/v3/transfer-out
         */
        let builder = FuturesAccountTransferOutReq.builder();
        // builder.setCurrency(?).setAmount(?).setRecAccountType(?);
        let req = builder.build();
        let resp = api.futuresAccountTransferOut(req);
        return resp.then(result => {
            expect(result.applyId).toEqual(expect.anything());
            expect(result.bizNo).toEqual(expect.anything());
            expect(result.payAccountType).toEqual(expect.anything());
            expect(result.payTag).toEqual(expect.anything());
            expect(result.remark).toEqual(expect.anything());
            expect(result.recAccountType).toEqual(expect.anything());
            expect(result.recTag).toEqual(expect.anything());
            expect(result.recRemark).toEqual(expect.anything());
            expect(result.recSystem).toEqual(expect.anything());
            expect(result.status).toEqual(expect.anything());
            expect(result.currency).toEqual(expect.anything());
            expect(result.amount).toEqual(expect.anything());
            expect(result.fee).toEqual(expect.anything());
            expect(result.sn).toEqual(expect.anything());
            expect(result.reason).toEqual(expect.anything());
            expect(result.createdAt).toEqual(expect.anything());
            expect(result.updatedAt).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('futuresAccountTransferIn request test', () => {
        /**
         * futuresAccountTransferIn
         * Futures Account Transfer In
         * /api/v1/transfer-in
         */
        let builder = FuturesAccountTransferInReq.builder();
        // builder.setCurrency(?).setAmount(?).setPayAccountType(?);
        let req = builder.build();
        let resp = api.futuresAccountTransferIn(req);
        return resp.then(result => {
            expect(result.data).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('getFuturesAccountTransferOutLedger request test', () => {
        /**
         * getFuturesAccountTransferOutLedger
         * Get Futures Account Transfer Out Ledger
         * /api/v1/transfer-list
         */
        let builder = GetFuturesAccountTransferOutLedgerReq.builder();
        // builder.setCurrency(?).setType(?).setTag(?).setStartAt(?).setEndAt(?).setCurrentPage(?).setPageSize(?);
        let req = builder.build();
        let resp = api.getFuturesAccountTransferOutLedger(req);
        return resp.then(result => {
            expect(result.currentPage).toEqual(expect.anything());
            expect(result.pageSize).toEqual(expect.anything());
            expect(result.totalNum).toEqual(expect.anything());
            expect(result.totalPage).toEqual(expect.anything());
            expect(result.items).toEqual(expect.anything());
            console.log(resp);
        });
    });

});

import {
    ClientOptionBuilder,
    GlobalApiEndpoint,
    GlobalBrokerApiEndpoint,
    GlobalFuturesApiEndpoint,
    TransportOptionBuilder,
} from '@model/index';
import {
    AddSubAccountApiReq,
    AddSubAccountReq,
    DeleteSubAccountAPIReq,
    GetBrokerInfoReq,
    GetDepositDetailReq,
    GetDepositListReq,
    GetRebaseReq,
    GetSubAccountAPIReq,
    GetSubAccountReq,
    GetTransferHistoryReq,
    GetWithdrawDetailReq,
    ModifySubAccountApiReq,
    NDBrokerAPI,
    TransferReq,
} from '@src/generate/broker/ndbroker';
import { DefaultClient } from '@api/index';
import { randomUUID } from 'crypto';

describe('Auto Test', () => {
    let api: NDBrokerAPI;

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
        api = kucoinRestService.getBrokerService().getNDBrokerApi();
    });

    test('getBrokerInfo request test', () => {
        /**
         * getBrokerInfo
         * Get Broker Info
         * /api/v1/broker/nd/info
         */
        let builder = GetBrokerInfoReq.builder();
        builder.setTradeType(GetBrokerInfoReq.TradeTypeEnum._1);
        let req = builder.build();
        let resp = api.getBrokerInfo(req);
        return resp.then((result) => {
            expect(result.accountSize).toEqual(expect.anything());
            expect(result.maxAccountSize).toEqual(expect.anything());
            expect(result.level).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('addSubAccount request test', () => {
        /**
         * addSubAccount
         * Add SubAccount
         * /api/v1/broker/nd/account
         */
        let builder = AddSubAccountReq.builder();
        builder.setAccountName('sdk_test');
        let req = builder.build();
        let resp = api.addSubAccount(req);
        return resp.then((result) => {
            expect(result.accountName).toEqual(expect.anything());
            expect(result.uid).toEqual(expect.anything());
            expect(result.createdAt).toEqual(expect.anything());
            expect(result.level).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('getSubAccount request test', () => {
        /**
         * getSubAccount
         * Get SubAccount
         * /api/v1/broker/nd/account
         */
        let builder = GetSubAccountReq.builder();
        builder.setUid('229317507');
        let req = builder.build();
        let resp = api.getSubAccount(req);
        return resp.then((result) => {
            expect(result.currentPage).toEqual(expect.anything());
            expect(result.pageSize).toEqual(expect.anything());
            expect(result.totalNum).toEqual(expect.anything());
            expect(result.totalPage).toEqual(expect.anything());
            expect(result.items).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('addSubAccountApi request test', () => {
        /**
         * addSubAccountApi
         * Add SubAccount API
         * /api/v1/broker/nd/account/apikey
         */
        let builder = AddSubAccountApiReq.builder();
        builder
            .setUid('229317507')
            .setPassphrase('11223344')
            .setIpWhitelist(['127.0.0.1', '192.168.1.1'])
            .setPermissions([
                AddSubAccountApiReq.PermissionsEnum.GENERAL,
                AddSubAccountApiReq.PermissionsEnum.SPOT,
            ])
            .setLabel('This is remarks');
        let req = builder.build();
        let resp = api.addSubAccountApi(req);
        return resp.then((result) => {
            expect(result.uid).toEqual(expect.anything());
            expect(result.label).toEqual(expect.anything());
            expect(result.apiKey).toEqual(expect.anything());
            expect(result.secretKey).toEqual(expect.anything());
            expect(result.apiVersion).toEqual(expect.anything());
            expect(result.permissions).toEqual(expect.anything());
            expect(result.ipWhitelist).toEqual(expect.anything());
            expect(result.createdAt).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('getSubAccountAPI request test', () => {
        /**
         * getSubAccountAPI
         * Get SubAccount API
         * /api/v1/broker/nd/account/apikey
         */
        let builder = GetSubAccountAPIReq.builder();
        builder.setUid('226383154').setApiKey('67446f679d8f66000107eb6d');
        let req = builder.build();
        let resp = api.getSubAccountAPI(req);
        return resp.then((result) => {
            expect(result.data).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('modifySubAccountApi request test', () => {
        /**
         * modifySubAccountApi
         * Modify SubAccount API
         * /api/v1/broker/nd/account/update-apikey
         */
        let builder = ModifySubAccountApiReq.builder();
        builder
            .setUid('229317507')
            .setIpWhitelist(['127.0.0.1'])
            .setPermissions([ModifySubAccountApiReq.PermissionsEnum.GENERAL])
            .setLabel('label')
            .setApiKey('67447006890ba200018d2722');
        let req = builder.build();
        let resp = api.modifySubAccountApi(req);
        return resp.then((result) => {
            expect(result.uid).toEqual(expect.anything());
            expect(result.label).toEqual(expect.anything());
            expect(result.apiKey).toEqual(expect.anything());
            expect(result.apiVersion).toEqual(expect.anything());
            expect(result.permissions).toEqual(expect.anything());
            expect(result.ipWhitelist).toEqual(expect.anything());
            expect(result.createdAt).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('deleteSubAccountAPI request test', () => {
        /**
         * deleteSubAccountAPI
         * Delete SubAccount API
         * /api/v1/broker/nd/account/apikey
         */
        let builder = DeleteSubAccountAPIReq.builder();
        builder.setUid('229317507').setApiKey('67447006890ba200018d2722');
        let req = builder.build();
        let resp = api.deleteSubAccountAPI(req);
        return resp.then((result) => {
            expect(result.data).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('transfer request test', () => {
        /**
         * transfer
         * Transfer
         * /api/v1/broker/nd/transfer
         */
        let builder = TransferReq.builder();
        builder
            .setCurrency('USDT')
            .setAmount('0.01')
            .setDirection(TransferReq.DirectionEnum.OUT)
            .setAccountType(TransferReq.AccountTypeEnum.TRADE)
            .setSpecialUid('229317507')
            .setSpecialAccountType(TransferReq.SpecialAccountTypeEnum.MAIN)
            .setClientOid(randomUUID());
        let req = builder.build();
        let resp = api.transfer(req);
        return resp.then((result) => {
            expect(result.orderId).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('getTransferHistory request test', () => {
        /**
         * getTransferHistory
         * Get Transfer History
         * /api/v3/broker/nd/transfer/detail
         */
        let builder = GetTransferHistoryReq.builder();
        builder.setOrderId('11111');
        let req = builder.build();
        let resp = api.getTransferHistory(req);
        return resp.then((result) => {
            expect(result.orderId).toEqual(expect.anything());
            expect(result.currency).toEqual(expect.anything());
            expect(result.amount).toEqual(expect.anything());
            expect(result.fromUid).toEqual(expect.anything());
            expect(result.fromAccountType).toEqual(expect.anything());
            expect(result.fromAccountTag).toEqual(expect.anything());
            expect(result.toUid).toEqual(expect.anything());
            expect(result.toAccountType).toEqual(expect.anything());
            expect(result.toAccountTag).toEqual(expect.anything());
            expect(result.status).toEqual(expect.anything());
            expect(result.reason).toEqual(expect.anything());
            expect(result.createdAt).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('getDepositList request test', () => {
        /**
         * getDepositList
         * Get Deposit List
         * /api/v1/asset/ndbroker/deposit/list
         */
        let builder = GetDepositListReq.builder();
        builder.setCurrency('USDT');
        let req = builder.build();
        let resp = api.getDepositList(req);
        return resp.then((result) => {
            expect(result.data).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('getDepositDetail request test', () => {
        /**
         * getDepositDetail
         * Get Deposit Detail
         * /api/v3/broker/nd/deposit/detail
         */
        let builder = GetDepositDetailReq.builder();
        builder.setCurrency('USDT').setHash('6724e363a492800007ec602b');
        let req = builder.build();
        let resp = api.getDepositDetail(req);
        return resp.then((result) => {
            expect(result.chain).toEqual(expect.anything());
            expect(result.hash).toEqual(expect.anything());
            expect(result.walletTxId).toEqual(expect.anything());
            expect(result.uid).toEqual(expect.anything());
            expect(result.updatedAt).toEqual(expect.anything());
            expect(result.amount).toEqual(expect.anything());
            expect(result.memo).toEqual(expect.anything());
            expect(result.fee).toEqual(expect.anything());
            expect(result.address).toEqual(expect.anything());
            expect(result.remark).toEqual(expect.anything());
            expect(result.isInner).toEqual(expect.anything());
            expect(result.currency).toEqual(expect.anything());
            expect(result.status).toEqual(expect.anything());
            expect(result.createdAt).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('getWithdrawDetail request test', () => {
        /**
         * getWithdrawDetail
         * Get Withdraw Detail
         * /api/v3/broker/nd/withdraw/detail
         */
        let builder = GetWithdrawDetailReq.builder();
        builder.setWithdrawalId('674686fa1ac01f0007b25768');
        let req = builder.build();
        let resp = api.getWithdrawDetail(req);
        return resp.then((result) => {
            expect(result.id).toEqual(expect.anything());
            expect(result.chain).toEqual(expect.anything());
            expect(result.walletTxId).toEqual(expect.anything());
            expect(result.uid).toEqual(expect.anything());
            expect(result.updatedAt).toEqual(expect.anything());
            expect(result.amount).toEqual(expect.anything());
            expect(result.memo).toEqual(expect.anything());
            expect(result.fee).toEqual(expect.anything());
            expect(result.address).toEqual(expect.anything());
            expect(result.remark).toEqual(expect.anything());
            expect(result.isInner).toEqual(expect.anything());
            expect(result.currency).toEqual(expect.anything());
            expect(result.status).toEqual(expect.anything());
            expect(result.createdAt).toEqual(expect.anything());
            console.log(resp);
        });
    });

    test('getRebase request test', () => {
        /**
         * getRebase
         * Get Broker Rebate
         * /api/v1/broker/nd/rebase/download
         */
        let builder = GetRebaseReq.builder();
        builder.setBegin('20240610').setEnd('20241010').setTradeType(GetRebaseReq.TradeTypeEnum._1);
        let req = builder.build();
        let resp = api.getRebase(req);
        return resp.then((result) => {
            expect(result.url).toEqual(expect.anything());
            console.log(resp);
        });
    });
});

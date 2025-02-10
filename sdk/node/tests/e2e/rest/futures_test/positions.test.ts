import {
    ClientOptionBuilder,
    GlobalApiEndpoint,
    GlobalBrokerApiEndpoint,
    GlobalFuturesApiEndpoint,
    TransportOptionBuilder,
} from '@model/index';
import {
    AddIsolatedMarginReq,
    GetCrossMarginLeverageReq,
    GetIsolatedMarginRiskLimitReq,
    GetMarginModeReq,
    GetMaxOpenSizeReq,
    GetMaxWithdrawMarginReq,
    GetPositionDetailsReq,
    GetPositionListReq,
    GetPositionsHistoryReq,
    ModifyAutoDepositStatusReq,
    ModifyIsolatedMarginRiskLimtReq,
    ModifyMarginLeverageReq,
    PositionsAPI,
    RemoveIsolatedMarginReq,
    SwitchMarginModeReq,
} from '@src/generate/futures/positions';
import { DefaultClient } from '@api/index';

describe('Auto Test', () => {
    let api: PositionsAPI;

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
        api = kucoinRestService.getFuturesService().getPositionsApi();
    });

    test('getMarginMode request test', ()=> {
        /**
         * getMarginMode
         * Get Margin Mode
         * /api/v2/position/getMarginMode
         */
        let builder = GetMarginModeReq.builder();
        builder.setSymbol('XBTUSDTM');
        let req = builder.build();
        let resp = api.getMarginMode(req);
        return resp.then(result => {
            expect(result.symbol).toEqual(expect.anything());
            expect(result.marginMode).toEqual(expect.anything());
            console.log(resp);
        });
    })

    test('switchMarginMode request test', ()=> {
        /**
         * switchMarginMode
         * Switch Margin Mode
         * /api/v2/position/changeMarginMode
         */
        let builder = SwitchMarginModeReq.builder();
        builder.setSymbol('XBTUSDTM').setMarginMode(SwitchMarginModeReq.MarginModeEnum.CROSS);
        let req = builder.build();
        let resp = api.switchMarginMode(req);
        return resp.then(result => {
            expect(result.symbol).toEqual(expect.anything());
            expect(result.marginMode).toEqual(expect.anything());
            console.log(resp);
        });
    })

    test('getMaxOpenSize request test', ()=> {
        /**
         * getMaxOpenSize
         * Get Max Open Size
         * /api/v2/getMaxOpenSize
         */
        let builder = GetMaxOpenSizeReq.builder();
        builder.setSymbol('XBTUSDTM').setPrice('10000').setLeverage(10);
        let req = builder.build();
        let resp = api.getMaxOpenSize(req);
        return resp.then(result => {
            expect(result.symbol).toEqual(expect.anything());
            expect(result.maxBuyOpenSize).toEqual(expect.anything());
            expect(result.maxSellOpenSize).toEqual(expect.anything());
            console.log(resp);
        });
    })

    test('getPositionDetails request test', ()=> {
        /**
         * getPositionDetails
         * Get Position Details
         * /api/v1/position
         */
        let builder = GetPositionDetailsReq.builder();
        builder.setSymbol('XBTUSDTM');
        let req = builder.build();
        let resp = api.getPositionDetails(req);
        return resp.then(result => {
            expect(result.id).toEqual(expect.anything());
            expect(result.symbol).toEqual(expect.anything());
            expect(result.crossMode).toEqual(expect.anything());
            expect(result.delevPercentage).toEqual(expect.anything());
            expect(result.openingTimestamp).toEqual(expect.anything());
            expect(result.currentTimestamp).toEqual(expect.anything());
            expect(result.currentQty).toEqual(expect.anything());
            expect(result.currentCost).toEqual(expect.anything());
            expect(result.currentComm).toEqual(expect.anything());
            expect(result.unrealisedCost).toEqual(expect.anything());
            expect(result.realisedGrossCost).toEqual(expect.anything());
            expect(result.realisedCost).toEqual(expect.anything());
            expect(result.isOpen).toEqual(expect.anything());
            expect(result.markPrice).toEqual(expect.anything());
            expect(result.markValue).toEqual(expect.anything());
            expect(result.posCost).toEqual(expect.anything());
            expect(result.posInit).toEqual(expect.anything());
            expect(result.posMargin).toEqual(expect.anything());
            expect(result.realisedGrossPnl).toEqual(expect.anything());
            expect(result.realisedPnl).toEqual(expect.anything());
            expect(result.unrealisedPnl).toEqual(expect.anything());
            expect(result.unrealisedPnlPcnt).toEqual(expect.anything());
            expect(result.unrealisedRoePcnt).toEqual(expect.anything());
            expect(result.avgEntryPrice).toEqual(expect.anything());
            expect(result.liquidationPrice).toEqual(expect.anything());
            expect(result.bankruptPrice).toEqual(expect.anything());
            expect(result.settleCurrency).toEqual(expect.anything());
            expect(result.isInverse).toEqual(expect.anything());
            expect(result.marginMode).toEqual(expect.anything());
            expect(result.positionSide).toEqual(expect.anything());
            expect(result.leverage).toEqual(expect.anything());
            expect(result.autoDeposit).toEqual(expect.anything());
            expect(result.maintMarginReq).toEqual(expect.anything());
            expect(result.riskLimit).toEqual(expect.anything());
            expect(result.realLeverage).toEqual(expect.anything());
            expect(result.posCross).toEqual(expect.anything());
            expect(result.posCrossMargin).toEqual(expect.anything());
            expect(result.posComm).toEqual(expect.anything());
            expect(result.posCommCommon).toEqual(expect.anything());
            expect(result.posLoss).toEqual(expect.anything());
            expect(result.posFunding).toEqual(expect.anything());
            expect(result.posMaint).toEqual(expect.anything());
            expect(result.maintMargin).toEqual(expect.anything());
            expect(result.maintainMargin).toEqual(expect.anything());
            console.log(resp);
        });
    })

    test('getPositionList request test', ()=> {
        /**
         * getPositionList
         * Get Position List
         * /api/v1/positions
         */
        let builder = GetPositionListReq.builder();
        builder.setCurrency('USDT');
        let req = builder.build();
        let resp = api.getPositionList(req);
        return resp.then(result => {
            expect(result.data).toEqual(expect.anything());
            console.log(resp);
        });
    })

    test('getPositionsHistory request test', ()=> {
        /**
         * getPositionsHistory
         * Get Positions History
         * /api/v1/history-positions
         */
        let builder = GetPositionsHistoryReq.builder();
        builder.setSymbol('XBTUSDTM')
        let req = builder.build();
        let resp = api.getPositionsHistory(req);
        return resp.then(result => {
            expect(result.currentPage).toEqual(expect.anything());
            expect(result.pageSize).toEqual(expect.anything());
            expect(result.totalNum).toEqual(expect.anything());
            expect(result.totalPage).toEqual(expect.anything());
            expect(result.items).toEqual(expect.anything());
            console.log(resp);
        });
    })

    test('getMaxWithdrawMargin request test', ()=> {
        /**
         * getMaxWithdrawMargin
         * Get Max Withdraw Margin
         * /api/v1/margin/maxWithdrawMargin
         */
        let builder = GetMaxWithdrawMarginReq.builder();
        builder.setSymbol('XBTUSDTM');
        let req = builder.build();
        let resp = api.getMaxWithdrawMargin(req);
        return resp.then(result => {
            expect(result.data).toEqual(expect.anything());
            console.log(resp);
        });
    })

    test('getCrossMarginLeverage request test', ()=> {
        /**
         * getCrossMarginLeverage
         * Get Cross Margin Leverage
         * /api/v2/getCrossUserLeverage
         */
        let builder = GetCrossMarginLeverageReq.builder();
        builder.setSymbol('XBTUSDTM');
        let req = builder.build();
        let resp = api.getCrossMarginLeverage(req);
        return resp.then(result => {
            expect(result.symbol).toEqual(expect.anything());
            expect(result.leverage).toEqual(expect.anything());
            console.log(resp);
        });
    })

    test('modifyMarginLeverage request test', ()=> {
        /**
         * modifyMarginLeverage
         * Modify Cross Margin Leverage
         * /api/v2/changeCrossUserLeverage
         */
        let builder = ModifyMarginLeverageReq.builder();
        builder.setSymbol('XBTUSDTM').setLeverage('20');
        let req = builder.build();
        let resp = api.modifyMarginLeverage(req);
        return resp.then(result => {
            expect(result.symbol).toEqual(expect.anything());
            expect(result.leverage).toEqual(expect.anything());
            console.log(resp);
        });
    })

    test('addIsolatedMargin request test', ()=> {
        /**
         * addIsolatedMargin
         * Add Isolated Margin
         * /api/v1/position/margin/deposit-margin
         */
        let builder = AddIsolatedMarginReq.builder();
        builder.setSymbol('DOGEUSDTM').setMargin(2).setBizNo('251160679598325760');
        let req = builder.build();
        let resp = api.addIsolatedMargin(req);
        return resp.then(result => {
            expect(result.id).toEqual(expect.anything());
            expect(result.symbol).toEqual(expect.anything());
            expect(result.autoDeposit).toEqual(expect.anything());
            expect(result.maintMarginReq).toEqual(expect.anything());
            expect(result.riskLimit).toEqual(expect.anything());
            expect(result.realLeverage).toEqual(expect.anything());
            expect(result.crossMode).toEqual(expect.anything());
            expect(result.delevPercentage).toEqual(expect.anything());
            expect(result.openingTimestamp).toEqual(expect.anything());
            expect(result.currentTimestamp).toEqual(expect.anything());
            expect(result.currentQty).toEqual(expect.anything());
            expect(result.currentCost).toEqual(expect.anything());
            expect(result.currentComm).toEqual(expect.anything());
            expect(result.unrealisedCost).toEqual(expect.anything());
            expect(result.realisedGrossCost).toEqual(expect.anything());
            expect(result.realisedCost).toEqual(expect.anything());
            expect(result.isOpen).toEqual(expect.anything());
            expect(result.markPrice).toEqual(expect.anything());
            expect(result.markValue).toEqual(expect.anything());
            expect(result.posCost).toEqual(expect.anything());
            expect(result.posCross).toEqual(expect.anything());
            expect(result.posInit).toEqual(expect.anything());
            expect(result.posComm).toEqual(expect.anything());
            expect(result.posLoss).toEqual(expect.anything());
            expect(result.posMargin).toEqual(expect.anything());
            expect(result.posMaint).toEqual(expect.anything());
            expect(result.maintMargin).toEqual(expect.anything());
            expect(result.realisedGrossPnl).toEqual(expect.anything());
            expect(result.realisedPnl).toEqual(expect.anything());
            expect(result.unrealisedPnl).toEqual(expect.anything());
            expect(result.unrealisedPnlPcnt).toEqual(expect.anything());
            expect(result.unrealisedRoePcnt).toEqual(expect.anything());
            expect(result.avgEntryPrice).toEqual(expect.anything());
            expect(result.liquidationPrice).toEqual(expect.anything());
            expect(result.bankruptPrice).toEqual(expect.anything());
            expect(result.userId).toEqual(expect.anything());
            expect(result.settleCurrency).toEqual(expect.anything());
            console.log(resp);
        });
    })

    test('removeIsolatedMargin request test', ()=> {
        /**
         * removeIsolatedMargin
         * Remove Isolated Margin
         * /api/v1/margin/withdrawMargin
         */
        let builder = RemoveIsolatedMarginReq.builder();
        builder.setSymbol('DOGEUSDTM').setWithdrawAmount('1');
        let req = builder.build();
        let resp = api.removeIsolatedMargin(req);
        return resp.then(result => {
            expect(result.data).toEqual(expect.anything());
            console.log(resp);
        });
    })

    test('getIsolatedMarginRiskLimit request test', ()=> {
        /**
         * getIsolatedMarginRiskLimit
         * Get Isolated Margin Risk Limit
         * /api/v1/contracts/risk-limit/{symbol}
         */
        let builder = GetIsolatedMarginRiskLimitReq.builder();
        builder.setSymbol('XBTUSDTM');
        let req = builder.build();
        let resp = api.getIsolatedMarginRiskLimit(req);
        return resp.then(result => {
            expect(result.data).toEqual(expect.anything());
            console.log(resp);
        });
    })

    test('modifyIsolatedMarginRiskLimt request test', ()=> {
        /**
         * modifyIsolatedMarginRiskLimt
         * Modify Isolated Margin Risk Limit
         * /api/v1/position/risk-limit-level/change
         */
        let builder = ModifyIsolatedMarginRiskLimtReq.builder();
        builder.setSymbol('XBTUSDTM').setLevel(10);
        let req = builder.build();
        let resp = api.modifyIsolatedMarginRiskLimt(req);
        return resp.then(result => {
            expect(result.data).toEqual(expect.anything());
            console.log(resp);
        });
    })

    test('modifyAutoDepositStatus request test', ()=> {
        /**
         * modifyAutoDepositStatus
         * Modify Isolated Margin Auto-Deposit Status
         * /api/v1/position/margin/auto-deposit-status
         */
        let builder = ModifyAutoDepositStatusReq.builder();
        builder.setSymbol('DOGEUSDTM').setStatus(true);
        let req = builder.build();
        let resp = api.modifyAutoDepositStatus(req);
        return resp.then(result => {
            expect(result.data).toEqual(expect.anything());
            console.log(resp);
        });
    })

});

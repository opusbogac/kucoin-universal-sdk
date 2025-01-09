import { CrossMarginPositionEvent } from './model_cross_margin_position_event';
import { IsolatedMarginPositionEvent } from './model_isolated_margin_position_event';
import { WsMessage } from '@model/common';

describe('Auto Test', () => {
    test('crossMarginPosition response test', () => {
        /**
         * crossMarginPosition
         * Get Cross Margin Position change
         * /crossMarginPosition/margin/position
         */
        let data =
            '{"topic":"/margin/position","subject":"debt.ratio","type":"message","userId":"633559791e1cbc0001f319bc","channelType":"private","data":{"debtRatio":0,"totalAsset":0.00052431772284080000000,"marginCoefficientTotalAsset":"0.0005243177228408","totalDebt":"0","assetList":{"BTC":{"total":"0.00002","available":"0","hold":"0.00002"},"USDT":{"total":"33.68855864","available":"15.01916691","hold":"18.66939173"}},"debtList":{"BTC":"0","USDT":"0"},"timestamp":1729912435657}}';
        let commonResp = WsMessage.fromJson(data);
        let resp = new CrossMarginPositionEvent();
        resp = resp.fromObject(commonResp.data);
        expect(Object.values(resp).every((value) => value === null || value === undefined)).toBe(
            false,
        );
        console.log(resp);
    });
    test('isolatedMarginPosition response test', () => {
        /**
         * isolatedMarginPosition
         * Get Isolated Margin Position change
         * /isolatedMarginPosition/margin/isolatedPosition:_symbol_
         */
        let data =
            '{"topic":"/margin/isolatedPosition:BTC-USDT","subject":"positionChange","type":"message","userId":"633559791e1cbc0001f319bc","channelType":"private","data":{"tag":"BTC-USDT","status":"DEBT","statusBizType":"DEFAULT_DEBT","accumulatedPrincipal":"5.01","changeAssets":{"BTC":{"total":"0.00043478","hold":"0","liabilityPrincipal":"0","liabilityInterest":"0"},"USDT":{"total":"0.98092004","hold":"0","liabilityPrincipal":"26","liabilityInterest":"0.00025644"}},"timestamp":1730121097742}}';
        let commonResp = WsMessage.fromJson(data);
        let resp = new IsolatedMarginPositionEvent();
        resp = resp.fromObject(commonResp.data);
        expect(Object.values(resp).every((value) => value === null || value === undefined)).toBe(
            false,
        );
        console.log(resp);
    });
});

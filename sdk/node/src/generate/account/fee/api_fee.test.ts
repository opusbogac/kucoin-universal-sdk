import { GetSpotActualFeeResp } from './model_get_spot_actual_fee_resp';
import { GetFuturesActualFeeReq } from './model_get_futures_actual_fee_req';
import { GetSpotActualFeeReq } from './model_get_spot_actual_fee_req';
import { GetBasicFeeResp } from './model_get_basic_fee_resp';
import { GetFuturesActualFeeResp } from './model_get_futures_actual_fee_resp';
import { GetBasicFeeReq } from './model_get_basic_fee_req';
import { RestResponse } from '@model/common';

describe('Auto Test', () => {
    test('getBasicFee request test', () => {
        /**
         * getBasicFee
         * Get Basic Fee - Spot/Margin
         * /api/v1/base-fee
         */
        let data = '{"currencyType": 1}';
        let req = new GetBasicFeeReq();
        req = req.fromJson(data);
        expect(Object.values(req).every((value) => value === null || value === undefined)).toBe(
            false,
        );
        console.log(req);
    });

    test('getBasicFee response test', () => {
        /**
         * getBasicFee
         * Get Basic Fee - Spot/Margin
         * /api/v1/base-fee
         */
        let data =
            '{\n    "code": "200000",\n    "data": {\n        "takerFeeRate": "0.001",\n        "makerFeeRate": "0.001"\n    }\n}';
        let commonResp = RestResponse.fromJson(data);
        let resp = new GetBasicFeeResp();
        resp = resp.fromObject(commonResp.data);
        if (commonResp.data !== null) {
            expect(
                Object.values(resp).every((value) => value === null || value === undefined),
            ).toBe(false);
            console.log(resp);
        }
    });
    test('getSpotActualFee request test', () => {
        /**
         * getSpotActualFee
         * Get Actual Fee - Spot/Margin
         * /api/v1/trade-fees
         */
        let data = '{"symbols": "BTC-USDT,ETH-USDT"}';
        let req = new GetSpotActualFeeReq();
        req = req.fromJson(data);
        expect(Object.values(req).every((value) => value === null || value === undefined)).toBe(
            false,
        );
        console.log(req);
    });

    test('getSpotActualFee response test', () => {
        /**
         * getSpotActualFee
         * Get Actual Fee - Spot/Margin
         * /api/v1/trade-fees
         */
        let data =
            '{"code":"200000","data":[{"symbol":"BTC-USDT","takerFeeRate":"0.001","makerFeeRate":"0.001"},{"symbol":"ETH-USDT","takerFeeRate":"0.001","makerFeeRate":"0.001"}]}';
        let commonResp = RestResponse.fromJson(data);
        let resp = new GetSpotActualFeeResp();
        resp = resp.fromObject(commonResp.data);
        if (commonResp.data !== null) {
            expect(
                Object.values(resp).every((value) => value === null || value === undefined),
            ).toBe(false);
            console.log(resp);
        }
    });
    test('getFuturesActualFee request test', () => {
        /**
         * getFuturesActualFee
         * Get Actual Fee - Futures
         * /api/v1/trade-fees
         */
        let data = '{"symbol": "XBTUSDTM"}';
        let req = new GetFuturesActualFeeReq();
        req = req.fromJson(data);
        expect(Object.values(req).every((value) => value === null || value === undefined)).toBe(
            false,
        );
        console.log(req);
    });

    test('getFuturesActualFee response test', () => {
        /**
         * getFuturesActualFee
         * Get Actual Fee - Futures
         * /api/v1/trade-fees
         */
        let data =
            '{"code":"200000","data":{"symbol":"XBTUSDTM","takerFeeRate":"0.0006","makerFeeRate":"0.0002"}}';
        let commonResp = RestResponse.fromJson(data);
        let resp = new GetFuturesActualFeeResp();
        resp = resp.fromObject(commonResp.data);
        if (commonResp.data !== null) {
            expect(
                Object.values(resp).every((value) => value === null || value === undefined),
            ).toBe(false);
            console.log(resp);
        }
    });
});

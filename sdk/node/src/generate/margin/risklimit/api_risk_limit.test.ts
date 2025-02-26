import { GetMarginRiskLimitResp } from './model_get_margin_risk_limit_resp';
import { GetMarginRiskLimitReq } from './model_get_margin_risk_limit_req';
import { RestResponse } from '@model/common';

describe('Auto Test', () => {
    test('getMarginRiskLimit request test', () => {
        /**
         * getMarginRiskLimit
         * Get Margin Risk Limit
         * /api/v3/margin/currencies
         */
        let data = '{"isIsolated": true, "currency": "BTC", "symbol": "BTC-USDT"}';
        let req = GetMarginRiskLimitReq.fromJson(data);
        expect(Object.values(req).every((value) => value === null || value === undefined)).toBe(
            false,
        );
        console.log(req);
    });

    test('getMarginRiskLimit response test', () => {
        /**
         * getMarginRiskLimit
         * Get Margin Risk Limit
         * /api/v3/margin/currencies
         */
        let data =
            '{\n    "code": "200000",\n    "data": [\n        {\n            "timestamp": 1729678659275,\n            "currency": "BTC",\n            "borrowMaxAmount": "75.15",\n            "buyMaxAmount": "217.12",\n            "holdMaxAmount": "217.12",\n            "borrowCoefficient": "1",\n            "marginCoefficient": "1",\n            "precision": 8,\n            "borrowMinAmount": "0.001",\n            "borrowMinUnit": "0.0001",\n            "borrowEnabled": true\n        }\n    ]\n}\n';
        let commonResp = RestResponse.fromJson(data);
        let resp = GetMarginRiskLimitResp.fromObject(commonResp.data);
        if (commonResp.data !== null) {
            expect(
                Object.values(resp).every((value) => value === null || value === undefined),
            ).toBe(false);
            console.log(resp);
        }
    });
});

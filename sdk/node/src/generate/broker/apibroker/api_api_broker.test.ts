import { GetRebaseResp } from './model_get_rebase_resp';
import { GetRebaseReq } from './model_get_rebase_req';
import { RestResponse } from '@model/common';

describe('Auto Test', () => {
    test('getRebase request test', () => {
        /**
         * getRebase
         * Get Broker Rebate
         * /api/v1/broker/api/rebase/download
         */
        let data = '{"begin": "20240610", "end": "20241010", "tradeType": "1"}';
        let req = GetRebaseReq.fromJson(data);
        expect(Object.values(req).every((value) => value === null || value === undefined)).toBe(
            false,
        );
        console.log(req);
    });

    test('getRebase response test', () => {
        /**
         * getRebase
         * Get Broker Rebate
         * /api/v1/broker/api/rebase/download
         */
        let data =
            '{\n    "code": "200000",\n    "data": {\n        "url": "https://kc-v2-promotion.s3.ap-northeast-1.amazonaws.com/broker/671aec522593f600019766d0_file.csv?X-Amz-Security-Token=IQo*********2cd90f14efb"\n    }\n}';
        let commonResp = RestResponse.fromJson(data);
        let resp = GetRebaseResp.fromObject(commonResp.data);
        if (commonResp.data !== null) {
            expect(
                Object.values(resp).every((value) => value === null || value === undefined),
            ).toBe(false);
            console.log(resp);
        }
    });
});

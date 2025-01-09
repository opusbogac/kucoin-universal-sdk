import { IndexPriceEvent } from './model_index_price_event';
import { MarkPriceEvent } from './model_mark_price_event';
import { WsMessage } from '@model/common';

describe('Auto Test', () => {
    test('indexPrice response test', () => {
        /**
         * indexPrice
         * Index Price
         * /indexPrice/indicator/index:_symbol_,_symbol_
         */
        let data =
            '{"id":"5c24c5da03aa673885cd67a0","type":"message","topic":"/indicator/index:USDT-BTC","subject":"tick","data":{"symbol":"USDT-BTC","granularity":5000,"timestamp":1551770400000,"value":0.0001092}}';
        let commonResp = WsMessage.fromJson(data);
        let resp = new IndexPriceEvent();
        resp = resp.fromObject(commonResp.data);
        expect(Object.values(resp).every((value) => value === null || value === undefined)).toBe(
            false,
        );
        console.log(resp);
    });
    test('markPrice response test', () => {
        /**
         * markPrice
         * Mark Price
         * /markPrice/indicator/markPrice:_symbol_,_symbol_
         */
        let data =
            '{"id":"5c24c5da03aa673885cd67aa","type":"message","topic":"/indicator/markPrice:USDT-BTC","subject":"tick","data":{"symbol":"USDT-BTC","granularity":5000,"timestamp":1551770400000,"value":0.0001093}}';
        let commonResp = WsMessage.fromJson(data);
        let resp = new MarkPriceEvent();
        resp = resp.fromObject(commonResp.data);
        expect(Object.values(resp).every((value) => value === null || value === undefined)).toBe(
            false,
        );
        console.log(resp);
    });
});

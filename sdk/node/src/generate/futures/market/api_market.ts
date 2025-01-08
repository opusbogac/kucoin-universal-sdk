// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { Transport } from '@internal/interfaces/transport';
import { GetPremiumIndexResp } from './model_get_premium_index_resp';
import { GetMarkPriceResp } from './model_get_mark_price_resp';
import { GetTradeHistoryResp } from './model_get_trade_history_resp';
import { GetServiceStatusResp } from './model_get_service_status_resp';
import { GetTickerReq } from './model_get_ticker_req';
import { GetInterestRateIndexReq } from './model_get_interest_rate_index_req';
import { GetSpotIndexPriceReq } from './model_get_spot_index_price_req';
import { GetMarkPriceReq } from './model_get_mark_price_req';
import { GetPrivateTokenResp } from './model_get_private_token_resp';
import { GetPartOrderBookReq } from './model_get_part_order_book_req';
import { GetPremiumIndexReq } from './model_get_premium_index_req';
import { GetSymbolReq } from './model_get_symbol_req';
import { GetSymbolResp } from './model_get_symbol_resp';
import { GetTickerResp } from './model_get_ticker_resp';
import { GetFullOrderBookResp } from './model_get_full_order_book_resp';
import { GetFullOrderBookReq } from './model_get_full_order_book_req';
import { GetAllSymbolsResp } from './model_get_all_symbols_resp';
import { GetTradeHistoryReq } from './model_get_trade_history_req';
import { GetPublicTokenResp } from './model_get_public_token_resp';
import { GetInterestRateIndexResp } from './model_get_interest_rate_index_resp';
import { Get24hrStatsResp } from './model_get24hr_stats_resp';
import { GetKlinesReq } from './model_get_klines_req';
import { GetPartOrderBookResp } from './model_get_part_order_book_resp';
import { GetAllTickersResp } from './model_get_all_tickers_resp';
import { GetServerTimeResp } from './model_get_server_time_resp';
import { GetSpotIndexPriceResp } from './model_get_spot_index_price_resp';
import { GetKlinesResp } from './model_get_klines_resp';

export interface MarketAPI {
    /**
     * getAllTickers Get All Tickers
     * Description: This endpoint returns \&quot;last traded price/size\&quot;、\&quot;best bid/ask price/size\&quot; etc. of a single symbol. These messages can also be obtained through Websocket.
     * Documentation: https://www.kucoin.com/docs-new/api-3470223
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | FUTURES |
     * | API-CHANNEL         | PUBLIC  |
     * | API-PERMISSION      | NULL    |
     * | API-RATE-LIMIT-POOL | PUBLIC  |
     * | API-RATE-LIMIT      | 5       |
     * +---------------------+---------+
     */
    getAllTickers(): Promise<GetAllTickersResp>;

    /**
     * getPrivateToken Get Private Token - Futures
     * Description: This interface can obtain the token required for websocket to establish a Futures private connection. If you need use private channels(e.g. account balance notice), please make request as follows to obtain the server list and private token
     * Documentation: https://www.kucoin.com/docs-new/api-3470296
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | FUTURES |
     * | API-CHANNEL         | PRIVATE |
     * | API-PERMISSION      | GENERAL |
     * | API-RATE-LIMIT-POOL | FUTURES |
     * | API-RATE-LIMIT      | 10      |
     * +---------------------+---------+
     */
    getPrivateToken(): Promise<GetPrivateTokenResp>;

    /**
     * getPublicToken Get Public Token - Futures
     * Description: This interface can obtain the token required for websocket to establish a Futures connection. If you need use public channels (e.g. all public market data), please make request as follows to obtain the server list and public token
     * Documentation: https://www.kucoin.com/docs-new/api-3470297
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | FUTURES |
     * | API-CHANNEL         | PUBLIC  |
     * | API-PERMISSION      | NULL    |
     * | API-RATE-LIMIT-POOL | PUBLIC  |
     * | API-RATE-LIMIT      | 10      |
     * +---------------------+---------+
     */
    getPublicToken(): Promise<GetPublicTokenResp>;

    /**
     * getAllSymbols Get All Symbols
     * Description: Get detailed information of all contracts that can be traded. This API will return a list of tradable contracts, including some key parameters of the contract such as the symbol name, tick size, mark price,etc.
     * Documentation: https://www.kucoin.com/docs-new/api-3470220
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | FUTURES |
     * | API-CHANNEL         | PUBLIC  |
     * | API-PERMISSION      | NULL    |
     * | API-RATE-LIMIT-POOL | PUBLIC  |
     * | API-RATE-LIMIT      | 3       |
     * +---------------------+---------+
     */
    getAllSymbols(): Promise<GetAllSymbolsResp>;

    /**
     * getSymbol Get Symbol
     * Description: Get information of specified contracts that can be traded. This API will return a list of tradable contracts, including some key parameters of the contract such as the symbol name, tick size, mark price,etc.
     * Documentation: https://www.kucoin.com/docs-new/api-3470221
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | FUTURES |
     * | API-CHANNEL         | PUBLIC  |
     * | API-PERMISSION      | NULL    |
     * | API-RATE-LIMIT-POOL | PUBLIC  |
     * | API-RATE-LIMIT      | 3       |
     * +---------------------+---------+
     */
    getSymbol(req: GetSymbolReq): Promise<GetSymbolResp>;

    /**
     * getSpotIndexPrice Get Spot Index Price
     * Description: Get Spot Index Price
     * Documentation: https://www.kucoin.com/docs-new/api-3470231
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | FUTURES |
     * | API-CHANNEL         | PUBLIC  |
     * | API-PERMISSION      | NULL    |
     * | API-RATE-LIMIT-POOL | PUBLIC  |
     * | API-RATE-LIMIT      | 2       |
     * +---------------------+---------+
     */
    getSpotIndexPrice(req: GetSpotIndexPriceReq): Promise<GetSpotIndexPriceResp>;

    /**
     * getInterestRateIndex Get Interest Rate Index
     * Description: Get interest rate Index.
     * Documentation: https://www.kucoin.com/docs-new/api-3470226
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | FUTURES |
     * | API-CHANNEL         | PUBLIC  |
     * | API-PERMISSION      | NULL    |
     * | API-RATE-LIMIT-POOL | PUBLIC  |
     * | API-RATE-LIMIT      | 5       |
     * +---------------------+---------+
     */
    getInterestRateIndex(req: GetInterestRateIndexReq): Promise<GetInterestRateIndexResp>;

    /**
     * getKlines Get Klines
     * Description: Get the Kline of the symbol. Data are returned in grouped buckets based on requested type. For each query, the system would return at most 500 pieces of data. To obtain more data, please page the data by time.
     * Documentation: https://www.kucoin.com/docs-new/api-3470234
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | FUTURES |
     * | API-CHANNEL         | PUBLIC  |
     * | API-PERMISSION      | NULL    |
     * | API-RATE-LIMIT-POOL | PUBLIC  |
     * | API-RATE-LIMIT      | 3       |
     * +---------------------+---------+
     */
    getKlines(req: GetKlinesReq): Promise<GetKlinesResp>;

    /**
     * getPartOrderBook Get Part OrderBook
     * Description: Query for part orderbook depth data. (aggregated by price)  You are recommended to request via this endpoint as the system reponse would be faster and cosume less traffic.
     * Documentation: https://www.kucoin.com/docs-new/api-3470225
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | FUTURES |
     * | API-CHANNEL         | PUBLIC  |
     * | API-PERMISSION      | NULL    |
     * | API-RATE-LIMIT-POOL | PUBLIC  |
     * | API-RATE-LIMIT      | 5       |
     * +---------------------+---------+
     */
    getPartOrderBook(req: GetPartOrderBookReq): Promise<GetPartOrderBookResp>;

    /**
     * getFullOrderBook Get Full OrderBook
     * Description: Query for Full orderbook depth data. (aggregated by price)  It is generally used by professional traders because it uses more server resources and traffic, and we have strict access rate limit control.  To maintain up-to-date Order Book, please use Websocket incremental feed after retrieving the OrderBook.
     * Documentation: https://www.kucoin.com/docs-new/api-3470224
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | FUTURES |
     * | API-CHANNEL         | PUBLIC  |
     * | API-PERMISSION      | NULL    |
     * | API-RATE-LIMIT-POOL | PUBLIC  |
     * | API-RATE-LIMIT      | 3       |
     * +---------------------+---------+
     */
    getFullOrderBook(req: GetFullOrderBookReq): Promise<GetFullOrderBookResp>;

    /**
     * getMarkPrice Get Mark Price
     * Description: Get current mark price
     * Documentation: https://www.kucoin.com/docs-new/api-3470233
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | FUTURES |
     * | API-CHANNEL         | PUBLIC  |
     * | API-PERMISSION      | NULL    |
     * | API-RATE-LIMIT-POOL | PUBLIC  |
     * | API-RATE-LIMIT      | 3       |
     * +---------------------+---------+
     */
    getMarkPrice(req: GetMarkPriceReq): Promise<GetMarkPriceResp>;

    /**
     * getPremiumIndex Get Premium Index
     * Description: Submit request to get premium index.
     * Documentation: https://www.kucoin.com/docs-new/api-3470227
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | FUTURES |
     * | API-CHANNEL         | PUBLIC  |
     * | API-PERMISSION      | NULL    |
     * | API-RATE-LIMIT-POOL | PUBLIC  |
     * | API-RATE-LIMIT      | 3       |
     * +---------------------+---------+
     */
    getPremiumIndex(req: GetPremiumIndexReq): Promise<GetPremiumIndexResp>;

    /**
     * getServiceStatus Get Service Status
     * Description: Get the service status.
     * Documentation: https://www.kucoin.com/docs-new/api-3470230
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | FUTURES |
     * | API-CHANNEL         | PUBLIC  |
     * | API-PERMISSION      | NULL    |
     * | API-RATE-LIMIT-POOL | PUBLIC  |
     * | API-RATE-LIMIT      | 4       |
     * +---------------------+---------+
     */
    getServiceStatus(): Promise<GetServiceStatusResp>;

    /**
     * getTicker Get Ticker
     * Description: This endpoint returns \&quot;last traded price/size\&quot;、\&quot;best bid/ask price/size\&quot; etc. of a single symbol. These messages can also be obtained through Websocket.
     * Documentation: https://www.kucoin.com/docs-new/api-3470222
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | FUTURES |
     * | API-CHANNEL         | PUBLIC  |
     * | API-PERMISSION      | NULL    |
     * | API-RATE-LIMIT-POOL | PUBLIC  |
     * | API-RATE-LIMIT      | 2       |
     * +---------------------+---------+
     */
    getTicker(req: GetTickerReq): Promise<GetTickerResp>;

    /**
     * getServerTime Get Server Time
     * Description: Get the API server time. This is the Unix timestamp.
     * Documentation: https://www.kucoin.com/docs-new/api-3470229
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | FUTURES |
     * | API-CHANNEL         | PUBLIC  |
     * | API-PERMISSION      | NULL    |
     * | API-RATE-LIMIT-POOL | PUBLIC  |
     * | API-RATE-LIMIT      | 2       |
     * +---------------------+---------+
     */
    getServerTime(): Promise<GetServerTimeResp>;

    /**
     * getTradeHistory Get Trade History
     * Description: Request via this endpoint to get the trade history of the specified symbol, the returned quantity is the last 100 transaction records.
     * Documentation: https://www.kucoin.com/docs-new/api-3470232
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | FUTURES |
     * | API-CHANNEL         | PUBLIC  |
     * | API-PERMISSION      | NULL    |
     * | API-RATE-LIMIT-POOL | PUBLIC  |
     * | API-RATE-LIMIT      | 5       |
     * +---------------------+---------+
     */
    getTradeHistory(req: GetTradeHistoryReq): Promise<GetTradeHistoryResp>;

    /**
     * get24hrStats Get 24hr Stats
     * Description: Get the statistics of the platform futures trading volume in the last 24 hours.
     * Documentation: https://www.kucoin.com/docs-new/api-3470228
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | FUTURES |
     * | API-CHANNEL         | PUBLIC  |
     * | API-PERMISSION      | NULL    |
     * | API-RATE-LIMIT-POOL | FUTURES |
     * | API-RATE-LIMIT      | 3       |
     * +---------------------+---------+
     */
    get24hrStats(): Promise<Get24hrStatsResp>;
}

export class MarketAPIImpl implements MarketAPI {
    constructor(private transport: Transport) {}

    getAllTickers(): Promise<GetAllTickersResp> {
        return this.transport.call(
            'futures',
            false,
            'GET',
            '/api/v1/allTickers',
            null,
            new GetAllTickersResp(),
            false,
        );
    }

    getPrivateToken(): Promise<GetPrivateTokenResp> {
        return this.transport.call(
            'futures',
            false,
            'POST',
            '/api/v1/bullet-private',
            null,
            new GetPrivateTokenResp(),
            false,
        );
    }

    getPublicToken(): Promise<GetPublicTokenResp> {
        return this.transport.call(
            'futures',
            false,
            'POST',
            '/api/v1/bullet-public',
            null,
            new GetPublicTokenResp(),
            false,
        );
    }

    getAllSymbols(): Promise<GetAllSymbolsResp> {
        return this.transport.call(
            'futures',
            false,
            'GET',
            '/api/v1/contracts/active',
            null,
            new GetAllSymbolsResp(),
            false,
        );
    }

    getSymbol(req: GetSymbolReq): Promise<GetSymbolResp> {
        return this.transport.call(
            'futures',
            false,
            'GET',
            '/api/v1/contracts/{symbol}',
            req,
            new GetSymbolResp(),
            false,
        );
    }

    getSpotIndexPrice(req: GetSpotIndexPriceReq): Promise<GetSpotIndexPriceResp> {
        return this.transport.call(
            'futures',
            false,
            'GET',
            '/api/v1/index/query',
            req,
            new GetSpotIndexPriceResp(),
            false,
        );
    }

    getInterestRateIndex(req: GetInterestRateIndexReq): Promise<GetInterestRateIndexResp> {
        return this.transport.call(
            'futures',
            false,
            'GET',
            '/api/v1/interest/query',
            req,
            new GetInterestRateIndexResp(),
            false,
        );
    }

    getKlines(req: GetKlinesReq): Promise<GetKlinesResp> {
        return this.transport.call(
            'futures',
            false,
            'GET',
            '/api/v1/kline/query',
            req,
            new GetKlinesResp(),
            false,
        );
    }

    getPartOrderBook(req: GetPartOrderBookReq): Promise<GetPartOrderBookResp> {
        return this.transport.call(
            'futures',
            false,
            'GET',
            '/api/v1/level2/depth{size}',
            req,
            new GetPartOrderBookResp(),
            false,
        );
    }

    getFullOrderBook(req: GetFullOrderBookReq): Promise<GetFullOrderBookResp> {
        return this.transport.call(
            'futures',
            false,
            'GET',
            '/api/v1/level2/snapshot',
            req,
            new GetFullOrderBookResp(),
            false,
        );
    }

    getMarkPrice(req: GetMarkPriceReq): Promise<GetMarkPriceResp> {
        return this.transport.call(
            'futures',
            false,
            'GET',
            '/api/v1/mark-price/{symbol}/current',
            req,
            new GetMarkPriceResp(),
            false,
        );
    }

    getPremiumIndex(req: GetPremiumIndexReq): Promise<GetPremiumIndexResp> {
        return this.transport.call(
            'futures',
            false,
            'GET',
            '/api/v1/premium/query',
            req,
            new GetPremiumIndexResp(),
            false,
        );
    }

    getServiceStatus(): Promise<GetServiceStatusResp> {
        return this.transport.call(
            'futures',
            false,
            'GET',
            '/api/v1/status',
            null,
            new GetServiceStatusResp(),
            false,
        );
    }

    getTicker(req: GetTickerReq): Promise<GetTickerResp> {
        return this.transport.call(
            'futures',
            false,
            'GET',
            '/api/v1/ticker',
            req,
            new GetTickerResp(),
            false,
        );
    }

    getServerTime(): Promise<GetServerTimeResp> {
        return this.transport.call(
            'futures',
            false,
            'GET',
            '/api/v1/timestamp',
            null,
            new GetServerTimeResp(),
            false,
        );
    }

    getTradeHistory(req: GetTradeHistoryReq): Promise<GetTradeHistoryResp> {
        return this.transport.call(
            'futures',
            false,
            'GET',
            '/api/v1/trade/history',
            req,
            new GetTradeHistoryResp(),
            false,
        );
    }

    get24hrStats(): Promise<Get24hrStatsResp> {
        return this.transport.call(
            'futures',
            false,
            'GET',
            '/api/v1/trade-statistics',
            null,
            new Get24hrStatsResp(),
            false,
        );
    }
}

# Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

from abc import ABC, abstractmethod
from typing import Any
from kucoin_universal_sdk.internal.interfaces.transport import Transport
from .model_get24hr_stats_req import Get24hrStatsReq
from .model_get24hr_stats_resp import Get24hrStatsResp
from .model_get_all_currencies_resp import GetAllCurrenciesResp
from .model_get_all_symbols_req import GetAllSymbolsReq
from .model_get_all_symbols_resp import GetAllSymbolsResp
from .model_get_all_tickers_resp import GetAllTickersResp
from .model_get_announcements_req import GetAnnouncementsReq
from .model_get_announcements_resp import GetAnnouncementsResp
from .model_get_currency_req import GetCurrencyReq
from .model_get_currency_resp import GetCurrencyResp
from .model_get_fiat_price_req import GetFiatPriceReq
from .model_get_fiat_price_resp import GetFiatPriceResp
from .model_get_full_order_book_req import GetFullOrderBookReq
from .model_get_full_order_book_resp import GetFullOrderBookResp
from .model_get_klines_req import GetKlinesReq
from .model_get_klines_resp import GetKlinesResp
from .model_get_market_list_resp import GetMarketListResp
from .model_get_part_order_book_req import GetPartOrderBookReq
from .model_get_part_order_book_resp import GetPartOrderBookResp
from .model_get_private_token_resp import GetPrivateTokenResp
from .model_get_public_token_resp import GetPublicTokenResp
from .model_get_server_time_resp import GetServerTimeResp
from .model_get_service_status_resp import GetServiceStatusResp
from .model_get_symbol_req import GetSymbolReq
from .model_get_symbol_resp import GetSymbolResp
from .model_get_ticker_req import GetTickerReq
from .model_get_ticker_resp import GetTickerResp
from .model_get_trade_history_req import GetTradeHistoryReq
from .model_get_trade_history_resp import GetTradeHistoryResp


class MarketAPI(ABC):

    @abstractmethod
    def get_announcements(self, req: GetAnnouncementsReq,
                          **kwargs: Any) -> GetAnnouncementsResp:
        """
        summary: Get Announcements
        description: This interface can obtain the latest news announcements, and the default page search is for announcements within a month.
        documentation: https://www.kucoin.com/docs-new/api-3470157
        +---------------------+--------+
        | Extra API Info      | Value  |
        +---------------------+--------+
        | API-DOMAIN          | SPOT   |
        | API-CHANNEL         | PUBLIC |
        | API-PERMISSION      | NULL   |
        | API-RATE-LIMIT-POOL | PUBLIC |
        | API-RATE-LIMIT      | 20     |
        +---------------------+--------+
        """
        pass

    @abstractmethod
    def get_currency(self, req: GetCurrencyReq,
                     **kwargs: Any) -> GetCurrencyResp:
        """
        summary: Get Currency
        description: Request via this endpoint to get the currency details of a specified currency
        documentation: https://www.kucoin.com/docs-new/api-3470155
        +---------------------+--------+
        | Extra API Info      | Value  |
        +---------------------+--------+
        | API-DOMAIN          | SPOT   |
        | API-CHANNEL         | PUBLIC |
        | API-PERMISSION      | NULL   |
        | API-RATE-LIMIT-POOL | PUBLIC |
        | API-RATE-LIMIT      | 3      |
        +---------------------+--------+
        """
        pass

    @abstractmethod
    def get_all_currencies(self, **kwargs: Any) -> GetAllCurrenciesResp:
        """
        summary: Get All Currencies
        description: Request via this endpoint to get the currency list.Not all currencies currently can be used for trading.
        documentation: https://www.kucoin.com/docs-new/api-3470152
        +---------------------+--------+
        | Extra API Info      | Value  |
        +---------------------+--------+
        | API-DOMAIN          | SPOT   |
        | API-CHANNEL         | PUBLIC |
        | API-PERMISSION      | NULL   |
        | API-RATE-LIMIT-POOL | PUBLIC |
        | API-RATE-LIMIT      | 3      |
        +---------------------+--------+
        """
        pass

    @abstractmethod
    def get_symbol(self, req: GetSymbolReq, **kwargs: Any) -> GetSymbolResp:
        """
        summary: Get Symbol 
        description: Request via this endpoint to get detail currency pairs for trading. If you want to get the market information of the trading symbol, please use Get All Tickers.
        documentation: https://www.kucoin.com/docs-new/api-3470159
        +---------------------+--------+
        | Extra API Info      | Value  |
        +---------------------+--------+
        | API-DOMAIN          | SPOT   |
        | API-CHANNEL         | PUBLIC |
        | API-PERMISSION      | NULL   |
        | API-RATE-LIMIT-POOL | PUBLIC |
        | API-RATE-LIMIT      | 4      |
        +---------------------+--------+
        """
        pass

    @abstractmethod
    def get_all_symbols(self, req: GetAllSymbolsReq,
                        **kwargs: Any) -> GetAllSymbolsResp:
        """
        summary: Get All Symbols
        description: Request via this endpoint to get a list of available currency pairs for trading. If you want to get the market information of the trading symbol, please use Get All Tickers.
        documentation: https://www.kucoin.com/docs-new/api-3470154
        +---------------------+--------+
        | Extra API Info      | Value  |
        +---------------------+--------+
        | API-DOMAIN          | SPOT   |
        | API-CHANNEL         | PUBLIC |
        | API-PERMISSION      | NULL   |
        | API-RATE-LIMIT-POOL | PUBLIC |
        | API-RATE-LIMIT      | 4      |
        +---------------------+--------+
        """
        pass

    @abstractmethod
    def get_ticker(self, req: GetTickerReq, **kwargs: Any) -> GetTickerResp:
        """
        summary: Get Ticker
        description: Request via this endpoint to get Level 1 Market Data. The returned value includes the best bid price and size, the best ask price and size as well as the last traded price and the last traded size.
        documentation: https://www.kucoin.com/docs-new/api-3470160
        +---------------------+--------+
        | Extra API Info      | Value  |
        +---------------------+--------+
        | API-DOMAIN          | SPOT   |
        | API-CHANNEL         | PUBLIC |
        | API-PERMISSION      | NULL   |
        | API-RATE-LIMIT-POOL | PUBLIC |
        | API-RATE-LIMIT      | 2      |
        +---------------------+--------+
        """
        pass

    @abstractmethod
    def get_all_tickers(self, **kwargs: Any) -> GetAllTickersResp:
        """
        summary: Get All Tickers
        description: Request market tickers for all the trading pairs in the market (including 24h volume), takes a snapshot every 2 seconds.  On the rare occasion that we will change the currency name, if you still want the changed symbol name, you can use the symbolName field instead of the symbol field via “Get all tickers” endpoint.
        documentation: https://www.kucoin.com/docs-new/api-3470167
        +---------------------+--------+
        | Extra API Info      | Value  |
        +---------------------+--------+
        | API-DOMAIN          | SPOT   |
        | API-CHANNEL         | PUBLIC |
        | API-PERMISSION      | NULL   |
        | API-RATE-LIMIT-POOL | PUBLIC |
        | API-RATE-LIMIT      | 15     |
        +---------------------+--------+
        """
        pass

    @abstractmethod
    def get_trade_history(self, req: GetTradeHistoryReq,
                          **kwargs: Any) -> GetTradeHistoryResp:
        """
        summary: Get Trade History
        description: Request via this endpoint to get the trade history of the specified symbol, the returned quantity is the last 100 transaction records.
        documentation: https://www.kucoin.com/docs-new/api-3470162
        +---------------------+--------+
        | Extra API Info      | Value  |
        +---------------------+--------+
        | API-DOMAIN          | SPOT   |
        | API-CHANNEL         | PUBLIC |
        | API-PERMISSION      | NULL   |
        | API-RATE-LIMIT-POOL | PUBLIC |
        | API-RATE-LIMIT      | 3      |
        +---------------------+--------+
        """
        pass

    @abstractmethod
    def get_klines(self, req: GetKlinesReq, **kwargs: Any) -> GetKlinesResp:
        """
        summary: Get Klines
        description: Get the Kline of the symbol. Data are returned in grouped buckets based on requested type. For each query, the system would return at most 1500 pieces of data. To obtain more data, please page the data by time.
        documentation: https://www.kucoin.com/docs-new/api-3470163
        +---------------------+--------+
        | Extra API Info      | Value  |
        +---------------------+--------+
        | API-DOMAIN          | SPOT   |
        | API-CHANNEL         | PUBLIC |
        | API-PERMISSION      | NULL   |
        | API-RATE-LIMIT-POOL | PUBLIC |
        | API-RATE-LIMIT      | 3      |
        +---------------------+--------+
        """
        pass

    @abstractmethod
    def get_part_order_book(self, req: GetPartOrderBookReq,
                            **kwargs: Any) -> GetPartOrderBookResp:
        """
        summary: Get Part OrderBook
        description: Query for part orderbook depth data. (aggregated by price)  You are recommended to request via this endpoint as the system reponse would be faster and cosume less traffic.
        documentation: https://www.kucoin.com/docs-new/api-3470165
        +---------------------+--------+
        | Extra API Info      | Value  |
        +---------------------+--------+
        | API-DOMAIN          | SPOT   |
        | API-CHANNEL         | PUBLIC |
        | API-PERMISSION      | NULL   |
        | API-RATE-LIMIT-POOL | PUBLIC |
        | API-RATE-LIMIT      | 2      |
        +---------------------+--------+
        """
        pass

    @abstractmethod
    def get_full_order_book(self, req: GetFullOrderBookReq,
                            **kwargs: Any) -> GetFullOrderBookResp:
        """
        summary: Get Full OrderBook
        description: Query for Full orderbook depth data. (aggregated by price)  It is generally used by professional traders because it uses more server resources and traffic, and we have strict access rate limit control.  To maintain up-to-date Order Book, please use Websocket incremental feed after retrieving the OrderBook.
        documentation: https://www.kucoin.com/docs-new/api-3470164
        +---------------------+---------+
        | Extra API Info      | Value   |
        +---------------------+---------+
        | API-DOMAIN          | SPOT    |
        | API-CHANNEL         | PRIVATE |
        | API-PERMISSION      | GENERAL |
        | API-RATE-LIMIT-POOL | SPOT    |
        | API-RATE-LIMIT      | 3       |
        +---------------------+---------+
        """
        pass

    @abstractmethod
    def get_fiat_price(self, req: GetFiatPriceReq,
                       **kwargs: Any) -> GetFiatPriceResp:
        """
        summary: Get Fiat Price
        description: Request via this endpoint to get the fiat price of the currencies for the available trading pairs.
        documentation: https://www.kucoin.com/docs-new/api-3470153
        +---------------------+--------+
        | Extra API Info      | Value  |
        +---------------------+--------+
        | API-DOMAIN          | SPOT   |
        | API-CHANNEL         | PUBLIC |
        | API-PERMISSION      | NULL   |
        | API-RATE-LIMIT-POOL | PUBLIC |
        | API-RATE-LIMIT      | 3      |
        +---------------------+--------+
        """
        pass

    @abstractmethod
    def get24hr_stats(self, req: Get24hrStatsReq,
                      **kwargs: Any) -> Get24hrStatsResp:
        """
        summary: Get 24hr Stats
        description: Request via this endpoint to get the statistics of the specified ticker in the last 24 hours.
        documentation: https://www.kucoin.com/docs-new/api-3470161
        +---------------------+--------+
        | Extra API Info      | Value  |
        +---------------------+--------+
        | API-DOMAIN          | SPOT   |
        | API-CHANNEL         | PUBLIC |
        | API-PERMISSION      | NULL   |
        | API-RATE-LIMIT-POOL | PUBLIC |
        | API-RATE-LIMIT      | 15     |
        +---------------------+--------+
        """
        pass

    @abstractmethod
    def get_market_list(self, **kwargs: Any) -> GetMarketListResp:
        """
        summary: Get Market List
        description: Request via this endpoint to get the transaction currency for the entire trading market.
        documentation: https://www.kucoin.com/docs-new/api-3470166
        +---------------------+--------+
        | Extra API Info      | Value  |
        +---------------------+--------+
        | API-DOMAIN          | SPOT   |
        | API-CHANNEL         | PUBLIC |
        | API-PERMISSION      | NULL   |
        | API-RATE-LIMIT-POOL | PUBLIC |
        | API-RATE-LIMIT      | 3      |
        +---------------------+--------+
        """
        pass

    @abstractmethod
    def get_server_time(self, **kwargs: Any) -> GetServerTimeResp:
        """
        summary: Get Server Time
        description: Get the server time.
        documentation: https://www.kucoin.com/docs-new/api-3470156
        +---------------------+--------+
        | Extra API Info      | Value  |
        +---------------------+--------+
        | API-DOMAIN          | SPOT   |
        | API-CHANNEL         | PUBLIC |
        | API-PERMISSION      | NULL   |
        | API-RATE-LIMIT-POOL | PUBLIC |
        | API-RATE-LIMIT      | 3      |
        +---------------------+--------+
        """
        pass

    @abstractmethod
    def get_service_status(self, **kwargs: Any) -> GetServiceStatusResp:
        """
        summary: Get Service Status
        description: Get the service status
        documentation: https://www.kucoin.com/docs-new/api-3470158
        +---------------------+--------+
        | Extra API Info      | Value  |
        +---------------------+--------+
        | API-DOMAIN          | SPOT   |
        | API-CHANNEL         | PUBLIC |
        | API-PERMISSION      | NULL   |
        | API-RATE-LIMIT-POOL | PUBLIC |
        | API-RATE-LIMIT      | 3      |
        +---------------------+--------+
        """
        pass

    @abstractmethod
    def get_public_token(self, **kwargs: Any) -> GetPublicTokenResp:
        """
        summary: Get Public Token - Spot/Margin
        description: This interface can obtain the token required for websocket to establish a Spot/Margin connection. If you need use public channels (e.g. all public market data), please make request as follows to obtain the server list and public token
        documentation: https://www.kucoin.com/docs-new/api-3470294
        +---------------------+--------+
        | Extra API Info      | Value  |
        +---------------------+--------+
        | API-DOMAIN          | SPOT   |
        | API-CHANNEL         | PUBLIC |
        | API-PERMISSION      | NULL   |
        | API-RATE-LIMIT-POOL | PUBLIC |
        | API-RATE-LIMIT      | 10     |
        +---------------------+--------+
        """
        pass

    @abstractmethod
    def get_private_token(self, **kwargs: Any) -> GetPrivateTokenResp:
        """
        summary: Get Private Token - Spot/Margin
        description: This interface can obtain the token required for websocket to establish a Spot/Margin private connection. If you need use private channels(e.g. account balance notice), please make request as follows to obtain the server list and private token
        documentation: https://www.kucoin.com/docs-new/api-3470295
        +---------------------+---------+
        | Extra API Info      | Value   |
        +---------------------+---------+
        | API-DOMAIN          | SPOT    |
        | API-CHANNEL         | PRIVATE |
        | API-PERMISSION      | GENERAL |
        | API-RATE-LIMIT-POOL | SPOT    |
        | API-RATE-LIMIT      | 10      |
        +---------------------+---------+
        """
        pass


class MarketAPIImpl(MarketAPI):

    def __init__(self, transport: Transport):
        self.transport = transport

    def get_announcements(self, req: GetAnnouncementsReq,
                          **kwargs: Any) -> GetAnnouncementsResp:
        return self.transport.call("spot", False, "GET",
                                   "/api/v3/announcements", req,
                                   GetAnnouncementsResp(), False, **kwargs)

    def get_currency(self, req: GetCurrencyReq,
                     **kwargs: Any) -> GetCurrencyResp:
        return self.transport.call("spot", False, "GET",
                                   "/api/v3/currencies/{currency}", req,
                                   GetCurrencyResp(), False, **kwargs)

    def get_all_currencies(self, **kwargs: Any) -> GetAllCurrenciesResp:
        return self.transport.call("spot", False, "GET",
                                   "/api/v3/currencies", None,
                                   GetAllCurrenciesResp(), False, **kwargs)

    def get_symbol(self, req: GetSymbolReq, **kwargs: Any) -> GetSymbolResp:
        return self.transport.call("spot", False, "GET",
                                   "/api/v2/symbols/{symbol}", req,
                                   GetSymbolResp(), False, **kwargs)

    def get_all_symbols(self, req: GetAllSymbolsReq,
                        **kwargs: Any) -> GetAllSymbolsResp:
        return self.transport.call("spot", False, "GET", "/api/v2/symbols",
                                   req, GetAllSymbolsResp(), False, **kwargs)

    def get_ticker(self, req: GetTickerReq, **kwargs: Any) -> GetTickerResp:
        return self.transport.call("spot", False, "GET",
                                   "/api/v1/market/orderbook/level1", req,
                                   GetTickerResp(), False, **kwargs)

    def get_all_tickers(self, **kwargs: Any) -> GetAllTickersResp:
        return self.transport.call("spot", False, "GET",
                                   "/api/v1/market/allTickers", None,
                                   GetAllTickersResp(), False, **kwargs)

    def get_trade_history(self, req: GetTradeHistoryReq,
                          **kwargs: Any) -> GetTradeHistoryResp:
        return self.transport.call("spot", False, "GET",
                                   "/api/v1/market/histories", req,
                                   GetTradeHistoryResp(), False, **kwargs)

    def get_klines(self, req: GetKlinesReq, **kwargs: Any) -> GetKlinesResp:
        return self.transport.call("spot", False, "GET",
                                   "/api/v1/market/candles", req,
                                   GetKlinesResp(), False, **kwargs)

    def get_part_order_book(self, req: GetPartOrderBookReq,
                            **kwargs: Any) -> GetPartOrderBookResp:
        return self.transport.call("spot", False, "GET",
                                   "/api/v1/market/orderbook/level2_{size}",
                                   req, GetPartOrderBookResp(), False,
                                   **kwargs)

    def get_full_order_book(self, req: GetFullOrderBookReq,
                            **kwargs: Any) -> GetFullOrderBookResp:
        return self.transport.call("spot", False, "GET",
                                   "/api/v3/market/orderbook/level2", req,
                                   GetFullOrderBookResp(), False, **kwargs)

    def get_fiat_price(self, req: GetFiatPriceReq,
                       **kwargs: Any) -> GetFiatPriceResp:
        return self.transport.call("spot", False, "GET", "/api/v1/prices", req,
                                   GetFiatPriceResp(), False, **kwargs)

    def get24hr_stats(self, req: Get24hrStatsReq,
                      **kwargs: Any) -> Get24hrStatsResp:
        return self.transport.call("spot", False, "GET",
                                   "/api/v1/market/stats", req,
                                   Get24hrStatsResp(), False, **kwargs)

    def get_market_list(self, **kwargs: Any) -> GetMarketListResp:
        return self.transport.call("spot", False, "GET", "/api/v1/markets",
                                   None, GetMarketListResp(), False, **kwargs)

    def get_server_time(self, **kwargs: Any) -> GetServerTimeResp:
        return self.transport.call("spot", False, "GET", "/api/v1/timestamp",
                                   None, GetServerTimeResp(), False, **kwargs)

    def get_service_status(self, **kwargs: Any) -> GetServiceStatusResp:
        return self.transport.call("spot", False, "GET",
                                   "/api/v1/status", None,
                                   GetServiceStatusResp(), False, **kwargs)

    def get_public_token(self, **kwargs: Any) -> GetPublicTokenResp:
        return self.transport.call("spot", False, "POST",
                                   "/api/v1/bullet-public", None,
                                   GetPublicTokenResp(), False, **kwargs)

    def get_private_token(self, **kwargs: Any) -> GetPrivateTokenResp:
        return self.transport.call("spot", False, "POST",
                                   "/api/v1/bullet-private", None,
                                   GetPrivateTokenResp(), False, **kwargs)

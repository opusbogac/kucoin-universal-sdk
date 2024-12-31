# Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

from abc import ABC, abstractmethod
from typing import Any
from kucoin_universal_sdk.internal.interfaces.transport import Transport
from .model_get_cross_margin_symbols_req import GetCrossMarginSymbolsReq
from .model_get_cross_margin_symbols_resp import GetCrossMarginSymbolsResp
from .model_get_etf_info_req import GetEtfInfoReq
from .model_get_etf_info_resp import GetEtfInfoResp
from .model_get_isolated_margin_symbols_resp import GetIsolatedMarginSymbolsResp
from .model_get_margin_config_resp import GetMarginConfigResp
from .model_get_mark_price_detail_req import GetMarkPriceDetailReq
from .model_get_mark_price_detail_resp import GetMarkPriceDetailResp
from .model_get_mark_price_list_resp import GetMarkPriceListResp


class MarketAPI(ABC):

    @abstractmethod
    def get_isolated_margin_symbols(
            self, **kwargs: Any) -> GetIsolatedMarginSymbolsResp:
        """
        summary: Get Symbols - Isolated Margin
        description: This endpoint allows querying the configuration of isolated margin symbol.
        documentation: https://www.kucoin.com/docs-new/api-3470194
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
    def get_margin_config(self, **kwargs: Any) -> GetMarginConfigResp:
        """
        summary: Get Margin Config
        description: Request via this endpoint to get the configure info of the cross margin.
        documentation: https://www.kucoin.com/docs-new/api-3470190
        +---------------------+--------+
        | Extra API Info      | Value  |
        +---------------------+--------+
        | API-DOMAIN          | SPOT   |
        | API-CHANNEL         | PUBLIC |
        | API-PERMISSION      | NULL   |
        | API-RATE-LIMIT-POOL | SPOT   |
        | API-RATE-LIMIT      | 25     |
        +---------------------+--------+
        """
        pass

    @abstractmethod
    def get_mark_price_detail(self, req: GetMarkPriceDetailReq,
                              **kwargs: Any) -> GetMarkPriceDetailResp:
        """
        summary: Get Mark Price Detail
        description: This endpoint returns the current Mark price for specified margin trading pairs.
        documentation: https://www.kucoin.com/docs-new/api-3470193
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
    def get_etf_info(self, req: GetEtfInfoReq,
                     **kwargs: Any) -> GetEtfInfoResp:
        """
        summary: Get ETF Info
        description: This interface returns leveraged token information
        documentation: https://www.kucoin.com/docs-new/api-3470191
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
    def get_cross_margin_symbols(self, req: GetCrossMarginSymbolsReq,
                                 **kwargs: Any) -> GetCrossMarginSymbolsResp:
        """
        summary: Get Symbols - Cross Margin
        description: This endpoint allows querying the configuration of cross margin symbol.
        documentation: https://www.kucoin.com/docs-new/api-3470189
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
    def get_mark_price_list(self, **kwargs: Any) -> GetMarkPriceListResp:
        """
        summary: Get Mark Price List
        description: This endpoint returns the current Mark price for all margin trading pairs.
        documentation: https://www.kucoin.com/docs-new/api-3470192
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


class MarketAPIImpl(MarketAPI):

    def __init__(self, transport: Transport):
        self.transport = transport

    def get_isolated_margin_symbols(
            self, **kwargs: Any) -> GetIsolatedMarginSymbolsResp:
        return self.transport.call("spot", False, "GET",
                                   "/api/v1/isolated/symbols", None,
                                   GetIsolatedMarginSymbolsResp(), False,
                                   **kwargs)

    def get_margin_config(self, **kwargs: Any) -> GetMarginConfigResp:
        return self.transport.call("spot", False, "GET",
                                   "/api/v1/margin/config", None,
                                   GetMarginConfigResp(), False, **kwargs)

    def get_mark_price_detail(self, req: GetMarkPriceDetailReq,
                              **kwargs: Any) -> GetMarkPriceDetailResp:
        return self.transport.call("spot", False, "GET",
                                   "/api/v1/mark-price/{symbol}/current", req,
                                   GetMarkPriceDetailResp(), False, **kwargs)

    def get_etf_info(self, req: GetEtfInfoReq,
                     **kwargs: Any) -> GetEtfInfoResp:
        return self.transport.call("spot", False, "GET", "/api/v3/etf/info",
                                   req, GetEtfInfoResp(), False, **kwargs)

    def get_cross_margin_symbols(self, req: GetCrossMarginSymbolsReq,
                                 **kwargs: Any) -> GetCrossMarginSymbolsResp:
        return self.transport.call("spot", False, "GET",
                                   "/api/v3/margin/symbols", req,
                                   GetCrossMarginSymbolsResp(), False,
                                   **kwargs)

    def get_mark_price_list(self, **kwargs: Any) -> GetMarkPriceListResp:
        return self.transport.call("spot", False, "GET",
                                   "/api/v3/mark-price/all-symbols", None,
                                   GetMarkPriceListResp(), False, **kwargs)

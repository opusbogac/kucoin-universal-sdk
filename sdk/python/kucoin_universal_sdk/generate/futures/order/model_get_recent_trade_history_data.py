# coding: utf-8

# Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

from __future__ import annotations
import pprint
import json

from enum import Enum
from pydantic import BaseModel, ConfigDict, Field
from typing import Any, ClassVar, Dict, List, Optional


class GetRecentTradeHistoryData(BaseModel):
    """
    GetRecentTradeHistoryData

    Attributes:
        symbol (str): Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220) 
        trade_id (str): Trade ID 
        order_id (str): Order ID 
        side (SideEnum): Transaction side 
        liquidity (LiquidityEnum): Liquidity- taker or maker 
        force_taker (bool): Whether to force processing as a taker 
        price (str): Filled price 
        size (int): Filled amount 
        value (str): Order value 
        open_fee_pay (str): Opening transaction fee 
        close_fee_pay (str): Closing transaction fee 
        stop (str): A mark to the stop order type 
        fee_rate (str): Fee Rate
        fix_fee (str): Fixed fees(Deprecated field, no actual use of the value field) 
        fee_currency (str): Charging currency 
        trade_time (int): trade time in nanosecond 
        sub_trade_type (str): Deprecated field, no actual use of the value field
        margin_mode (MarginModeEnum): Margin mode: ISOLATED (isolated), CROSS (cross margin). 
        display_type (DisplayTypeEnum): Order Type
        fee (str): Transaction fee 
        settle_currency (str): Settle Currency
        order_type (OrderTypeEnum): Order type 
        trade_type (TradeTypeEnum): Trade type (trade, liquid, cancel, adl or settlement) 
        created_at (int): Time the order created 
    """

    class SideEnum(Enum):
        """
        Attributes:
            BUY: buy
            SELL: sell
        """
        BUY = 'buy'
        SELL = 'sell'

    class LiquidityEnum(Enum):
        """
        Attributes:
            TAKER: taker
            MAKER: maker
        """
        TAKER = 'taker'
        MAKER = 'maker'

    class MarginModeEnum(Enum):
        """
        Attributes:
            ISOLATED: Isolated Margin
            CROSS: Cross Margin
        """
        ISOLATED = 'ISOLATED'
        CROSS = 'CROSS'

    class DisplayTypeEnum(Enum):
        """
        Attributes:
            LIMIT: Limit order
            MARKET: Market order
            LIMIT_STOP: Stop limit order
            MARKET_STOP: Stop Market order
        """
        LIMIT = 'limit'
        MARKET = 'market'
        LIMIT_STOP = 'limit_stop'
        MARKET_STOP = 'market_stop'

    class OrderTypeEnum(Enum):
        """
        Attributes:
            MARKET: market
            LIMIT: limit
        """
        MARKET = 'market'
        LIMIT = 'limit'

    class TradeTypeEnum(Enum):
        """
        Attributes:
            TRADE: trade
            CANCEL: Partially filled and cancelled orders
            LIQUID: liquid
            ADL: adl
            SETTLEMENT: settlement
        """
        TRADE = 'trade'
        CANCEL = 'cancel'
        LIQUID = 'liquid'
        ADL = 'adl'
        SETTLEMENT = 'settlement'

    symbol: Optional[str] = Field(
        default=None,
        description=
        "Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220) "
    )
    trade_id: Optional[str] = Field(default=None,
                                    description="Trade ID ",
                                    alias="tradeId")
    order_id: Optional[str] = Field(default=None,
                                    description="Order ID ",
                                    alias="orderId")
    side: Optional[SideEnum] = Field(default=None,
                                     description="Transaction side ")
    liquidity: Optional[LiquidityEnum] = Field(
        default=None, description="Liquidity- taker or maker ")
    force_taker: Optional[bool] = Field(
        default=None,
        description="Whether to force processing as a taker ",
        alias="forceTaker")
    price: Optional[str] = Field(default=None, description="Filled price ")
    size: Optional[int] = Field(default=None, description="Filled amount ")
    value: Optional[str] = Field(default=None, description="Order value ")
    open_fee_pay: Optional[str] = Field(default=None,
                                        description="Opening transaction fee ",
                                        alias="openFeePay")
    close_fee_pay: Optional[str] = Field(
        default=None,
        description="Closing transaction fee ",
        alias="closeFeePay")
    stop: Optional[str] = Field(default=None,
                                description="A mark to the stop order type ")
    fee_rate: Optional[str] = Field(default=None,
                                    description="Fee Rate",
                                    alias="feeRate")
    fix_fee: Optional[str] = Field(
        default=None,
        description=
        "Fixed fees(Deprecated field, no actual use of the value field) ",
        alias="fixFee")
    fee_currency: Optional[str] = Field(default=None,
                                        description="Charging currency ",
                                        alias="feeCurrency")
    trade_time: Optional[int] = Field(default=None,
                                      description="trade time in nanosecond ",
                                      alias="tradeTime")
    sub_trade_type: Optional[str] = Field(
        default=None,
        description="Deprecated field, no actual use of the value field",
        alias="subTradeType")
    margin_mode: Optional[MarginModeEnum] = Field(
        default=None,
        description="Margin mode: ISOLATED (isolated), CROSS (cross margin). ",
        alias="marginMode")
    display_type: Optional[DisplayTypeEnum] = Field(default=None,
                                                    description="Order Type",
                                                    alias="displayType")
    fee: Optional[str] = Field(default=None, description="Transaction fee ")
    settle_currency: Optional[str] = Field(default=None,
                                           description="Settle Currency",
                                           alias="settleCurrency")
    order_type: Optional[OrderTypeEnum] = Field(default=None,
                                                description="Order type ",
                                                alias="orderType")
    trade_type: Optional[TradeTypeEnum] = Field(
        default=None,
        description="Trade type (trade, liquid, cancel, adl or settlement) ",
        alias="tradeType")
    created_at: Optional[int] = Field(default=None,
                                      description="Time the order created ",
                                      alias="createdAt")

    __properties: ClassVar[List[str]] = [
        "symbol", "tradeId", "orderId", "side", "liquidity", "forceTaker",
        "price", "size", "value", "openFeePay", "closeFeePay", "stop",
        "feeRate", "fixFee", "feeCurrency", "tradeTime", "subTradeType",
        "marginMode", "displayType", "fee", "settleCurrency", "orderType",
        "tradeType", "createdAt"
    ]

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=False,
        protected_namespaces=(),
    )

    def to_str(self) -> str:
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        return self.model_dump_json(by_alias=True, exclude_none=True)

    @classmethod
    def from_json(cls, json_str: str) -> Optional[GetRecentTradeHistoryData]:
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        _dict = self.model_dump(
            by_alias=True,
            exclude_none=True,
        )
        return _dict

    @classmethod
    def from_dict(
            cls,
            obj: Optional[Dict[str,
                               Any]]) -> Optional[GetRecentTradeHistoryData]:
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "symbol": obj.get("symbol"),
            "tradeId": obj.get("tradeId"),
            "orderId": obj.get("orderId"),
            "side": obj.get("side"),
            "liquidity": obj.get("liquidity"),
            "forceTaker": obj.get("forceTaker"),
            "price": obj.get("price"),
            "size": obj.get("size"),
            "value": obj.get("value"),
            "openFeePay": obj.get("openFeePay"),
            "closeFeePay": obj.get("closeFeePay"),
            "stop": obj.get("stop"),
            "feeRate": obj.get("feeRate"),
            "fixFee": obj.get("fixFee"),
            "feeCurrency": obj.get("feeCurrency"),
            "tradeTime": obj.get("tradeTime"),
            "subTradeType": obj.get("subTradeType"),
            "marginMode": obj.get("marginMode"),
            "displayType": obj.get("displayType"),
            "fee": obj.get("fee"),
            "settleCurrency": obj.get("settleCurrency"),
            "orderType": obj.get("orderType"),
            "tradeType": obj.get("tradeType"),
            "createdAt": obj.get("createdAt")
        })
        return _obj

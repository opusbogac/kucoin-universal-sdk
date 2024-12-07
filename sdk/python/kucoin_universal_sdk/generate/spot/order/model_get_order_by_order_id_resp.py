# coding: utf-8

# Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

from __future__ import annotations
import pprint
import json

from enum import Enum
from pydantic import BaseModel, ConfigDict, Field
from typing import Any, ClassVar, Dict, List, Optional
from kucoin_universal_sdk.internal.interfaces.response import Response
from kucoin_universal_sdk.model.common import RestResponse


class GetOrderByOrderIdResp(BaseModel, Response):
    """
    GetOrderByOrderIdResp

    Attributes:
        id (str): The unique order id generated by the trading system
        symbol (str): symbol
        op_type (str): 
        type (TypeEnum): Specify if the order is an 'limit' order or 'market' order. 
        side (SideEnum): Buy or sell
        price (str): Order price
        size (str): Order size
        funds (str): Order Funds
        deal_size (str): Number of filled transactions
        deal_funds (str): Funds of filled transactions
        fee (str): [Handling fees](doc://link/pages/5327739)
        fee_currency (str): currency used to calculate trading fee
        stp (StpEnum): [Self Trade Prevention](doc://link/pages/5176570)
        time_in_force (TimeInForceEnum): Time in force
        post_only (bool): Whether its a postOnly order.
        hidden (bool): Whether its a hidden order.
        iceberg (bool): Whether its a iceberg order.
        visible_size (str): Visible size of iceberg order in order book.
        cancel_after (int): A GTT timeInForce that expires in n seconds
        channel (str): 
        client_oid (str): Client Order Id，unique identifier created by the user
        remark (str): Order placement remarks
        tags (str): Order tag
        cancel_exist (bool): Whether there is a cancellation record for the order.
        created_at (int): 
        last_updated_at (int): 
        trade_type (str): Trade type, redundancy param
        in_order_book (bool): Whether to enter the orderbook: true: enter the orderbook; false: not enter the orderbook
        cancelled_size (str): Number of canceled transactions
        cancelled_funds (str): Funds of canceled transactions
        remain_size (str): Number of remain transactions
        remain_funds (str): Funds of remain transactions
        tax (str): Users in some regions need query this field
        active (bool): Order status: true-The status of the order isactive; false-The status of the order is done
    """

    class TypeEnum(Enum):
        """
        Attributes:
            LIMIT: 
            MARKET: 
        """
        LIMIT = 'limit'
        MARKET = 'market'

    class SideEnum(Enum):
        """
        Attributes:
            BUY: 
            SELL: 
        """
        BUY = 'buy'
        SELL = 'sell'

    class StpEnum(Enum):
        """
        Attributes:
            DC: 
            CO: 
            CN: 
            CB: 
        """
        DC = 'DC'
        CO = 'CO'
        CN = 'CN'
        CB = 'CB'

    class TimeInForceEnum(Enum):
        """
        Attributes:
            GTC: 
            GTT: 
            IOC: 
            FOK: 
        """
        GTC = 'GTC'
        GTT = 'GTT'
        IOC = 'IOC'
        FOK = 'FOK'

    common_response: Optional[RestResponse] = Field(
        default=None, description="Common response")
    id: Optional[str] = Field(
        default=None,
        description="The unique order id generated by the trading system")
    symbol: Optional[str] = Field(default=None, description="symbol")
    op_type: Optional[str] = Field(default=None, alias="opType")
    type: Optional[TypeEnum] = Field(
        default=None,
        description=
        "Specify if the order is an 'limit' order or 'market' order. ")
    side: Optional[SideEnum] = Field(default=None, description="Buy or sell")
    price: Optional[str] = Field(default=None, description="Order price")
    size: Optional[str] = Field(default=None, description="Order size")
    funds: Optional[str] = Field(default=None, description="Order Funds")
    deal_size: Optional[str] = Field(
        default=None,
        description="Number of filled transactions",
        alias="dealSize")
    deal_funds: Optional[str] = Field(
        default=None,
        description="Funds of filled transactions",
        alias="dealFunds")
    fee: Optional[str] = Field(
        default=None, description="[Handling fees](doc://link/pages/5327739)")
    fee_currency: Optional[str] = Field(
        default=None,
        description="currency used to calculate trading fee",
        alias="feeCurrency")
    stp: Optional[StpEnum] = Field(
        default=None,
        description="[Self Trade Prevention](doc://link/pages/5176570)")
    time_in_force: Optional[TimeInForceEnum] = Field(
        default=None, description="Time in force", alias="timeInForce")
    post_only: Optional[bool] = Field(
        default=None,
        description="Whether its a postOnly order.",
        alias="postOnly")
    hidden: Optional[bool] = Field(default=None,
                                   description="Whether its a hidden order.")
    iceberg: Optional[bool] = Field(default=None,
                                    description="Whether its a iceberg order.")
    visible_size: Optional[str] = Field(
        default=None,
        description="Visible size of iceberg order in order book.",
        alias="visibleSize")
    cancel_after: Optional[int] = Field(
        default=None,
        description="A GTT timeInForce that expires in n seconds",
        alias="cancelAfter")
    channel: Optional[str] = None
    client_oid: Optional[str] = Field(
        default=None,
        description="Client Order Id，unique identifier created by the user",
        alias="clientOid")
    remark: Optional[str] = Field(default=None,
                                  description="Order placement remarks")
    tags: Optional[str] = Field(default=None, description="Order tag")
    cancel_exist: Optional[bool] = Field(
        default=None,
        description="Whether there is a cancellation record for the order.",
        alias="cancelExist")
    created_at: Optional[int] = Field(default=None, alias="createdAt")
    last_updated_at: Optional[int] = Field(default=None, alias="lastUpdatedAt")
    trade_type: Optional[str] = Field(
        default=None,
        description="Trade type, redundancy param",
        alias="tradeType")
    in_order_book: Optional[bool] = Field(
        default=None,
        description=
        "Whether to enter the orderbook: true: enter the orderbook; false: not enter the orderbook",
        alias="inOrderBook")
    cancelled_size: Optional[str] = Field(
        default=None,
        description="Number of canceled transactions",
        alias="cancelledSize")
    cancelled_funds: Optional[str] = Field(
        default=None,
        description="Funds of canceled transactions",
        alias="cancelledFunds")
    remain_size: Optional[str] = Field(
        default=None,
        description="Number of remain transactions",
        alias="remainSize")
    remain_funds: Optional[str] = Field(
        default=None,
        description="Funds of remain transactions",
        alias="remainFunds")
    tax: Optional[str] = Field(
        default=None,
        description="Users in some regions need query this field")
    active: Optional[bool] = Field(
        default=None,
        description=
        "Order status: true-The status of the order isactive; false-The status of the order is done"
    )

    __properties: ClassVar[List[str]] = [
        "id", "symbol", "opType", "type", "side", "price", "size", "funds",
        "dealSize", "dealFunds", "fee", "feeCurrency", "stp", "timeInForce",
        "postOnly", "hidden", "iceberg", "visibleSize", "cancelAfter",
        "channel", "clientOid", "remark", "tags", "cancelExist", "createdAt",
        "lastUpdatedAt", "tradeType", "inOrderBook", "cancelledSize",
        "cancelledFunds", "remainSize", "remainFunds", "tax", "active"
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
    def from_json(cls, json_str: str) -> Optional[GetOrderByOrderIdResp]:
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        _dict = self.model_dump(
            by_alias=True,
            exclude_none=True,
        )
        return _dict

    @classmethod
    def from_dict(
            cls, obj: Optional[Dict[str,
                                    Any]]) -> Optional[GetOrderByOrderIdResp]:
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "id": obj.get("id"),
            "symbol": obj.get("symbol"),
            "opType": obj.get("opType"),
            "type": obj.get("type"),
            "side": obj.get("side"),
            "price": obj.get("price"),
            "size": obj.get("size"),
            "funds": obj.get("funds"),
            "dealSize": obj.get("dealSize"),
            "dealFunds": obj.get("dealFunds"),
            "fee": obj.get("fee"),
            "feeCurrency": obj.get("feeCurrency"),
            "stp": obj.get("stp"),
            "timeInForce": obj.get("timeInForce"),
            "postOnly": obj.get("postOnly"),
            "hidden": obj.get("hidden"),
            "iceberg": obj.get("iceberg"),
            "visibleSize": obj.get("visibleSize"),
            "cancelAfter": obj.get("cancelAfter"),
            "channel": obj.get("channel"),
            "clientOid": obj.get("clientOid"),
            "remark": obj.get("remark"),
            "tags": obj.get("tags"),
            "cancelExist": obj.get("cancelExist"),
            "createdAt": obj.get("createdAt"),
            "lastUpdatedAt": obj.get("lastUpdatedAt"),
            "tradeType": obj.get("tradeType"),
            "inOrderBook": obj.get("inOrderBook"),
            "cancelledSize": obj.get("cancelledSize"),
            "cancelledFunds": obj.get("cancelledFunds"),
            "remainSize": obj.get("remainSize"),
            "remainFunds": obj.get("remainFunds"),
            "tax": obj.get("tax"),
            "active": obj.get("active")
        })
        return _obj

    def set_common_response(self, response: RestResponse):
        self.common_response = response

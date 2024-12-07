# coding: utf-8

# Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

from __future__ import annotations
import pprint
import json

from pydantic import BaseModel, ConfigDict, Field
from typing import Any, ClassVar, Dict, List, Optional


class GetStopOrdersListItems(BaseModel):
    """
    GetStopOrdersListItems

    Attributes:
        id (str): Order ID, the ID of an order.
        symbol (str): Symbol name
        user_id (str): User ID
        status (str): Order status, include NEW, TRIGGERED
        type (str): Order type,limit, market, limit_stop or market_stop
        side (str): transaction direction,include buy and sell
        price (str): order price
        size (str): order quantity
        funds (str): order funds
        stp (str): 
        time_in_force (str): time InForce,include GTC,GTT,IOC,FOK
        cancel_after (int): cancel orders after n seconds，requires timeInForce to be GTT
        post_only (bool): postOnly
        hidden (bool): hidden order
        iceberg (bool): Iceberg order
        visible_size (str): displayed quantity for iceberg order
        channel (str): order source
        client_oid (str): user-entered order unique mark
        remark (str): Remarks at stop order creation
        tags (str): tag order source
        order_time (int): Time of place a stop order, accurate to nanoseconds
        domain_id (str): domainId, e.g: kucoin
        trade_source (str): trade source: USER（Order by user）, MARGIN_SYSTEM（Order by margin system）
        trade_type (str): The type of trading : TRADE（Spot）, MARGIN_TRADE (Cross Margin), MARGIN_ISOLATED_TRADE (Isolated Margin).
        fee_currency (str): The currency of the fee
        taker_fee_rate (str): Fee Rate of taker
        maker_fee_rate (str): Fee Rate of maker
        created_at (int): order creation time
        stop (str): Stop order type, include loss and entry
        stop_trigger_time (int): The trigger time of the stop order
        stop_price (str): stop price
    """

    id: Optional[str] = Field(default=None,
                              description="Order ID, the ID of an order.")
    symbol: Optional[str] = Field(default=None, description="Symbol name")
    user_id: Optional[str] = Field(default=None,
                                   description="User ID",
                                   alias="userId")
    status: Optional[str] = Field(
        default=None, description="Order status, include NEW, TRIGGERED")
    type: Optional[str] = Field(
        default=None,
        description="Order type,limit, market, limit_stop or market_stop")
    side: Optional[str] = Field(
        default=None, description="transaction direction,include buy and sell")
    price: Optional[str] = Field(default=None, description="order price")
    size: Optional[str] = Field(default=None, description="order quantity")
    funds: Optional[str] = Field(default=None, description="order funds")
    stp: Optional[str] = None
    time_in_force: Optional[str] = Field(
        default=None,
        description="time InForce,include GTC,GTT,IOC,FOK",
        alias="timeInForce")
    cancel_after: Optional[int] = Field(
        default=None,
        description=
        "cancel orders after n seconds，requires timeInForce to be GTT",
        alias="cancelAfter")
    post_only: Optional[bool] = Field(default=None,
                                      description="postOnly",
                                      alias="postOnly")
    hidden: Optional[bool] = Field(default=None, description="hidden order")
    iceberg: Optional[bool] = Field(default=None, description="Iceberg order")
    visible_size: Optional[str] = Field(
        default=None,
        description="displayed quantity for iceberg order",
        alias="visibleSize")
    channel: Optional[str] = Field(default=None, description="order source")
    client_oid: Optional[str] = Field(
        default=None,
        description="user-entered order unique mark",
        alias="clientOid")
    remark: Optional[str] = Field(default=None,
                                  description="Remarks at stop order creation")
    tags: Optional[str] = Field(default=None, description="tag order source")
    order_time: Optional[int] = Field(
        default=None,
        description="Time of place a stop order, accurate to nanoseconds",
        alias="orderTime")
    domain_id: Optional[str] = Field(default=None,
                                     description="domainId, e.g: kucoin",
                                     alias="domainId")
    trade_source: Optional[str] = Field(
        default=None,
        description=
        "trade source: USER（Order by user）, MARGIN_SYSTEM（Order by margin system）",
        alias="tradeSource")
    trade_type: Optional[str] = Field(
        default=None,
        description=
        "The type of trading : TRADE（Spot）, MARGIN_TRADE (Cross Margin), MARGIN_ISOLATED_TRADE (Isolated Margin).",
        alias="tradeType")
    fee_currency: Optional[str] = Field(default=None,
                                        description="The currency of the fee",
                                        alias="feeCurrency")
    taker_fee_rate: Optional[str] = Field(default=None,
                                          description="Fee Rate of taker",
                                          alias="takerFeeRate")
    maker_fee_rate: Optional[str] = Field(default=None,
                                          description="Fee Rate of maker",
                                          alias="makerFeeRate")
    created_at: Optional[int] = Field(default=None,
                                      description="order creation time",
                                      alias="createdAt")
    stop: Optional[str] = Field(
        default=None, description="Stop order type, include loss and entry")
    stop_trigger_time: Optional[int] = Field(
        default=None,
        description="The trigger time of the stop order",
        alias="stopTriggerTime")
    stop_price: Optional[str] = Field(default=None,
                                      description="stop price",
                                      alias="stopPrice")

    __properties: ClassVar[List[str]] = [
        "id", "symbol", "userId", "status", "type", "side", "price", "size",
        "funds", "stp", "timeInForce", "cancelAfter", "postOnly", "hidden",
        "iceberg", "visibleSize", "channel", "clientOid", "remark", "tags",
        "orderTime", "domainId", "tradeSource", "tradeType", "feeCurrency",
        "takerFeeRate", "makerFeeRate", "createdAt", "stop", "stopTriggerTime",
        "stopPrice"
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
    def from_json(cls, json_str: str) -> Optional[GetStopOrdersListItems]:
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
                                    Any]]) -> Optional[GetStopOrdersListItems]:
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "id": obj.get("id"),
            "symbol": obj.get("symbol"),
            "userId": obj.get("userId"),
            "status": obj.get("status"),
            "type": obj.get("type"),
            "side": obj.get("side"),
            "price": obj.get("price"),
            "size": obj.get("size"),
            "funds": obj.get("funds"),
            "stp": obj.get("stp"),
            "timeInForce": obj.get("timeInForce"),
            "cancelAfter": obj.get("cancelAfter"),
            "postOnly": obj.get("postOnly"),
            "hidden": obj.get("hidden"),
            "iceberg": obj.get("iceberg"),
            "visibleSize": obj.get("visibleSize"),
            "channel": obj.get("channel"),
            "clientOid": obj.get("clientOid"),
            "remark": obj.get("remark"),
            "tags": obj.get("tags"),
            "orderTime": obj.get("orderTime"),
            "domainId": obj.get("domainId"),
            "tradeSource": obj.get("tradeSource"),
            "tradeType": obj.get("tradeType"),
            "feeCurrency": obj.get("feeCurrency"),
            "takerFeeRate": obj.get("takerFeeRate"),
            "makerFeeRate": obj.get("makerFeeRate"),
            "createdAt": obj.get("createdAt"),
            "stop": obj.get("stop"),
            "stopTriggerTime": obj.get("stopTriggerTime"),
            "stopPrice": obj.get("stopPrice")
        })
        return _obj

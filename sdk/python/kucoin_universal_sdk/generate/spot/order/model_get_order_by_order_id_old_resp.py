# coding: utf-8

# Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

from __future__ import annotations
import pprint
import json

from pydantic import BaseModel, ConfigDict, Field
from typing import Any, ClassVar, Dict, List, Optional
from kucoin_universal_sdk.internal.interfaces.response import Response
from kucoin_universal_sdk.model.common import RestResponse


class GetOrderByOrderIdOldResp(BaseModel, Response):
    """
    GetOrderByOrderIdOldResp

    Attributes:
        id (str): 
        symbol (str): 
        op_type (str): 
        type (str): 
        side (str): 
        price (str): 
        size (str): 
        funds (str): 
        deal_funds (str): 
        deal_size (str): 
        fee (str): 
        fee_currency (str): 
        stp (str): 
        stop (str): 
        stop_triggered (bool): 
        stop_price (str): 
        time_in_force (str): 
        post_only (bool): 
        hidden (bool): 
        iceberg (bool): 
        visible_size (str): 
        cancel_after (int): 
        channel (str): 
        client_oid (str): 
        remark (str): 
        tags (str): 
        is_active (bool): 
        cancel_exist (bool): 
        created_at (int): 
        trade_type (str): 
    """

    common_response: Optional[RestResponse] = Field(
        default=None, description="Common response")
    id: Optional[str] = None
    symbol: Optional[str] = None
    op_type: Optional[str] = Field(default=None, alias="opType")
    type: Optional[str] = None
    side: Optional[str] = None
    price: Optional[str] = None
    size: Optional[str] = None
    funds: Optional[str] = None
    deal_funds: Optional[str] = Field(default=None, alias="dealFunds")
    deal_size: Optional[str] = Field(default=None, alias="dealSize")
    fee: Optional[str] = None
    fee_currency: Optional[str] = Field(default=None, alias="feeCurrency")
    stp: Optional[str] = None
    stop: Optional[str] = None
    stop_triggered: Optional[bool] = Field(default=None, alias="stopTriggered")
    stop_price: Optional[str] = Field(default=None, alias="stopPrice")
    time_in_force: Optional[str] = Field(default=None, alias="timeInForce")
    post_only: Optional[bool] = Field(default=None, alias="postOnly")
    hidden: Optional[bool] = None
    iceberg: Optional[bool] = None
    visible_size: Optional[str] = Field(default=None, alias="visibleSize")
    cancel_after: Optional[int] = Field(default=None, alias="cancelAfter")
    channel: Optional[str] = None
    client_oid: Optional[str] = Field(default=None, alias="clientOid")
    remark: Optional[str] = None
    tags: Optional[str] = None
    is_active: Optional[bool] = Field(default=None, alias="isActive")
    cancel_exist: Optional[bool] = Field(default=None, alias="cancelExist")
    created_at: Optional[int] = Field(default=None, alias="createdAt")
    trade_type: Optional[str] = Field(default=None, alias="tradeType")

    __properties: ClassVar[List[str]] = [
        "id", "symbol", "opType", "type", "side", "price", "size", "funds",
        "dealFunds", "dealSize", "fee", "feeCurrency", "stp", "stop",
        "stopTriggered", "stopPrice", "timeInForce", "postOnly", "hidden",
        "iceberg", "visibleSize", "cancelAfter", "channel", "clientOid",
        "remark", "tags", "isActive", "cancelExist", "createdAt", "tradeType"
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
    def from_json(cls, json_str: str) -> Optional[GetOrderByOrderIdOldResp]:
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
                               Any]]) -> Optional[GetOrderByOrderIdOldResp]:
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
            "dealFunds": obj.get("dealFunds"),
            "dealSize": obj.get("dealSize"),
            "fee": obj.get("fee"),
            "feeCurrency": obj.get("feeCurrency"),
            "stp": obj.get("stp"),
            "stop": obj.get("stop"),
            "stopTriggered": obj.get("stopTriggered"),
            "stopPrice": obj.get("stopPrice"),
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
            "isActive": obj.get("isActive"),
            "cancelExist": obj.get("cancelExist"),
            "createdAt": obj.get("createdAt"),
            "tradeType": obj.get("tradeType")
        })
        return _obj

    def set_common_response(self, response: RestResponse):
        self.common_response = response

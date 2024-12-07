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


class GetOcoOrderByOrderIdResp(BaseModel, Response):
    """
    GetOcoOrderByOrderIdResp

    Attributes:
        symbol (str): symbol
        client_oid (str): Client Order Id
        order_id (str): The unique order id generated by the trading system,which can be used later for further actions such as canceling the order.
        order_time (int): Order placement time, milliseconds
        status (StatusEnum): Order status: NEW: New, DONE: Completed, TRIGGERED: Triggered, CANCELLED: Cancelled
    """

    class StatusEnum(Enum):
        """
        Attributes:
            NEW: New
            DONE: Completed
            TRIGGERED: Triggered
            CANCELLED: Cancelled
        """
        NEW = 'NEW'
        DONE = 'DONE'
        TRIGGERED = 'TRIGGERED'
        CANCELLED = 'CANCELLED'

    common_response: Optional[RestResponse] = Field(
        default=None, description="Common response")
    symbol: Optional[str] = Field(default=None, description="symbol")
    client_oid: Optional[str] = Field(default=None,
                                      description="Client Order Id",
                                      alias="clientOid")
    order_id: Optional[str] = Field(
        default=None,
        description=
        "The unique order id generated by the trading system,which can be used later for further actions such as canceling the order.",
        alias="orderId")
    order_time: Optional[int] = Field(
        default=None,
        description="Order placement time, milliseconds",
        alias="orderTime")
    status: Optional[StatusEnum] = Field(
        default=None,
        description=
        "Order status: NEW: New, DONE: Completed, TRIGGERED: Triggered, CANCELLED: Cancelled"
    )

    __properties: ClassVar[List[str]] = [
        "symbol", "clientOid", "orderId", "orderTime", "status"
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
    def from_json(cls, json_str: str) -> Optional[GetOcoOrderByOrderIdResp]:
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
                               Any]]) -> Optional[GetOcoOrderByOrderIdResp]:
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "symbol": obj.get("symbol"),
            "clientOid": obj.get("clientOid"),
            "orderId": obj.get("orderId"),
            "orderTime": obj.get("orderTime"),
            "status": obj.get("status")
        })
        return _obj

    def set_common_response(self, response: RestResponse):
        self.common_response = response

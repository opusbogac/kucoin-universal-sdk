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


class CancelOrderByOrderIdSyncResp(BaseModel, Response):
    """
    CancelOrderByOrderIdSyncResp

    Attributes:
        order_id (str): order id
        origin_size (str): original order size
        deal_size (str): deal size
        remain_size (str): remain size
        canceled_size (str): Cumulative canceled size
        status (StatusEnum): Order Status. open：order is active; done：order has been completed
    """

    class StatusEnum(Enum):
        """
        Attributes:
            OPEN: 
            DONE: 
        """
        OPEN = 'open'
        DONE = 'done'

    common_response: Optional[RestResponse] = Field(
        default=None, description="Common response")
    order_id: Optional[str] = Field(default=None,
                                    description="order id",
                                    alias="orderId")
    origin_size: Optional[str] = Field(default=None,
                                       description="original order size",
                                       alias="originSize")
    deal_size: Optional[str] = Field(default=None,
                                     description="deal size",
                                     alias="dealSize")
    remain_size: Optional[str] = Field(default=None,
                                       description="remain size",
                                       alias="remainSize")
    canceled_size: Optional[str] = Field(
        default=None,
        description="Cumulative canceled size",
        alias="canceledSize")
    status: Optional[StatusEnum] = Field(
        default=None,
        description=
        "Order Status. open：order is active; done：order has been completed")

    __properties: ClassVar[List[str]] = [
        "orderId", "originSize", "dealSize", "remainSize", "canceledSize",
        "status"
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
    def from_json(cls,
                  json_str: str) -> Optional[CancelOrderByOrderIdSyncResp]:
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
                           Any]]) -> Optional[CancelOrderByOrderIdSyncResp]:
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "orderId": obj.get("orderId"),
            "originSize": obj.get("originSize"),
            "dealSize": obj.get("dealSize"),
            "remainSize": obj.get("remainSize"),
            "canceledSize": obj.get("canceledSize"),
            "status": obj.get("status")
        })
        return _obj

    def set_common_response(self, response: RestResponse):
        self.common_response = response

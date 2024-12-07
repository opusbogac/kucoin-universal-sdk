# coding: utf-8

# Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

from __future__ import annotations
import pprint
import json

from pydantic import BaseModel, ConfigDict, Field
from typing import Any, ClassVar, Dict, List, Optional


class CancelOcoOrderByOrderIdReq(BaseModel):
    """
    CancelOcoOrderByOrderIdReq

    Attributes:
        order_id (str): The unique order id generated by the trading system
    """

    order_id: Optional[str] = Field(
        default=None,
        path_variable="True",
        description="The unique order id generated by the trading system",
        alias="orderId")

    __properties: ClassVar[List[str]] = ["orderId"]

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
    def from_json(cls, json_str: str) -> Optional[CancelOcoOrderByOrderIdReq]:
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
                               Any]]) -> Optional[CancelOcoOrderByOrderIdReq]:
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({"orderId": obj.get("orderId")})
        return _obj


class CancelOcoOrderByOrderIdReqBuilder:

    def __init__(self):
        self.obj = {}

    def set_order_id(self, value: str) -> CancelOcoOrderByOrderIdReqBuilder:
        """
        The unique order id generated by the trading system
        """
        self.obj['orderId'] = value
        return self

    def build(self) -> CancelOcoOrderByOrderIdReq:
        return CancelOcoOrderByOrderIdReq(**self.obj)

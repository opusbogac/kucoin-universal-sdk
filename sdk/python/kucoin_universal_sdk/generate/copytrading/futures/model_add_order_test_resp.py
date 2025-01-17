# coding: utf-8

# Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

from __future__ import annotations
import pprint
import json

from pydantic import BaseModel, ConfigDict, Field
from typing import Any, ClassVar, Dict, List, Optional
from kucoin_universal_sdk.internal.interfaces.response import Response
from kucoin_universal_sdk.model.common import RestResponse


class AddOrderTestResp(BaseModel, Response):
    """
    AddOrderTestResp

    Attributes:
        order_id (str): The unique order id generated by the trading system,which can be used later for further actions such as canceling the order.
        client_oid (str): The user self-defined order id.
    """

    common_response: Optional[RestResponse] = Field(
        default=None, description="Common response")
    order_id: Optional[str] = Field(
        default=None,
        description=
        "The unique order id generated by the trading system,which can be used later for further actions such as canceling the order.",
        alias="orderId")
    client_oid: Optional[str] = Field(
        default=None,
        description="The user self-defined order id.",
        alias="clientOid")

    __properties: ClassVar[List[str]] = ["orderId", "clientOid"]

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
    def from_json(cls, json_str: str) -> Optional[AddOrderTestResp]:
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        _dict = self.model_dump(
            by_alias=True,
            exclude_none=True,
        )
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str,
                                          Any]]) -> Optional[AddOrderTestResp]:
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "orderId": obj.get("orderId"),
            "clientOid": obj.get("clientOid")
        })
        return _obj

    def set_common_response(self, response: RestResponse):
        self.common_response = response

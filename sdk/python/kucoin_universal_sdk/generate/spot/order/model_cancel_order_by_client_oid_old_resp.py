# coding: utf-8

# Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

from __future__ import annotations
import pprint
import json

from pydantic import BaseModel, ConfigDict, Field
from typing import Any, ClassVar, Dict, List, Optional
from kucoin_universal_sdk.internal.interfaces.response import Response
from kucoin_universal_sdk.model.common import RestResponse


class CancelOrderByClientOidOldResp(BaseModel, Response):
    """
    CancelOrderByClientOidOldResp

    Attributes:
        client_oid (str): Client Order Id，unique identifier created by the user
        cancelled_order_id (str): 
        cancelled_oco_order_ids (str): 
    """

    common_response: Optional[RestResponse] = Field(
        default=None, description="Common response")
    client_oid: Optional[str] = Field(
        default=None,
        description="Client Order Id，unique identifier created by the user",
        alias="clientOid")
    cancelled_order_id: Optional[str] = Field(default=None,
                                              alias="cancelledOrderId")
    cancelled_oco_order_ids: Optional[str] = Field(
        default=None, alias="cancelledOcoOrderIds")

    __properties: ClassVar[List[str]] = [
        "clientOid", "cancelledOrderId", "cancelledOcoOrderIds"
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
                  json_str: str) -> Optional[CancelOrderByClientOidOldResp]:
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
                           Any]]) -> Optional[CancelOrderByClientOidOldResp]:
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "clientOid":
            obj.get("clientOid"),
            "cancelledOrderId":
            obj.get("cancelledOrderId"),
            "cancelledOcoOrderIds":
            obj.get("cancelledOcoOrderIds")
        })
        return _obj

    def set_common_response(self, response: RestResponse):
        self.common_response = response

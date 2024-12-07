# coding: utf-8

# Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

from __future__ import annotations
import pprint
import json

from pydantic import BaseModel, ConfigDict, Field
from typing import Any, ClassVar, Dict, List, Optional
from kucoin_universal_sdk.internal.interfaces.response import Response
from kucoin_universal_sdk.model.common import RestResponse


class GetTransferQuotasResp(BaseModel, Response):
    """
    GetTransferQuotasResp

    Attributes:
        currency (str): Currency
        balance (str): Total funds in an account.
        available (str): Funds available to withdraw or trade.
        holds (str): Funds on hold (not available for use).
        transferable (str): Funds available to transfer.
    """

    common_response: Optional[RestResponse] = Field(
        default=None, description="Common response")
    currency: Optional[str] = Field(default=None, description="Currency")
    balance: Optional[str] = Field(default=None,
                                   description="Total funds in an account.")
    available: Optional[str] = Field(
        default=None, description="Funds available to withdraw or trade.")
    holds: Optional[str] = Field(
        default=None, description="Funds on hold (not available for use).")
    transferable: Optional[str] = Field(
        default=None, description="Funds available to transfer.")

    __properties: ClassVar[List[str]] = [
        "currency", "balance", "available", "holds", "transferable"
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
    def from_json(cls, json_str: str) -> Optional[GetTransferQuotasResp]:
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
                                    Any]]) -> Optional[GetTransferQuotasResp]:
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "currency": obj.get("currency"),
            "balance": obj.get("balance"),
            "available": obj.get("available"),
            "holds": obj.get("holds"),
            "transferable": obj.get("transferable")
        })
        return _obj

    def set_common_response(self, response: RestResponse):
        self.common_response = response

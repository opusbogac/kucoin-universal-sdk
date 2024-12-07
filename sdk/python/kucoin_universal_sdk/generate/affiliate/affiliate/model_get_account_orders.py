# coding: utf-8

# Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

from __future__ import annotations
import pprint
import json

from pydantic import BaseModel, ConfigDict, Field
from typing import Any, ClassVar, Dict, List, Optional


class GetAccountOrders(BaseModel):
    """
    GetAccountOrders

    Attributes:
        order_id (str): Loan Orders ID
        currency (str): Loan Currency
        principal (str): Principal to Be Repaid
        interest (str): Interest to Be Repaid
    """

    order_id: Optional[str] = Field(default=None,
                                    description="Loan Orders ID",
                                    alias="orderId")
    currency: Optional[str] = Field(default=None, description="Loan Currency")
    principal: Optional[str] = Field(default=None,
                                     description="Principal to Be Repaid")
    interest: Optional[str] = Field(default=None,
                                    description="Interest to Be Repaid")

    __properties: ClassVar[List[str]] = [
        "orderId", "currency", "principal", "interest"
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
    def from_json(cls, json_str: str) -> Optional[GetAccountOrders]:
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        _dict = self.model_dump(
            by_alias=True,
            exclude_none=True,
        )
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str,
                                          Any]]) -> Optional[GetAccountOrders]:
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "orderId": obj.get("orderId"),
            "currency": obj.get("currency"),
            "principal": obj.get("principal"),
            "interest": obj.get("interest")
        })
        return _obj

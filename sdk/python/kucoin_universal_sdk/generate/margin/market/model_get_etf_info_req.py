# coding: utf-8

# Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

from __future__ import annotations
import pprint
import json

from pydantic import BaseModel, ConfigDict, Field
from typing import Any, ClassVar, Dict, List, Optional


class GetEtfInfoReq(BaseModel):
    """
    GetEtfInfoReq

    Attributes:
        currency (str): ETF Currency, if empty query all currencies 
    """

    currency: Optional[str] = Field(
        default=None,
        description="ETF Currency, if empty query all currencies ")

    __properties: ClassVar[List[str]] = ["currency"]

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
    def from_json(cls, json_str: str) -> Optional[GetEtfInfoReq]:
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        _dict = self.model_dump(
            by_alias=True,
            exclude_none=True,
        )
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str,
                                          Any]]) -> Optional[GetEtfInfoReq]:
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({"currency": obj.get("currency")})
        return _obj


class GetEtfInfoReqBuilder:

    def __init__(self):
        self.obj = {}

    def set_currency(self, value: str) -> GetEtfInfoReqBuilder:
        """
        ETF Currency, if empty query all currencies 
        """
        self.obj['currency'] = value
        return self

    def build(self) -> GetEtfInfoReq:
        return GetEtfInfoReq(**self.obj)

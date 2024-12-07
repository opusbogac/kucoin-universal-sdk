# coding: utf-8

# Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

from __future__ import annotations
import pprint
import json

from pydantic import BaseModel, ConfigDict, Field
from typing import Any, ClassVar, Dict, List, Optional


class GetOpenOrdersReq(BaseModel):
    """
    GetOpenOrdersReq

    Attributes:
        symbol (str): symbol
    """

    symbol: Optional[str] = Field(default=None, description="symbol")

    __properties: ClassVar[List[str]] = ["symbol"]

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
    def from_json(cls, json_str: str) -> Optional[GetOpenOrdersReq]:
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        _dict = self.model_dump(
            by_alias=True,
            exclude_none=True,
        )
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str,
                                          Any]]) -> Optional[GetOpenOrdersReq]:
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({"symbol": obj.get("symbol")})
        return _obj


class GetOpenOrdersReqBuilder:

    def __init__(self):
        self.obj = {}

    def set_symbol(self, value: str) -> GetOpenOrdersReqBuilder:
        """
        symbol
        """
        self.obj['symbol'] = value
        return self

    def build(self) -> GetOpenOrdersReq:
        return GetOpenOrdersReq(**self.obj)

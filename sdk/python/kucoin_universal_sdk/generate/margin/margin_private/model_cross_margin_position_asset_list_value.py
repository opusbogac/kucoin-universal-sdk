# coding: utf-8

# Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

from __future__ import annotations
import pprint
import json

from pydantic import BaseModel, ConfigDict
from typing import Any, Callable, ClassVar, Dict, List, Optional


class CrossMarginPositionAssetListValue(BaseModel):
    """
    CrossMarginPositionAssetListValue

    Attributes:
        total (str): 
        available (str): 
        hold (str): 
    """

    total: Optional[str] = None
    available: Optional[str] = None
    hold: Optional[str] = None

    __properties: ClassVar[List[str]] = ["total", "available", "hold"]

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
    def from_json(
            cls, json_str: str) -> Optional[CrossMarginPositionAssetListValue]:
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        _dict = self.model_dump(
            by_alias=True,
            exclude_none=True,
        )
        return _dict

    @classmethod
    def from_dict(
        cls, obj: Optional[Dict[str, Any]]
    ) -> Optional[CrossMarginPositionAssetListValue]:
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "total": obj.get("total"),
            "available": obj.get("available"),
            "hold": obj.get("hold")
        })
        return _obj

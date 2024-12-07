# coding: utf-8

# Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

from __future__ import annotations
import pprint
import json

from pydantic import BaseModel, ConfigDict, Field
from typing import Any, ClassVar, Dict, List, Optional


class GetSpotSubAccountsSummaryV1Data(BaseModel):
    """
    GetSpotSubAccountsSummaryV1Data

    Attributes:
        user_id (str): 
        uid (int): 
        sub_name (str): 
        type (int): 
        remarks (str): 
        access (str): Sub-account Permission
    """

    user_id: Optional[str] = Field(default=None, alias="userId")
    uid: Optional[int] = None
    sub_name: Optional[str] = Field(default=None, alias="subName")
    type: Optional[int] = None
    remarks: Optional[str] = None
    access: Optional[str] = Field(default=None,
                                  description="Sub-account Permission")

    __properties: ClassVar[List[str]] = [
        "userId", "uid", "subName", "type", "remarks", "access"
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
                  json_str: str) -> Optional[GetSpotSubAccountsSummaryV1Data]:
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
    ) -> Optional[GetSpotSubAccountsSummaryV1Data]:
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "userId": obj.get("userId"),
            "uid": obj.get("uid"),
            "subName": obj.get("subName"),
            "type": obj.get("type"),
            "remarks": obj.get("remarks"),
            "access": obj.get("access")
        })
        return _obj

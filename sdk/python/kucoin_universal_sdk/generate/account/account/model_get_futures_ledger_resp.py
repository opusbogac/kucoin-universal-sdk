# coding: utf-8

# Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

from __future__ import annotations
import pprint
import json

from pydantic import BaseModel, ConfigDict, Field
from typing import Any, ClassVar, Dict, List, Optional
from .model_get_futures_ledger_data_list import GetFuturesLedgerDataList
from kucoin_universal_sdk.internal.interfaces.response import Response
from kucoin_universal_sdk.model.common import RestResponse


class GetFuturesLedgerResp(BaseModel, Response):
    """
    GetFuturesLedgerResp

    Attributes:
        data_list (list[GetFuturesLedgerDataList]): 
        has_more (bool): Is it the last page. If it is false, it means it is the last page, and if it is true, it means need to turn the page.
    """

    common_response: Optional[RestResponse] = Field(
        default=None, description="Common response")
    data_list: Optional[List[GetFuturesLedgerDataList]] = Field(
        default=None, alias="dataList")
    has_more: Optional[bool] = Field(
        default=None,
        description=
        "Is it the last page. If it is false, it means it is the last page, and if it is true, it means need to turn the page.",
        alias="hasMore")

    __properties: ClassVar[List[str]] = ["dataList", "hasMore"]

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
    def from_json(cls, json_str: str) -> Optional[GetFuturesLedgerResp]:
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        _dict = self.model_dump(
            by_alias=True,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of each item in data_list (list)
        _items = []
        if self.data_list:
            for _item_data_list in self.data_list:
                if _item_data_list:
                    _items.append(_item_data_list.to_dict())
            _dict['dataList'] = _items
        return _dict

    @classmethod
    def from_dict(
            cls, obj: Optional[Dict[str,
                                    Any]]) -> Optional[GetFuturesLedgerResp]:
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "dataList": [
                GetFuturesLedgerDataList.from_dict(_item)
                for _item in obj["dataList"]
            ] if obj.get("dataList") is not None else None,
            "hasMore":
            obj.get("hasMore")
        })
        return _obj

    def set_common_response(self, response: RestResponse):
        self.common_response = response

# coding: utf-8

# Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

from __future__ import annotations
import pprint
import json

from pydantic import BaseModel, ConfigDict, Field
from typing import Any, ClassVar, Dict, List, Optional
from .model_get_withdrawal_history_old_items import GetWithdrawalHistoryOldItems
from kucoin_universal_sdk.internal.interfaces.response import Response
from kucoin_universal_sdk.model.common import RestResponse


class GetWithdrawalHistoryOldResp(BaseModel, Response):
    """
    GetWithdrawalHistoryOldResp

    Attributes:
        current_page (int): current page
        page_size (int): page size
        total_num (int): total number
        total_page (int): total page
        items (list[GetWithdrawalHistoryOldItems]): 
    """

    common_response: Optional[RestResponse] = Field(
        default=None, description="Common response")
    current_page: Optional[int] = Field(default=None,
                                        description="current page",
                                        alias="currentPage")
    page_size: Optional[int] = Field(default=None,
                                     description="page size",
                                     alias="pageSize")
    total_num: Optional[int] = Field(default=None,
                                     description="total number",
                                     alias="totalNum")
    total_page: Optional[int] = Field(default=None,
                                      description="total page",
                                      alias="totalPage")
    items: Optional[List[GetWithdrawalHistoryOldItems]] = None

    __properties: ClassVar[List[str]] = [
        "currentPage", "pageSize", "totalNum", "totalPage", "items"
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
    def from_json(cls, json_str: str) -> Optional[GetWithdrawalHistoryOldResp]:
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        _dict = self.model_dump(
            by_alias=True,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of each item in items (list)
        _items = []
        if self.items:
            for _item_items in self.items:
                if _item_items:
                    _items.append(_item_items.to_dict())
            _dict['items'] = _items
        return _dict

    @classmethod
    def from_dict(
        cls,
        obj: Optional[Dict[str,
                           Any]]) -> Optional[GetWithdrawalHistoryOldResp]:
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "currentPage":
            obj.get("currentPage"),
            "pageSize":
            obj.get("pageSize"),
            "totalNum":
            obj.get("totalNum"),
            "totalPage":
            obj.get("totalPage"),
            "items": [
                GetWithdrawalHistoryOldItems.from_dict(_item)
                for _item in obj["items"]
            ] if obj.get("items") is not None else None
        })
        return _obj

    def set_common_response(self, response: RestResponse):
        self.common_response = response

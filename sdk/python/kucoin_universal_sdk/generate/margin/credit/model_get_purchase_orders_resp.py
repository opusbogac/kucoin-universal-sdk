# coding: utf-8

# Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

from __future__ import annotations
import pprint
import json

from pydantic import BaseModel, ConfigDict, Field
from typing import Any, ClassVar, Dict, List, Optional
from .model_get_purchase_orders_items import GetPurchaseOrdersItems
from kucoin_universal_sdk.internal.interfaces.response import Response
from kucoin_universal_sdk.model.common import RestResponse


class GetPurchaseOrdersResp(BaseModel, Response):
    """
    GetPurchaseOrdersResp

    Attributes:
        current_page (int): Current Page
        page_size (int): Page Size
        total_num (int): Total Number
        total_page (int): Total Page
        items (list[GetPurchaseOrdersItems]): 
    """

    common_response: Optional[RestResponse] = Field(
        default=None, description="Common response")
    current_page: Optional[int] = Field(default=None,
                                        description="Current Page",
                                        alias="currentPage")
    page_size: Optional[int] = Field(default=None,
                                     description="Page Size",
                                     alias="pageSize")
    total_num: Optional[int] = Field(default=None,
                                     description="Total Number",
                                     alias="totalNum")
    total_page: Optional[int] = Field(default=None,
                                      description="Total Page",
                                      alias="totalPage")
    items: Optional[List[GetPurchaseOrdersItems]] = None

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
    def from_json(cls, json_str: str) -> Optional[GetPurchaseOrdersResp]:
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
            cls, obj: Optional[Dict[str,
                                    Any]]) -> Optional[GetPurchaseOrdersResp]:
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
                GetPurchaseOrdersItems.from_dict(_item)
                for _item in obj["items"]
            ] if obj.get("items") is not None else None
        })
        return _obj

    def set_common_response(self, response: RestResponse):
        self.common_response = response

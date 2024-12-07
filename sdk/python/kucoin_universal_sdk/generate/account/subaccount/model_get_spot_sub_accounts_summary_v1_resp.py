# coding: utf-8

# Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

from __future__ import annotations
import pprint
import json

from pydantic import BaseModel, ConfigDict, Field
from typing import Any, ClassVar, Dict, List, Optional
from .model_get_spot_sub_accounts_summary_v1_data import GetSpotSubAccountsSummaryV1Data
from kucoin_universal_sdk.internal.interfaces.response import Response
from kucoin_universal_sdk.model.common import RestResponse


class GetSpotSubAccountsSummaryV1Resp(BaseModel, Response):
    """
    GetSpotSubAccountsSummaryV1Resp

    Attributes:
        data (list[GetSpotSubAccountsSummaryV1Data]): 
    """

    common_response: Optional[RestResponse] = Field(
        default=None, description="Common response")
    data: Optional[List[GetSpotSubAccountsSummaryV1Data]] = None

    __properties: ClassVar[List[str]] = ["data"]

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
                  json_str: str) -> Optional[GetSpotSubAccountsSummaryV1Resp]:
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        _dict = self.model_dump(
            by_alias=True,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of each item in data (list)
        _items = []
        if self.data:
            for _item_data in self.data:
                if _item_data:
                    _items.append(_item_data.to_dict())
            _dict['data'] = _items
        return _dict

    @classmethod
    def from_dict(
        cls, obj: Optional[Dict[str, Any]]
    ) -> Optional[GetSpotSubAccountsSummaryV1Resp]:
        if obj is None:
            return None

        # original response
        obj = {'data': obj}

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "data": [
                GetSpotSubAccountsSummaryV1Data.from_dict(_item)
                for _item in obj["data"]
            ] if obj.get("data") is not None else None
        })
        return _obj

    def set_common_response(self, response: RestResponse):
        self.common_response = response

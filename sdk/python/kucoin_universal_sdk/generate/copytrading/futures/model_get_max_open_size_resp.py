# coding: utf-8

# Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

from __future__ import annotations
import pprint
import json

from pydantic import BaseModel, ConfigDict, Field
from typing import Any, ClassVar, Dict, List, Optional
from kucoin_universal_sdk.internal.interfaces.response import Response
from kucoin_universal_sdk.model.common import RestResponse


class GetMaxOpenSizeResp(BaseModel, Response):
    """
    GetMaxOpenSizeResp

    Attributes:
        symbol (str): Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220) 
        max_buy_open_size (str): Maximum buy size 
        max_sell_open_size (str): Maximum buy size 
    """

    common_response: Optional[RestResponse] = Field(
        default=None, description="Common response")
    symbol: Optional[str] = Field(
        default=None,
        description=
        "Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220) "
    )
    max_buy_open_size: Optional[str] = Field(default=None,
                                             description="Maximum buy size ",
                                             alias="maxBuyOpenSize")
    max_sell_open_size: Optional[str] = Field(default=None,
                                              description="Maximum buy size ",
                                              alias="maxSellOpenSize")

    __properties: ClassVar[List[str]] = [
        "symbol", "maxBuyOpenSize", "maxSellOpenSize"
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
    def from_json(cls, json_str: str) -> Optional[GetMaxOpenSizeResp]:
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
                                    Any]]) -> Optional[GetMaxOpenSizeResp]:
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "symbol": obj.get("symbol"),
            "maxBuyOpenSize": obj.get("maxBuyOpenSize"),
            "maxSellOpenSize": obj.get("maxSellOpenSize")
        })
        return _obj

    def set_common_response(self, response: RestResponse):
        self.common_response = response

# coding: utf-8

# Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

from __future__ import annotations
import pprint
import json

from pydantic import BaseModel, ConfigDict, Field
from typing import Any, ClassVar, Dict, List, Optional


class GetOrderByClientOidReq(BaseModel):
    """
    GetOrderByClientOidReq

    Attributes:
        symbol (str): symbol
        client_oid (str): Client Order Id，unique identifier created by the user
    """

    symbol: Optional[str] = Field(default=None, description="symbol")
    client_oid: Optional[str] = Field(
        default=None,
        path_variable="True",
        description="Client Order Id，unique identifier created by the user",
        alias="clientOid")

    __properties: ClassVar[List[str]] = ["symbol", "clientOid"]

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
    def from_json(cls, json_str: str) -> Optional[GetOrderByClientOidReq]:
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
                                    Any]]) -> Optional[GetOrderByClientOidReq]:
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "symbol": obj.get("symbol"),
            "clientOid": obj.get("clientOid")
        })
        return _obj


class GetOrderByClientOidReqBuilder:

    def __init__(self):
        self.obj = {}

    def set_symbol(self, value: str) -> GetOrderByClientOidReqBuilder:
        """
        symbol
        """
        self.obj['symbol'] = value
        return self

    def set_client_oid(self, value: str) -> GetOrderByClientOidReqBuilder:
        """
        Client Order Id，unique identifier created by the user
        """
        self.obj['clientOid'] = value
        return self

    def build(self) -> GetOrderByClientOidReq:
        return GetOrderByClientOidReq(**self.obj)

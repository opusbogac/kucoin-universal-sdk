# coding: utf-8

# Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

from __future__ import annotations
import pprint
import json

from pydantic import BaseModel, ConfigDict, Field
from typing import Any, ClassVar, Dict, List, Optional
from kucoin_universal_sdk.internal.interfaces.response import Response
from kucoin_universal_sdk.model.common import RestResponse


class WithdrawalV1Resp(BaseModel, Response):
    """
    WithdrawalV1Resp

    Attributes:
        withdrawal_id (str): Withdrawal id, a unique ID for a withdrawal
    """

    common_response: Optional[RestResponse] = Field(
        default=None, description="Common response")
    withdrawal_id: Optional[str] = Field(
        default=None,
        description="Withdrawal id, a unique ID for a withdrawal",
        alias="withdrawalId")

    __properties: ClassVar[List[str]] = ["withdrawalId"]

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
    def from_json(cls, json_str: str) -> Optional[WithdrawalV1Resp]:
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        _dict = self.model_dump(
            by_alias=True,
            exclude_none=True,
        )
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str,
                                          Any]]) -> Optional[WithdrawalV1Resp]:
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({"withdrawalId": obj.get("withdrawalId")})
        return _obj

    def set_common_response(self, response: RestResponse):
        self.common_response = response

# coding: utf-8

# Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

from __future__ import annotations
import pprint
import json

from enum import Enum
from pydantic import BaseModel, ConfigDict, Field
from typing import Any, ClassVar, Dict, List, Optional
from kucoin_universal_sdk.internal.interfaces.response import Response
from kucoin_universal_sdk.model.common import RestResponse


class AddDepositAddressV1Resp(BaseModel, Response):
    """
    AddDepositAddressV1Resp

    Attributes:
        address (str): Deposit address
        memo (str): Address remark. If there’s no remark, it is empty. When you withdraw from other platforms to the KuCoin, you need to fill in memo(tag). If you do not fill memo (tag), your deposit may not be available, please be cautious.
        chain (str): The chainName of currency
        chain_id (str): The chainId of currency
        to (ToEnum): Deposit account type: main (funding account), trade (spot trading account)
        currency (str): currency
    """

    class ToEnum(Enum):
        """
        Attributes:
            MAIN: 
            TRADE: 
        """
        MAIN = 'MAIN'
        TRADE = 'TRADE'

    common_response: Optional[RestResponse] = Field(
        default=None, description="Common response")
    address: Optional[str] = Field(default=None, description="Deposit address")
    memo: Optional[str] = Field(
        default=None,
        description=
        "Address remark. If there’s no remark, it is empty. When you withdraw from other platforms to the KuCoin, you need to fill in memo(tag). If you do not fill memo (tag), your deposit may not be available, please be cautious."
    )
    chain: Optional[str] = Field(default=None,
                                 description="The chainName of currency")
    chain_id: Optional[str] = Field(default=None,
                                    description="The chainId of currency",
                                    alias="chainId")
    to: Optional[ToEnum] = Field(
        default=None,
        description=
        "Deposit account type: main (funding account), trade (spot trading account)"
    )
    currency: Optional[str] = Field(default=None, description="currency")

    __properties: ClassVar[List[str]] = [
        "address", "memo", "chain", "chainId", "to", "currency"
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
    def from_json(cls, json_str: str) -> Optional[AddDepositAddressV1Resp]:
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        _dict = self.model_dump(
            by_alias=True,
            exclude_none=True,
        )
        return _dict

    @classmethod
    def from_dict(
            cls,
            obj: Optional[Dict[str,
                               Any]]) -> Optional[AddDepositAddressV1Resp]:
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "address": obj.get("address"),
            "memo": obj.get("memo"),
            "chain": obj.get("chain"),
            "chainId": obj.get("chainId"),
            "to": obj.get("to"),
            "currency": obj.get("currency")
        })
        return _obj

    def set_common_response(self, response: RestResponse):
        self.common_response = response

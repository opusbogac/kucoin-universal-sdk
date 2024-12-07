# coding: utf-8

# Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

from __future__ import annotations
import pprint
import json

from enum import Enum
from pydantic import BaseModel, ConfigDict, Field
from typing import Any, ClassVar, Dict, List, Optional
from typing_extensions import Annotated


class FuturesAccountTransferOutReq(BaseModel):
    """
    FuturesAccountTransferOutReq

    Attributes:
        currency (str): Currency, including XBT,USDT...
        amount (float): Amount to be transfered out, the maximum cannot exceed 1000000000
        rec_account_type (RecAccountTypeEnum): Receive account type, including MAIN,TRADE
    """

    class RecAccountTypeEnum(Enum):
        """
        Attributes:
            MAIN: 
            TRADE: 
        """
        MAIN = 'MAIN'
        TRADE = 'TRADE'

    currency: Optional[str] = Field(
        default=None, description="Currency, including XBT,USDT...")
    amount: Optional[Annotated[float, Field(le=1000000000)]] = Field(
        default=None,
        description=
        "Amount to be transfered out, the maximum cannot exceed 1000000000")
    rec_account_type: Optional[RecAccountTypeEnum] = Field(
        default=None,
        description="Receive account type, including MAIN,TRADE",
        alias="recAccountType")

    __properties: ClassVar[List[str]] = [
        "currency", "amount", "recAccountType"
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
                  json_str: str) -> Optional[FuturesAccountTransferOutReq]:
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
                           Any]]) -> Optional[FuturesAccountTransferOutReq]:
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "currency": obj.get("currency"),
            "amount": obj.get("amount"),
            "recAccountType": obj.get("recAccountType")
        })
        return _obj


class FuturesAccountTransferOutReqBuilder:

    def __init__(self):
        self.obj = {}

    def set_currency(self, value: str) -> FuturesAccountTransferOutReqBuilder:
        """
        Currency, including XBT,USDT...
        """
        self.obj['currency'] = value
        return self

    def set_amount(self, value: float) -> FuturesAccountTransferOutReqBuilder:
        """
        Amount to be transfered out, the maximum cannot exceed 1000000000
        """
        self.obj['amount'] = value
        return self

    def set_rec_account_type(
        self, value: FuturesAccountTransferOutReq.RecAccountTypeEnum
    ) -> FuturesAccountTransferOutReqBuilder:
        """
        Receive account type, including MAIN,TRADE
        """
        self.obj['recAccountType'] = value
        return self

    def build(self) -> FuturesAccountTransferOutReq:
        return FuturesAccountTransferOutReq(**self.obj)

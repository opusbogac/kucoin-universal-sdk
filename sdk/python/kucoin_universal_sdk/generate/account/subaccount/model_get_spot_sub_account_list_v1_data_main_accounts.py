# coding: utf-8

# Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

from __future__ import annotations
import pprint
import json

from pydantic import BaseModel, ConfigDict, Field
from typing import Any, ClassVar, Dict, List, Optional


class GetSpotSubAccountListV1DataMainAccounts(BaseModel):
    """
    GetSpotSubAccountListV1DataMainAccounts

    Attributes:
        currency (str): The currency of the account.
        balance (str): Total funds in the account.
        available (str): Funds available to withdraw or trade.
        holds (str): Funds on hold (not available for use).
        base_currency (str): Calculated on this currency.
        base_currency_price (str): The base currency price.
        base_amount (str): The base currency amount.
        tag (str): 
    """

    currency: Optional[str] = Field(default=None,
                                    description="The currency of the account.")
    balance: Optional[str] = Field(default=None,
                                   description="Total funds in the account.")
    available: Optional[str] = Field(
        default=None, description="Funds available to withdraw or trade.")
    holds: Optional[str] = Field(
        default=None, description="Funds on hold (not available for use).")
    base_currency: Optional[str] = Field(
        default=None,
        description="Calculated on this currency.",
        alias="baseCurrency")
    base_currency_price: Optional[str] = Field(
        default=None,
        description="The base currency price.",
        alias="baseCurrencyPrice")
    base_amount: Optional[str] = Field(default=None,
                                       description="The base currency amount.",
                                       alias="baseAmount")
    tag: Optional[str] = None

    __properties: ClassVar[List[str]] = [
        "currency", "balance", "available", "holds", "baseCurrency",
        "baseCurrencyPrice", "baseAmount", "tag"
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
    def from_json(
            cls, json_str: str
    ) -> Optional[GetSpotSubAccountListV1DataMainAccounts]:
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
    ) -> Optional[GetSpotSubAccountListV1DataMainAccounts]:
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "currency":
            obj.get("currency"),
            "balance":
            obj.get("balance"),
            "available":
            obj.get("available"),
            "holds":
            obj.get("holds"),
            "baseCurrency":
            obj.get("baseCurrency"),
            "baseCurrencyPrice":
            obj.get("baseCurrencyPrice"),
            "baseAmount":
            obj.get("baseAmount"),
            "tag":
            obj.get("tag")
        })
        return _obj

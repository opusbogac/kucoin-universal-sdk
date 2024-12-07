# coding: utf-8

# Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

from __future__ import annotations
import pprint
import json

from pydantic import BaseModel, ConfigDict, Field
from typing import Any, ClassVar, Dict, List, Optional


class GetIsolatedMarginAccountAssetsQuoteAsset(BaseModel):
    """
    quote asset

    Attributes:
        currency (str): currency
        borrow_enabled (bool): Support borrow or not
        transfer_in_enabled (bool): Support transfer or not
        liability (str): Liabilities
        total (str): Total Assets
        available (str): Account available assets (total assets - frozen)
        hold (str): Account frozen assets
        max_borrow_size (str): The user's remaining maximum loan amount
    """

    currency: Optional[str] = Field(default=None, description="currency")
    borrow_enabled: Optional[bool] = Field(default=None,
                                           description="Support borrow or not",
                                           alias="borrowEnabled")
    transfer_in_enabled: Optional[bool] = Field(
        default=None,
        description="Support transfer or not",
        alias="transferInEnabled")
    liability: Optional[str] = Field(default=None, description="Liabilities")
    total: Optional[str] = Field(default=None, description="Total Assets")
    available: Optional[str] = Field(
        default=None,
        description="Account available assets (total assets - frozen)")
    hold: Optional[str] = Field(default=None,
                                description="Account frozen assets")
    max_borrow_size: Optional[str] = Field(
        default=None,
        description="The user's remaining maximum loan amount",
        alias="maxBorrowSize")

    __properties: ClassVar[List[str]] = [
        "currency", "borrowEnabled", "transferInEnabled", "liability", "total",
        "available", "hold", "maxBorrowSize"
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
    ) -> Optional[GetIsolatedMarginAccountAssetsQuoteAsset]:
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
    ) -> Optional[GetIsolatedMarginAccountAssetsQuoteAsset]:
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "currency":
            obj.get("currency"),
            "borrowEnabled":
            obj.get("borrowEnabled"),
            "transferInEnabled":
            obj.get("transferInEnabled"),
            "liability":
            obj.get("liability"),
            "total":
            obj.get("total"),
            "available":
            obj.get("available"),
            "hold":
            obj.get("hold"),
            "maxBorrowSize":
            obj.get("maxBorrowSize")
        })
        return _obj

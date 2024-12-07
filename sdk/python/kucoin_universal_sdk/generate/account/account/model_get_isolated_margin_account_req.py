# coding: utf-8

# Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

from __future__ import annotations
import pprint
import json

from enum import Enum
from pydantic import BaseModel, ConfigDict, Field
from typing import Any, ClassVar, Dict, List, Optional


class GetIsolatedMarginAccountReq(BaseModel):
    """
    GetIsolatedMarginAccountReq

    Attributes:
        symbol (str): For isolated trading pairs, query all without passing
        quote_currency (QuoteCurrencyEnum): quote currency, currently only supports USDT, KCS, BTC, USDT as default
        query_type (QueryTypeEnum): Query account type (default ISOLATED), ISOLATED- - only query low frequency isolated margin account, ISOLATED_V2-only query high frequency isolated margin account, ALL - consistent aggregate query with the web side
    """

    class QuoteCurrencyEnum(Enum):
        """
        Attributes:
            USDT: 
            KCS: 
            BTC: 
        """
        USDT = 'USDT'
        KCS = 'KCS'
        BTC = 'BTC'

    class QueryTypeEnum(Enum):
        """
        Attributes:
            ISOLATED: 
            ISOLATED_V2: 
            ALL: 
        """
        ISOLATED = 'ISOLATED'
        ISOLATED_V2 = 'ISOLATED_V2'
        ALL = 'ALL'

    symbol: Optional[str] = Field(
        default=None,
        description="For isolated trading pairs, query all without passing")
    quote_currency: Optional[QuoteCurrencyEnum] = Field(
        default=QuoteCurrencyEnum.USDT,
        description=
        "quote currency, currently only supports USDT, KCS, BTC, USDT as default",
        alias="quoteCurrency")
    query_type: Optional[QueryTypeEnum] = Field(
        default=QueryTypeEnum.ISOLATED,
        description=
        "Query account type (default ISOLATED), ISOLATED- - only query low frequency isolated margin account, ISOLATED_V2-only query high frequency isolated margin account, ALL - consistent aggregate query with the web side",
        alias="queryType")

    __properties: ClassVar[List[str]] = [
        "symbol", "quoteCurrency", "queryType"
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
    def from_json(cls, json_str: str) -> Optional[GetIsolatedMarginAccountReq]:
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
                           Any]]) -> Optional[GetIsolatedMarginAccountReq]:
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "symbol":
            obj.get("symbol"),
            "quoteCurrency":
            obj.get("quoteCurrency") if obj.get("quoteCurrency") is not None
            else GetIsolatedMarginAccountReq.QuoteCurrencyEnum.USDT,
            "queryType":
            obj.get("queryType") if obj.get("queryType") is not None else
            GetIsolatedMarginAccountReq.QueryTypeEnum.ISOLATED
        })
        return _obj


class GetIsolatedMarginAccountReqBuilder:

    def __init__(self):
        self.obj = {}

    def set_symbol(self, value: str) -> GetIsolatedMarginAccountReqBuilder:
        """
        For isolated trading pairs, query all without passing
        """
        self.obj['symbol'] = value
        return self

    def set_quote_currency(
        self, value: GetIsolatedMarginAccountReq.QuoteCurrencyEnum
    ) -> GetIsolatedMarginAccountReqBuilder:
        """
        quote currency, currently only supports USDT, KCS, BTC, USDT as default
        """
        self.obj['quoteCurrency'] = value
        return self

    def set_query_type(
        self, value: GetIsolatedMarginAccountReq.QueryTypeEnum
    ) -> GetIsolatedMarginAccountReqBuilder:
        """
        Query account type (default ISOLATED), ISOLATED- - only query low frequency isolated margin account, ISOLATED_V2-only query high frequency isolated margin account, ALL - consistent aggregate query with the web side
        """
        self.obj['queryType'] = value
        return self

    def build(self) -> GetIsolatedMarginAccountReq:
        return GetIsolatedMarginAccountReq(**self.obj)

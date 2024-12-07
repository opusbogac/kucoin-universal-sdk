# coding: utf-8

# Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

from __future__ import annotations
import pprint
import json

from pydantic import BaseModel, ConfigDict, Field
from typing import Any, Callable, ClassVar, Dict, List, Optional
from kucoin_universal_sdk.internal.interfaces.websocket import WebSocketMessageCallback
from kucoin_universal_sdk.model.common import WsMessage


class MarkPriceEvent(BaseModel):
    """
    MarkPriceEvent

    Attributes:
        symbol (str): 
        granularity (int): 
        timestamp (int): 
        value (float): 
    """

    common_response: Optional[WsMessage] = Field(default=None,
                                                 description="Common response")
    symbol: Optional[str] = None
    granularity: Optional[int] = None
    timestamp: Optional[int] = None
    value: Optional[float] = None

    __properties: ClassVar[List[str]] = [
        "symbol", "granularity", "timestamp", "value"
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
    def from_json(cls, json_str: str) -> Optional[MarkPriceEvent]:
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        _dict = self.model_dump(
            by_alias=True,
            exclude_none=True,
        )
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str,
                                          Any]]) -> Optional[MarkPriceEvent]:
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "symbol": obj.get("symbol"),
            "granularity": obj.get("granularity"),
            "timestamp": obj.get("timestamp"),
            "value": obj.get("value")
        })
        return _obj


MarkPriceEventCallback = Callable[[str, str, MarkPriceEvent], None]
"""
args:
    - topic (str) : topic
    - subject (str): subject
    - data (MarkPriceEvent): event data
"""


class MarkPriceEventCallbackWrapper(WebSocketMessageCallback):

    def __init__(self, cb: MarkPriceEventCallback):
        self.callback = cb

    def on_message(self, message: WsMessage):
        event = MarkPriceEvent.from_dict(message.raw_data)
        event.common_response = message
        self.callback(message.topic, message.subject, event)

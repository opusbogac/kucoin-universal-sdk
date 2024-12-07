# coding: utf-8

# Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

from __future__ import annotations
import pprint
import json

from pydantic import BaseModel, ConfigDict, Field
from typing import Any, Callable, ClassVar, Dict, List, Optional
from kucoin_universal_sdk.internal.interfaces.websocket import WebSocketMessageCallback
from kucoin_universal_sdk.model.common import WsMessage


class MarginModeEvent(BaseModel):
    """
    MarginModeEvent

    Attributes:
        symbol (str): The SYMBOL is the key with value  \"CROSS\" or \"ISOLATED\"
    """

    common_response: Optional[WsMessage] = Field(default=None,
                                                 description="Common response")
    symbol: Optional[str] = Field(
        default=None,
        description=
        "The SYMBOL is the key with value  \"CROSS\" or \"ISOLATED\"",
        alias="SYMBOL")

    __properties: ClassVar[List[str]] = ["SYMBOL"]

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
    def from_json(cls, json_str: str) -> Optional[MarginModeEvent]:
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        _dict = self.model_dump(
            by_alias=True,
            exclude_none=True,
        )
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str,
                                          Any]]) -> Optional[MarginModeEvent]:
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({"SYMBOL": obj.get("SYMBOL")})
        return _obj


MarginModeEventCallback = Callable[[str, str, MarginModeEvent], None]
"""
args:
    - topic (str) : topic
    - subject (str): subject
    - data (MarginModeEvent): event data
"""


class MarginModeEventCallbackWrapper(WebSocketMessageCallback):

    def __init__(self, cb: MarginModeEventCallback):
        self.callback = cb

    def on_message(self, message: WsMessage):
        event = MarginModeEvent.from_dict(message.raw_data)
        event.common_response = message
        self.callback(message.topic, message.subject, event)

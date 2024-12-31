# coding: utf-8

# Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

from __future__ import annotations
import pprint
import json

from enum import Enum
from pydantic import BaseModel, ConfigDict, Field
from typing import Any, ClassVar, Dict, List, Optional


class AddOrderTestReq(BaseModel):
    """
    AddOrderTestReq

    Attributes:
        client_oid (str): Client Order Id，The ClientOid field is a unique ID created by the user（we recommend using a UUID）, and can only contain numbers, letters, underscores （_）, and hyphens （-）. This field is returned when order information is obtained. You can use clientOid to tag your orders. ClientOid is different from the order ID created by the service provider. Please do not initiate requests using the same clientOid. The maximum length for the ClientOid is 40 characters.  Please remember the orderId created by the service provider, it used to check for updates in order status.
        side (SideEnum): specify if the order is to 'buy' or 'sell'
        symbol (str): symbol
        type (TypeEnum): specify if the order is an 'limit' order or 'market' order.   The type of order you specify when you place your order determines whether or not you need to request other parameters and also affects the execution of the matching engine.  When placing a limit order, you must specify a price and size. The system will try to match the order according to market price or a price better than market price. If the order cannot be immediately matched, it will stay in the order book until it is matched or the user cancels.  Unlike limit orders, the price for market orders fluctuates with market prices. When placing a market order, you do not need to specify a price, you only need to specify a quantity. Market orders are filled immediately and will not enter the order book. All market orders are takers and a taker fee will be charged.
        stp (StpEnum): [Self Trade Prevention](https://www.kucoin.com/docs-new/doc-338146) is divided into these strategies: CN, CO, CB , and DC
        price (str): Specify price for order  When placing a limit order, the price must be based on priceIncrement for the trading pair. The price increment (priceIncrement) is the price precision for the trading pair. For example, for the BTC-USDT trading pair, the priceIncrement is 0.00001000. So the price for your orders cannot be less than 0.00001000 and must be a multiple of priceIncrement. Otherwise, the order will return an invalid priceIncrement error.
        size (str): Specify quantity for order  When **type** is limit, size refers to the amount of trading targets (the asset name written in front) for the trading pair. Teh Size must be based on the baseIncrement of the trading pair. The baseIncrement represents the precision for the trading pair. The size of an order must be a positive-integer multiple of baseIncrement and must be between baseMinSize and baseMaxSize.  When **type** is market, select one out of two: size or funds
        time_in_force (TimeInForceEnum): [Time in force](https://www.kucoin.com/docs-new/api-5176570) is a special strategy used during trading
        post_only (bool): passive order labels, this is disabled when the order timing strategy is IOC or FOK
        hidden (bool): [Hidden order](https://www.kucoin.com/docs-new/doc-338146) or not (not shown in order book)
        iceberg (bool): Whether or not only visible portions of orders are shown in [Iceberg orders](https://www.kucoin.com/docs-new/doc-338146)
        visible_size (str): Maximum visible quantity in iceberg orders
        cancel_after (int): Cancel after n seconds，the order timing strategy is GTT
        funds (str): When **type** is market, select one out of two: size or funds
        is_isolated (bool): true - isolated margin ,false - cross margin. defult as false
        auto_borrow (bool): When Margin Account has inefficient balance, our system autoborrows inefficient assets and opens positions according to the lowest market interest rate.
        auto_repay (bool): AutoPay allows returning borrowed assets when you close a position. Our system automatically triggers the repayment and the maximum repayment amount equals to the filled-order amount.
    """

    class SideEnum(Enum):
        """
        Attributes:
            BUY: 
            SELL: 
        """
        BUY = 'buy'
        SELL = 'sell'

    class TypeEnum(Enum):
        """
        Attributes:
            LIMIT: 
            MARKET: 
        """
        LIMIT = 'limit'
        MARKET = 'market'

    class StpEnum(Enum):
        """
        Attributes:
            DC: 
            CO: 
            CN: 
            CB: 
        """
        DC = 'DC'
        CO = 'CO'
        CN = 'CN'
        CB = 'CB'

    class TimeInForceEnum(Enum):
        """
        Attributes:
            GTC: 
            GTT: 
            IOC: 
            FOK: 
        """
        GTC = 'GTC'
        GTT = 'GTT'
        IOC = 'IOC'
        FOK = 'FOK'

    client_oid: Optional[str] = Field(
        default=None,
        description=
        "Client Order Id，The ClientOid field is a unique ID created by the user（we recommend using a UUID）, and can only contain numbers, letters, underscores （_）, and hyphens （-）. This field is returned when order information is obtained. You can use clientOid to tag your orders. ClientOid is different from the order ID created by the service provider. Please do not initiate requests using the same clientOid. The maximum length for the ClientOid is 40 characters.  Please remember the orderId created by the service provider, it used to check for updates in order status.",
        alias="clientOid")
    side: Optional[SideEnum] = Field(
        default=None, description="specify if the order is to 'buy' or 'sell'")
    symbol: Optional[str] = Field(default=None, description="symbol")
    type: Optional[TypeEnum] = Field(
        default=TypeEnum.LIMIT,
        description=
        "specify if the order is an 'limit' order or 'market' order.   The type of order you specify when you place your order determines whether or not you need to request other parameters and also affects the execution of the matching engine.  When placing a limit order, you must specify a price and size. The system will try to match the order according to market price or a price better than market price. If the order cannot be immediately matched, it will stay in the order book until it is matched or the user cancels.  Unlike limit orders, the price for market orders fluctuates with market prices. When placing a market order, you do not need to specify a price, you only need to specify a quantity. Market orders are filled immediately and will not enter the order book. All market orders are takers and a taker fee will be charged."
    )
    stp: Optional[StpEnum] = Field(
        default=None,
        description=
        "[Self Trade Prevention](https://www.kucoin.com/docs-new/doc-338146) is divided into these strategies: CN, CO, CB , and DC"
    )
    price: Optional[str] = Field(
        default=None,
        description=
        "Specify price for order  When placing a limit order, the price must be based on priceIncrement for the trading pair. The price increment (priceIncrement) is the price precision for the trading pair. For example, for the BTC-USDT trading pair, the priceIncrement is 0.00001000. So the price for your orders cannot be less than 0.00001000 and must be a multiple of priceIncrement. Otherwise, the order will return an invalid priceIncrement error."
    )
    size: Optional[str] = Field(
        default=None,
        description=
        "Specify quantity for order  When **type** is limit, size refers to the amount of trading targets (the asset name written in front) for the trading pair. Teh Size must be based on the baseIncrement of the trading pair. The baseIncrement represents the precision for the trading pair. The size of an order must be a positive-integer multiple of baseIncrement and must be between baseMinSize and baseMaxSize.  When **type** is market, select one out of two: size or funds"
    )
    time_in_force: Optional[TimeInForceEnum] = Field(
        default=TimeInForceEnum.GTC,
        description=
        "[Time in force](https://www.kucoin.com/docs-new/api-5176570) is a special strategy used during trading",
        alias="timeInForce")
    post_only: Optional[bool] = Field(
        default=False,
        description=
        "passive order labels, this is disabled when the order timing strategy is IOC or FOK",
        alias="postOnly")
    hidden: Optional[bool] = Field(
        default=False,
        description=
        "[Hidden order](https://www.kucoin.com/docs-new/doc-338146) or not (not shown in order book)"
    )
    iceberg: Optional[bool] = Field(
        default=False,
        description=
        "Whether or not only visible portions of orders are shown in [Iceberg orders](https://www.kucoin.com/docs-new/doc-338146)"
    )
    visible_size: Optional[str] = Field(
        default=None,
        description="Maximum visible quantity in iceberg orders",
        alias="visibleSize")
    cancel_after: Optional[int] = Field(
        default=None,
        description="Cancel after n seconds，the order timing strategy is GTT",
        alias="cancelAfter")
    funds: Optional[str] = Field(
        default=None,
        description=
        "When **type** is market, select one out of two: size or funds")
    is_isolated: Optional[bool] = Field(
        default=False,
        description=
        "true - isolated margin ,false - cross margin. defult as false",
        alias="isIsolated")
    auto_borrow: Optional[bool] = Field(
        default=False,
        description=
        "When Margin Account has inefficient balance, our system autoborrows inefficient assets and opens positions according to the lowest market interest rate.",
        alias="autoBorrow")
    auto_repay: Optional[bool] = Field(
        default=False,
        description=
        "AutoPay allows returning borrowed assets when you close a position. Our system automatically triggers the repayment and the maximum repayment amount equals to the filled-order amount.",
        alias="autoRepay")

    __properties: ClassVar[List[str]] = [
        "clientOid", "side", "symbol", "type", "stp", "price", "size",
        "timeInForce", "postOnly", "hidden", "iceberg", "visibleSize",
        "cancelAfter", "funds", "isIsolated", "autoBorrow", "autoRepay"
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
    def from_json(cls, json_str: str) -> Optional[AddOrderTestReq]:
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        _dict = self.model_dump(
            by_alias=True,
            exclude_none=True,
        )
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str,
                                          Any]]) -> Optional[AddOrderTestReq]:
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "clientOid":
            obj.get("clientOid"),
            "side":
            obj.get("side"),
            "symbol":
            obj.get("symbol"),
            "type":
            obj.get("type")
            if obj.get("type") is not None else AddOrderTestReq.TypeEnum.LIMIT,
            "stp":
            obj.get("stp"),
            "price":
            obj.get("price"),
            "size":
            obj.get("size"),
            "timeInForce":
            obj.get("timeInForce") if obj.get("timeInForce") is not None else
            AddOrderTestReq.TimeInForceEnum.GTC,
            "postOnly":
            obj.get("postOnly") if obj.get("postOnly") is not None else False,
            "hidden":
            obj.get("hidden") if obj.get("hidden") is not None else False,
            "iceberg":
            obj.get("iceberg") if obj.get("iceberg") is not None else False,
            "visibleSize":
            obj.get("visibleSize"),
            "cancelAfter":
            obj.get("cancelAfter"),
            "funds":
            obj.get("funds"),
            "isIsolated":
            obj.get("isIsolated")
            if obj.get("isIsolated") is not None else False,
            "autoBorrow":
            obj.get("autoBorrow")
            if obj.get("autoBorrow") is not None else False,
            "autoRepay":
            obj.get("autoRepay") if obj.get("autoRepay") is not None else False
        })
        return _obj


class AddOrderTestReqBuilder:

    def __init__(self):
        self.obj = {}

    def set_client_oid(self, value: str) -> AddOrderTestReqBuilder:
        """
        Client Order Id，The ClientOid field is a unique ID created by the user（we recommend using a UUID）, and can only contain numbers, letters, underscores （_）, and hyphens （-）. This field is returned when order information is obtained. You can use clientOid to tag your orders. ClientOid is different from the order ID created by the service provider. Please do not initiate requests using the same clientOid. The maximum length for the ClientOid is 40 characters.  Please remember the orderId created by the service provider, it used to check for updates in order status.
        """
        self.obj['clientOid'] = value
        return self

    def set_side(self,
                 value: AddOrderTestReq.SideEnum) -> AddOrderTestReqBuilder:
        """
        specify if the order is to 'buy' or 'sell'
        """
        self.obj['side'] = value
        return self

    def set_symbol(self, value: str) -> AddOrderTestReqBuilder:
        """
        symbol
        """
        self.obj['symbol'] = value
        return self

    def set_type(self,
                 value: AddOrderTestReq.TypeEnum) -> AddOrderTestReqBuilder:
        """
        specify if the order is an 'limit' order or 'market' order.   The type of order you specify when you place your order determines whether or not you need to request other parameters and also affects the execution of the matching engine.  When placing a limit order, you must specify a price and size. The system will try to match the order according to market price or a price better than market price. If the order cannot be immediately matched, it will stay in the order book until it is matched or the user cancels.  Unlike limit orders, the price for market orders fluctuates with market prices. When placing a market order, you do not need to specify a price, you only need to specify a quantity. Market orders are filled immediately and will not enter the order book. All market orders are takers and a taker fee will be charged.
        """
        self.obj['type'] = value
        return self

    def set_stp(self,
                value: AddOrderTestReq.StpEnum) -> AddOrderTestReqBuilder:
        """
        [Self Trade Prevention](https://www.kucoin.com/docs-new/doc-338146) is divided into these strategies: CN, CO, CB , and DC
        """
        self.obj['stp'] = value
        return self

    def set_price(self, value: str) -> AddOrderTestReqBuilder:
        """
        Specify price for order  When placing a limit order, the price must be based on priceIncrement for the trading pair. The price increment (priceIncrement) is the price precision for the trading pair. For example, for the BTC-USDT trading pair, the priceIncrement is 0.00001000. So the price for your orders cannot be less than 0.00001000 and must be a multiple of priceIncrement. Otherwise, the order will return an invalid priceIncrement error.
        """
        self.obj['price'] = value
        return self

    def set_size(self, value: str) -> AddOrderTestReqBuilder:
        """
        Specify quantity for order  When **type** is limit, size refers to the amount of trading targets (the asset name written in front) for the trading pair. Teh Size must be based on the baseIncrement of the trading pair. The baseIncrement represents the precision for the trading pair. The size of an order must be a positive-integer multiple of baseIncrement and must be between baseMinSize and baseMaxSize.  When **type** is market, select one out of two: size or funds
        """
        self.obj['size'] = value
        return self

    def set_time_in_force(
            self,
            value: AddOrderTestReq.TimeInForceEnum) -> AddOrderTestReqBuilder:
        """
        [Time in force](https://www.kucoin.com/docs-new/api-5176570) is a special strategy used during trading
        """
        self.obj['timeInForce'] = value
        return self

    def set_post_only(self, value: bool) -> AddOrderTestReqBuilder:
        """
        passive order labels, this is disabled when the order timing strategy is IOC or FOK
        """
        self.obj['postOnly'] = value
        return self

    def set_hidden(self, value: bool) -> AddOrderTestReqBuilder:
        """
        [Hidden order](https://www.kucoin.com/docs-new/doc-338146) or not (not shown in order book)
        """
        self.obj['hidden'] = value
        return self

    def set_iceberg(self, value: bool) -> AddOrderTestReqBuilder:
        """
        Whether or not only visible portions of orders are shown in [Iceberg orders](https://www.kucoin.com/docs-new/doc-338146)
        """
        self.obj['iceberg'] = value
        return self

    def set_visible_size(self, value: str) -> AddOrderTestReqBuilder:
        """
        Maximum visible quantity in iceberg orders
        """
        self.obj['visibleSize'] = value
        return self

    def set_cancel_after(self, value: int) -> AddOrderTestReqBuilder:
        """
        Cancel after n seconds，the order timing strategy is GTT
        """
        self.obj['cancelAfter'] = value
        return self

    def set_funds(self, value: str) -> AddOrderTestReqBuilder:
        """
        When **type** is market, select one out of two: size or funds
        """
        self.obj['funds'] = value
        return self

    def set_is_isolated(self, value: bool) -> AddOrderTestReqBuilder:
        """
        true - isolated margin ,false - cross margin. defult as false
        """
        self.obj['isIsolated'] = value
        return self

    def set_auto_borrow(self, value: bool) -> AddOrderTestReqBuilder:
        """
        When Margin Account has inefficient balance, our system autoborrows inefficient assets and opens positions according to the lowest market interest rate.
        """
        self.obj['autoBorrow'] = value
        return self

    def set_auto_repay(self, value: bool) -> AddOrderTestReqBuilder:
        """
        AutoPay allows returning borrowed assets when you close a position. Our system automatically triggers the repayment and the maximum repayment amount equals to the filled-order amount.
        """
        self.obj['autoRepay'] = value
        return self

    def build(self) -> AddOrderTestReq:
        return AddOrderTestReq(**self.obj)

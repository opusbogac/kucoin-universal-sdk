# Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

from abc import ABC, abstractmethod
from kucoin_universal_sdk.internal.interfaces.websocket import WebSocketService
from .model_all_order_event import AllOrderEventCallback, AllOrderEventCallbackWrapper
from .model_all_position_event import AllPositionEventCallback, AllPositionEventCallbackWrapper
from .model_balance_event import BalanceEventCallback, BalanceEventCallbackWrapper
from .model_cross_leverage_event import CrossLeverageEventCallback, CrossLeverageEventCallbackWrapper
from .model_margin_mode_event import MarginModeEventCallback, MarginModeEventCallbackWrapper
from .model_order_event import OrderEventCallback, OrderEventCallbackWrapper
from .model_position_event import PositionEventCallback, PositionEventCallbackWrapper
from .model_stop_orders_event import StopOrdersEventCallback, StopOrdersEventCallbackWrapper


class FuturesPrivateWS(ABC):

    @abstractmethod
    def all_order(self, callback: AllOrderEventCallback) -> str:
        """
        summary: All Order change pushes.
        description: Push order changes for all symbol
        push frequency: realtime
        """
        pass

    @abstractmethod
    def all_position(self, callback: AllPositionEventCallback) -> str:
        """
        summary: All symbol position change events push
        description: Subscribe this topic to get the realtime push of position change event of all symbol
        push frequency: realtime
        """
        pass

    @abstractmethod
    def balance(self, callback: BalanceEventCallback) -> str:
        """
        summary: the balance change push
        description: Subscribe this topic to get the realtime push of balance change
        push frequency: realtime
        """
        pass

    @abstractmethod
    def cross_leverage(self, callback: CrossLeverageEventCallback) -> str:
        """
        summary: the leverage change push
        description: Subscribe this topic to get the realtime push of leverage change of contracts that are in cross margin mode
        push frequency: realtime
        """
        pass

    @abstractmethod
    def margin_mode(self, callback: MarginModeEventCallback) -> str:
        """
        summary: the margin mode change
        description: Subscribe this topic to get the realtime push of margin mode change event of a symbol
        push frequency: realtime
        """
        pass

    @abstractmethod
    def order(self, symbol: str, callback: OrderEventCallback) -> str:
        """
        summary: Order change pushes.
        description: Push order changes for the specified symbol
        push frequency: realtime
        """
        pass

    @abstractmethod
    def position(self, symbol: str, callback: PositionEventCallback) -> str:
        """
        summary: the position change events push
        description: Subscribe this topic to get the realtime push of position change event of a symbol
        push frequency: realtime
        """
        pass

    @abstractmethod
    def stop_orders(self, callback: StopOrdersEventCallback) -> str:
        """
        summary: stop order change pushes.
        description: Subscribe this topic to get the realtime push of stop order changes.
        push frequency: realtime
        """
        pass

    @abstractmethod
    def unsubscribe(self, id: str):
        pass

    @abstractmethod
    def start(self):
        pass

    @abstractmethod
    def stop(self):
        pass


class FuturesPrivateWSImpl(FuturesPrivateWS):

    def __init__(self, transport: WebSocketService):
        self.transport = transport

    def all_order(self, callback: AllOrderEventCallback) -> str:
        topic_prefix = "/contractMarket/tradeOrders"

        args = []

        return self.transport.subscribe(topic_prefix, args,
                                        AllOrderEventCallbackWrapper(callback))

    def all_position(self, callback: AllPositionEventCallback) -> str:
        topic_prefix = "/contract/positionAll"

        args = []

        return self.transport.subscribe(
            topic_prefix, args, AllPositionEventCallbackWrapper(callback))

    def balance(self, callback: BalanceEventCallback) -> str:
        topic_prefix = "/contractAccount/wallet"

        args = []

        return self.transport.subscribe(topic_prefix, args,
                                        BalanceEventCallbackWrapper(callback))

    def cross_leverage(self, callback: CrossLeverageEventCallback) -> str:
        topic_prefix = "/contract/crossLeverage"

        args = []

        return self.transport.subscribe(
            topic_prefix, args, CrossLeverageEventCallbackWrapper(callback))

    def margin_mode(self, callback: MarginModeEventCallback) -> str:
        topic_prefix = "/contract/marginMode"

        args = []

        return self.transport.subscribe(
            topic_prefix, args, MarginModeEventCallbackWrapper(callback))

    def order(self, symbol: str, callback: OrderEventCallback) -> str:
        topic_prefix = "/contractMarket/tradeOrders"

        args = [symbol]

        return self.transport.subscribe(topic_prefix, args,
                                        OrderEventCallbackWrapper(callback))

    def position(self, symbol: str, callback: PositionEventCallback) -> str:
        topic_prefix = "/contract/position"

        args = [symbol]

        return self.transport.subscribe(topic_prefix, args,
                                        PositionEventCallbackWrapper(callback))

    def stop_orders(self, callback: StopOrdersEventCallback) -> str:
        topic_prefix = "/contractMarket/advancedOrders"

        args = []

        return self.transport.subscribe(
            topic_prefix, args, StopOrdersEventCallbackWrapper(callback))

    def unsubscribe(self, id: str):
        self.transport.unsubscribe(id)

    def start(self):
        self.transport.start()

    def stop(self):
        self.transport.stop()

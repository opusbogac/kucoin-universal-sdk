# Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

from abc import ABC, abstractmethod
from typing import Any
from kucoin_universal_sdk.internal.interfaces.transport import Transport
from .model_get_loan_market_interest_rate_req import GetLoanMarketInterestRateReq
from .model_get_loan_market_interest_rate_resp import GetLoanMarketInterestRateResp
from .model_get_loan_market_req import GetLoanMarketReq
from .model_get_loan_market_resp import GetLoanMarketResp
from .model_get_purchase_orders_req import GetPurchaseOrdersReq
from .model_get_purchase_orders_resp import GetPurchaseOrdersResp
from .model_get_redeem_orders_req import GetRedeemOrdersReq
from .model_get_redeem_orders_resp import GetRedeemOrdersResp
from .model_modify_purchase_req import ModifyPurchaseReq
from .model_modify_purchase_resp import ModifyPurchaseResp
from .model_purchase_req import PurchaseReq
from .model_purchase_resp import PurchaseResp
from .model_redeem_req import RedeemReq
from .model_redeem_resp import RedeemResp


class CreditAPI(ABC):

    @abstractmethod
    def modify_purchase(self, req: ModifyPurchaseReq,
                        **kwargs: Any) -> ModifyPurchaseResp:
        """
        summary: Modify Purchase
        description: This API endpoint is used to update the interest rates of subscription orders, which will take effect at the beginning of the next hour.,Please ensure that the funds are in the main(funding) account
        +---------------------+---------+
        | Extra API Info      | Value   |
        +---------------------+---------+
        | API-DOMAIN          | SPOT    |
        | API-CHANNEL         | PRIVATE |
        | API-PERMISSION      | MARGIN  |
        | API-RATE-LIMIT-POOL | SPOT    |
        | API-RATE-LIMIT      | 10      |
        +---------------------+---------+
        """
        pass

    @abstractmethod
    def get_loan_market(self, req: GetLoanMarketReq,
                        **kwargs: Any) -> GetLoanMarketResp:
        """
        summary: Get Loan Market
        description: This API endpoint is used to get the information about the currencies available for lending.
        +---------------------+---------+
        | Extra API Info      | Value   |
        +---------------------+---------+
        | API-DOMAIN          | SPOT    |
        | API-CHANNEL         | PRIVATE |
        | API-PERMISSION      | GENERAL |
        | API-RATE-LIMIT-POOL | SPOT    |
        | API-RATE-LIMIT      | 10      |
        +---------------------+---------+
        """
        pass

    @abstractmethod
    def get_loan_market_interest_rate(
            self, req: GetLoanMarketInterestRateReq,
            **kwargs: Any) -> GetLoanMarketInterestRateResp:
        """
        summary: Get Loan Market Interest Rate
        description: This API endpoint is used to get the interest rates of the margin lending market over the past 7 days.
        +---------------------+--------+
        | Extra API Info      | Value  |
        +---------------------+--------+
        | API-DOMAIN          | SPOT   |
        | API-CHANNEL         | PUBLIC |
        | API-PERMISSION      | NULL   |
        | API-RATE-LIMIT-POOL | PUBLIC |
        | API-RATE-LIMIT      | 5      |
        +---------------------+--------+
        """
        pass

    @abstractmethod
    def get_purchase_orders(self, req: GetPurchaseOrdersReq,
                            **kwargs: Any) -> GetPurchaseOrdersResp:
        """
        summary: Get Purchase Orders
        description: This API endpoint provides pagination query for the purchase orders.
        +---------------------+---------+
        | Extra API Info      | Value   |
        +---------------------+---------+
        | API-DOMAIN          | SPOT    |
        | API-CHANNEL         | PRIVATE |
        | API-PERMISSION      | GENERAL |
        | API-RATE-LIMIT-POOL | SPOT    |
        | API-RATE-LIMIT      | 10      |
        +---------------------+---------+
        """
        pass

    @abstractmethod
    def purchase(self, req: PurchaseReq, **kwargs: Any) -> PurchaseResp:
        """
        summary: Purchase
        description: Invest credit in the market and earn interest
        +---------------------+---------+
        | Extra API Info      | Value   |
        +---------------------+---------+
        | API-DOMAIN          | SPOT    |
        | API-CHANNEL         | PRIVATE |
        | API-PERMISSION      | MARGIN  |
        | API-RATE-LIMIT-POOL | SPOT    |
        | API-RATE-LIMIT      | 15      |
        +---------------------+---------+
        """
        pass

    @abstractmethod
    def get_redeem_orders(self, req: GetRedeemOrdersReq,
                          **kwargs: Any) -> GetRedeemOrdersResp:
        """
        summary: Get Redeem Orders
        description: This API endpoint provides pagination query for the redeem orders.
        +---------------------+---------+
        | Extra API Info      | Value   |
        +---------------------+---------+
        | API-DOMAIN          | SPOT    |
        | API-CHANNEL         | PRIVATE |
        | API-PERMISSION      | GENERAL |
        | API-RATE-LIMIT-POOL | SPOT    |
        | API-RATE-LIMIT      | 10      |
        +---------------------+---------+
        """
        pass

    @abstractmethod
    def redeem(self, req: RedeemReq, **kwargs: Any) -> RedeemResp:
        """
        summary: Redeem
        description: Redeem your loan order
        +---------------------+---------+
        | Extra API Info      | Value   |
        +---------------------+---------+
        | API-DOMAIN          | SPOT    |
        | API-CHANNEL         | PRIVATE |
        | API-PERMISSION      | MARGIN  |
        | API-RATE-LIMIT-POOL | SPOT    |
        | API-RATE-LIMIT      | 15      |
        +---------------------+---------+
        """
        pass


class CreditAPIImpl(CreditAPI):

    def __init__(self, transport: Transport):
        self.transport = transport

    def modify_purchase(self, req: ModifyPurchaseReq,
                        **kwargs: Any) -> ModifyPurchaseResp:
        return self.transport.call("spot", False, "POST",
                                   "/api/v3/lend/purchase/update", req,
                                   ModifyPurchaseResp(), False, **kwargs)

    def get_loan_market(self, req: GetLoanMarketReq,
                        **kwargs: Any) -> GetLoanMarketResp:
        return self.transport.call("spot", False, "GET",
                                   "/api/v3/project/list", req,
                                   GetLoanMarketResp(), False, **kwargs)

    def get_loan_market_interest_rate(
            self, req: GetLoanMarketInterestRateReq,
            **kwargs: Any) -> GetLoanMarketInterestRateResp:
        return self.transport.call("spot", False, "GET",
                                   "/api/v3/project/marketInterestRate", req,
                                   GetLoanMarketInterestRateResp(), False,
                                   **kwargs)

    def get_purchase_orders(self, req: GetPurchaseOrdersReq,
                            **kwargs: Any) -> GetPurchaseOrdersResp:
        return self.transport.call("spot", False, "GET",
                                   "/api/v3/purchase/orders", req,
                                   GetPurchaseOrdersResp(), False, **kwargs)

    def purchase(self, req: PurchaseReq, **kwargs: Any) -> PurchaseResp:
        return self.transport.call("spot", False, "POST", "/api/v3/purchase",
                                   req, PurchaseResp(), False, **kwargs)

    def get_redeem_orders(self, req: GetRedeemOrdersReq,
                          **kwargs: Any) -> GetRedeemOrdersResp:
        return self.transport.call("spot", False, "GET",
                                   "/api/v3/redeem/orders", req,
                                   GetRedeemOrdersResp(), False, **kwargs)

    def redeem(self, req: RedeemReq, **kwargs: Any) -> RedeemResp:
        return self.transport.call("spot", False, "POST", "/api/v3/redeem",
                                   req, RedeemResp(), False, **kwargs)

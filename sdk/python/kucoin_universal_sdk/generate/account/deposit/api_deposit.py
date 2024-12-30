# Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

from abc import ABC, abstractmethod
from typing import Any
from kucoin_universal_sdk.internal.interfaces.transport import Transport
from .model_add_deposit_address_v1_req import AddDepositAddressV1Req
from .model_add_deposit_address_v1_resp import AddDepositAddressV1Resp
from .model_add_deposit_address_v3_req import AddDepositAddressV3Req
from .model_add_deposit_address_v3_resp import AddDepositAddressV3Resp
from .model_get_deposit_address_v1_req import GetDepositAddressV1Req
from .model_get_deposit_address_v1_resp import GetDepositAddressV1Resp
from .model_get_deposit_address_v2_req import GetDepositAddressV2Req
from .model_get_deposit_address_v2_resp import GetDepositAddressV2Resp
from .model_get_deposit_address_v3_req import GetDepositAddressV3Req
from .model_get_deposit_address_v3_resp import GetDepositAddressV3Resp
from .model_get_deposit_history_old_req import GetDepositHistoryOldReq
from .model_get_deposit_history_old_resp import GetDepositHistoryOldResp
from .model_get_deposit_history_req import GetDepositHistoryReq
from .model_get_deposit_history_resp import GetDepositHistoryResp
from typing_extensions import deprecated


class DepositAPI(ABC):

    @abstractmethod
    @deprecated('')
    def get_deposit_address_v1(self, req: GetDepositAddressV1Req,
                               **kwargs: Any) -> GetDepositAddressV1Resp:
        """
        summary: Get Deposit Addresses - V1
        description: Get all deposit addresses for the currency you intend to deposit. If the returned data is empty, you may need to Add Deposit Address first.
        +---------------------+------------+
        | Extra API Info      | Value      |
        +---------------------+------------+
        | API-DOMAIN          | SPOT       |
        | API-CHANNEL         | PRIVATE    |
        | API-PERMISSION      | GENERAL    |
        | API-RATE-LIMIT-POOL | MANAGEMENT |
        | API-RATE-LIMIT      | 5          |
        +---------------------+------------+
        """
        pass

    @abstractmethod
    @deprecated('')
    def add_deposit_address_v1(self, req: AddDepositAddressV1Req,
                               **kwargs: Any) -> AddDepositAddressV1Resp:
        """
        summary: Add Deposit Address - V1
        description: Request via this endpoint to create a deposit address for a currency you intend to deposit.
        +---------------------+------------+
        | Extra API Info      | Value      |
        +---------------------+------------+
        | API-DOMAIN          | SPOT       |
        | API-CHANNEL         | PRIVATE    |
        | API-PERMISSION      | GENERAL    |
        | API-RATE-LIMIT-POOL | MANAGEMENT |
        | API-RATE-LIMIT      | 20         |
        +---------------------+------------+
        """
        pass

    @abstractmethod
    def get_deposit_history(self, req: GetDepositHistoryReq,
                            **kwargs: Any) -> GetDepositHistoryResp:
        """
        summary: Get Deposit History
        description: Request via this endpoint to get deposit list Items are paginated and sorted to show the latest first. See the Pagination section for retrieving additional entries after the first page.
        +---------------------+------------+
        | Extra API Info      | Value      |
        +---------------------+------------+
        | API-DOMAIN          | SPOT       |
        | API-CHANNEL         | PRIVATE    |
        | API-PERMISSION      | GENERAL    |
        | API-RATE-LIMIT-POOL | MANAGEMENT |
        | API-RATE-LIMIT      | 5          |
        +---------------------+------------+
        """
        pass

    @abstractmethod
    @deprecated('')
    def get_deposit_history_old(self, req: GetDepositHistoryOldReq,
                                **kwargs: Any) -> GetDepositHistoryOldResp:
        """
        summary: Get Deposit History - Old
        description: Request via this endpoint to get the V1 historical deposits list on KuCoin. The return value is the data after Pagination, sorted in descending order according to time.
        +---------------------+------------+
        | Extra API Info      | Value      |
        +---------------------+------------+
        | API-DOMAIN          | SPOT       |
        | API-CHANNEL         | PRIVATE    |
        | API-PERMISSION      | GENERAL    |
        | API-RATE-LIMIT-POOL | MANAGEMENT |
        | API-RATE-LIMIT      | 5          |
        +---------------------+------------+
        """
        pass

    @abstractmethod
    @deprecated('')
    def get_deposit_address_v2(self, req: GetDepositAddressV2Req,
                               **kwargs: Any) -> GetDepositAddressV2Resp:
        """
        summary: Get Deposit Addresses(V2)
        description: Get all deposit addresses for the currency you intend to deposit. If the returned data is empty, you may need to Add Deposit Address first.
        +---------------------+------------+
        | Extra API Info      | Value      |
        +---------------------+------------+
        | API-DOMAIN          | SPOT       |
        | API-CHANNEL         | PRIVATE    |
        | API-PERMISSION      | GENERAL    |
        | API-RATE-LIMIT-POOL | MANAGEMENT |
        | API-RATE-LIMIT      | 5          |
        +---------------------+------------+
        """
        pass

    @abstractmethod
    def add_deposit_address_v3(self, req: AddDepositAddressV3Req,
                               **kwargs: Any) -> AddDepositAddressV3Resp:
        """
        summary: Add Deposit Address(V3)
        description: Request via this endpoint to create a deposit address for a currency you intend to deposit.
        +---------------------+------------+
        | Extra API Info      | Value      |
        +---------------------+------------+
        | API-DOMAIN          | SPOT       |
        | API-CHANNEL         | PRIVATE    |
        | API-PERMISSION      | GENERAL    |
        | API-RATE-LIMIT-POOL | MANAGEMENT |
        | API-RATE-LIMIT      | 20         |
        +---------------------+------------+
        """
        pass

    @abstractmethod
    def get_deposit_address_v3(self, req: GetDepositAddressV3Req,
                               **kwargs: Any) -> GetDepositAddressV3Resp:
        """
        summary: Get Deposit Address(V3)
        description: Get all deposit addresses for the currency you intend to deposit. If the returned data is empty, you may need to Add Deposit Address first.
        +---------------------+------------+
        | Extra API Info      | Value      |
        +---------------------+------------+
        | API-DOMAIN          | SPOT       |
        | API-CHANNEL         | PRIVATE    |
        | API-PERMISSION      | GENERAL    |
        | API-RATE-LIMIT-POOL | MANAGEMENT |
        | API-RATE-LIMIT      | 5          |
        +---------------------+------------+
        """
        pass


class DepositAPIImpl(DepositAPI):

    def __init__(self, transport: Transport):
        self.transport = transport

    def get_deposit_address_v1(self, req: GetDepositAddressV1Req,
                               **kwargs: Any) -> GetDepositAddressV1Resp:
        return self.transport.call("spot", False, "GET",
                                   "/api/v1/deposit-addresses", req,
                                   GetDepositAddressV1Resp(), False, **kwargs)

    def add_deposit_address_v1(self, req: AddDepositAddressV1Req,
                               **kwargs: Any) -> AddDepositAddressV1Resp:
        return self.transport.call("spot", False, "POST",
                                   "/api/v1/deposit-addresses", req,
                                   AddDepositAddressV1Resp(), False, **kwargs)

    def get_deposit_history(self, req: GetDepositHistoryReq,
                            **kwargs: Any) -> GetDepositHistoryResp:
        return self.transport.call("spot", False, "GET",
                                   "/api/v1/deposits", req,
                                   GetDepositHistoryResp(), False, **kwargs)

    def get_deposit_history_old(self, req: GetDepositHistoryOldReq,
                                **kwargs: Any) -> GetDepositHistoryOldResp:
        return self.transport.call("spot", False, "GET",
                                   "/api/v1/hist-deposits", req,
                                   GetDepositHistoryOldResp(), False, **kwargs)

    def get_deposit_address_v2(self, req: GetDepositAddressV2Req,
                               **kwargs: Any) -> GetDepositAddressV2Resp:
        return self.transport.call("spot", False, "GET",
                                   "/api/v2/deposit-addresses", req,
                                   GetDepositAddressV2Resp(), False, **kwargs)

    def add_deposit_address_v3(self, req: AddDepositAddressV3Req,
                               **kwargs: Any) -> AddDepositAddressV3Resp:
        return self.transport.call("spot", False, "POST",
                                   "/api/v3/deposit-address/create", req,
                                   AddDepositAddressV3Resp(), False, **kwargs)

    def get_deposit_address_v3(self, req: GetDepositAddressV3Req,
                               **kwargs: Any) -> GetDepositAddressV3Resp:
        return self.transport.call("spot", False, "GET",
                                   "/api/v3/deposit-addresses", req,
                                   GetDepositAddressV3Resp(), False, **kwargs)

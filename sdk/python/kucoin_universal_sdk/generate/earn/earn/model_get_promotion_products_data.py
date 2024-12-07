# coding: utf-8

# Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

from __future__ import annotations
import pprint
import json

from enum import Enum
from pydantic import BaseModel, ConfigDict, Field
from typing import Any, ClassVar, Dict, List, Optional


class GetPromotionProductsData(BaseModel):
    """
    GetPromotionProductsData

    Attributes:
        id (str): Product ID
        currency (str): currency
        category (CategoryEnum): Product category: ACTIVITY
        type (TypeEnum): Product subtype: TIME (fixed), DEMAND (demand)
        precision (int): Maximum precision supported
        product_upper_limit (str): Products total subscribe amount
        user_upper_limit (str): Max user subscribe amount
        user_lower_limit (str): Min user subscribe amount
        redeem_period (int): Redemption waiting period (days)
        lock_start_time (int): Product earliest interest start time, in milliseconds
        lock_end_time (int): Product earliest interest end time, in milliseconds
        apply_start_time (int): Subscription start time, in milliseconds
        apply_end_time (int): Subscription end time, in milliseconds
        return_rate (str): Annualized Rate of Return, for example, 0.035 is equal to 3.5% annualized rate of return
        income_currency (str): Income currency
        early_redeem_supported (EarlyRedeemSupportedEnum): Whether the fixed product supports early redemption: 0 (no), 1 (yes)
        product_remain_amount (str): Products remain subscribe amount
        status (StatusEnum): Product status: ONGOING(Subscription in progress), PENDING(Preheating Subscription), FULL(Subscribed), INTERESTING (Interest in progress)
        redeem_type (RedeemTypeEnum): Redemption channel: MANUAL (manual redemption), TRANS_DEMAND (transfer to corresponding demand product upon maturity), AUTO (redeem to funding account upon maturity)
        income_release_type (IncomeReleaseTypeEnum): Income release type: DAILY (daily release), AFTER (release after product ends)
        interest_date (int): Most recent interest date(millisecond)
        duration (int): Product duration (days)
        new_user_only (NewUserOnlyEnum): Whether the product is exclusive for new users: 0 (no), 1 (yes)
    """

    class CategoryEnum(Enum):
        """
        Attributes:
            ACTIVITY: 
        """
        ACTIVITY = 'ACTIVITY'

    class TypeEnum(Enum):
        """
        Attributes:
            TIME: fixed
            DEMAND: demand
        """
        TIME = 'TIME'
        DEMAND = 'DEMAND'

    class EarlyRedeemSupportedEnum(Enum):
        """
        Attributes:
            T_0: 
            T_1: 
        """
        T_0 = 0
        T_1 = 1

    class StatusEnum(Enum):
        """
        Attributes:
            ONGOING: 
            PENDING: 
            FULL: 
            INTERESTING: 
        """
        ONGOING = 'ONGOING'
        PENDING = 'PENDING'
        FULL = 'FULL'
        INTERESTING = 'INTERESTING'

    class RedeemTypeEnum(Enum):
        """
        Attributes:
            MANUAL: 
            TRANS_DEMAND: 
            AUTO: 
        """
        MANUAL = 'MANUAL'
        TRANS_DEMAND = 'TRANS_DEMAND'
        AUTO = 'AUTO'

    class IncomeReleaseTypeEnum(Enum):
        """
        Attributes:
            DAILY: 
            AFTER: 
        """
        DAILY = 'DAILY'
        AFTER = 'AFTER'

    class NewUserOnlyEnum(Enum):
        """
        Attributes:
            T_0: 
            T_1: 
        """
        T_0 = 0
        T_1 = 1

    id: Optional[str] = Field(default=None, description="Product ID")
    currency: Optional[str] = Field(default=None, description="currency")
    category: Optional[CategoryEnum] = Field(
        default=None, description="Product category: ACTIVITY")
    type: Optional[TypeEnum] = Field(
        default=None,
        description="Product subtype: TIME (fixed), DEMAND (demand)")
    precision: Optional[int] = Field(default=None,
                                     description="Maximum precision supported")
    product_upper_limit: Optional[str] = Field(
        default=None,
        description="Products total subscribe amount",
        alias="productUpperLimit")
    user_upper_limit: Optional[str] = Field(
        default=None,
        description="Max user subscribe amount",
        alias="userUpperLimit")
    user_lower_limit: Optional[str] = Field(
        default=None,
        description="Min user subscribe amount",
        alias="userLowerLimit")
    redeem_period: Optional[int] = Field(
        default=None,
        description="Redemption waiting period (days)",
        alias="redeemPeriod")
    lock_start_time: Optional[int] = Field(
        default=None,
        description="Product earliest interest start time, in milliseconds",
        alias="lockStartTime")
    lock_end_time: Optional[int] = Field(
        default=None,
        description="Product earliest interest end time, in milliseconds",
        alias="lockEndTime")
    apply_start_time: Optional[int] = Field(
        default=None,
        description="Subscription start time, in milliseconds",
        alias="applyStartTime")
    apply_end_time: Optional[int] = Field(
        default=None,
        description="Subscription end time, in milliseconds",
        alias="applyEndTime")
    return_rate: Optional[str] = Field(
        default=None,
        description=
        "Annualized Rate of Return, for example, 0.035 is equal to 3.5% annualized rate of return",
        alias="returnRate")
    income_currency: Optional[str] = Field(default=None,
                                           description="Income currency",
                                           alias="incomeCurrency")
    early_redeem_supported: Optional[EarlyRedeemSupportedEnum] = Field(
        default=None,
        description=
        "Whether the fixed product supports early redemption: 0 (no), 1 (yes)",
        alias="earlyRedeemSupported")
    product_remain_amount: Optional[str] = Field(
        default=None,
        description="Products remain subscribe amount",
        alias="productRemainAmount")
    status: Optional[StatusEnum] = Field(
        default=None,
        description=
        "Product status: ONGOING(Subscription in progress), PENDING(Preheating Subscription), FULL(Subscribed), INTERESTING (Interest in progress)"
    )
    redeem_type: Optional[RedeemTypeEnum] = Field(
        default=None,
        description=
        "Redemption channel: MANUAL (manual redemption), TRANS_DEMAND (transfer to corresponding demand product upon maturity), AUTO (redeem to funding account upon maturity)",
        alias="redeemType")
    income_release_type: Optional[IncomeReleaseTypeEnum] = Field(
        default=None,
        description=
        "Income release type: DAILY (daily release), AFTER (release after product ends)",
        alias="incomeReleaseType")
    interest_date: Optional[int] = Field(
        default=None,
        description="Most recent interest date(millisecond)",
        alias="interestDate")
    duration: Optional[int] = Field(default=None,
                                    description="Product duration (days)")
    new_user_only: Optional[NewUserOnlyEnum] = Field(
        default=None,
        description=
        "Whether the product is exclusive for new users: 0 (no), 1 (yes)",
        alias="newUserOnly")

    __properties: ClassVar[List[str]] = [
        "id", "currency", "category", "type", "precision", "productUpperLimit",
        "userUpperLimit", "userLowerLimit", "redeemPeriod", "lockStartTime",
        "lockEndTime", "applyStartTime", "applyEndTime", "returnRate",
        "incomeCurrency", "earlyRedeemSupported", "productRemainAmount",
        "status", "redeemType", "incomeReleaseType", "interestDate",
        "duration", "newUserOnly"
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
    def from_json(cls, json_str: str) -> Optional[GetPromotionProductsData]:
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
                               Any]]) -> Optional[GetPromotionProductsData]:
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "id":
            obj.get("id"),
            "currency":
            obj.get("currency"),
            "category":
            obj.get("category"),
            "type":
            obj.get("type"),
            "precision":
            obj.get("precision"),
            "productUpperLimit":
            obj.get("productUpperLimit"),
            "userUpperLimit":
            obj.get("userUpperLimit"),
            "userLowerLimit":
            obj.get("userLowerLimit"),
            "redeemPeriod":
            obj.get("redeemPeriod"),
            "lockStartTime":
            obj.get("lockStartTime"),
            "lockEndTime":
            obj.get("lockEndTime"),
            "applyStartTime":
            obj.get("applyStartTime"),
            "applyEndTime":
            obj.get("applyEndTime"),
            "returnRate":
            obj.get("returnRate"),
            "incomeCurrency":
            obj.get("incomeCurrency"),
            "earlyRedeemSupported":
            obj.get("earlyRedeemSupported"),
            "productRemainAmount":
            obj.get("productRemainAmount"),
            "status":
            obj.get("status"),
            "redeemType":
            obj.get("redeemType"),
            "incomeReleaseType":
            obj.get("incomeReleaseType"),
            "interestDate":
            obj.get("interestDate"),
            "duration":
            obj.get("duration"),
            "newUserOnly":
            obj.get("newUserOnly")
        })
        return _obj

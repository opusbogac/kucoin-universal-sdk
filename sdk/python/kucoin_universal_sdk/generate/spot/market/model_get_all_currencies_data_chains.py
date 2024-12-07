# coding: utf-8

# Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

from __future__ import annotations
import pprint
import json

from pydantic import BaseModel, ConfigDict, Field
from typing import Any, ClassVar, Dict, List, Optional


class GetAllCurrenciesDataChains(BaseModel):
    """
    GetAllCurrenciesDataChains

    Attributes:
        chain_name (str): chain name of currency
        withdrawal_min_size (str): Minimum withdrawal amount
        deposit_min_size (str): Minimum deposit amount
        withdraw_fee_rate (str): withdraw fee rate
        withdrawal_min_fee (str): Minimum fees charged for withdrawal
        is_withdraw_enabled (bool): Support withdrawal or not
        is_deposit_enabled (bool): Support deposit or not
        confirms (int): Number of block confirmations
        pre_confirms (int): The number of blocks (confirmations) for advance on-chain verification
        contract_address (str): Contract address
        withdraw_precision (int): Withdrawal precision bit, indicating the maximum supported length after the decimal point of the withdrawal amount
        max_withdraw (str): Maximum amount of single withdrawal
        max_deposit (str): Maximum amount of single deposit (only applicable to Lightning Network)
        need_tag (bool): whether memo/tag is needed
        chain_id (str): chain id of currency
        deposit_fee_rate (str): deposit fee rate (some currencies have this param, the default is empty)
        withdraw_max_fee (str): withdraw max fee(some currencies have this param, the default is empty)
        deposit_tier_fee (str): 
    """

    chain_name: Optional[str] = Field(default=None,
                                      description="chain name of currency",
                                      alias="chainName")
    withdrawal_min_size: Optional[str] = Field(
        default=None,
        description="Minimum withdrawal amount",
        alias="withdrawalMinSize")
    deposit_min_size: Optional[str] = Field(
        default=None,
        description="Minimum deposit amount",
        alias="depositMinSize")
    withdraw_fee_rate: Optional[str] = Field(default=None,
                                             description="withdraw fee rate",
                                             alias="withdrawFeeRate")
    withdrawal_min_fee: Optional[str] = Field(
        default=None,
        description="Minimum fees charged for withdrawal",
        alias="withdrawalMinFee")
    is_withdraw_enabled: Optional[bool] = Field(
        default=None,
        description="Support withdrawal or not",
        alias="isWithdrawEnabled")
    is_deposit_enabled: Optional[bool] = Field(
        default=None,
        description="Support deposit or not",
        alias="isDepositEnabled")
    confirms: Optional[int] = Field(
        default=None, description="Number of block confirmations")
    pre_confirms: Optional[int] = Field(
        default=None,
        description=
        "The number of blocks (confirmations) for advance on-chain verification",
        alias="preConfirms")
    contract_address: Optional[str] = Field(default=None,
                                            description="Contract address",
                                            alias="contractAddress")
    withdraw_precision: Optional[int] = Field(
        default=None,
        description=
        "Withdrawal precision bit, indicating the maximum supported length after the decimal point of the withdrawal amount",
        alias="withdrawPrecision")
    max_withdraw: Optional[str] = Field(
        default=None,
        description="Maximum amount of single withdrawal",
        alias="maxWithdraw")
    max_deposit: Optional[str] = Field(
        default=None,
        description=
        "Maximum amount of single deposit (only applicable to Lightning Network)",
        alias="maxDeposit")
    need_tag: Optional[bool] = Field(default=None,
                                     description="whether memo/tag is needed",
                                     alias="needTag")
    chain_id: Optional[str] = Field(default=None,
                                    description="chain id of currency",
                                    alias="chainId")
    deposit_fee_rate: Optional[str] = Field(
        default=None,
        description=
        "deposit fee rate (some currencies have this param, the default is empty)",
        alias="depositFeeRate")
    withdraw_max_fee: Optional[str] = Field(
        default=None,
        description=
        "withdraw max fee(some currencies have this param, the default is empty)",
        alias="withdrawMaxFee")
    deposit_tier_fee: Optional[str] = Field(default=None,
                                            alias="depositTierFee")

    __properties: ClassVar[List[str]] = [
        "chainName", "withdrawalMinSize", "depositMinSize", "withdrawFeeRate",
        "withdrawalMinFee", "isWithdrawEnabled", "isDepositEnabled",
        "confirms", "preConfirms", "contractAddress", "withdrawPrecision",
        "maxWithdraw", "maxDeposit", "needTag", "chainId", "depositFeeRate",
        "withdrawMaxFee", "depositTierFee"
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
    def from_json(cls, json_str: str) -> Optional[GetAllCurrenciesDataChains]:
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
                               Any]]) -> Optional[GetAllCurrenciesDataChains]:
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "chainName":
            obj.get("chainName"),
            "withdrawalMinSize":
            obj.get("withdrawalMinSize"),
            "depositMinSize":
            obj.get("depositMinSize"),
            "withdrawFeeRate":
            obj.get("withdrawFeeRate"),
            "withdrawalMinFee":
            obj.get("withdrawalMinFee"),
            "isWithdrawEnabled":
            obj.get("isWithdrawEnabled"),
            "isDepositEnabled":
            obj.get("isDepositEnabled"),
            "confirms":
            obj.get("confirms"),
            "preConfirms":
            obj.get("preConfirms"),
            "contractAddress":
            obj.get("contractAddress"),
            "withdrawPrecision":
            obj.get("withdrawPrecision"),
            "maxWithdraw":
            obj.get("maxWithdraw"),
            "maxDeposit":
            obj.get("maxDeposit"),
            "needTag":
            obj.get("needTag"),
            "chainId":
            obj.get("chainId"),
            "depositFeeRate":
            obj.get("depositFeeRate"),
            "withdrawMaxFee":
            obj.get("withdrawMaxFee"),
            "depositTierFee":
            obj.get("depositTierFee")
        })
        return _obj

// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package account

import (
	"github.com/Kucoin/kucoin-universal-sdk/sdk/golang/pkg/types"
)

// GetCrossMarginAccountResp struct for GetCrossMarginAccountResp
type GetCrossMarginAccountResp struct {
	// common response
	CommonResponse *types.RestResponse
	// Total Assets in Quote Currency
	TotalAssetOfQuoteCurrency string `json:"totalAssetOfQuoteCurrency,omitempty"`
	// Total Liability in Quote Currency
	TotalLiabilityOfQuoteCurrency string `json:"totalLiabilityOfQuoteCurrency,omitempty"`
	// debt ratio
	DebtRatio string `json:"debtRatio,omitempty"`
	// Position status; EFFECTIVE-effective, BANKRUPTCY-bankruptcy liquidation, LIQUIDATION-closing, REPAY-repayment, BORROW borrowing
	Status string `json:"status,omitempty"`
	// Margin account list
	Accounts []GetCrossMarginAccountAccounts `json:"accounts,omitempty"`
}

// NewGetCrossMarginAccountResp instantiates a new GetCrossMarginAccountResp object
// This constructor will assign default values to properties that have it defined
func NewGetCrossMarginAccountResp(totalAssetOfQuoteCurrency string, totalLiabilityOfQuoteCurrency string, debtRatio string, status string, accounts []GetCrossMarginAccountAccounts) *GetCrossMarginAccountResp {
	this := GetCrossMarginAccountResp{}
	this.TotalAssetOfQuoteCurrency = totalAssetOfQuoteCurrency
	this.TotalLiabilityOfQuoteCurrency = totalLiabilityOfQuoteCurrency
	this.DebtRatio = debtRatio
	this.Status = status
	this.Accounts = accounts
	return &this
}

// NewGetCrossMarginAccountRespWithDefaults instantiates a new GetCrossMarginAccountResp object
// This constructor will only assign default values to properties that have it defined,
func NewGetCrossMarginAccountRespWithDefaults() *GetCrossMarginAccountResp {
	this := GetCrossMarginAccountResp{}
	return &this
}

func (o *GetCrossMarginAccountResp) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["totalAssetOfQuoteCurrency"] = o.TotalAssetOfQuoteCurrency
	toSerialize["totalLiabilityOfQuoteCurrency"] = o.TotalLiabilityOfQuoteCurrency
	toSerialize["debtRatio"] = o.DebtRatio
	toSerialize["status"] = o.Status
	toSerialize["accounts"] = o.Accounts
	return toSerialize
}

func (o *GetCrossMarginAccountResp) SetCommonResponse(response *types.RestResponse) {
	o.CommonResponse = response
}

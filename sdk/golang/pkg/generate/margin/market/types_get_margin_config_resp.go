// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package market

import (
	"github.com/Kucoin/kucoin-universal-sdk/sdk/golang/pkg/types"
)

// GetMarginConfigResp struct for GetMarginConfigResp
type GetMarginConfigResp struct {
	// common response
	CommonResponse *types.RestResponse
	// Available currencies for margin trade
	CurrencyList []string `json:"currencyList,omitempty"`
	// Max leverage available
	MaxLeverage int32 `json:"maxLeverage,omitempty"`
	// The warning debt ratio of the forced liquidation
	WarningDebtRatio string `json:"warningDebtRatio,omitempty"`
	// The debt ratio of the forced liquidation
	LiqDebtRatio string `json:"liqDebtRatio,omitempty"`
}

// NewGetMarginConfigResp instantiates a new GetMarginConfigResp object
// This constructor will assign default values to properties that have it defined
func NewGetMarginConfigResp(currencyList []string, maxLeverage int32, warningDebtRatio string, liqDebtRatio string) *GetMarginConfigResp {
	this := GetMarginConfigResp{}
	this.CurrencyList = currencyList
	this.MaxLeverage = maxLeverage
	this.WarningDebtRatio = warningDebtRatio
	this.LiqDebtRatio = liqDebtRatio
	return &this
}

// NewGetMarginConfigRespWithDefaults instantiates a new GetMarginConfigResp object
// This constructor will only assign default values to properties that have it defined,
func NewGetMarginConfigRespWithDefaults() *GetMarginConfigResp {
	this := GetMarginConfigResp{}
	return &this
}

func (o *GetMarginConfigResp) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["currencyList"] = o.CurrencyList
	toSerialize["maxLeverage"] = o.MaxLeverage
	toSerialize["warningDebtRatio"] = o.WarningDebtRatio
	toSerialize["liqDebtRatio"] = o.LiqDebtRatio
	return toSerialize
}

func (o *GetMarginConfigResp) SetCommonResponse(response *types.RestResponse) {
	o.CommonResponse = response
}

// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package earn

import (
	"github.com/Kucoin/kucoin-universal-sdk/sdk/golang/pkg/types"
)

// GetRedeemPreviewResp struct for GetRedeemPreviewResp
type GetRedeemPreviewResp struct {
	// common response
	CommonResponse *types.RestResponse
	// currency
	Currency string `json:"currency,omitempty"`
	// Expected redemption amount
	RedeemAmount string `json:"redeemAmount,omitempty"`
	// Penalty interest amount, incurred for early redemption of fixed-term products
	PenaltyInterestAmount string `json:"penaltyInterestAmount,omitempty"`
	// Redemption waiting period (days)
	RedeemPeriod int32 `json:"redeemPeriod,omitempty"`
	// Expected deliver time (milliseconds)
	DeliverTime int64 `json:"deliverTime,omitempty"`
	// Whether manual redemption is possible
	ManualRedeemable bool `json:"manualRedeemable,omitempty"`
	// Whether the entire holding must be redeemed, required for early redemption of fixed-term products
	RedeemAll bool `json:"redeemAll,omitempty"`
}

// NewGetRedeemPreviewResp instantiates a new GetRedeemPreviewResp object
// This constructor will assign default values to properties that have it defined
func NewGetRedeemPreviewResp(currency string, redeemAmount string, penaltyInterestAmount string, redeemPeriod int32, deliverTime int64, manualRedeemable bool, redeemAll bool) *GetRedeemPreviewResp {
	this := GetRedeemPreviewResp{}
	this.Currency = currency
	this.RedeemAmount = redeemAmount
	this.PenaltyInterestAmount = penaltyInterestAmount
	this.RedeemPeriod = redeemPeriod
	this.DeliverTime = deliverTime
	this.ManualRedeemable = manualRedeemable
	this.RedeemAll = redeemAll
	return &this
}

// NewGetRedeemPreviewRespWithDefaults instantiates a new GetRedeemPreviewResp object
// This constructor will only assign default values to properties that have it defined,
func NewGetRedeemPreviewRespWithDefaults() *GetRedeemPreviewResp {
	this := GetRedeemPreviewResp{}
	return &this
}

func (o *GetRedeemPreviewResp) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["currency"] = o.Currency
	toSerialize["redeemAmount"] = o.RedeemAmount
	toSerialize["penaltyInterestAmount"] = o.PenaltyInterestAmount
	toSerialize["redeemPeriod"] = o.RedeemPeriod
	toSerialize["deliverTime"] = o.DeliverTime
	toSerialize["manualRedeemable"] = o.ManualRedeemable
	toSerialize["redeemAll"] = o.RedeemAll
	return toSerialize
}

func (o *GetRedeemPreviewResp) SetCommonResponse(response *types.RestResponse) {
	o.CommonResponse = response
}

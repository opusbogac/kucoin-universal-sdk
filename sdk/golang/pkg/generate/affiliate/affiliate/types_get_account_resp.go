// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package affiliate

import (
	"github.com/Kucoin/kucoin-universal-sdk/sdk/golang/pkg/types"
)

// GetAccountResp struct for GetAccountResp
type GetAccountResp struct {
	// common response
	CommonResponse *types.RestResponse
	// Master account UID
	ParentUid string `json:"parentUid,omitempty"`
	// Loan Orders
	Orders []GetAccountOrders `json:"orders,omitempty"`
	Ltv    GetAccountLtv      `json:"ltv,omitempty"`
	// Total Margin Amount (USDT)
	TotalMarginAmount string `json:"totalMarginAmount,omitempty"`
	// Total Maintenance Margin for Restricted Transfers (USDT)
	TransferMarginAmount string `json:"transferMarginAmount,omitempty"`
	// Margins
	Margins []GetAccountMargins `json:"margins,omitempty"`
}

// NewGetAccountResp instantiates a new GetAccountResp object
// This constructor will assign default values to properties that have it defined
func NewGetAccountResp(parentUid string, orders []GetAccountOrders, ltv GetAccountLtv, totalMarginAmount string, transferMarginAmount string, margins []GetAccountMargins) *GetAccountResp {
	this := GetAccountResp{}
	this.ParentUid = parentUid
	this.Orders = orders
	this.Ltv = ltv
	this.TotalMarginAmount = totalMarginAmount
	this.TransferMarginAmount = transferMarginAmount
	this.Margins = margins
	return &this
}

// NewGetAccountRespWithDefaults instantiates a new GetAccountResp object
// This constructor will only assign default values to properties that have it defined,
func NewGetAccountRespWithDefaults() *GetAccountResp {
	this := GetAccountResp{}
	return &this
}

func (o *GetAccountResp) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["parentUid"] = o.ParentUid
	toSerialize["orders"] = o.Orders
	toSerialize["ltv"] = o.Ltv
	toSerialize["totalMarginAmount"] = o.TotalMarginAmount
	toSerialize["transferMarginAmount"] = o.TransferMarginAmount
	toSerialize["margins"] = o.Margins
	return toSerialize
}

func (o *GetAccountResp) SetCommonResponse(response *types.RestResponse) {
	o.CommonResponse = response
}

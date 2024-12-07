// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package order

import (
	"github.com/Kucoin/kucoin-universal-sdk/sdk/golang/pkg/types"
)

// CancelOrderByOrderIdSyncResp struct for CancelOrderByOrderIdSyncResp
type CancelOrderByOrderIdSyncResp struct {
	// common response
	CommonResponse *types.RestResponse
	// order id
	OrderId string `json:"orderId,omitempty"`
	// original order size
	OriginSize string `json:"originSize,omitempty"`
	// deal size
	DealSize string `json:"dealSize,omitempty"`
	// remain size
	RemainSize string `json:"remainSize,omitempty"`
	// Cumulative canceled size
	CanceledSize string `json:"canceledSize,omitempty"`
	// Order Status. open：order is active; done：order has been completed
	Status string `json:"status,omitempty"`
}

// NewCancelOrderByOrderIdSyncResp instantiates a new CancelOrderByOrderIdSyncResp object
// This constructor will assign default values to properties that have it defined
func NewCancelOrderByOrderIdSyncResp(orderId string, originSize string, dealSize string, remainSize string, canceledSize string, status string) *CancelOrderByOrderIdSyncResp {
	this := CancelOrderByOrderIdSyncResp{}
	this.OrderId = orderId
	this.OriginSize = originSize
	this.DealSize = dealSize
	this.RemainSize = remainSize
	this.CanceledSize = canceledSize
	this.Status = status
	return &this
}

// NewCancelOrderByOrderIdSyncRespWithDefaults instantiates a new CancelOrderByOrderIdSyncResp object
// This constructor will only assign default values to properties that have it defined,
func NewCancelOrderByOrderIdSyncRespWithDefaults() *CancelOrderByOrderIdSyncResp {
	this := CancelOrderByOrderIdSyncResp{}
	return &this
}

func (o *CancelOrderByOrderIdSyncResp) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["orderId"] = o.OrderId
	toSerialize["originSize"] = o.OriginSize
	toSerialize["dealSize"] = o.DealSize
	toSerialize["remainSize"] = o.RemainSize
	toSerialize["canceledSize"] = o.CanceledSize
	toSerialize["status"] = o.Status
	return toSerialize
}

func (o *CancelOrderByOrderIdSyncResp) SetCommonResponse(response *types.RestResponse) {
	o.CommonResponse = response
}

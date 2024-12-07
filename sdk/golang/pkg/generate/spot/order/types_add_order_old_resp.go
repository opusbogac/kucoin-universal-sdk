// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package order

import (
	"github.com/Kucoin/kucoin-universal-sdk/sdk/golang/pkg/types"
)

// AddOrderOldResp struct for AddOrderOldResp
type AddOrderOldResp struct {
	// common response
	CommonResponse *types.RestResponse
	// The unique order id generated by the trading system,which can be used later for further actions such as canceling the order.
	OrderId string `json:"orderId,omitempty"`
}

// NewAddOrderOldResp instantiates a new AddOrderOldResp object
// This constructor will assign default values to properties that have it defined
func NewAddOrderOldResp(orderId string) *AddOrderOldResp {
	this := AddOrderOldResp{}
	this.OrderId = orderId
	return &this
}

// NewAddOrderOldRespWithDefaults instantiates a new AddOrderOldResp object
// This constructor will only assign default values to properties that have it defined,
func NewAddOrderOldRespWithDefaults() *AddOrderOldResp {
	this := AddOrderOldResp{}
	return &this
}

func (o *AddOrderOldResp) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["orderId"] = o.OrderId
	return toSerialize
}

func (o *AddOrderOldResp) SetCommonResponse(response *types.RestResponse) {
	o.CommonResponse = response
}

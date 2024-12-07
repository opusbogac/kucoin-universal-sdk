// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package order

import (
	"encoding/json"
	"github.com/Kucoin/kucoin-universal-sdk/sdk/golang/pkg/types"
)

// GetRecentTradeHistoryResp struct for GetRecentTradeHistoryResp
type GetRecentTradeHistoryResp struct {
	// common response
	CommonResponse *types.RestResponse
	Data           []GetRecentTradeHistoryData `json:"data,omitempty"`
}

// NewGetRecentTradeHistoryResp instantiates a new GetRecentTradeHistoryResp object
// This constructor will assign default values to properties that have it defined
func NewGetRecentTradeHistoryResp(data []GetRecentTradeHistoryData) *GetRecentTradeHistoryResp {
	this := GetRecentTradeHistoryResp{}
	this.Data = data
	return &this
}

// NewGetRecentTradeHistoryRespWithDefaults instantiates a new GetRecentTradeHistoryResp object
// This constructor will only assign default values to properties that have it defined,
func NewGetRecentTradeHistoryRespWithDefaults() *GetRecentTradeHistoryResp {
	this := GetRecentTradeHistoryResp{}
	return &this
}

func (o *GetRecentTradeHistoryResp) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["data"] = o.Data
	return toSerialize
}

func (o *GetRecentTradeHistoryResp) UnmarshalJSON(b []byte) error {
	err := json.Unmarshal(b, &o.Data)
	return err
}

func (o *GetRecentTradeHistoryResp) SetCommonResponse(response *types.RestResponse) {
	o.CommonResponse = response
}

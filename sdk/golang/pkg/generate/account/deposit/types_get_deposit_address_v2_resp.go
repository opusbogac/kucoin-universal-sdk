// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package deposit

import (
	"encoding/json"
	"github.com/Kucoin/kucoin-universal-sdk/sdk/golang/pkg/types"
)

// GetDepositAddressV2Resp struct for GetDepositAddressV2Resp
type GetDepositAddressV2Resp struct {
	// common response
	CommonResponse *types.RestResponse
	Data           []GetDepositAddressV2Data `json:"data,omitempty"`
}

// NewGetDepositAddressV2Resp instantiates a new GetDepositAddressV2Resp object
// This constructor will assign default values to properties that have it defined
func NewGetDepositAddressV2Resp(data []GetDepositAddressV2Data) *GetDepositAddressV2Resp {
	this := GetDepositAddressV2Resp{}
	this.Data = data
	return &this
}

// NewGetDepositAddressV2RespWithDefaults instantiates a new GetDepositAddressV2Resp object
// This constructor will only assign default values to properties that have it defined,
func NewGetDepositAddressV2RespWithDefaults() *GetDepositAddressV2Resp {
	this := GetDepositAddressV2Resp{}
	return &this
}

func (o *GetDepositAddressV2Resp) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["data"] = o.Data
	return toSerialize
}

func (o *GetDepositAddressV2Resp) UnmarshalJSON(b []byte) error {
	err := json.Unmarshal(b, &o.Data)
	return err
}

func (o *GetDepositAddressV2Resp) SetCommonResponse(response *types.RestResponse) {
	o.CommonResponse = response
}

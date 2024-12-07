// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package positions

import (
	"encoding/json"
	"github.com/Kucoin/kucoin-universal-sdk/sdk/golang/pkg/types"
)

// ModifyAutoDepositStatusResp struct for ModifyAutoDepositStatusResp
type ModifyAutoDepositStatusResp struct {
	// common response
	CommonResponse *types.RestResponse
	Data           bool `json:"data,omitempty"`
}

// NewModifyAutoDepositStatusResp instantiates a new ModifyAutoDepositStatusResp object
// This constructor will assign default values to properties that have it defined
func NewModifyAutoDepositStatusResp(data bool) *ModifyAutoDepositStatusResp {
	this := ModifyAutoDepositStatusResp{}
	this.Data = data
	return &this
}

// NewModifyAutoDepositStatusRespWithDefaults instantiates a new ModifyAutoDepositStatusResp object
// This constructor will only assign default values to properties that have it defined,
func NewModifyAutoDepositStatusRespWithDefaults() *ModifyAutoDepositStatusResp {
	this := ModifyAutoDepositStatusResp{}
	return &this
}

func (o *ModifyAutoDepositStatusResp) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["data"] = o.Data
	return toSerialize
}

func (o *ModifyAutoDepositStatusResp) UnmarshalJSON(b []byte) error {
	err := json.Unmarshal(b, &o.Data)
	return err
}

func (o *ModifyAutoDepositStatusResp) SetCommonResponse(response *types.RestResponse) {
	o.CommonResponse = response
}

// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package subaccount

import (
	"encoding/json"
	"github.com/Kucoin/kucoin-universal-sdk/sdk/golang/pkg/types"
)

// GetSubAccountApiListResp struct for GetSubAccountApiListResp
type GetSubAccountApiListResp struct {
	// common response
	CommonResponse *types.RestResponse
	Data           []GetSubAccountApiListData `json:"data,omitempty"`
}

// NewGetSubAccountApiListResp instantiates a new GetSubAccountApiListResp object
// This constructor will assign default values to properties that have it defined
func NewGetSubAccountApiListResp(data []GetSubAccountApiListData) *GetSubAccountApiListResp {
	this := GetSubAccountApiListResp{}
	this.Data = data
	return &this
}

// NewGetSubAccountApiListRespWithDefaults instantiates a new GetSubAccountApiListResp object
// This constructor will only assign default values to properties that have it defined,
func NewGetSubAccountApiListRespWithDefaults() *GetSubAccountApiListResp {
	this := GetSubAccountApiListResp{}
	return &this
}

func (o *GetSubAccountApiListResp) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["data"] = o.Data
	return toSerialize
}

func (o *GetSubAccountApiListResp) UnmarshalJSON(b []byte) error {
	err := json.Unmarshal(b, &o.Data)
	return err
}

func (o *GetSubAccountApiListResp) SetCommonResponse(response *types.RestResponse) {
	o.CommonResponse = response
}

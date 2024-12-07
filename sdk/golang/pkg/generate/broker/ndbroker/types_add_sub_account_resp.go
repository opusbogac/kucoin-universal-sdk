// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package ndbroker

import (
	"github.com/Kucoin/kucoin-universal-sdk/sdk/golang/pkg/types"
)

// AddSubAccountResp struct for AddSubAccountResp
type AddSubAccountResp struct {
	// common response
	CommonResponse *types.RestResponse
	// Sub-Account name
	AccountName string `json:"accountName,omitempty"`
	// Sub-Account UID
	Uid string `json:"uid,omitempty"`
	// Creation time, unix timestamp (milliseconds)
	CreatedAt int64 `json:"createdAt,omitempty"`
	// Subaccount VIP level
	Level int32 `json:"level,omitempty"`
}

// NewAddSubAccountResp instantiates a new AddSubAccountResp object
// This constructor will assign default values to properties that have it defined
func NewAddSubAccountResp(accountName string, uid string, createdAt int64, level int32) *AddSubAccountResp {
	this := AddSubAccountResp{}
	this.AccountName = accountName
	this.Uid = uid
	this.CreatedAt = createdAt
	this.Level = level
	return &this
}

// NewAddSubAccountRespWithDefaults instantiates a new AddSubAccountResp object
// This constructor will only assign default values to properties that have it defined,
func NewAddSubAccountRespWithDefaults() *AddSubAccountResp {
	this := AddSubAccountResp{}
	return &this
}

func (o *AddSubAccountResp) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["accountName"] = o.AccountName
	toSerialize["uid"] = o.Uid
	toSerialize["createdAt"] = o.CreatedAt
	toSerialize["level"] = o.Level
	return toSerialize
}

func (o *AddSubAccountResp) SetCommonResponse(response *types.RestResponse) {
	o.CommonResponse = response
}

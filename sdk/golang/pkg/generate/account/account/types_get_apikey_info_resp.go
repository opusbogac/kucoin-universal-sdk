// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package account

import (
	"github.com/Kucoin/kucoin-universal-sdk/sdk/golang/pkg/types"
)

// GetApikeyInfoResp struct for GetApikeyInfoResp
type GetApikeyInfoResp struct {
	// common response
	CommonResponse *types.RestResponse
	// Remarks
	Remark string `json:"remark,omitempty"`
	// Apikey
	ApiKey string `json:"apiKey,omitempty"`
	// API Version
	ApiVersion int32 `json:"apiVersion,omitempty"`
	// Permissions,  possible values: General, Spot, Margin, Futures, InnerTransfer, Transfer, Earn
	Permission string `json:"permission,omitempty"`
	// IP whitelist
	IpWhitelist *string `json:"ipWhitelist,omitempty"`
	// Apikey create time
	CreatedAt int64 `json:"createdAt,omitempty"`
	// Sub-account UID
	Uid int32 `json:"uid,omitempty"`
	// Whether it is the master account.
	IsMaster bool `json:"isMaster,omitempty"`
	// Sub Name, There is no such param for the master account
	SubName *string `json:"subName,omitempty"`
}

// NewGetApikeyInfoResp instantiates a new GetApikeyInfoResp object
// This constructor will assign default values to properties that have it defined
func NewGetApikeyInfoResp(remark string, apiKey string, apiVersion int32, permission string, createdAt int64, uid int32, isMaster bool) *GetApikeyInfoResp {
	this := GetApikeyInfoResp{}
	this.Remark = remark
	this.ApiKey = apiKey
	this.ApiVersion = apiVersion
	this.Permission = permission
	this.CreatedAt = createdAt
	this.Uid = uid
	this.IsMaster = isMaster
	return &this
}

// NewGetApikeyInfoRespWithDefaults instantiates a new GetApikeyInfoResp object
// This constructor will only assign default values to properties that have it defined,
func NewGetApikeyInfoRespWithDefaults() *GetApikeyInfoResp {
	this := GetApikeyInfoResp{}
	return &this
}

func (o *GetApikeyInfoResp) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["remark"] = o.Remark
	toSerialize["apiKey"] = o.ApiKey
	toSerialize["apiVersion"] = o.ApiVersion
	toSerialize["permission"] = o.Permission
	toSerialize["ipWhitelist"] = o.IpWhitelist
	toSerialize["createdAt"] = o.CreatedAt
	toSerialize["uid"] = o.Uid
	toSerialize["isMaster"] = o.IsMaster
	toSerialize["subName"] = o.SubName
	return toSerialize
}

func (o *GetApikeyInfoResp) SetCommonResponse(response *types.RestResponse) {
	o.CommonResponse = response
}

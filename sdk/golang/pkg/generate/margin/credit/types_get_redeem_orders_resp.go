// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package credit

import (
	"github.com/Kucoin/kucoin-universal-sdk/sdk/golang/pkg/types"
)

// GetRedeemOrdersResp struct for GetRedeemOrdersResp
type GetRedeemOrdersResp struct {
	// common response
	CommonResponse *types.RestResponse
	// Current Page
	CurrentPage int32 `json:"currentPage,omitempty"`
	// Page Size
	PageSize int32 `json:"pageSize,omitempty"`
	// Total Number
	TotalNum int32 `json:"totalNum,omitempty"`
	// Total Page
	TotalPage int32                  `json:"totalPage,omitempty"`
	Items     []GetRedeemOrdersItems `json:"items,omitempty"`
}

// NewGetRedeemOrdersResp instantiates a new GetRedeemOrdersResp object
// This constructor will assign default values to properties that have it defined
func NewGetRedeemOrdersResp(currentPage int32, pageSize int32, totalNum int32, totalPage int32, items []GetRedeemOrdersItems) *GetRedeemOrdersResp {
	this := GetRedeemOrdersResp{}
	this.CurrentPage = currentPage
	this.PageSize = pageSize
	this.TotalNum = totalNum
	this.TotalPage = totalPage
	this.Items = items
	return &this
}

// NewGetRedeemOrdersRespWithDefaults instantiates a new GetRedeemOrdersResp object
// This constructor will only assign default values to properties that have it defined,
func NewGetRedeemOrdersRespWithDefaults() *GetRedeemOrdersResp {
	this := GetRedeemOrdersResp{}
	return &this
}

func (o *GetRedeemOrdersResp) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["currentPage"] = o.CurrentPage
	toSerialize["pageSize"] = o.PageSize
	toSerialize["totalNum"] = o.TotalNum
	toSerialize["totalPage"] = o.TotalPage
	toSerialize["items"] = o.Items
	return toSerialize
}

func (o *GetRedeemOrdersResp) SetCommonResponse(response *types.RestResponse) {
	o.CommonResponse = response
}

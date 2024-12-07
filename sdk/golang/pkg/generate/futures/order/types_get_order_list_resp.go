// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package order

import (
	"github.com/Kucoin/kucoin-universal-sdk/sdk/golang/pkg/types"
)

// GetOrderListResp struct for GetOrderListResp
type GetOrderListResp struct {
	// common response
	CommonResponse *types.RestResponse
	// Current request page, The default currentPage is 1
	CurrentPage int32 `json:"currentPage,omitempty"`
	// pageSize, The default pageSize is 50, The maximum cannot exceed 1000
	PageSize  int32               `json:"pageSize,omitempty"`
	TotalNum  int32               `json:"totalNum,omitempty"`
	TotalPage int32               `json:"totalPage,omitempty"`
	Items     []GetOrderListItems `json:"items,omitempty"`
}

// NewGetOrderListResp instantiates a new GetOrderListResp object
// This constructor will assign default values to properties that have it defined
func NewGetOrderListResp(currentPage int32, pageSize int32, totalNum int32, totalPage int32, items []GetOrderListItems) *GetOrderListResp {
	this := GetOrderListResp{}
	this.CurrentPage = currentPage
	this.PageSize = pageSize
	this.TotalNum = totalNum
	this.TotalPage = totalPage
	this.Items = items
	return &this
}

// NewGetOrderListRespWithDefaults instantiates a new GetOrderListResp object
// This constructor will only assign default values to properties that have it defined,
func NewGetOrderListRespWithDefaults() *GetOrderListResp {
	this := GetOrderListResp{}
	return &this
}

func (o *GetOrderListResp) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["currentPage"] = o.CurrentPage
	toSerialize["pageSize"] = o.PageSize
	toSerialize["totalNum"] = o.TotalNum
	toSerialize["totalPage"] = o.TotalPage
	toSerialize["items"] = o.Items
	return toSerialize
}

func (o *GetOrderListResp) SetCommonResponse(response *types.RestResponse) {
	o.CommonResponse = response
}

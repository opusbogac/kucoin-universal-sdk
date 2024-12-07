// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package earn

import (
	"encoding/json"
	"github.com/Kucoin/kucoin-universal-sdk/sdk/golang/pkg/types"
)

// GetPromotionProductsResp struct for GetPromotionProductsResp
type GetPromotionProductsResp struct {
	// common response
	CommonResponse *types.RestResponse
	Data           []GetPromotionProductsData `json:"data,omitempty"`
}

// NewGetPromotionProductsResp instantiates a new GetPromotionProductsResp object
// This constructor will assign default values to properties that have it defined
func NewGetPromotionProductsResp(data []GetPromotionProductsData) *GetPromotionProductsResp {
	this := GetPromotionProductsResp{}
	this.Data = data
	return &this
}

// NewGetPromotionProductsRespWithDefaults instantiates a new GetPromotionProductsResp object
// This constructor will only assign default values to properties that have it defined,
func NewGetPromotionProductsRespWithDefaults() *GetPromotionProductsResp {
	this := GetPromotionProductsResp{}
	return &this
}

func (o *GetPromotionProductsResp) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["data"] = o.Data
	return toSerialize
}

func (o *GetPromotionProductsResp) UnmarshalJSON(b []byte) error {
	err := json.Unmarshal(b, &o.Data)
	return err
}

func (o *GetPromotionProductsResp) SetCommonResponse(response *types.RestResponse) {
	o.CommonResponse = response
}

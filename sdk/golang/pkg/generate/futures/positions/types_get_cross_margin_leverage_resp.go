// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package positions

import (
	"github.com/Kucoin/kucoin-universal-sdk/sdk/golang/pkg/types"
)

// GetCrossMarginLeverageResp struct for GetCrossMarginLeverageResp
type GetCrossMarginLeverageResp struct {
	// common response
	CommonResponse *types.RestResponse
	// Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](doc://link/endpoint/3470220)
	Symbol string `json:"symbol,omitempty"`
	// Leverage multiple
	Leverage string `json:"leverage,omitempty"`
}

// NewGetCrossMarginLeverageResp instantiates a new GetCrossMarginLeverageResp object
// This constructor will assign default values to properties that have it defined
func NewGetCrossMarginLeverageResp(symbol string, leverage string) *GetCrossMarginLeverageResp {
	this := GetCrossMarginLeverageResp{}
	this.Symbol = symbol
	this.Leverage = leverage
	return &this
}

// NewGetCrossMarginLeverageRespWithDefaults instantiates a new GetCrossMarginLeverageResp object
// This constructor will only assign default values to properties that have it defined,
func NewGetCrossMarginLeverageRespWithDefaults() *GetCrossMarginLeverageResp {
	this := GetCrossMarginLeverageResp{}
	return &this
}

func (o *GetCrossMarginLeverageResp) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["symbol"] = o.Symbol
	toSerialize["leverage"] = o.Leverage
	return toSerialize
}

func (o *GetCrossMarginLeverageResp) SetCommonResponse(response *types.RestResponse) {
	o.CommonResponse = response
}

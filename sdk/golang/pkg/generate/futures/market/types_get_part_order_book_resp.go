// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package market

import (
	"github.com/Kucoin/kucoin-universal-sdk/sdk/golang/pkg/types"
)

// GetPartOrderBookResp struct for GetPartOrderBookResp
type GetPartOrderBookResp struct {
	// common response
	CommonResponse *types.RestResponse
	// Sequence number
	Sequence int64 `json:"sequence,omitempty"`
	// Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](doc://link/endpoint/3470220)
	Symbol string `json:"symbol,omitempty"`
	// bids, from high to low
	Bids [][]float32 `json:"bids,omitempty"`
	// asks, from low to high
	Asks [][]float32 `json:"asks,omitempty"`
	// Timestamp(nanosecond)
	Ts int64 `json:"ts,omitempty"`
}

// NewGetPartOrderBookResp instantiates a new GetPartOrderBookResp object
// This constructor will assign default values to properties that have it defined
func NewGetPartOrderBookResp(sequence int64, symbol string, bids [][]float32, asks [][]float32, ts int64) *GetPartOrderBookResp {
	this := GetPartOrderBookResp{}
	this.Sequence = sequence
	this.Symbol = symbol
	this.Bids = bids
	this.Asks = asks
	this.Ts = ts
	return &this
}

// NewGetPartOrderBookRespWithDefaults instantiates a new GetPartOrderBookResp object
// This constructor will only assign default values to properties that have it defined,
func NewGetPartOrderBookRespWithDefaults() *GetPartOrderBookResp {
	this := GetPartOrderBookResp{}
	return &this
}

func (o *GetPartOrderBookResp) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["sequence"] = o.Sequence
	toSerialize["symbol"] = o.Symbol
	toSerialize["bids"] = o.Bids
	toSerialize["asks"] = o.Asks
	toSerialize["ts"] = o.Ts
	return toSerialize
}

func (o *GetPartOrderBookResp) SetCommonResponse(response *types.RestResponse) {
	o.CommonResponse = response
}

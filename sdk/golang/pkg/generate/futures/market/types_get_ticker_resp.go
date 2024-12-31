// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package market

import (
	"github.com/Kucoin/kucoin-universal-sdk/sdk/golang/pkg/types"
)

// GetTickerResp struct for GetTickerResp
type GetTickerResp struct {
	// common response
	CommonResponse *types.RestResponse
	// Sequence number, used to judge whether the messages pushed by Websocket is continuous.
	Sequence int64 `json:"sequence,omitempty"`
	// Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
	Symbol string `json:"symbol,omitempty"`
	// Filled side, The trade side indicates the taker order side. A taker order is the order that was matched with orders opened on the order book.
	Side string `json:"side,omitempty"`
	// Filled quantity
	Size int32 `json:"size,omitempty"`
	// Transaction ID
	TradeId string `json:"tradeId,omitempty"`
	// Filled price
	Price string `json:"price,omitempty"`
	// Best bid price
	BestBidPrice string `json:"bestBidPrice,omitempty"`
	// Best bid size
	BestBidSize int32 `json:"bestBidSize,omitempty"`
	// Best ask price
	BestAskPrice string `json:"bestAskPrice,omitempty"`
	// Best ask size
	BestAskSize int32 `json:"bestAskSize,omitempty"`
	// Filled time(nanosecond)
	Ts int64 `json:"ts,omitempty"`
}

// NewGetTickerResp instantiates a new GetTickerResp object
// This constructor will assign default values to properties that have it defined
func NewGetTickerResp(sequence int64, symbol string, side string, size int32, tradeId string, price string, bestBidPrice string, bestBidSize int32, bestAskPrice string, bestAskSize int32, ts int64) *GetTickerResp {
	this := GetTickerResp{}
	this.Sequence = sequence
	this.Symbol = symbol
	this.Side = side
	this.Size = size
	this.TradeId = tradeId
	this.Price = price
	this.BestBidPrice = bestBidPrice
	this.BestBidSize = bestBidSize
	this.BestAskPrice = bestAskPrice
	this.BestAskSize = bestAskSize
	this.Ts = ts
	return &this
}

// NewGetTickerRespWithDefaults instantiates a new GetTickerResp object
// This constructor will only assign default values to properties that have it defined,
func NewGetTickerRespWithDefaults() *GetTickerResp {
	this := GetTickerResp{}
	return &this
}

func (o *GetTickerResp) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["sequence"] = o.Sequence
	toSerialize["symbol"] = o.Symbol
	toSerialize["side"] = o.Side
	toSerialize["size"] = o.Size
	toSerialize["tradeId"] = o.TradeId
	toSerialize["price"] = o.Price
	toSerialize["bestBidPrice"] = o.BestBidPrice
	toSerialize["bestBidSize"] = o.BestBidSize
	toSerialize["bestAskPrice"] = o.BestAskPrice
	toSerialize["bestAskSize"] = o.BestAskSize
	toSerialize["ts"] = o.Ts
	return toSerialize
}

func (o *GetTickerResp) SetCommonResponse(response *types.RestResponse) {
	o.CommonResponse = response
}

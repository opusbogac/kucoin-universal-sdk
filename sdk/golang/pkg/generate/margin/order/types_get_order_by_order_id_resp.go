// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package order

import (
	"github.com/Kucoin/kucoin-universal-sdk/sdk/golang/pkg/types"
)

// GetOrderByOrderIdResp struct for GetOrderByOrderIdResp
type GetOrderByOrderIdResp struct {
	// common response
	CommonResponse *types.RestResponse
	// The unique order id generated by the trading system
	Id string `json:"id,omitempty"`
	// symbol
	Symbol string `json:"symbol,omitempty"`
	OpType string `json:"opType,omitempty"`
	// Specify if the order is an 'limit' order or 'market' order.
	Type string `json:"type,omitempty"`
	// Buy or sell
	Side string `json:"side,omitempty"`
	// Order price
	Price string `json:"price,omitempty"`
	// Order size
	Size string `json:"size,omitempty"`
	// Order Funds
	Funds string `json:"funds,omitempty"`
	// Number of filled transactions
	DealSize string `json:"dealSize,omitempty"`
	// Funds of filled transactions
	DealFunds string `json:"dealFunds,omitempty"`
	// [Handling fees](doc://link/pages/5327739)
	Fee string `json:"fee,omitempty"`
	// currency used to calculate trading fee
	FeeCurrency string `json:"feeCurrency,omitempty"`
	// [Self Trade Prevention](doc://link/pages/338146) is divided into these strategies: CN, CO, CB , and DC
	Stp           *string `json:"stp,omitempty"`
	Stop          *string `json:"stop,omitempty"`
	StopTriggered bool    `json:"stopTriggered,omitempty"`
	StopPrice     string  `json:"stopPrice,omitempty"`
	// Time in force
	TimeInForce string `json:"timeInForce,omitempty"`
	// Whether its a postOnly order.
	PostOnly bool `json:"postOnly,omitempty"`
	// Whether its a hidden order.
	Hidden bool `json:"hidden,omitempty"`
	// Whether its a iceberg order.
	Iceberg bool `json:"iceberg,omitempty"`
	// Visible size of iceberg order in order book.
	VisibleSize string `json:"visibleSize,omitempty"`
	// A GTT timeInForce that expires in n seconds
	CancelAfter int32  `json:"cancelAfter,omitempty"`
	Channel     string `json:"channel,omitempty"`
	// Client Order Id，unique identifier created by the user
	ClientOid string `json:"clientOid,omitempty"`
	// Order placement remarks
	Remark string `json:"remark,omitempty"`
	// Order tag
	Tags *string `json:"tags,omitempty"`
	// Whether there is a cancellation record for the order.
	CancelExist   bool  `json:"cancelExist,omitempty"`
	CreatedAt     int64 `json:"createdAt,omitempty"`
	LastUpdatedAt int64 `json:"lastUpdatedAt,omitempty"`
	// Trade type, redundancy param
	TradeType string `json:"tradeType,omitempty"`
	// Whether to enter the orderbook: true: enter the orderbook; false: not enter the orderbook
	InOrderBook bool `json:"inOrderBook,omitempty"`
	// Number of canceled transactions
	CancelledSize string `json:"cancelledSize,omitempty"`
	// Funds of canceled transactions
	CancelledFunds string `json:"cancelledFunds,omitempty"`
	// Number of remain transactions
	RemainSize string `json:"remainSize,omitempty"`
	// Funds of remain transactions
	RemainFunds string `json:"remainFunds,omitempty"`
	// Users in some regions need query this field
	Tax string `json:"tax,omitempty"`
	// Order status: true-The status of the order isactive; false-The status of the order is done
	Active bool `json:"active,omitempty"`
}

// NewGetOrderByOrderIdResp instantiates a new GetOrderByOrderIdResp object
// This constructor will assign default values to properties that have it defined
func NewGetOrderByOrderIdResp(id string, symbol string, opType string, Type_ string, side string, price string, size string, funds string, dealSize string, dealFunds string, fee string, feeCurrency string, stopTriggered bool, stopPrice string, timeInForce string, postOnly bool, hidden bool, iceberg bool, visibleSize string, cancelAfter int32, channel string, clientOid string, remark string, cancelExist bool, createdAt int64, lastUpdatedAt int64, tradeType string, inOrderBook bool, cancelledSize string, cancelledFunds string, remainSize string, remainFunds string, tax string, active bool) *GetOrderByOrderIdResp {
	this := GetOrderByOrderIdResp{}
	this.Id = id
	this.Symbol = symbol
	this.OpType = opType
	this.Type = Type_
	this.Side = side
	this.Price = price
	this.Size = size
	this.Funds = funds
	this.DealSize = dealSize
	this.DealFunds = dealFunds
	this.Fee = fee
	this.FeeCurrency = feeCurrency
	this.StopTriggered = stopTriggered
	this.StopPrice = stopPrice
	this.TimeInForce = timeInForce
	this.PostOnly = postOnly
	this.Hidden = hidden
	this.Iceberg = iceberg
	this.VisibleSize = visibleSize
	this.CancelAfter = cancelAfter
	this.Channel = channel
	this.ClientOid = clientOid
	this.Remark = remark
	this.CancelExist = cancelExist
	this.CreatedAt = createdAt
	this.LastUpdatedAt = lastUpdatedAt
	this.TradeType = tradeType
	this.InOrderBook = inOrderBook
	this.CancelledSize = cancelledSize
	this.CancelledFunds = cancelledFunds
	this.RemainSize = remainSize
	this.RemainFunds = remainFunds
	this.Tax = tax
	this.Active = active
	return &this
}

// NewGetOrderByOrderIdRespWithDefaults instantiates a new GetOrderByOrderIdResp object
// This constructor will only assign default values to properties that have it defined,
func NewGetOrderByOrderIdRespWithDefaults() *GetOrderByOrderIdResp {
	this := GetOrderByOrderIdResp{}
	return &this
}

func (o *GetOrderByOrderIdResp) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["id"] = o.Id
	toSerialize["symbol"] = o.Symbol
	toSerialize["opType"] = o.OpType
	toSerialize["type"] = o.Type
	toSerialize["side"] = o.Side
	toSerialize["price"] = o.Price
	toSerialize["size"] = o.Size
	toSerialize["funds"] = o.Funds
	toSerialize["dealSize"] = o.DealSize
	toSerialize["dealFunds"] = o.DealFunds
	toSerialize["fee"] = o.Fee
	toSerialize["feeCurrency"] = o.FeeCurrency
	toSerialize["stp"] = o.Stp
	toSerialize["stop"] = o.Stop
	toSerialize["stopTriggered"] = o.StopTriggered
	toSerialize["stopPrice"] = o.StopPrice
	toSerialize["timeInForce"] = o.TimeInForce
	toSerialize["postOnly"] = o.PostOnly
	toSerialize["hidden"] = o.Hidden
	toSerialize["iceberg"] = o.Iceberg
	toSerialize["visibleSize"] = o.VisibleSize
	toSerialize["cancelAfter"] = o.CancelAfter
	toSerialize["channel"] = o.Channel
	toSerialize["clientOid"] = o.ClientOid
	toSerialize["remark"] = o.Remark
	toSerialize["tags"] = o.Tags
	toSerialize["cancelExist"] = o.CancelExist
	toSerialize["createdAt"] = o.CreatedAt
	toSerialize["lastUpdatedAt"] = o.LastUpdatedAt
	toSerialize["tradeType"] = o.TradeType
	toSerialize["inOrderBook"] = o.InOrderBook
	toSerialize["cancelledSize"] = o.CancelledSize
	toSerialize["cancelledFunds"] = o.CancelledFunds
	toSerialize["remainSize"] = o.RemainSize
	toSerialize["remainFunds"] = o.RemainFunds
	toSerialize["tax"] = o.Tax
	toSerialize["active"] = o.Active
	return toSerialize
}

func (o *GetOrderByOrderIdResp) SetCommonResponse(response *types.RestResponse) {
	o.CommonResponse = response
}

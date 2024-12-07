// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package futurespublic

import (
	"encoding/json"
	"github.com/Kucoin/kucoin-universal-sdk/sdk/golang/pkg/types"
)

// ExecutionEvent struct for ExecutionEvent
type ExecutionEvent struct {
	// common response
	CommonResponse *types.WsMessage
	Symbol         string `json:"symbol,omitempty"`
	Sequence       int64  `json:"sequence,omitempty"`
	Side           string `json:"side,omitempty"`
	Size           int32  `json:"size,omitempty"`
	Price          string `json:"price,omitempty"`
	TakerOrderId   string `json:"takerOrderId,omitempty"`
	MakerOrderId   string `json:"makerOrderId,omitempty"`
	TradeId        string `json:"tradeId,omitempty"`
	Ts             int64  `json:"ts,omitempty"`
}

// NewExecutionEvent instantiates a new ExecutionEvent object
// This constructor will assign default values to properties that have it defined
func NewExecutionEvent(symbol string, sequence int64, side string, size int32, price string, takerOrderId string, makerOrderId string, tradeId string, ts int64) *ExecutionEvent {
	this := ExecutionEvent{}
	this.Symbol = symbol
	this.Sequence = sequence
	this.Side = side
	this.Size = size
	this.Price = price
	this.TakerOrderId = takerOrderId
	this.MakerOrderId = makerOrderId
	this.TradeId = tradeId
	this.Ts = ts
	return &this
}

// NewExecutionEventWithDefaults instantiates a new ExecutionEvent object
// This constructor will only assign default values to properties that have it defined,
func NewExecutionEventWithDefaults() *ExecutionEvent {
	this := ExecutionEvent{}
	return &this
}

func (o *ExecutionEvent) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["symbol"] = o.Symbol
	toSerialize["sequence"] = o.Sequence
	toSerialize["side"] = o.Side
	toSerialize["size"] = o.Size
	toSerialize["price"] = o.Price
	toSerialize["takerOrderId"] = o.TakerOrderId
	toSerialize["makerOrderId"] = o.MakerOrderId
	toSerialize["tradeId"] = o.TradeId
	toSerialize["ts"] = o.Ts
	return toSerialize
}

type ExecutionEventCallback func(topic string, subject string, data *ExecutionEvent) error

type ExecutionEventCallbackWrapper struct {
	callback ExecutionEventCallback
}

func (w *ExecutionEventCallbackWrapper) OnMessage(msg *types.WsMessage) error {
	obj := &ExecutionEvent{}
	err := json.Unmarshal(msg.RawData, obj)
	if err != nil {
		return err
	}
	obj.CommonResponse = msg
	return w.callback(msg.Topic, msg.Subject, obj)
}

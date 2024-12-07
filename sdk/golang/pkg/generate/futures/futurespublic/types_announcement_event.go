// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package futurespublic

import (
	"encoding/json"
	"github.com/Kucoin/kucoin-universal-sdk/sdk/golang/pkg/types"
)

// AnnouncementEvent struct for AnnouncementEvent
type AnnouncementEvent struct {
	// common response
	CommonResponse *types.WsMessage
	// Symbol
	Symbol string `json:"symbol,omitempty"`
	// Funding time
	FundingTime int64 `json:"fundingTime,omitempty"`
	// Funding rate
	FundingRate float32 `json:"fundingRate,omitempty"`
	Timestamp   int64   `json:"timestamp,omitempty"`
}

// NewAnnouncementEvent instantiates a new AnnouncementEvent object
// This constructor will assign default values to properties that have it defined
func NewAnnouncementEvent(symbol string, fundingTime int64, fundingRate float32, timestamp int64) *AnnouncementEvent {
	this := AnnouncementEvent{}
	this.Symbol = symbol
	this.FundingTime = fundingTime
	this.FundingRate = fundingRate
	this.Timestamp = timestamp
	return &this
}

// NewAnnouncementEventWithDefaults instantiates a new AnnouncementEvent object
// This constructor will only assign default values to properties that have it defined,
func NewAnnouncementEventWithDefaults() *AnnouncementEvent {
	this := AnnouncementEvent{}
	return &this
}

func (o *AnnouncementEvent) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["symbol"] = o.Symbol
	toSerialize["fundingTime"] = o.FundingTime
	toSerialize["fundingRate"] = o.FundingRate
	toSerialize["timestamp"] = o.Timestamp
	return toSerialize
}

type AnnouncementEventCallback func(topic string, subject string, data *AnnouncementEvent) error

type AnnouncementEventCallbackWrapper struct {
	callback AnnouncementEventCallback
}

func (w *AnnouncementEventCallbackWrapper) OnMessage(msg *types.WsMessage) error {
	obj := &AnnouncementEvent{}
	err := json.Unmarshal(msg.RawData, obj)
	if err != nil {
		return err
	}
	obj.CommonResponse = msg
	return w.callback(msg.Topic, msg.Subject, obj)
}

// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package market

// GetTradeHistoryData struct for GetTradeHistoryData
type GetTradeHistoryData struct {
	// Sequence number
	Sequence string `json:"sequence,omitempty"`
	// Filled price
	Price string `json:"price,omitempty"`
	// Filled amount
	Size string `json:"size,omitempty"`
	// Filled side, The trade side indicates the taker order side. A taker order is the order that was matched with orders opened on the order book.
	Side string `json:"side,omitempty"`
	// Filled timestamp(nanosecond)
	Time int64 `json:"time,omitempty"`
}

// NewGetTradeHistoryData instantiates a new GetTradeHistoryData object
// This constructor will assign default values to properties that have it defined
func NewGetTradeHistoryData(sequence string, price string, size string, side string, time int64) *GetTradeHistoryData {
	this := GetTradeHistoryData{}
	this.Sequence = sequence
	this.Price = price
	this.Size = size
	this.Side = side
	this.Time = time
	return &this
}

// NewGetTradeHistoryDataWithDefaults instantiates a new GetTradeHistoryData object
// This constructor will only assign default values to properties that have it defined,
func NewGetTradeHistoryDataWithDefaults() *GetTradeHistoryData {
	this := GetTradeHistoryData{}
	return &this
}

func (o *GetTradeHistoryData) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["sequence"] = o.Sequence
	toSerialize["price"] = o.Price
	toSerialize["size"] = o.Size
	toSerialize["side"] = o.Side
	toSerialize["time"] = o.Time
	return toSerialize
}

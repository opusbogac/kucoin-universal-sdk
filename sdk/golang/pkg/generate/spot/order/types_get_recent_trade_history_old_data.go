// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package order

// GetRecentTradeHistoryOldData struct for GetRecentTradeHistoryOldData
type GetRecentTradeHistoryOldData struct {
	Symbol         *string `json:"symbol,omitempty"`
	TradeId        *string `json:"tradeId,omitempty"`
	OrderId        *string `json:"orderId,omitempty"`
	CounterOrderId *string `json:"counterOrderId,omitempty"`
	Side           *string `json:"side,omitempty"`
	Liquidity      *string `json:"liquidity,omitempty"`
	ForceTaker     *bool   `json:"forceTaker,omitempty"`
	Price          *string `json:"price,omitempty"`
	Size           *string `json:"size,omitempty"`
	Funds          *string `json:"funds,omitempty"`
	Fee            *string `json:"fee,omitempty"`
	FeeRate        *string `json:"feeRate,omitempty"`
	FeeCurrency    *string `json:"feeCurrency,omitempty"`
	Stop           *string `json:"stop,omitempty"`
	TradeType      *string `json:"tradeType,omitempty"`
	Type           *string `json:"type,omitempty"`
	CreatedAt      *int64  `json:"createdAt,omitempty"`
}

// NewGetRecentTradeHistoryOldData instantiates a new GetRecentTradeHistoryOldData object
// This constructor will assign default values to properties that have it defined
func NewGetRecentTradeHistoryOldData() *GetRecentTradeHistoryOldData {
	this := GetRecentTradeHistoryOldData{}
	return &this
}

// NewGetRecentTradeHistoryOldDataWithDefaults instantiates a new GetRecentTradeHistoryOldData object
// This constructor will only assign default values to properties that have it defined,
func NewGetRecentTradeHistoryOldDataWithDefaults() *GetRecentTradeHistoryOldData {
	this := GetRecentTradeHistoryOldData{}
	return &this
}

func (o *GetRecentTradeHistoryOldData) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["symbol"] = o.Symbol
	toSerialize["tradeId"] = o.TradeId
	toSerialize["orderId"] = o.OrderId
	toSerialize["counterOrderId"] = o.CounterOrderId
	toSerialize["side"] = o.Side
	toSerialize["liquidity"] = o.Liquidity
	toSerialize["forceTaker"] = o.ForceTaker
	toSerialize["price"] = o.Price
	toSerialize["size"] = o.Size
	toSerialize["funds"] = o.Funds
	toSerialize["fee"] = o.Fee
	toSerialize["feeRate"] = o.FeeRate
	toSerialize["feeCurrency"] = o.FeeCurrency
	toSerialize["stop"] = o.Stop
	toSerialize["tradeType"] = o.TradeType
	toSerialize["type"] = o.Type
	toSerialize["createdAt"] = o.CreatedAt
	return toSerialize
}

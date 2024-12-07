// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package market

// GetInterestRateIndexDataList struct for GetInterestRateIndexDataList
type GetInterestRateIndexDataList struct {
	// Symbol of the contract, Please refer to [Get Symbol endpoint: fundingBaseSymbol, fundingQuoteSymbol, fundingBaseSymbol1M, fundingQuoteSymbol1M](doc://link/endpoint/3470220)
	Symbol string `json:"symbol,omitempty"`
	// Granularity (milisecond)
	Granularity int32 `json:"granularity,omitempty"`
	// Timestamp(milisecond)
	TimePoint int64 `json:"timePoint,omitempty"`
	// Interest rate value
	Value float32 `json:"value,omitempty"`
}

// NewGetInterestRateIndexDataList instantiates a new GetInterestRateIndexDataList object
// This constructor will assign default values to properties that have it defined
func NewGetInterestRateIndexDataList(symbol string, granularity int32, timePoint int64, value float32) *GetInterestRateIndexDataList {
	this := GetInterestRateIndexDataList{}
	this.Symbol = symbol
	this.Granularity = granularity
	this.TimePoint = timePoint
	this.Value = value
	return &this
}

// NewGetInterestRateIndexDataListWithDefaults instantiates a new GetInterestRateIndexDataList object
// This constructor will only assign default values to properties that have it defined,
func NewGetInterestRateIndexDataListWithDefaults() *GetInterestRateIndexDataList {
	this := GetInterestRateIndexDataList{}
	return &this
}

func (o *GetInterestRateIndexDataList) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["symbol"] = o.Symbol
	toSerialize["granularity"] = o.Granularity
	toSerialize["timePoint"] = o.TimePoint
	toSerialize["value"] = o.Value
	return toSerialize
}

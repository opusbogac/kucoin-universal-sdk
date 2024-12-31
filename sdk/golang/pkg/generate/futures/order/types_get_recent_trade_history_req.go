// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package order

// GetRecentTradeHistoryReq struct for GetRecentTradeHistoryReq
type GetRecentTradeHistoryReq struct {
	// Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
	Symbol *string `json:"symbol,omitempty" url:"symbol,omitempty"`
}

// NewGetRecentTradeHistoryReq instantiates a new GetRecentTradeHistoryReq object
// This constructor will assign default values to properties that have it defined
func NewGetRecentTradeHistoryReq() *GetRecentTradeHistoryReq {
	this := GetRecentTradeHistoryReq{}
	return &this
}

// NewGetRecentTradeHistoryReqWithDefaults instantiates a new GetRecentTradeHistoryReq object
// This constructor will only assign default values to properties that have it defined,
func NewGetRecentTradeHistoryReqWithDefaults() *GetRecentTradeHistoryReq {
	this := GetRecentTradeHistoryReq{}
	return &this
}

func (o *GetRecentTradeHistoryReq) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["symbol"] = o.Symbol
	return toSerialize
}

type GetRecentTradeHistoryReqBuilder struct {
	obj *GetRecentTradeHistoryReq
}

func NewGetRecentTradeHistoryReqBuilder() *GetRecentTradeHistoryReqBuilder {
	return &GetRecentTradeHistoryReqBuilder{obj: NewGetRecentTradeHistoryReqWithDefaults()}
}

// Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
func (builder *GetRecentTradeHistoryReqBuilder) SetSymbol(value string) *GetRecentTradeHistoryReqBuilder {
	builder.obj.Symbol = &value
	return builder
}

func (builder *GetRecentTradeHistoryReqBuilder) Build() *GetRecentTradeHistoryReq {
	return builder.obj
}

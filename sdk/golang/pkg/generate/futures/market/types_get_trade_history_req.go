// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package market

// GetTradeHistoryReq struct for GetTradeHistoryReq
type GetTradeHistoryReq struct {
	// Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
	Symbol *string `json:"symbol,omitempty" url:"symbol,omitempty"`
}

// NewGetTradeHistoryReq instantiates a new GetTradeHistoryReq object
// This constructor will assign default values to properties that have it defined
func NewGetTradeHistoryReq() *GetTradeHistoryReq {
	this := GetTradeHistoryReq{}
	return &this
}

// NewGetTradeHistoryReqWithDefaults instantiates a new GetTradeHistoryReq object
// This constructor will only assign default values to properties that have it defined,
func NewGetTradeHistoryReqWithDefaults() *GetTradeHistoryReq {
	this := GetTradeHistoryReq{}
	return &this
}

func (o *GetTradeHistoryReq) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["symbol"] = o.Symbol
	return toSerialize
}

type GetTradeHistoryReqBuilder struct {
	obj *GetTradeHistoryReq
}

func NewGetTradeHistoryReqBuilder() *GetTradeHistoryReqBuilder {
	return &GetTradeHistoryReqBuilder{obj: NewGetTradeHistoryReqWithDefaults()}
}

// Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](https://www.kucoin.com/docs-new/api-3470220)
func (builder *GetTradeHistoryReqBuilder) SetSymbol(value string) *GetTradeHistoryReqBuilder {
	builder.obj.Symbol = &value
	return builder
}

func (builder *GetTradeHistoryReqBuilder) Build() *GetTradeHistoryReq {
	return builder.obj
}

// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package order

// BatchCancelOcoOrdersReq struct for BatchCancelOcoOrdersReq
type BatchCancelOcoOrdersReq struct {
	// Specify the order id, there can be multiple orders, separated by commas. If not passed, all oco orders will be canceled by default.
	OrderIds *string `json:"orderIds,omitempty" url:"orderIds,omitempty"`
	// trading pair. If not passed, the oco orders of all symbols will be canceled by default.
	Symbol *string `json:"symbol,omitempty" url:"symbol,omitempty"`
}

// NewBatchCancelOcoOrdersReq instantiates a new BatchCancelOcoOrdersReq object
// This constructor will assign default values to properties that have it defined
func NewBatchCancelOcoOrdersReq() *BatchCancelOcoOrdersReq {
	this := BatchCancelOcoOrdersReq{}
	return &this
}

// NewBatchCancelOcoOrdersReqWithDefaults instantiates a new BatchCancelOcoOrdersReq object
// This constructor will only assign default values to properties that have it defined,
func NewBatchCancelOcoOrdersReqWithDefaults() *BatchCancelOcoOrdersReq {
	this := BatchCancelOcoOrdersReq{}
	return &this
}

func (o *BatchCancelOcoOrdersReq) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["orderIds"] = o.OrderIds
	toSerialize["symbol"] = o.Symbol
	return toSerialize
}

type BatchCancelOcoOrdersReqBuilder struct {
	obj *BatchCancelOcoOrdersReq
}

func NewBatchCancelOcoOrdersReqBuilder() *BatchCancelOcoOrdersReqBuilder {
	return &BatchCancelOcoOrdersReqBuilder{obj: NewBatchCancelOcoOrdersReqWithDefaults()}
}

// Specify the order id, there can be multiple orders, separated by commas. If not passed, all oco orders will be canceled by default.
func (builder *BatchCancelOcoOrdersReqBuilder) SetOrderIds(value string) *BatchCancelOcoOrdersReqBuilder {
	builder.obj.OrderIds = &value
	return builder
}

// trading pair. If not passed, the oco orders of all symbols will be canceled by default.
func (builder *BatchCancelOcoOrdersReqBuilder) SetSymbol(value string) *BatchCancelOcoOrdersReqBuilder {
	builder.obj.Symbol = &value
	return builder
}

func (builder *BatchCancelOcoOrdersReqBuilder) Build() *BatchCancelOcoOrdersReq {
	return builder.obj
}

// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package order

// CancelPartialOrderReq struct for CancelPartialOrderReq
type CancelPartialOrderReq struct {
	// The unique order id generated by the trading system
	OrderId *string `json:"orderId,omitempty" path:"orderId" url:"-"`
	// symbol
	Symbol *string `json:"symbol,omitempty" url:"symbol,omitempty"`
	// The size you want cancel
	CancelSize *string `json:"cancelSize,omitempty" url:"cancelSize,omitempty"`
}

// NewCancelPartialOrderReq instantiates a new CancelPartialOrderReq object
// This constructor will assign default values to properties that have it defined
func NewCancelPartialOrderReq() *CancelPartialOrderReq {
	this := CancelPartialOrderReq{}
	return &this
}

// NewCancelPartialOrderReqWithDefaults instantiates a new CancelPartialOrderReq object
// This constructor will only assign default values to properties that have it defined,
func NewCancelPartialOrderReqWithDefaults() *CancelPartialOrderReq {
	this := CancelPartialOrderReq{}
	return &this
}

func (o *CancelPartialOrderReq) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["orderId"] = o.OrderId
	toSerialize["symbol"] = o.Symbol
	toSerialize["cancelSize"] = o.CancelSize
	return toSerialize
}

type CancelPartialOrderReqBuilder struct {
	obj *CancelPartialOrderReq
}

func NewCancelPartialOrderReqBuilder() *CancelPartialOrderReqBuilder {
	return &CancelPartialOrderReqBuilder{obj: NewCancelPartialOrderReqWithDefaults()}
}

// The unique order id generated by the trading system
func (builder *CancelPartialOrderReqBuilder) SetOrderId(value string) *CancelPartialOrderReqBuilder {
	builder.obj.OrderId = &value
	return builder
}

// symbol
func (builder *CancelPartialOrderReqBuilder) SetSymbol(value string) *CancelPartialOrderReqBuilder {
	builder.obj.Symbol = &value
	return builder
}

// The size you want cancel
func (builder *CancelPartialOrderReqBuilder) SetCancelSize(value string) *CancelPartialOrderReqBuilder {
	builder.obj.CancelSize = &value
	return builder
}

func (builder *CancelPartialOrderReqBuilder) Build() *CancelPartialOrderReq {
	return builder.obj
}

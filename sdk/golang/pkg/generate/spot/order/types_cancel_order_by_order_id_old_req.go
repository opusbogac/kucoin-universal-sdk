// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package order

// CancelOrderByOrderIdOldReq struct for CancelOrderByOrderIdOldReq
type CancelOrderByOrderIdOldReq struct {
	// symbol
	Symbol *string `json:"symbol,omitempty" url:"symbol,omitempty"`
	// The unique order id generated by the trading system
	OrderId *string `json:"orderId,omitempty" path:"orderId" url:"-"`
}

// NewCancelOrderByOrderIdOldReq instantiates a new CancelOrderByOrderIdOldReq object
// This constructor will assign default values to properties that have it defined
func NewCancelOrderByOrderIdOldReq() *CancelOrderByOrderIdOldReq {
	this := CancelOrderByOrderIdOldReq{}
	return &this
}

// NewCancelOrderByOrderIdOldReqWithDefaults instantiates a new CancelOrderByOrderIdOldReq object
// This constructor will only assign default values to properties that have it defined,
func NewCancelOrderByOrderIdOldReqWithDefaults() *CancelOrderByOrderIdOldReq {
	this := CancelOrderByOrderIdOldReq{}
	return &this
}

func (o *CancelOrderByOrderIdOldReq) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["symbol"] = o.Symbol
	toSerialize["orderId"] = o.OrderId
	return toSerialize
}

type CancelOrderByOrderIdOldReqBuilder struct {
	obj *CancelOrderByOrderIdOldReq
}

func NewCancelOrderByOrderIdOldReqBuilder() *CancelOrderByOrderIdOldReqBuilder {
	return &CancelOrderByOrderIdOldReqBuilder{obj: NewCancelOrderByOrderIdOldReqWithDefaults()}
}

// symbol
func (builder *CancelOrderByOrderIdOldReqBuilder) SetSymbol(value string) *CancelOrderByOrderIdOldReqBuilder {
	builder.obj.Symbol = &value
	return builder
}

// The unique order id generated by the trading system
func (builder *CancelOrderByOrderIdOldReqBuilder) SetOrderId(value string) *CancelOrderByOrderIdOldReqBuilder {
	builder.obj.OrderId = &value
	return builder
}

func (builder *CancelOrderByOrderIdOldReqBuilder) Build() *CancelOrderByOrderIdOldReq {
	return builder.obj
}

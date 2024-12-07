// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package debit

// ModifyLeverageReq struct for ModifyLeverageReq
type ModifyLeverageReq struct {
	// symbol, mandatory for isolated margin account
	Symbol *string `json:"symbol,omitempty"`
	// true-isolated, false-cross; default is false
	IsIsolated *bool `json:"isIsolated,omitempty"`
	// New leverage multiplier. Must be greater than 1 and up to two decimal places, and cannot be less than the user's current debt leverage or greater than the system's maximum leverage
	Leverage string `json:"leverage,omitempty"`
}

// NewModifyLeverageReq instantiates a new ModifyLeverageReq object
// This constructor will assign default values to properties that have it defined
func NewModifyLeverageReq(leverage string) *ModifyLeverageReq {
	this := ModifyLeverageReq{}
	var isIsolated bool = false
	this.IsIsolated = &isIsolated
	this.Leverage = leverage
	return &this
}

// NewModifyLeverageReqWithDefaults instantiates a new ModifyLeverageReq object
// This constructor will only assign default values to properties that have it defined,
func NewModifyLeverageReqWithDefaults() *ModifyLeverageReq {
	this := ModifyLeverageReq{}
	var isIsolated bool = false
	this.IsIsolated = &isIsolated
	return &this
}

func (o *ModifyLeverageReq) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["symbol"] = o.Symbol
	toSerialize["isIsolated"] = o.IsIsolated
	toSerialize["leverage"] = o.Leverage
	return toSerialize
}

type ModifyLeverageReqBuilder struct {
	obj *ModifyLeverageReq
}

func NewModifyLeverageReqBuilder() *ModifyLeverageReqBuilder {
	return &ModifyLeverageReqBuilder{obj: NewModifyLeverageReqWithDefaults()}
}

// symbol, mandatory for isolated margin account
func (builder *ModifyLeverageReqBuilder) SetSymbol(value string) *ModifyLeverageReqBuilder {
	builder.obj.Symbol = &value
	return builder
}

// true-isolated, false-cross; default is false
func (builder *ModifyLeverageReqBuilder) SetIsIsolated(value bool) *ModifyLeverageReqBuilder {
	builder.obj.IsIsolated = &value
	return builder
}

// New leverage multiplier. Must be greater than 1 and up to two decimal places, and cannot be less than the user's current debt leverage or greater than the system's maximum leverage
func (builder *ModifyLeverageReqBuilder) SetLeverage(value string) *ModifyLeverageReqBuilder {
	builder.obj.Leverage = value
	return builder
}

func (builder *ModifyLeverageReqBuilder) Build() *ModifyLeverageReq {
	return builder.obj
}

// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package market

// GetFullOrderBookReq struct for GetFullOrderBookReq
type GetFullOrderBookReq struct {
	// Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](apidog://link/endpoint/3470220)
	Symbol *string `json:"symbol,omitempty" url:"symbol,omitempty"`
}

// NewGetFullOrderBookReq instantiates a new GetFullOrderBookReq object
// This constructor will assign default values to properties that have it defined
func NewGetFullOrderBookReq() *GetFullOrderBookReq {
	this := GetFullOrderBookReq{}
	return &this
}

// NewGetFullOrderBookReqWithDefaults instantiates a new GetFullOrderBookReq object
// This constructor will only assign default values to properties that have it defined,
func NewGetFullOrderBookReqWithDefaults() *GetFullOrderBookReq {
	this := GetFullOrderBookReq{}
	return &this
}

func (o *GetFullOrderBookReq) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["symbol"] = o.Symbol
	return toSerialize
}

type GetFullOrderBookReqBuilder struct {
	obj *GetFullOrderBookReq
}

func NewGetFullOrderBookReqBuilder() *GetFullOrderBookReqBuilder {
	return &GetFullOrderBookReqBuilder{obj: NewGetFullOrderBookReqWithDefaults()}
}

// Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](apidog://link/endpoint/3470220)
func (builder *GetFullOrderBookReqBuilder) SetSymbol(value string) *GetFullOrderBookReqBuilder {
	builder.obj.Symbol = &value
	return builder
}

func (builder *GetFullOrderBookReqBuilder) Build() *GetFullOrderBookReq {
	return builder.obj
}

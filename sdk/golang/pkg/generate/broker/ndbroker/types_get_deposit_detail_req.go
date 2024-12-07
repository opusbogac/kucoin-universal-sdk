// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package ndbroker

// GetDepositDetailReq struct for GetDepositDetailReq
type GetDepositDetailReq struct {
	// Currency
	Currency *string `json:"currency,omitempty" url:"currency,omitempty"`
	// Hash Value
	Hash *string `json:"hash,omitempty" url:"hash,omitempty"`
}

// NewGetDepositDetailReq instantiates a new GetDepositDetailReq object
// This constructor will assign default values to properties that have it defined
func NewGetDepositDetailReq() *GetDepositDetailReq {
	this := GetDepositDetailReq{}
	return &this
}

// NewGetDepositDetailReqWithDefaults instantiates a new GetDepositDetailReq object
// This constructor will only assign default values to properties that have it defined,
func NewGetDepositDetailReqWithDefaults() *GetDepositDetailReq {
	this := GetDepositDetailReq{}
	return &this
}

func (o *GetDepositDetailReq) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["currency"] = o.Currency
	toSerialize["hash"] = o.Hash
	return toSerialize
}

type GetDepositDetailReqBuilder struct {
	obj *GetDepositDetailReq
}

func NewGetDepositDetailReqBuilder() *GetDepositDetailReqBuilder {
	return &GetDepositDetailReqBuilder{obj: NewGetDepositDetailReqWithDefaults()}
}

// Currency
func (builder *GetDepositDetailReqBuilder) SetCurrency(value string) *GetDepositDetailReqBuilder {
	builder.obj.Currency = &value
	return builder
}

// Hash Value
func (builder *GetDepositDetailReqBuilder) SetHash(value string) *GetDepositDetailReqBuilder {
	builder.obj.Hash = &value
	return builder
}

func (builder *GetDepositDetailReqBuilder) Build() *GetDepositDetailReq {
	return builder.obj
}

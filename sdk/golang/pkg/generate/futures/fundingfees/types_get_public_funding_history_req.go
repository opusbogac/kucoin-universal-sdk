// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package fundingfees

// GetPublicFundingHistoryReq struct for GetPublicFundingHistoryReq
type GetPublicFundingHistoryReq struct {
	// Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](apidog://link/endpoint/3470220)
	Symbol *string `json:"symbol,omitempty" url:"symbol,omitempty"`
	// Begin time (milisecond)
	From *int64 `json:"from,omitempty" url:"from,omitempty"`
	// End time (milisecond)
	To *int64 `json:"to,omitempty" url:"to,omitempty"`
}

// NewGetPublicFundingHistoryReq instantiates a new GetPublicFundingHistoryReq object
// This constructor will assign default values to properties that have it defined
func NewGetPublicFundingHistoryReq() *GetPublicFundingHistoryReq {
	this := GetPublicFundingHistoryReq{}
	return &this
}

// NewGetPublicFundingHistoryReqWithDefaults instantiates a new GetPublicFundingHistoryReq object
// This constructor will only assign default values to properties that have it defined,
func NewGetPublicFundingHistoryReqWithDefaults() *GetPublicFundingHistoryReq {
	this := GetPublicFundingHistoryReq{}
	return &this
}

func (o *GetPublicFundingHistoryReq) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["symbol"] = o.Symbol
	toSerialize["from"] = o.From
	toSerialize["to"] = o.To
	return toSerialize
}

type GetPublicFundingHistoryReqBuilder struct {
	obj *GetPublicFundingHistoryReq
}

func NewGetPublicFundingHistoryReqBuilder() *GetPublicFundingHistoryReqBuilder {
	return &GetPublicFundingHistoryReqBuilder{obj: NewGetPublicFundingHistoryReqWithDefaults()}
}

// Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](apidog://link/endpoint/3470220)
func (builder *GetPublicFundingHistoryReqBuilder) SetSymbol(value string) *GetPublicFundingHistoryReqBuilder {
	builder.obj.Symbol = &value
	return builder
}

// Begin time (milisecond)
func (builder *GetPublicFundingHistoryReqBuilder) SetFrom(value int64) *GetPublicFundingHistoryReqBuilder {
	builder.obj.From = &value
	return builder
}

// End time (milisecond)
func (builder *GetPublicFundingHistoryReqBuilder) SetTo(value int64) *GetPublicFundingHistoryReqBuilder {
	builder.obj.To = &value
	return builder
}

func (builder *GetPublicFundingHistoryReqBuilder) Build() *GetPublicFundingHistoryReq {
	return builder.obj
}

// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package ndbroker

// GetBrokerInfoReq struct for GetBrokerInfoReq
type GetBrokerInfoReq struct {
	// Start time, for example: 20230110
	Begin *string `json:"begin,omitempty" url:"begin,omitempty"`
	// End time, for example: 20230210 (query data with a maximum interval of 6 months)
	End *string `json:"end,omitempty" url:"end,omitempty"`
	// Transaction type, 1: spot 2: futures
	TradeType *string `json:"tradeType,omitempty" url:"tradeType,omitempty"`
}

// NewGetBrokerInfoReq instantiates a new GetBrokerInfoReq object
// This constructor will assign default values to properties that have it defined
func NewGetBrokerInfoReq() *GetBrokerInfoReq {
	this := GetBrokerInfoReq{}
	return &this
}

// NewGetBrokerInfoReqWithDefaults instantiates a new GetBrokerInfoReq object
// This constructor will only assign default values to properties that have it defined,
func NewGetBrokerInfoReqWithDefaults() *GetBrokerInfoReq {
	this := GetBrokerInfoReq{}
	return &this
}

func (o *GetBrokerInfoReq) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["begin"] = o.Begin
	toSerialize["end"] = o.End
	toSerialize["tradeType"] = o.TradeType
	return toSerialize
}

type GetBrokerInfoReqBuilder struct {
	obj *GetBrokerInfoReq
}

func NewGetBrokerInfoReqBuilder() *GetBrokerInfoReqBuilder {
	return &GetBrokerInfoReqBuilder{obj: NewGetBrokerInfoReqWithDefaults()}
}

// Start time, for example: 20230110
func (builder *GetBrokerInfoReqBuilder) SetBegin(value string) *GetBrokerInfoReqBuilder {
	builder.obj.Begin = &value
	return builder
}

// End time, for example: 20230210 (query data with a maximum interval of 6 months)
func (builder *GetBrokerInfoReqBuilder) SetEnd(value string) *GetBrokerInfoReqBuilder {
	builder.obj.End = &value
	return builder
}

// Transaction type, 1: spot 2: futures
func (builder *GetBrokerInfoReqBuilder) SetTradeType(value string) *GetBrokerInfoReqBuilder {
	builder.obj.TradeType = &value
	return builder
}

func (builder *GetBrokerInfoReqBuilder) Build() *GetBrokerInfoReq {
	return builder.obj
}

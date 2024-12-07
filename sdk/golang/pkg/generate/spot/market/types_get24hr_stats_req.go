// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package market

// Get24hrStatsReq struct for Get24hrStatsReq
type Get24hrStatsReq struct {
	// symbol
	Symbol *string `json:"symbol,omitempty" url:"symbol,omitempty"`
}

// NewGet24hrStatsReq instantiates a new Get24hrStatsReq object
// This constructor will assign default values to properties that have it defined
func NewGet24hrStatsReq() *Get24hrStatsReq {
	this := Get24hrStatsReq{}
	return &this
}

// NewGet24hrStatsReqWithDefaults instantiates a new Get24hrStatsReq object
// This constructor will only assign default values to properties that have it defined,
func NewGet24hrStatsReqWithDefaults() *Get24hrStatsReq {
	this := Get24hrStatsReq{}
	return &this
}

func (o *Get24hrStatsReq) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["symbol"] = o.Symbol
	return toSerialize
}

type Get24hrStatsReqBuilder struct {
	obj *Get24hrStatsReq
}

func NewGet24hrStatsReqBuilder() *Get24hrStatsReqBuilder {
	return &Get24hrStatsReqBuilder{obj: NewGet24hrStatsReqWithDefaults()}
}

// symbol
func (builder *Get24hrStatsReqBuilder) SetSymbol(value string) *Get24hrStatsReqBuilder {
	builder.obj.Symbol = &value
	return builder
}

func (builder *Get24hrStatsReqBuilder) Build() *Get24hrStatsReq {
	return builder.obj
}

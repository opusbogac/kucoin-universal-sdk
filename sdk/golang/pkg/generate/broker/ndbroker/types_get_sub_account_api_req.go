// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package ndbroker

// GetSubAccountAPIReq struct for GetSubAccountAPIReq
type GetSubAccountAPIReq struct {
	// Sub-account UID
	Uid *string `json:"uid,omitempty" url:"uid,omitempty"`
	// Sub-account apiKey
	ApiKey *string `json:"apiKey,omitempty" url:"apiKey,omitempty"`
}

// NewGetSubAccountAPIReq instantiates a new GetSubAccountAPIReq object
// This constructor will assign default values to properties that have it defined
func NewGetSubAccountAPIReq() *GetSubAccountAPIReq {
	this := GetSubAccountAPIReq{}
	return &this
}

// NewGetSubAccountAPIReqWithDefaults instantiates a new GetSubAccountAPIReq object
// This constructor will only assign default values to properties that have it defined,
func NewGetSubAccountAPIReqWithDefaults() *GetSubAccountAPIReq {
	this := GetSubAccountAPIReq{}
	return &this
}

func (o *GetSubAccountAPIReq) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["uid"] = o.Uid
	toSerialize["apiKey"] = o.ApiKey
	return toSerialize
}

type GetSubAccountAPIReqBuilder struct {
	obj *GetSubAccountAPIReq
}

func NewGetSubAccountAPIReqBuilder() *GetSubAccountAPIReqBuilder {
	return &GetSubAccountAPIReqBuilder{obj: NewGetSubAccountAPIReqWithDefaults()}
}

// Sub-account UID
func (builder *GetSubAccountAPIReqBuilder) SetUid(value string) *GetSubAccountAPIReqBuilder {
	builder.obj.Uid = &value
	return builder
}

// Sub-account apiKey
func (builder *GetSubAccountAPIReqBuilder) SetApiKey(value string) *GetSubAccountAPIReqBuilder {
	builder.obj.ApiKey = &value
	return builder
}

func (builder *GetSubAccountAPIReqBuilder) Build() *GetSubAccountAPIReq {
	return builder.obj
}

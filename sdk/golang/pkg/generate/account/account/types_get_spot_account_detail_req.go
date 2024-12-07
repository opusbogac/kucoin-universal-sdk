// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package account

// GetSpotAccountDetailReq struct for GetSpotAccountDetailReq
type GetSpotAccountDetailReq struct {
	// Path parameter. Account ID
	AccountId *string `json:"accountId,omitempty" path:"accountId" url:"-"`
}

// NewGetSpotAccountDetailReq instantiates a new GetSpotAccountDetailReq object
// This constructor will assign default values to properties that have it defined
func NewGetSpotAccountDetailReq() *GetSpotAccountDetailReq {
	this := GetSpotAccountDetailReq{}
	return &this
}

// NewGetSpotAccountDetailReqWithDefaults instantiates a new GetSpotAccountDetailReq object
// This constructor will only assign default values to properties that have it defined,
func NewGetSpotAccountDetailReqWithDefaults() *GetSpotAccountDetailReq {
	this := GetSpotAccountDetailReq{}
	return &this
}

func (o *GetSpotAccountDetailReq) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["accountId"] = o.AccountId
	return toSerialize
}

type GetSpotAccountDetailReqBuilder struct {
	obj *GetSpotAccountDetailReq
}

func NewGetSpotAccountDetailReqBuilder() *GetSpotAccountDetailReqBuilder {
	return &GetSpotAccountDetailReqBuilder{obj: NewGetSpotAccountDetailReqWithDefaults()}
}

// Path parameter. Account ID
func (builder *GetSpotAccountDetailReqBuilder) SetAccountId(value string) *GetSpotAccountDetailReqBuilder {
	builder.obj.AccountId = &value
	return builder
}

func (builder *GetSpotAccountDetailReqBuilder) Build() *GetSpotAccountDetailReq {
	return builder.obj
}

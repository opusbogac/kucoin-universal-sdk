// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package ndbroker

// GetWithdrawDetailReq struct for GetWithdrawDetailReq
type GetWithdrawDetailReq struct {
	// Withdrawal ID
	WithdrawalId *string `json:"withdrawalId,omitempty" url:"withdrawalId,omitempty"`
}

// NewGetWithdrawDetailReq instantiates a new GetWithdrawDetailReq object
// This constructor will assign default values to properties that have it defined
func NewGetWithdrawDetailReq() *GetWithdrawDetailReq {
	this := GetWithdrawDetailReq{}
	return &this
}

// NewGetWithdrawDetailReqWithDefaults instantiates a new GetWithdrawDetailReq object
// This constructor will only assign default values to properties that have it defined,
func NewGetWithdrawDetailReqWithDefaults() *GetWithdrawDetailReq {
	this := GetWithdrawDetailReq{}
	return &this
}

func (o *GetWithdrawDetailReq) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["withdrawalId"] = o.WithdrawalId
	return toSerialize
}

type GetWithdrawDetailReqBuilder struct {
	obj *GetWithdrawDetailReq
}

func NewGetWithdrawDetailReqBuilder() *GetWithdrawDetailReqBuilder {
	return &GetWithdrawDetailReqBuilder{obj: NewGetWithdrawDetailReqWithDefaults()}
}

// Withdrawal ID
func (builder *GetWithdrawDetailReqBuilder) SetWithdrawalId(value string) *GetWithdrawDetailReqBuilder {
	builder.obj.WithdrawalId = &value
	return builder
}

func (builder *GetWithdrawDetailReqBuilder) Build() *GetWithdrawDetailReq {
	return builder.obj
}

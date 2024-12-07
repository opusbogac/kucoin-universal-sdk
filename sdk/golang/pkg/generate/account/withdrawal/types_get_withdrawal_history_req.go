// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package withdrawal

// GetWithdrawalHistoryReq struct for GetWithdrawalHistoryReq
type GetWithdrawalHistoryReq struct {
	// currency
	Currency *string `json:"currency,omitempty" url:"currency,omitempty"`
	// Status. Available value: PROCESSING, WALLET_PROCESSING, SUCCESS, and FAILURE
	Status *string `json:"status,omitempty" url:"status,omitempty"`
	// Start time (milisecond)
	StartAt *int64 `json:"startAt,omitempty" url:"startAt,omitempty"`
	// End time (milisecond)
	EndAt *int64 `json:"endAt,omitempty" url:"endAt,omitempty"`
	// Current request page.
	CurrentPage *int32 `json:"currentPage,omitempty" url:"currentPage,omitempty"`
	// Number of results per request. Minimum is 10, maximum is 500.
	PageSize *int32 `json:"pageSize,omitempty" url:"pageSize,omitempty"`
}

// NewGetWithdrawalHistoryReq instantiates a new GetWithdrawalHistoryReq object
// This constructor will assign default values to properties that have it defined
func NewGetWithdrawalHistoryReq() *GetWithdrawalHistoryReq {
	this := GetWithdrawalHistoryReq{}
	var currentPage int32 = 1
	this.CurrentPage = &currentPage
	var pageSize int32 = 50
	this.PageSize = &pageSize
	return &this
}

// NewGetWithdrawalHistoryReqWithDefaults instantiates a new GetWithdrawalHistoryReq object
// This constructor will only assign default values to properties that have it defined,
func NewGetWithdrawalHistoryReqWithDefaults() *GetWithdrawalHistoryReq {
	this := GetWithdrawalHistoryReq{}
	var currentPage int32 = 1
	this.CurrentPage = &currentPage
	var pageSize int32 = 50
	this.PageSize = &pageSize
	return &this
}

func (o *GetWithdrawalHistoryReq) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["currency"] = o.Currency
	toSerialize["status"] = o.Status
	toSerialize["startAt"] = o.StartAt
	toSerialize["endAt"] = o.EndAt
	toSerialize["currentPage"] = o.CurrentPage
	toSerialize["pageSize"] = o.PageSize
	return toSerialize
}

type GetWithdrawalHistoryReqBuilder struct {
	obj *GetWithdrawalHistoryReq
}

func NewGetWithdrawalHistoryReqBuilder() *GetWithdrawalHistoryReqBuilder {
	return &GetWithdrawalHistoryReqBuilder{obj: NewGetWithdrawalHistoryReqWithDefaults()}
}

// currency
func (builder *GetWithdrawalHistoryReqBuilder) SetCurrency(value string) *GetWithdrawalHistoryReqBuilder {
	builder.obj.Currency = &value
	return builder
}

// Status. Available value: PROCESSING, WALLET_PROCESSING, SUCCESS, and FAILURE
func (builder *GetWithdrawalHistoryReqBuilder) SetStatus(value string) *GetWithdrawalHistoryReqBuilder {
	builder.obj.Status = &value
	return builder
}

// Start time (milisecond)
func (builder *GetWithdrawalHistoryReqBuilder) SetStartAt(value int64) *GetWithdrawalHistoryReqBuilder {
	builder.obj.StartAt = &value
	return builder
}

// End time (milisecond)
func (builder *GetWithdrawalHistoryReqBuilder) SetEndAt(value int64) *GetWithdrawalHistoryReqBuilder {
	builder.obj.EndAt = &value
	return builder
}

// Current request page.
func (builder *GetWithdrawalHistoryReqBuilder) SetCurrentPage(value int32) *GetWithdrawalHistoryReqBuilder {
	builder.obj.CurrentPage = &value
	return builder
}

// Number of results per request. Minimum is 10, maximum is 500.
func (builder *GetWithdrawalHistoryReqBuilder) SetPageSize(value int32) *GetWithdrawalHistoryReqBuilder {
	builder.obj.PageSize = &value
	return builder
}

func (builder *GetWithdrawalHistoryReqBuilder) Build() *GetWithdrawalHistoryReq {
	return builder.obj
}

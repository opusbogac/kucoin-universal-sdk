// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package account

// GetFuturesLedgerReq struct for GetFuturesLedgerReq
type GetFuturesLedgerReq struct {
	// Currency of transaction history, XBT or USDT
	Currency *string `json:"currency,omitempty" url:"currency,omitempty"`
	// Type RealisedPNL-Realised profit and loss, Deposit-Deposit, Withdrawal-withdraw, Transferin-Transfer in, TransferOut-Transfer out
	Type *string `json:"type,omitempty" url:"type,omitempty"`
	// Start offset. Generally, the only attribute of the last returned result of the previous request is used, and the first page is returned by default
	Offset *int64 `json:"offset,omitempty" url:"offset,omitempty"`
	// This parameter functions to judge whether the lookup is forward or not. True means “yes” and False means “no”. This parameter is set as true by default
	Forward *bool `json:"forward,omitempty" url:"forward,omitempty"`
	// Displayed size per page. The default size is 50
	MaxCount *int64 `json:"maxCount,omitempty" url:"maxCount,omitempty"`
	// Start time (milisecond)
	StartAt *int64 `json:"startAt,omitempty" url:"startAt,omitempty"`
	// End time (milisecond)
	EndAt *int64 `json:"endAt,omitempty" url:"endAt,omitempty"`
}

// NewGetFuturesLedgerReq instantiates a new GetFuturesLedgerReq object
// This constructor will assign default values to properties that have it defined
func NewGetFuturesLedgerReq() *GetFuturesLedgerReq {
	this := GetFuturesLedgerReq{}
	var forward bool = true
	this.Forward = &forward
	var maxCount int64 = 50
	this.MaxCount = &maxCount
	return &this
}

// NewGetFuturesLedgerReqWithDefaults instantiates a new GetFuturesLedgerReq object
// This constructor will only assign default values to properties that have it defined,
func NewGetFuturesLedgerReqWithDefaults() *GetFuturesLedgerReq {
	this := GetFuturesLedgerReq{}
	var forward bool = true
	this.Forward = &forward
	var maxCount int64 = 50
	this.MaxCount = &maxCount
	return &this
}

func (o *GetFuturesLedgerReq) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["currency"] = o.Currency
	toSerialize["type"] = o.Type
	toSerialize["offset"] = o.Offset
	toSerialize["forward"] = o.Forward
	toSerialize["maxCount"] = o.MaxCount
	toSerialize["startAt"] = o.StartAt
	toSerialize["endAt"] = o.EndAt
	return toSerialize
}

type GetFuturesLedgerReqBuilder struct {
	obj *GetFuturesLedgerReq
}

func NewGetFuturesLedgerReqBuilder() *GetFuturesLedgerReqBuilder {
	return &GetFuturesLedgerReqBuilder{obj: NewGetFuturesLedgerReqWithDefaults()}
}

// Currency of transaction history, XBT or USDT
func (builder *GetFuturesLedgerReqBuilder) SetCurrency(value string) *GetFuturesLedgerReqBuilder {
	builder.obj.Currency = &value
	return builder
}

// Type RealisedPNL-Realised profit and loss, Deposit-Deposit, Withdrawal-withdraw, Transferin-Transfer in, TransferOut-Transfer out
func (builder *GetFuturesLedgerReqBuilder) SetType(value string) *GetFuturesLedgerReqBuilder {
	builder.obj.Type = &value
	return builder
}

// Start offset. Generally, the only attribute of the last returned result of the previous request is used, and the first page is returned by default
func (builder *GetFuturesLedgerReqBuilder) SetOffset(value int64) *GetFuturesLedgerReqBuilder {
	builder.obj.Offset = &value
	return builder
}

// This parameter functions to judge whether the lookup is forward or not. True means “yes” and False means “no”. This parameter is set as true by default
func (builder *GetFuturesLedgerReqBuilder) SetForward(value bool) *GetFuturesLedgerReqBuilder {
	builder.obj.Forward = &value
	return builder
}

// Displayed size per page. The default size is 50
func (builder *GetFuturesLedgerReqBuilder) SetMaxCount(value int64) *GetFuturesLedgerReqBuilder {
	builder.obj.MaxCount = &value
	return builder
}

// Start time (milisecond)
func (builder *GetFuturesLedgerReqBuilder) SetStartAt(value int64) *GetFuturesLedgerReqBuilder {
	builder.obj.StartAt = &value
	return builder
}

// End time (milisecond)
func (builder *GetFuturesLedgerReqBuilder) SetEndAt(value int64) *GetFuturesLedgerReqBuilder {
	builder.obj.EndAt = &value
	return builder
}

func (builder *GetFuturesLedgerReqBuilder) Build() *GetFuturesLedgerReq {
	return builder.obj
}

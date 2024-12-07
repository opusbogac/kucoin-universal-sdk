// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package transfer

// FlexTransferReq struct for FlexTransferReq
type FlexTransferReq struct {
	// Unique order id created by users to identify their orders, e.g. UUID, with a maximum length of 128 bits
	ClientOid string `json:"clientOid,omitempty"`
	// currency
	Currency string `json:"currency,omitempty"`
	// Transfer amount, the amount is a positive integer multiple of the currency precision.
	Amount string `json:"amount,omitempty"`
	// Transfer out UserId， This is required when transferring sub-account to master-account. It is optional for internal transfers.
	FromUserId *string `json:"fromUserId,omitempty"`
	// Account type：MAIN、TRADE、CONTRACT、MARGIN、ISOLATED、MARGIN_V2、ISOLATED_V2
	FromAccountType string `json:"fromAccountType,omitempty"`
	// Symbol, required when the account type is ISOLATED or ISOLATED_V2, for example: BTC-USDT
	FromAccountTag *string `json:"fromAccountTag,omitempty"`
	// Transfer type：INTERNAL(Transfer within account)、PARENT_TO_SUB(Transfer from master-account to sub-account)，SUB_TO_PARENT(Transfer from sub-account to master-account)
	Type string `json:"type,omitempty"`
	// Transfer in UserId， This is required when transferring master-account to sub-account. It is optional for internal transfers.
	ToUserId *string `json:"toUserId,omitempty"`
	// Account type：MAIN、TRADE、CONTRACT、MARGIN、ISOLATED、MARGIN_V2、ISOLATED_V2
	ToAccountType string `json:"toAccountType,omitempty"`
	// Symbol, required when the account type is ISOLATED or ISOLATED_V2, for example: BTC-USDT
	ToAccountTag *string `json:"toAccountTag,omitempty"`
}

// NewFlexTransferReq instantiates a new FlexTransferReq object
// This constructor will assign default values to properties that have it defined
func NewFlexTransferReq(clientOid string, currency string, amount string, fromAccountType string, Type_ string, toAccountType string) *FlexTransferReq {
	this := FlexTransferReq{}
	this.ClientOid = clientOid
	this.Currency = currency
	this.Amount = amount
	this.FromAccountType = fromAccountType
	this.Type = Type_
	this.ToAccountType = toAccountType
	return &this
}

// NewFlexTransferReqWithDefaults instantiates a new FlexTransferReq object
// This constructor will only assign default values to properties that have it defined,
func NewFlexTransferReqWithDefaults() *FlexTransferReq {
	this := FlexTransferReq{}
	return &this
}

func (o *FlexTransferReq) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["clientOid"] = o.ClientOid
	toSerialize["currency"] = o.Currency
	toSerialize["amount"] = o.Amount
	toSerialize["fromUserId"] = o.FromUserId
	toSerialize["fromAccountType"] = o.FromAccountType
	toSerialize["fromAccountTag"] = o.FromAccountTag
	toSerialize["type"] = o.Type
	toSerialize["toUserId"] = o.ToUserId
	toSerialize["toAccountType"] = o.ToAccountType
	toSerialize["toAccountTag"] = o.ToAccountTag
	return toSerialize
}

type FlexTransferReqBuilder struct {
	obj *FlexTransferReq
}

func NewFlexTransferReqBuilder() *FlexTransferReqBuilder {
	return &FlexTransferReqBuilder{obj: NewFlexTransferReqWithDefaults()}
}

// Unique order id created by users to identify their orders, e.g. UUID, with a maximum length of 128 bits
func (builder *FlexTransferReqBuilder) SetClientOid(value string) *FlexTransferReqBuilder {
	builder.obj.ClientOid = value
	return builder
}

// currency
func (builder *FlexTransferReqBuilder) SetCurrency(value string) *FlexTransferReqBuilder {
	builder.obj.Currency = value
	return builder
}

// Transfer amount, the amount is a positive integer multiple of the currency precision.
func (builder *FlexTransferReqBuilder) SetAmount(value string) *FlexTransferReqBuilder {
	builder.obj.Amount = value
	return builder
}

// Transfer out UserId， This is required when transferring sub-account to master-account. It is optional for internal transfers.
func (builder *FlexTransferReqBuilder) SetFromUserId(value string) *FlexTransferReqBuilder {
	builder.obj.FromUserId = &value
	return builder
}

// Account type：MAIN、TRADE、CONTRACT、MARGIN、ISOLATED、MARGIN_V2、ISOLATED_V2
func (builder *FlexTransferReqBuilder) SetFromAccountType(value string) *FlexTransferReqBuilder {
	builder.obj.FromAccountType = value
	return builder
}

// Symbol, required when the account type is ISOLATED or ISOLATED_V2, for example: BTC-USDT
func (builder *FlexTransferReqBuilder) SetFromAccountTag(value string) *FlexTransferReqBuilder {
	builder.obj.FromAccountTag = &value
	return builder
}

// Transfer type：INTERNAL(Transfer within account)、PARENT_TO_SUB(Transfer from master-account to sub-account)，SUB_TO_PARENT(Transfer from sub-account to master-account)
func (builder *FlexTransferReqBuilder) SetType(value string) *FlexTransferReqBuilder {
	builder.obj.Type = value
	return builder
}

// Transfer in UserId， This is required when transferring master-account to sub-account. It is optional for internal transfers.
func (builder *FlexTransferReqBuilder) SetToUserId(value string) *FlexTransferReqBuilder {
	builder.obj.ToUserId = &value
	return builder
}

// Account type：MAIN、TRADE、CONTRACT、MARGIN、ISOLATED、MARGIN_V2、ISOLATED_V2
func (builder *FlexTransferReqBuilder) SetToAccountType(value string) *FlexTransferReqBuilder {
	builder.obj.ToAccountType = value
	return builder
}

// Symbol, required when the account type is ISOLATED or ISOLATED_V2, for example: BTC-USDT
func (builder *FlexTransferReqBuilder) SetToAccountTag(value string) *FlexTransferReqBuilder {
	builder.obj.ToAccountTag = &value
	return builder
}

func (builder *FlexTransferReqBuilder) Build() *FlexTransferReq {
	return builder.obj
}

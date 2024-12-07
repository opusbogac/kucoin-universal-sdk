// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package account

// GetMarginHFLedgerData struct for GetMarginHFLedgerData
type GetMarginHFLedgerData struct {
	Id *int64 `json:"id,omitempty"`
	// currency
	Currency *string `json:"currency,omitempty"`
	// Change in funds balance
	Amount *string `json:"amount,omitempty"`
	// Deposit or withdrawal fee
	Fee *string `json:"fee,omitempty"`
	// Total balance of funds after change
	Balance *string `json:"balance,omitempty"`
	// Master account type TRADE_HF
	AccountType *string `json:"accountType,omitempty"`
	// Trnasaction type，such as TRANSFER, TRADE_EXCHANGE, etc.
	BizType *string `json:"bizType,omitempty"`
	// Direction of transfer( out or in)
	Direction *string `json:"direction,omitempty"`
	// Ledger creation time
	CreatedAt *int64 `json:"createdAt,omitempty"`
	// Core transaction parameter
	Context *string `json:"context,omitempty"`
	Tax     *string `json:"tax,omitempty"`
}

// NewGetMarginHFLedgerData instantiates a new GetMarginHFLedgerData object
// This constructor will assign default values to properties that have it defined
func NewGetMarginHFLedgerData() *GetMarginHFLedgerData {
	this := GetMarginHFLedgerData{}
	return &this
}

// NewGetMarginHFLedgerDataWithDefaults instantiates a new GetMarginHFLedgerData object
// This constructor will only assign default values to properties that have it defined,
func NewGetMarginHFLedgerDataWithDefaults() *GetMarginHFLedgerData {
	this := GetMarginHFLedgerData{}
	return &this
}

func (o *GetMarginHFLedgerData) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["id"] = o.Id
	toSerialize["currency"] = o.Currency
	toSerialize["amount"] = o.Amount
	toSerialize["fee"] = o.Fee
	toSerialize["balance"] = o.Balance
	toSerialize["accountType"] = o.AccountType
	toSerialize["bizType"] = o.BizType
	toSerialize["direction"] = o.Direction
	toSerialize["createdAt"] = o.CreatedAt
	toSerialize["context"] = o.Context
	toSerialize["tax"] = o.Tax
	return toSerialize
}

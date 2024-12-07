// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package account

// GetIsolatedMarginAccountListV1Assets struct for GetIsolatedMarginAccountListV1Assets
type GetIsolatedMarginAccountListV1Assets struct {
	// Symbol
	Symbol string `json:"symbol,omitempty"`
	// The position status: Existing liabilities-DEBT, No liabilities-CLEAR, Bankrupcy (after position enters a negative balance)-BANKRUPTCY, Existing borrowings-IN_BORROW, Existing repayments-IN_REPAY, Under liquidation-IN_LIQUIDATION, Under auto-renewal assets-IN_AUTO_RENEW .
	Status string `json:"status,omitempty"`
	// debt ratio
	DebtRatio  string                                         `json:"debtRatio,omitempty"`
	BaseAsset  GetIsolatedMarginAccountListV1AssetsBaseAsset  `json:"baseAsset,omitempty"`
	QuoteAsset GetIsolatedMarginAccountListV1AssetsQuoteAsset `json:"quoteAsset,omitempty"`
}

// NewGetIsolatedMarginAccountListV1Assets instantiates a new GetIsolatedMarginAccountListV1Assets object
// This constructor will assign default values to properties that have it defined
func NewGetIsolatedMarginAccountListV1Assets(symbol string, status string, debtRatio string, baseAsset GetIsolatedMarginAccountListV1AssetsBaseAsset, quoteAsset GetIsolatedMarginAccountListV1AssetsQuoteAsset) *GetIsolatedMarginAccountListV1Assets {
	this := GetIsolatedMarginAccountListV1Assets{}
	this.Symbol = symbol
	this.Status = status
	this.DebtRatio = debtRatio
	this.BaseAsset = baseAsset
	this.QuoteAsset = quoteAsset
	return &this
}

// NewGetIsolatedMarginAccountListV1AssetsWithDefaults instantiates a new GetIsolatedMarginAccountListV1Assets object
// This constructor will only assign default values to properties that have it defined,
func NewGetIsolatedMarginAccountListV1AssetsWithDefaults() *GetIsolatedMarginAccountListV1Assets {
	this := GetIsolatedMarginAccountListV1Assets{}
	return &this
}

func (o *GetIsolatedMarginAccountListV1Assets) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["symbol"] = o.Symbol
	toSerialize["status"] = o.Status
	toSerialize["debtRatio"] = o.DebtRatio
	toSerialize["baseAsset"] = o.BaseAsset
	toSerialize["quoteAsset"] = o.QuoteAsset
	return toSerialize
}

// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package account

// GetIsolatedMarginAccountAssetsQuoteAsset quote asset
type GetIsolatedMarginAccountAssetsQuoteAsset struct {
	// currency
	Currency string `json:"currency,omitempty"`
	// Support borrow or not
	BorrowEnabled bool `json:"borrowEnabled,omitempty"`
	// Support transfer or not
	TransferInEnabled bool `json:"transferInEnabled,omitempty"`
	// Liabilities
	Liability string `json:"liability,omitempty"`
	// Total Assets
	Total string `json:"total,omitempty"`
	// Account available assets (total assets - frozen)
	Available string `json:"available,omitempty"`
	// Account frozen assets
	Hold string `json:"hold,omitempty"`
	// The user's remaining maximum loan amount
	MaxBorrowSize string `json:"maxBorrowSize,omitempty"`
}

// NewGetIsolatedMarginAccountAssetsQuoteAsset instantiates a new GetIsolatedMarginAccountAssetsQuoteAsset object
// This constructor will assign default values to properties that have it defined
func NewGetIsolatedMarginAccountAssetsQuoteAsset(currency string, borrowEnabled bool, transferInEnabled bool, liability string, total string, available string, hold string, maxBorrowSize string) *GetIsolatedMarginAccountAssetsQuoteAsset {
	this := GetIsolatedMarginAccountAssetsQuoteAsset{}
	this.Currency = currency
	this.BorrowEnabled = borrowEnabled
	this.TransferInEnabled = transferInEnabled
	this.Liability = liability
	this.Total = total
	this.Available = available
	this.Hold = hold
	this.MaxBorrowSize = maxBorrowSize
	return &this
}

// NewGetIsolatedMarginAccountAssetsQuoteAssetWithDefaults instantiates a new GetIsolatedMarginAccountAssetsQuoteAsset object
// This constructor will only assign default values to properties that have it defined,
func NewGetIsolatedMarginAccountAssetsQuoteAssetWithDefaults() *GetIsolatedMarginAccountAssetsQuoteAsset {
	this := GetIsolatedMarginAccountAssetsQuoteAsset{}
	return &this
}

func (o *GetIsolatedMarginAccountAssetsQuoteAsset) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["currency"] = o.Currency
	toSerialize["borrowEnabled"] = o.BorrowEnabled
	toSerialize["transferInEnabled"] = o.TransferInEnabled
	toSerialize["liability"] = o.Liability
	toSerialize["total"] = o.Total
	toSerialize["available"] = o.Available
	toSerialize["hold"] = o.Hold
	toSerialize["maxBorrowSize"] = o.MaxBorrowSize
	return toSerialize
}

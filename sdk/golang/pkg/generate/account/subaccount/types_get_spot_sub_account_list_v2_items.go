// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package subaccount

// GetSpotSubAccountListV2Items struct for GetSpotSubAccountListV2Items
type GetSpotSubAccountListV2Items struct {
	// The user ID of the sub-user.
	SubUserId string `json:"subUserId,omitempty"`
	// The username of the sub-user.
	SubName string `json:"subName,omitempty"`
	// Funding Account
	MainAccounts []GetSpotSubAccountListV2ItemsMainAccounts `json:"mainAccounts,omitempty"`
	// Spot Account
	TradeAccounts []GetSpotSubAccountListV2ItemsTradeAccounts `json:"tradeAccounts,omitempty"`
	// Margin Account
	MarginAccounts []GetSpotSubAccountListV2ItemsMarginAccounts `json:"marginAccounts,omitempty"`
	// This param is deprecated and only valid for some old users
	TradeHFAccounts []string `json:"tradeHFAccounts,omitempty"`
}

// NewGetSpotSubAccountListV2Items instantiates a new GetSpotSubAccountListV2Items object
// This constructor will assign default values to properties that have it defined
func NewGetSpotSubAccountListV2Items(subUserId string, subName string, mainAccounts []GetSpotSubAccountListV2ItemsMainAccounts, tradeAccounts []GetSpotSubAccountListV2ItemsTradeAccounts, marginAccounts []GetSpotSubAccountListV2ItemsMarginAccounts, tradeHFAccounts []string) *GetSpotSubAccountListV2Items {
	this := GetSpotSubAccountListV2Items{}
	this.SubUserId = subUserId
	this.SubName = subName
	this.MainAccounts = mainAccounts
	this.TradeAccounts = tradeAccounts
	this.MarginAccounts = marginAccounts
	this.TradeHFAccounts = tradeHFAccounts
	return &this
}

// NewGetSpotSubAccountListV2ItemsWithDefaults instantiates a new GetSpotSubAccountListV2Items object
// This constructor will only assign default values to properties that have it defined,
func NewGetSpotSubAccountListV2ItemsWithDefaults() *GetSpotSubAccountListV2Items {
	this := GetSpotSubAccountListV2Items{}
	return &this
}

func (o *GetSpotSubAccountListV2Items) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["subUserId"] = o.SubUserId
	toSerialize["subName"] = o.SubName
	toSerialize["mainAccounts"] = o.MainAccounts
	toSerialize["tradeAccounts"] = o.TradeAccounts
	toSerialize["marginAccounts"] = o.MarginAccounts
	toSerialize["tradeHFAccounts"] = o.TradeHFAccounts
	return toSerialize
}

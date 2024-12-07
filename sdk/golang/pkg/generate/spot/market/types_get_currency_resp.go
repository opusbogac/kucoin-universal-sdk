// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package market

import (
	"github.com/Kucoin/kucoin-universal-sdk/sdk/golang/pkg/types"
)

// GetCurrencyResp struct for GetCurrencyResp
type GetCurrencyResp struct {
	// common response
	CommonResponse *types.RestResponse
	// A unique currency code that will never change
	Currency string `json:"currency,omitempty"`
	// Currency name, will change after renaming
	Name string `json:"name,omitempty"`
	// Full name of a currency, will change after renaming
	FullName string `json:"fullName,omitempty"`
	// Currency precision
	Precision int32 `json:"precision,omitempty"`
	// Number of block confirmations
	Confirms int32 `json:"confirms,omitempty"`
	// Contract address
	ContractAddress string `json:"contractAddress,omitempty"`
	// Support margin or not
	IsMarginEnabled bool `json:"isMarginEnabled,omitempty"`
	// Support debit or not
	IsDebitEnabled bool `json:"isDebitEnabled,omitempty"`
	// chain list
	Chains []GetCurrencyChains `json:"chains,omitempty"`
}

// NewGetCurrencyResp instantiates a new GetCurrencyResp object
// This constructor will assign default values to properties that have it defined
func NewGetCurrencyResp(currency string, name string, fullName string, precision int32, confirms int32, contractAddress string, isMarginEnabled bool, isDebitEnabled bool, chains []GetCurrencyChains) *GetCurrencyResp {
	this := GetCurrencyResp{}
	this.Currency = currency
	this.Name = name
	this.FullName = fullName
	this.Precision = precision
	this.Confirms = confirms
	this.ContractAddress = contractAddress
	this.IsMarginEnabled = isMarginEnabled
	this.IsDebitEnabled = isDebitEnabled
	this.Chains = chains
	return &this
}

// NewGetCurrencyRespWithDefaults instantiates a new GetCurrencyResp object
// This constructor will only assign default values to properties that have it defined,
func NewGetCurrencyRespWithDefaults() *GetCurrencyResp {
	this := GetCurrencyResp{}
	return &this
}

func (o *GetCurrencyResp) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["currency"] = o.Currency
	toSerialize["name"] = o.Name
	toSerialize["fullName"] = o.FullName
	toSerialize["precision"] = o.Precision
	toSerialize["confirms"] = o.Confirms
	toSerialize["contractAddress"] = o.ContractAddress
	toSerialize["isMarginEnabled"] = o.IsMarginEnabled
	toSerialize["isDebitEnabled"] = o.IsDebitEnabled
	toSerialize["chains"] = o.Chains
	return toSerialize
}

func (o *GetCurrencyResp) SetCommonResponse(response *types.RestResponse) {
	o.CommonResponse = response
}

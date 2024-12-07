// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package deposit

import (
	"github.com/Kucoin/kucoin-universal-sdk/sdk/golang/pkg/types"
)

// AddDepositAddressV1Resp struct for AddDepositAddressV1Resp
type AddDepositAddressV1Resp struct {
	// common response
	CommonResponse *types.RestResponse
	// Deposit address
	Address string `json:"address,omitempty"`
	// Address remark. If there’s no remark, it is empty. When you withdraw from other platforms to the KuCoin, you need to fill in memo(tag). If you do not fill memo (tag), your deposit may not be available, please be cautious.
	Memo string `json:"memo,omitempty"`
	// The chainName of currency
	Chain string `json:"chain,omitempty"`
	// The chainId of currency
	ChainId string `json:"chainId,omitempty"`
	// Deposit account type: main (funding account), trade (spot trading account)
	To string `json:"to,omitempty"`
	// currency
	Currency string `json:"currency,omitempty"`
}

// NewAddDepositAddressV1Resp instantiates a new AddDepositAddressV1Resp object
// This constructor will assign default values to properties that have it defined
func NewAddDepositAddressV1Resp(address string, memo string, chain string, chainId string, to string, currency string) *AddDepositAddressV1Resp {
	this := AddDepositAddressV1Resp{}
	this.Address = address
	this.Memo = memo
	this.Chain = chain
	this.ChainId = chainId
	this.To = to
	this.Currency = currency
	return &this
}

// NewAddDepositAddressV1RespWithDefaults instantiates a new AddDepositAddressV1Resp object
// This constructor will only assign default values to properties that have it defined,
func NewAddDepositAddressV1RespWithDefaults() *AddDepositAddressV1Resp {
	this := AddDepositAddressV1Resp{}
	return &this
}

func (o *AddDepositAddressV1Resp) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["address"] = o.Address
	toSerialize["memo"] = o.Memo
	toSerialize["chain"] = o.Chain
	toSerialize["chainId"] = o.ChainId
	toSerialize["to"] = o.To
	toSerialize["currency"] = o.Currency
	return toSerialize
}

func (o *AddDepositAddressV1Resp) SetCommonResponse(response *types.RestResponse) {
	o.CommonResponse = response
}

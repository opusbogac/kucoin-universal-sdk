// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package order

// BatchCancelOrdersClientOidsList struct for BatchCancelOrdersClientOidsList
type BatchCancelOrdersClientOidsList struct {
	// Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](doc://link/endpoint/3470220)
	Symbol    string `json:"symbol,omitempty"`
	ClientOid string `json:"clientOid,omitempty"`
}

// NewBatchCancelOrdersClientOidsList instantiates a new BatchCancelOrdersClientOidsList object
// This constructor will assign default values to properties that have it defined
func NewBatchCancelOrdersClientOidsList(symbol string, clientOid string) *BatchCancelOrdersClientOidsList {
	this := BatchCancelOrdersClientOidsList{}
	this.Symbol = symbol
	this.ClientOid = clientOid
	return &this
}

// NewBatchCancelOrdersClientOidsListWithDefaults instantiates a new BatchCancelOrdersClientOidsList object
// This constructor will only assign default values to properties that have it defined,
func NewBatchCancelOrdersClientOidsListWithDefaults() *BatchCancelOrdersClientOidsList {
	this := BatchCancelOrdersClientOidsList{}
	return &this
}

func (o *BatchCancelOrdersClientOidsList) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["symbol"] = o.Symbol
	toSerialize["clientOid"] = o.ClientOid
	return toSerialize
}

type BatchCancelOrdersClientOidsListBuilder struct {
	obj *BatchCancelOrdersClientOidsList
}

func NewBatchCancelOrdersClientOidsListBuilder() *BatchCancelOrdersClientOidsListBuilder {
	return &BatchCancelOrdersClientOidsListBuilder{obj: NewBatchCancelOrdersClientOidsListWithDefaults()}
}

// Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](doc://link/endpoint/3470220)
func (builder *BatchCancelOrdersClientOidsListBuilder) SetSymbol(value string) *BatchCancelOrdersClientOidsListBuilder {
	builder.obj.Symbol = value
	return builder
}

func (builder *BatchCancelOrdersClientOidsListBuilder) SetClientOid(value string) *BatchCancelOrdersClientOidsListBuilder {
	builder.obj.ClientOid = value
	return builder
}

func (builder *BatchCancelOrdersClientOidsListBuilder) Build() *BatchCancelOrdersClientOidsList {
	return builder.obj
}

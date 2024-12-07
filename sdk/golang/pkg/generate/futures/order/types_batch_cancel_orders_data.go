// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package order

// BatchCancelOrdersData struct for BatchCancelOrdersData
type BatchCancelOrdersData struct {
	OrderId   string `json:"orderId,omitempty"`
	ClientOid string `json:"clientOid,omitempty"`
	Code      string `json:"code,omitempty"`
	Msg       string `json:"msg,omitempty"`
}

// NewBatchCancelOrdersData instantiates a new BatchCancelOrdersData object
// This constructor will assign default values to properties that have it defined
func NewBatchCancelOrdersData(orderId string, clientOid string, code string, msg string) *BatchCancelOrdersData {
	this := BatchCancelOrdersData{}
	this.OrderId = orderId
	this.ClientOid = clientOid
	this.Code = code
	this.Msg = msg
	return &this
}

// NewBatchCancelOrdersDataWithDefaults instantiates a new BatchCancelOrdersData object
// This constructor will only assign default values to properties that have it defined,
func NewBatchCancelOrdersDataWithDefaults() *BatchCancelOrdersData {
	this := BatchCancelOrdersData{}
	return &this
}

func (o *BatchCancelOrdersData) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["orderId"] = o.OrderId
	toSerialize["clientOid"] = o.ClientOid
	toSerialize["code"] = o.Code
	toSerialize["msg"] = o.Msg
	return toSerialize
}

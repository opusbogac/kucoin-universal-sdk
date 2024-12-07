// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package marginprivate

import (
	"encoding/json"
	"github.com/Kucoin/kucoin-universal-sdk/sdk/golang/pkg/types"
)

// CrossMarginPositionEvent struct for CrossMarginPositionEvent
type CrossMarginPositionEvent struct {
	// common response
	CommonResponse *types.WsMessage
	// Debt ratio
	DebtRatio float32 `json:"debtRatio,omitempty"`
	// Total asset in BTC (interest included)
	TotalAsset                  float32 `json:"totalAsset,omitempty"`
	MarginCoefficientTotalAsset string  `json:"marginCoefficientTotalAsset,omitempty"`
	// Total debt in BTC (interest included)
	TotalDebt string `json:"totalDebt,omitempty"`
	// Asset list (interest included)
	AssetList map[string]CrossMarginPositionAssetListValue `json:"assetList,omitempty"`
	// Debt list (interest included)
	DebtList  map[string]string `json:"debtList,omitempty"`
	Timestamp int64             `json:"timestamp,omitempty"`
	// Event type, **Only applicable to \"debt.ratio\" subject**
	Type string `json:"type,omitempty"`
}

// NewCrossMarginPositionEvent instantiates a new CrossMarginPositionEvent object
// This constructor will assign default values to properties that have it defined
func NewCrossMarginPositionEvent(debtRatio float32, totalAsset float32, marginCoefficientTotalAsset string, totalDebt string, assetList map[string]CrossMarginPositionAssetListValue, debtList map[string]string, timestamp int64, Type_ string) *CrossMarginPositionEvent {
	this := CrossMarginPositionEvent{}
	this.DebtRatio = debtRatio
	this.TotalAsset = totalAsset
	this.MarginCoefficientTotalAsset = marginCoefficientTotalAsset
	this.TotalDebt = totalDebt
	this.AssetList = assetList
	this.DebtList = debtList
	this.Timestamp = timestamp
	this.Type = Type_
	return &this
}

// NewCrossMarginPositionEventWithDefaults instantiates a new CrossMarginPositionEvent object
// This constructor will only assign default values to properties that have it defined,
func NewCrossMarginPositionEventWithDefaults() *CrossMarginPositionEvent {
	this := CrossMarginPositionEvent{}
	return &this
}

func (o *CrossMarginPositionEvent) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["debtRatio"] = o.DebtRatio
	toSerialize["totalAsset"] = o.TotalAsset
	toSerialize["marginCoefficientTotalAsset"] = o.MarginCoefficientTotalAsset
	toSerialize["totalDebt"] = o.TotalDebt
	toSerialize["assetList"] = o.AssetList
	toSerialize["debtList"] = o.DebtList
	toSerialize["timestamp"] = o.Timestamp
	toSerialize["type"] = o.Type
	return toSerialize
}

type CrossMarginPositionEventCallback func(topic string, subject string, data *CrossMarginPositionEvent) error

type CrossMarginPositionEventCallbackWrapper struct {
	callback CrossMarginPositionEventCallback
}

func (w *CrossMarginPositionEventCallbackWrapper) OnMessage(msg *types.WsMessage) error {
	obj := &CrossMarginPositionEvent{}
	err := json.Unmarshal(msg.RawData, obj)
	if err != nil {
		return err
	}
	obj.CommonResponse = msg
	return w.callback(msg.Topic, msg.Subject, obj)
}

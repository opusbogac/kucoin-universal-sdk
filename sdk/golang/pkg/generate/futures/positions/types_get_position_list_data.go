// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package positions

// GetPositionListData struct for GetPositionListData
type GetPositionListData struct {
	// Position ID
	Id string `json:"id,omitempty"`
	// Symbol of the contract, Please refer to [Get Symbol endpoint: symbol](doc://link/endpoint/3470220)
	Symbol string `json:"symbol,omitempty"`
	// Whether it is cross margin.
	CrossMode bool `json:"crossMode,omitempty"`
	// ADL ranking percentile
	DelevPercentage float32 `json:"delevPercentage,omitempty"`
	// Open time
	OpeningTimestamp int64 `json:"openingTimestamp,omitempty"`
	// Current timestamp
	CurrentTimestamp int64 `json:"currentTimestamp,omitempty"`
	// Current postion quantity
	CurrentQty int32 `json:"currentQty,omitempty"`
	// Current postion value
	CurrentCost float32 `json:"currentCost,omitempty"`
	// Current commission
	CurrentComm float32 `json:"currentComm,omitempty"`
	// Unrealised value
	UnrealisedCost float32 `json:"unrealisedCost,omitempty"`
	// Accumulated realised gross profit value
	RealisedGrossCost float32 `json:"realisedGrossCost,omitempty"`
	// Current realised position value
	RealisedCost float32 `json:"realisedCost,omitempty"`
	// Opened position or not
	IsOpen bool `json:"isOpen,omitempty"`
	// Mark price
	MarkPrice float32 `json:"markPrice,omitempty"`
	// Mark Value
	MarkValue float32 `json:"markValue,omitempty"`
	// Position value
	PosCost float32 `json:"posCost,omitempty"`
	// Inital margin Cross = opening value/cross leverage; isolated = accumulation of initial margin for each transaction
	PosInit float32 `json:"posInit,omitempty"`
	// Bankruptcy cost Cross = mark value * imr; Isolated = position margin (accumulation of initial margin, additional margin, generated funding fees, etc.)
	PosMargin float32 `json:"posMargin,omitempty"`
	// Accumulated realised gross profit value
	RealisedGrossPnl float32 `json:"realisedGrossPnl,omitempty"`
	// Realised profit and loss
	RealisedPnl float32 `json:"realisedPnl,omitempty"`
	// Unrealised profit and loss
	UnrealisedPnl float32 `json:"unrealisedPnl,omitempty"`
	// Profit-loss ratio of the position
	UnrealisedPnlPcnt float32 `json:"unrealisedPnlPcnt,omitempty"`
	// Rate of return on investment
	UnrealisedRoePcnt float32 `json:"unrealisedRoePcnt,omitempty"`
	// Average entry price
	AvgEntryPrice float32 `json:"avgEntryPrice,omitempty"`
	// Liquidation price For Cross Margin, you can refer to the liquidationPrice, and the liquidation is based on the risk rate.
	LiquidationPrice float32 `json:"liquidationPrice,omitempty"`
	// Bankruptcy price For Cross Margin, you can refer to the bankruptPrice, and the liquidation is based on the risk rate.
	BankruptPrice float32 `json:"bankruptPrice,omitempty"`
	// Currency used to clear and settle the trades
	SettleCurrency string `json:"settleCurrency,omitempty"`
	// Reverse contract or not
	IsInverse bool `json:"isInverse,omitempty"`
	// Margin Mode: CROSS，ISOLATED
	MarginMode string `json:"marginMode,omitempty"`
	// Position Side
	PositionSide string `json:"positionSide,omitempty"`
	// Leverage
	Leverage float32 `json:"leverage,omitempty"`
	// Auto deposit margin or not **Only applicable to Isolated Margin**
	AutoDeposit *bool `json:"autoDeposit,omitempty"`
	// Maintenance margin requirement **Only applicable to Isolated Margin**
	MaintMarginReq *float32 `json:"maintMarginReq,omitempty"`
	// Risk limit **Only applicable to Isolated Margin**
	RiskLimit *float32 `json:"riskLimit,omitempty"`
	// Leverage of the order **Only applicable to Isolated Margin**
	RealLeverage *float32 `json:"realLeverage,omitempty"`
	// added margin **Only applicable to Isolated Margin**
	PosCross *float32 `json:"posCross,omitempty"`
	// Additional margin calls (automatic, manual, adjusted risk limits) **Only applicable to Isolated Margin**
	PosCrossMargin *float32 `json:"posCrossMargin,omitempty"`
	// Bankruptcy cost **Only applicable to Isolated Margin**
	PosComm *float32 `json:"posComm,omitempty"`
	// Part of bankruptcy cost (positioning, add margin) **Only applicable to Isolated Margin**
	PosCommCommon *float32 `json:"posCommCommon,omitempty"`
	// Funding fees paid out **Only applicable to Isolated Margin**
	PosLoss *float32 `json:"posLoss,omitempty"`
	// The current remaining unsettled funding fee for the position **Only applicable to Isolated Margin**
	PosFunding *float32 `json:"posFunding,omitempty"`
	// Maintenance margin **Only applicable to Isolated Margin**
	PosMaint *float32 `json:"posMaint,omitempty"`
	// Position margin **Only applicable to Isolated Margin**
	MaintMargin *float32 `json:"maintMargin,omitempty"`
	// Maintenance margin rate **Only applicable to Isolated Margin**
	MaintainMargin *float32 `json:"maintainMargin,omitempty"`
}

// NewGetPositionListData instantiates a new GetPositionListData object
// This constructor will assign default values to properties that have it defined
func NewGetPositionListData(id string, symbol string, crossMode bool, delevPercentage float32, openingTimestamp int64, currentTimestamp int64, currentQty int32, currentCost float32, currentComm float32, unrealisedCost float32, realisedGrossCost float32, realisedCost float32, isOpen bool, markPrice float32, markValue float32, posCost float32, posInit float32, posMargin float32, realisedGrossPnl float32, realisedPnl float32, unrealisedPnl float32, unrealisedPnlPcnt float32, unrealisedRoePcnt float32, avgEntryPrice float32, liquidationPrice float32, bankruptPrice float32, settleCurrency string, isInverse bool, marginMode string, positionSide string, leverage float32) *GetPositionListData {
	this := GetPositionListData{}
	this.Id = id
	this.Symbol = symbol
	this.CrossMode = crossMode
	this.DelevPercentage = delevPercentage
	this.OpeningTimestamp = openingTimestamp
	this.CurrentTimestamp = currentTimestamp
	this.CurrentQty = currentQty
	this.CurrentCost = currentCost
	this.CurrentComm = currentComm
	this.UnrealisedCost = unrealisedCost
	this.RealisedGrossCost = realisedGrossCost
	this.RealisedCost = realisedCost
	this.IsOpen = isOpen
	this.MarkPrice = markPrice
	this.MarkValue = markValue
	this.PosCost = posCost
	this.PosInit = posInit
	this.PosMargin = posMargin
	this.RealisedGrossPnl = realisedGrossPnl
	this.RealisedPnl = realisedPnl
	this.UnrealisedPnl = unrealisedPnl
	this.UnrealisedPnlPcnt = unrealisedPnlPcnt
	this.UnrealisedRoePcnt = unrealisedRoePcnt
	this.AvgEntryPrice = avgEntryPrice
	this.LiquidationPrice = liquidationPrice
	this.BankruptPrice = bankruptPrice
	this.SettleCurrency = settleCurrency
	this.IsInverse = isInverse
	this.MarginMode = marginMode
	this.PositionSide = positionSide
	this.Leverage = leverage
	return &this
}

// NewGetPositionListDataWithDefaults instantiates a new GetPositionListData object
// This constructor will only assign default values to properties that have it defined,
func NewGetPositionListDataWithDefaults() *GetPositionListData {
	this := GetPositionListData{}
	return &this
}

func (o *GetPositionListData) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["id"] = o.Id
	toSerialize["symbol"] = o.Symbol
	toSerialize["crossMode"] = o.CrossMode
	toSerialize["delevPercentage"] = o.DelevPercentage
	toSerialize["openingTimestamp"] = o.OpeningTimestamp
	toSerialize["currentTimestamp"] = o.CurrentTimestamp
	toSerialize["currentQty"] = o.CurrentQty
	toSerialize["currentCost"] = o.CurrentCost
	toSerialize["currentComm"] = o.CurrentComm
	toSerialize["unrealisedCost"] = o.UnrealisedCost
	toSerialize["realisedGrossCost"] = o.RealisedGrossCost
	toSerialize["realisedCost"] = o.RealisedCost
	toSerialize["isOpen"] = o.IsOpen
	toSerialize["markPrice"] = o.MarkPrice
	toSerialize["markValue"] = o.MarkValue
	toSerialize["posCost"] = o.PosCost
	toSerialize["posInit"] = o.PosInit
	toSerialize["posMargin"] = o.PosMargin
	toSerialize["realisedGrossPnl"] = o.RealisedGrossPnl
	toSerialize["realisedPnl"] = o.RealisedPnl
	toSerialize["unrealisedPnl"] = o.UnrealisedPnl
	toSerialize["unrealisedPnlPcnt"] = o.UnrealisedPnlPcnt
	toSerialize["unrealisedRoePcnt"] = o.UnrealisedRoePcnt
	toSerialize["avgEntryPrice"] = o.AvgEntryPrice
	toSerialize["liquidationPrice"] = o.LiquidationPrice
	toSerialize["bankruptPrice"] = o.BankruptPrice
	toSerialize["settleCurrency"] = o.SettleCurrency
	toSerialize["isInverse"] = o.IsInverse
	toSerialize["marginMode"] = o.MarginMode
	toSerialize["positionSide"] = o.PositionSide
	toSerialize["leverage"] = o.Leverage
	toSerialize["autoDeposit"] = o.AutoDeposit
	toSerialize["maintMarginReq"] = o.MaintMarginReq
	toSerialize["riskLimit"] = o.RiskLimit
	toSerialize["realLeverage"] = o.RealLeverage
	toSerialize["posCross"] = o.PosCross
	toSerialize["posCrossMargin"] = o.PosCrossMargin
	toSerialize["posComm"] = o.PosComm
	toSerialize["posCommCommon"] = o.PosCommCommon
	toSerialize["posLoss"] = o.PosLoss
	toSerialize["posFunding"] = o.PosFunding
	toSerialize["posMaint"] = o.PosMaint
	toSerialize["maintMargin"] = o.MaintMargin
	toSerialize["maintainMargin"] = o.MaintainMargin
	return toSerialize
}

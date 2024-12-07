// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package order

// AddStopOrderReq struct for AddStopOrderReq
type AddStopOrderReq struct {
	// Client Order Id，The ClientOid field is a unique ID created by the user（we recommend using a UUID）, and can only contain numbers, letters, underscores （_）, and hyphens （-）. This field is returned when order information is obtained. You can use clientOid to tag your orders. ClientOid is different from the order ID created by the service provider. Please do not initiate requests using the same clientOid. The maximum length for the ClientOid is 40 characters.  Please remember the orderId created by the service provider, it used to check for updates in order status.
	ClientOid *string `json:"clientOid,omitempty"`
	// specify if the order is to 'buy' or 'sell'
	Side string `json:"side,omitempty"`
	// symbol
	Symbol string `json:"symbol,omitempty"`
	// specify if the order is an 'limit' order or 'market' order.   The type of order you specify when you place your order determines whether or not you need to request other parameters and also affects the execution of the matching engine.  When placing a limit order, you must specify a price and size. The system will try to match the order according to market price or a price better than market price. If the order cannot be immediately matched, it will stay in the order book until it is matched or the user cancels.  Unlike limit orders, the price for market orders fluctuates with market prices. When placing a market order, you do not need to specify a price, you only need to specify a quantity. Market orders are filled immediately and will not enter the order book. All market orders are takers and a taker fee will be charged.
	Type string `json:"type,omitempty"`
	// Order placement remarks, length cannot exceed 20 characters (ASCII)
	Remark *string `json:"remark,omitempty"`
	// [Self Trade Prevention](doc://link/pages/338146) is divided into four strategies: CN, CO, CB , and DC
	Stp *string `json:"stp,omitempty"`
	// Specify price for order, not need for market order.  When placing a limit order, the price must be based on priceIncrement for the trading pair. The price increment (priceIncrement) is the price precision for the trading pair. For example, for the BTC-USDT trading pair, the priceIncrement is 0.00001000. So the price for your orders cannot be less than 0.00001000 and must be a multiple of priceIncrement. Otherwise, the order will return an invalid priceIncrement error.
	Price *string `json:"price,omitempty"`
	// Specify quantity for order  When **type** is limit, size refers to the amount of trading targets (the asset name written in front) for the trading pair. Teh Size must be based on the baseIncrement of the trading pair. The baseIncrement represents the precision for the trading pair. The size of an order must be a positive-integer multiple of baseIncrement and must be between baseMinSize and baseMaxSize.  When **type** is market, select one out of two: size or funds
	Size *string `json:"size,omitempty"`
	// [Time in force](doc://link/pages/338146) is a special strategy used during trading. Required for limit orders.
	TimeInForce *string `json:"timeInForce,omitempty"`
	// passive order labels, this is disabled when the order timing strategy is IOC or FOK if **type** is limit.
	PostOnly *bool `json:"postOnly,omitempty"`
	// Hidden or not (not shown in order book) when **type** is limit
	Hidden *bool `json:"hidden,omitempty"`
	// Whether or not only visible portions of orders are shown in iceberg orders when **type** is limit.
	Iceberg *bool `json:"iceberg,omitempty"`
	// When **type** is limit, this is Maximum visible quantity in iceberg orders.
	VisibleSize *string `json:"visibleSize,omitempty"`
	// Cancel after n seconds，the order timing strategy is GTT when **type** is limit.
	CancelAfter *int64 `json:"cancelAfter,omitempty"`
	// When **type** is market, select one out of two: size or funds
	Funds *string `json:"funds,omitempty"`
	// The trigger price.
	StopPrice string `json:"stopPrice,omitempty"`
	// The type of trading : TRADE（Spot）, MARGIN_TRADE (Cross Margin), MARGIN_ISOLATED_TRADE (Isolated Margin). Default is TRADE
	TradeType *string `json:"tradeType,omitempty"`
}

// NewAddStopOrderReq instantiates a new AddStopOrderReq object
// This constructor will assign default values to properties that have it defined
func NewAddStopOrderReq(side string, symbol string, Type_ string, stopPrice string) *AddStopOrderReq {
	this := AddStopOrderReq{}
	this.Side = side
	this.Symbol = symbol
	this.Type = Type_
	var timeInForce string = "GTC"
	this.TimeInForce = &timeInForce
	var postOnly bool = false
	this.PostOnly = &postOnly
	var hidden bool = false
	this.Hidden = &hidden
	var iceberg bool = false
	this.Iceberg = &iceberg
	this.StopPrice = stopPrice
	return &this
}

// NewAddStopOrderReqWithDefaults instantiates a new AddStopOrderReq object
// This constructor will only assign default values to properties that have it defined,
func NewAddStopOrderReqWithDefaults() *AddStopOrderReq {
	this := AddStopOrderReq{}
	var timeInForce string = "GTC"
	this.TimeInForce = &timeInForce
	var postOnly bool = false
	this.PostOnly = &postOnly
	var hidden bool = false
	this.Hidden = &hidden
	var iceberg bool = false
	this.Iceberg = &iceberg
	return &this
}

func (o *AddStopOrderReq) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["clientOid"] = o.ClientOid
	toSerialize["side"] = o.Side
	toSerialize["symbol"] = o.Symbol
	toSerialize["type"] = o.Type
	toSerialize["remark"] = o.Remark
	toSerialize["stp"] = o.Stp
	toSerialize["price"] = o.Price
	toSerialize["size"] = o.Size
	toSerialize["timeInForce"] = o.TimeInForce
	toSerialize["postOnly"] = o.PostOnly
	toSerialize["hidden"] = o.Hidden
	toSerialize["iceberg"] = o.Iceberg
	toSerialize["visibleSize"] = o.VisibleSize
	toSerialize["cancelAfter"] = o.CancelAfter
	toSerialize["funds"] = o.Funds
	toSerialize["stopPrice"] = o.StopPrice
	toSerialize["tradeType"] = o.TradeType
	return toSerialize
}

type AddStopOrderReqBuilder struct {
	obj *AddStopOrderReq
}

func NewAddStopOrderReqBuilder() *AddStopOrderReqBuilder {
	return &AddStopOrderReqBuilder{obj: NewAddStopOrderReqWithDefaults()}
}

// Client Order Id，The ClientOid field is a unique ID created by the user（we recommend using a UUID）, and can only contain numbers, letters, underscores （_）, and hyphens （-）. This field is returned when order information is obtained. You can use clientOid to tag your orders. ClientOid is different from the order ID created by the service provider. Please do not initiate requests using the same clientOid. The maximum length for the ClientOid is 40 characters.  Please remember the orderId created by the service provider, it used to check for updates in order status.
func (builder *AddStopOrderReqBuilder) SetClientOid(value string) *AddStopOrderReqBuilder {
	builder.obj.ClientOid = &value
	return builder
}

// specify if the order is to 'buy' or 'sell'
func (builder *AddStopOrderReqBuilder) SetSide(value string) *AddStopOrderReqBuilder {
	builder.obj.Side = value
	return builder
}

// symbol
func (builder *AddStopOrderReqBuilder) SetSymbol(value string) *AddStopOrderReqBuilder {
	builder.obj.Symbol = value
	return builder
}

// specify if the order is an 'limit' order or 'market' order.   The type of order you specify when you place your order determines whether or not you need to request other parameters and also affects the execution of the matching engine.  When placing a limit order, you must specify a price and size. The system will try to match the order according to market price or a price better than market price. If the order cannot be immediately matched, it will stay in the order book until it is matched or the user cancels.  Unlike limit orders, the price for market orders fluctuates with market prices. When placing a market order, you do not need to specify a price, you only need to specify a quantity. Market orders are filled immediately and will not enter the order book. All market orders are takers and a taker fee will be charged.
func (builder *AddStopOrderReqBuilder) SetType(value string) *AddStopOrderReqBuilder {
	builder.obj.Type = value
	return builder
}

// Order placement remarks, length cannot exceed 20 characters (ASCII)
func (builder *AddStopOrderReqBuilder) SetRemark(value string) *AddStopOrderReqBuilder {
	builder.obj.Remark = &value
	return builder
}

// [Self Trade Prevention](doc://link/pages/338146) is divided into four strategies: CN, CO, CB , and DC
func (builder *AddStopOrderReqBuilder) SetStp(value string) *AddStopOrderReqBuilder {
	builder.obj.Stp = &value
	return builder
}

// Specify price for order, not need for market order.  When placing a limit order, the price must be based on priceIncrement for the trading pair. The price increment (priceIncrement) is the price precision for the trading pair. For example, for the BTC-USDT trading pair, the priceIncrement is 0.00001000. So the price for your orders cannot be less than 0.00001000 and must be a multiple of priceIncrement. Otherwise, the order will return an invalid priceIncrement error.
func (builder *AddStopOrderReqBuilder) SetPrice(value string) *AddStopOrderReqBuilder {
	builder.obj.Price = &value
	return builder
}

// Specify quantity for order  When **type** is limit, size refers to the amount of trading targets (the asset name written in front) for the trading pair. Teh Size must be based on the baseIncrement of the trading pair. The baseIncrement represents the precision for the trading pair. The size of an order must be a positive-integer multiple of baseIncrement and must be between baseMinSize and baseMaxSize.  When **type** is market, select one out of two: size or funds
func (builder *AddStopOrderReqBuilder) SetSize(value string) *AddStopOrderReqBuilder {
	builder.obj.Size = &value
	return builder
}

// [Time in force](doc://link/pages/338146) is a special strategy used during trading. Required for limit orders.
func (builder *AddStopOrderReqBuilder) SetTimeInForce(value string) *AddStopOrderReqBuilder {
	builder.obj.TimeInForce = &value
	return builder
}

// passive order labels, this is disabled when the order timing strategy is IOC or FOK if **type** is limit.
func (builder *AddStopOrderReqBuilder) SetPostOnly(value bool) *AddStopOrderReqBuilder {
	builder.obj.PostOnly = &value
	return builder
}

// Hidden or not (not shown in order book) when **type** is limit
func (builder *AddStopOrderReqBuilder) SetHidden(value bool) *AddStopOrderReqBuilder {
	builder.obj.Hidden = &value
	return builder
}

// Whether or not only visible portions of orders are shown in iceberg orders when **type** is limit.
func (builder *AddStopOrderReqBuilder) SetIceberg(value bool) *AddStopOrderReqBuilder {
	builder.obj.Iceberg = &value
	return builder
}

// When **type** is limit, this is Maximum visible quantity in iceberg orders.
func (builder *AddStopOrderReqBuilder) SetVisibleSize(value string) *AddStopOrderReqBuilder {
	builder.obj.VisibleSize = &value
	return builder
}

// Cancel after n seconds，the order timing strategy is GTT when **type** is limit.
func (builder *AddStopOrderReqBuilder) SetCancelAfter(value int64) *AddStopOrderReqBuilder {
	builder.obj.CancelAfter = &value
	return builder
}

// When **type** is market, select one out of two: size or funds
func (builder *AddStopOrderReqBuilder) SetFunds(value string) *AddStopOrderReqBuilder {
	builder.obj.Funds = &value
	return builder
}

// The trigger price.
func (builder *AddStopOrderReqBuilder) SetStopPrice(value string) *AddStopOrderReqBuilder {
	builder.obj.StopPrice = value
	return builder
}

// The type of trading : TRADE（Spot）, MARGIN_TRADE (Cross Margin), MARGIN_ISOLATED_TRADE (Isolated Margin). Default is TRADE
func (builder *AddStopOrderReqBuilder) SetTradeType(value string) *AddStopOrderReqBuilder {
	builder.obj.TradeType = &value
	return builder
}

func (builder *AddStopOrderReqBuilder) Build() *AddStopOrderReq {
	return builder.obj
}

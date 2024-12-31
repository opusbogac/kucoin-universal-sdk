// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package ndbroker

// ModifySubAccountApiReq struct for ModifySubAccountApiReq
type ModifySubAccountApiReq struct {
	// Subaccount UID
	Uid string `json:"uid,omitempty"`
	// IP whitelist list, supports up to 20 IPs
	IpWhitelist []string `json:"ipWhitelist,omitempty"`
	// [Permissions](https://www.kucoin.com/docs-new/doc-338144) group list(Only General、Spot、Futures permissions can be set, such as \"General, Trade\". )
	Permissions []string `json:"permissions,omitempty"`
	// apikey remarks (length 4~32)
	Label string `json:"label,omitempty"`
	// Subaccount apiKey
	ApiKey string `json:"apiKey,omitempty"`
}

// NewModifySubAccountApiReq instantiates a new ModifySubAccountApiReq object
// This constructor will assign default values to properties that have it defined
func NewModifySubAccountApiReq(uid string, ipWhitelist []string, permissions []string, label string, apiKey string) *ModifySubAccountApiReq {
	this := ModifySubAccountApiReq{}
	this.Uid = uid
	this.IpWhitelist = ipWhitelist
	this.Permissions = permissions
	this.Label = label
	this.ApiKey = apiKey
	return &this
}

// NewModifySubAccountApiReqWithDefaults instantiates a new ModifySubAccountApiReq object
// This constructor will only assign default values to properties that have it defined,
func NewModifySubAccountApiReqWithDefaults() *ModifySubAccountApiReq {
	this := ModifySubAccountApiReq{}
	return &this
}

func (o *ModifySubAccountApiReq) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["uid"] = o.Uid
	toSerialize["ipWhitelist"] = o.IpWhitelist
	toSerialize["permissions"] = o.Permissions
	toSerialize["label"] = o.Label
	toSerialize["apiKey"] = o.ApiKey
	return toSerialize
}

type ModifySubAccountApiReqBuilder struct {
	obj *ModifySubAccountApiReq
}

func NewModifySubAccountApiReqBuilder() *ModifySubAccountApiReqBuilder {
	return &ModifySubAccountApiReqBuilder{obj: NewModifySubAccountApiReqWithDefaults()}
}

// Subaccount UID
func (builder *ModifySubAccountApiReqBuilder) SetUid(value string) *ModifySubAccountApiReqBuilder {
	builder.obj.Uid = value
	return builder
}

// IP whitelist list, supports up to 20 IPs
func (builder *ModifySubAccountApiReqBuilder) SetIpWhitelist(value []string) *ModifySubAccountApiReqBuilder {
	builder.obj.IpWhitelist = value
	return builder
}

// [Permissions](https://www.kucoin.com/docs-new/doc-338144) group list(Only General、Spot、Futures permissions can be set, such as \"General, Trade\". )
func (builder *ModifySubAccountApiReqBuilder) SetPermissions(value []string) *ModifySubAccountApiReqBuilder {
	builder.obj.Permissions = value
	return builder
}

// apikey remarks (length 4~32)
func (builder *ModifySubAccountApiReqBuilder) SetLabel(value string) *ModifySubAccountApiReqBuilder {
	builder.obj.Label = value
	return builder
}

// Subaccount apiKey
func (builder *ModifySubAccountApiReqBuilder) SetApiKey(value string) *ModifySubAccountApiReqBuilder {
	builder.obj.ApiKey = value
	return builder
}

func (builder *ModifySubAccountApiReqBuilder) Build() *ModifySubAccountApiReq {
	return builder.obj
}

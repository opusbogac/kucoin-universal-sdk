// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package ndbroker

// GetSubAccountAPIData struct for GetSubAccountAPIData
type GetSubAccountAPIData struct {
	// Sub-Account UID
	Uid string `json:"uid,omitempty"`
	// apikey remarks
	Label string `json:"label,omitempty"`
	// apiKey
	ApiKey string `json:"apiKey,omitempty"`
	// apiVersion
	ApiVersion int32 `json:"apiVersion,omitempty"`
	// Permission group list
	Permissions []string `json:"permissions,omitempty"`
	// IP whitelist list
	IpWhitelist []string `json:"ipWhitelist,omitempty"`
	// Creation time, unix timestamp (milliseconds)
	CreatedAt int64 `json:"createdAt,omitempty"`
}

// NewGetSubAccountAPIData instantiates a new GetSubAccountAPIData object
// This constructor will assign default values to properties that have it defined
func NewGetSubAccountAPIData(uid string, label string, apiKey string, apiVersion int32, permissions []string, ipWhitelist []string, createdAt int64) *GetSubAccountAPIData {
	this := GetSubAccountAPIData{}
	this.Uid = uid
	this.Label = label
	this.ApiKey = apiKey
	this.ApiVersion = apiVersion
	this.Permissions = permissions
	this.IpWhitelist = ipWhitelist
	this.CreatedAt = createdAt
	return &this
}

// NewGetSubAccountAPIDataWithDefaults instantiates a new GetSubAccountAPIData object
// This constructor will only assign default values to properties that have it defined,
func NewGetSubAccountAPIDataWithDefaults() *GetSubAccountAPIData {
	this := GetSubAccountAPIData{}
	return &this
}

func (o *GetSubAccountAPIData) ToMap() map[string]interface{} {
	toSerialize := map[string]interface{}{}
	toSerialize["uid"] = o.Uid
	toSerialize["label"] = o.Label
	toSerialize["apiKey"] = o.ApiKey
	toSerialize["apiVersion"] = o.ApiVersion
	toSerialize["permissions"] = o.Permissions
	toSerialize["ipWhitelist"] = o.IpWhitelist
	toSerialize["createdAt"] = o.CreatedAt
	return toSerialize
}

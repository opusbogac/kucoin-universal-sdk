// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package subaccount

import (
	"context"
	"github.com/Kucoin/kucoin-universal-sdk/sdk/golang/internal/interfaces"
)

type SubAccountAPI interface {

	// GetFuturesSubAccountListV2 Get SubAccount List - Futures Balance(V2)
	// Description: This endpoint can be used to get Futures sub-account information.
	// Documentation: https://www.kucoin.com/docs-new/api-3470134
	// +---------------------+---------+
	// | Extra API Info      | Value   |
	// +---------------------+---------+
	// | API-DOMAIN          | FUTURES |
	// | API-CHANNEL         | PRIVATE |
	// | API-PERMISSION      | GENERAL |
	// | API-RATE-LIMIT-POOL | FUTURES |
	// | API-RATE-LIMIT      | 6       |
	// +---------------------+---------+
	GetFuturesSubAccountListV2(req *GetFuturesSubAccountListV2Req, ctx context.Context) (*GetFuturesSubAccountListV2Resp, error)

	// GetSpotSubAccountListV1 Get SubAccount List - Spot Balance(V1)
	// Description: This endpoint returns the account info of all sub-users.
	// Documentation: https://www.kucoin.com/docs-new/api-3470299
	// +---------------------+------------+
	// | Extra API Info      | Value      |
	// +---------------------+------------+
	// | API-DOMAIN          | SPOT       |
	// | API-CHANNEL         | PRIVATE    |
	// | API-PERMISSION      | GENERAL    |
	// | API-RATE-LIMIT-POOL | MANAGEMENT |
	// | API-RATE-LIMIT      | 20         |
	// +---------------------+------------+
	// Deprecated
	GetSpotSubAccountListV1(ctx context.Context) (*GetSpotSubAccountListV1Resp, error)

	// GetSpotSubAccountDetail Get SubAccount Detail - Balance
	// Description: This endpoint returns the account info of a sub-user specified by the subUserId.
	// Documentation: https://www.kucoin.com/docs-new/api-3470132
	// +---------------------+------------+
	// | Extra API Info      | Value      |
	// +---------------------+------------+
	// | API-DOMAIN          | SPOT       |
	// | API-CHANNEL         | PRIVATE    |
	// | API-PERMISSION      | GENERAL    |
	// | API-RATE-LIMIT-POOL | MANAGEMENT |
	// | API-RATE-LIMIT      | 15         |
	// +---------------------+------------+
	GetSpotSubAccountDetail(req *GetSpotSubAccountDetailReq, ctx context.Context) (*GetSpotSubAccountDetailResp, error)

	// DeleteSubAccountApi Delete SubAccount API
	// Description: This endpoint can be used to delete sub-account APIs.
	// Documentation: https://www.kucoin.com/docs-new/api-3470137
	// +---------------------+------------+
	// | Extra API Info      | Value      |
	// +---------------------+------------+
	// | API-DOMAIN          | SPOT       |
	// | API-CHANNEL         | PRIVATE    |
	// | API-PERMISSION      | GENERAL    |
	// | API-RATE-LIMIT-POOL | MANAGEMENT |
	// | API-RATE-LIMIT      | 30         |
	// +---------------------+------------+
	DeleteSubAccountApi(req *DeleteSubAccountApiReq, ctx context.Context) (*DeleteSubAccountApiResp, error)

	// GetSubAccountApiList Get SubAccount API List
	// Description: This endpoint can be used to obtain a list of APIs pertaining to a sub-account.(Not contain ND Broker Sub Account)
	// Documentation: https://www.kucoin.com/docs-new/api-3470136
	// +---------------------+------------+
	// | Extra API Info      | Value      |
	// +---------------------+------------+
	// | API-DOMAIN          | SPOT       |
	// | API-CHANNEL         | PRIVATE    |
	// | API-PERMISSION      | GENERAL    |
	// | API-RATE-LIMIT-POOL | MANAGEMENT |
	// | API-RATE-LIMIT      | 20         |
	// +---------------------+------------+
	GetSubAccountApiList(req *GetSubAccountApiListReq, ctx context.Context) (*GetSubAccountApiListResp, error)

	// AddSubAccountApi Add SubAccount API
	// Description: This endpoint can be used to create APIs for sub-accounts.
	// Documentation: https://www.kucoin.com/docs-new/api-3470138
	// +---------------------+------------+
	// | Extra API Info      | Value      |
	// +---------------------+------------+
	// | API-DOMAIN          | SPOT       |
	// | API-CHANNEL         | PRIVATE    |
	// | API-PERMISSION      | GENERAL    |
	// | API-RATE-LIMIT-POOL | MANAGEMENT |
	// | API-RATE-LIMIT      | 20         |
	// +---------------------+------------+
	AddSubAccountApi(req *AddSubAccountApiReq, ctx context.Context) (*AddSubAccountApiResp, error)

	// ModifySubAccountApi Modify SubAccount API
	// Description: This endpoint can be used to modify sub-account APIs.
	// Documentation: https://www.kucoin.com/docs-new/api-3470139
	// +---------------------+------------+
	// | Extra API Info      | Value      |
	// +---------------------+------------+
	// | API-DOMAIN          | SPOT       |
	// | API-CHANNEL         | PRIVATE    |
	// | API-PERMISSION      | GENERAL    |
	// | API-RATE-LIMIT-POOL | MANAGEMENT |
	// | API-RATE-LIMIT      | 30         |
	// +---------------------+------------+
	ModifySubAccountApi(req *ModifySubAccountApiReq, ctx context.Context) (*ModifySubAccountApiResp, error)

	// GetSpotSubAccountsSummaryV1 Get SubAccount List - Summary Info(V1)
	// Description: You can get the user info of all sub-account via this interface It is recommended to use the GET /api/v2/sub/user interface for paging query
	// Documentation: https://www.kucoin.com/docs-new/api-3470298
	// +---------------------+------------+
	// | Extra API Info      | Value      |
	// +---------------------+------------+
	// | API-DOMAIN          | SPOT       |
	// | API-CHANNEL         | PRIVATE    |
	// | API-PERMISSION      | GENERAL    |
	// | API-RATE-LIMIT-POOL | MANAGEMENT |
	// | API-RATE-LIMIT      | 20         |
	// +---------------------+------------+
	// Deprecated
	GetSpotSubAccountsSummaryV1(ctx context.Context) (*GetSpotSubAccountsSummaryV1Resp, error)

	// GetSpotSubAccountListV2 Get SubAccount List - Spot Balance(V2)
	// Description: This endpoint can be used to get paginated Spot sub-account information. Pagination is required.
	// Documentation: https://www.kucoin.com/docs-new/api-3470133
	// +---------------------+------------+
	// | Extra API Info      | Value      |
	// +---------------------+------------+
	// | API-DOMAIN          | SPOT       |
	// | API-CHANNEL         | PRIVATE    |
	// | API-PERMISSION      | GENERAL    |
	// | API-RATE-LIMIT-POOL | MANAGEMENT |
	// | API-RATE-LIMIT      | 20         |
	// +---------------------+------------+
	GetSpotSubAccountListV2(req *GetSpotSubAccountListV2Req, ctx context.Context) (*GetSpotSubAccountListV2Resp, error)

	// AddSubAccount Add SubAccount
	// Description: This endpoint can be used to create sub-accounts.
	// Documentation: https://www.kucoin.com/docs-new/api-3470135
	// +---------------------+------------+
	// | Extra API Info      | Value      |
	// +---------------------+------------+
	// | API-DOMAIN          | SPOT       |
	// | API-CHANNEL         | PRIVATE    |
	// | API-PERMISSION      | GENERAL    |
	// | API-RATE-LIMIT-POOL | MANAGEMENT |
	// | API-RATE-LIMIT      | 15         |
	// +---------------------+------------+
	AddSubAccount(req *AddSubAccountReq, ctx context.Context) (*AddSubAccountResp, error)

	// GetSpotSubAccountsSummaryV2 Get SubAccount List - Summary Info
	// Description: This endpoint can be used to get a paginated list of sub-accounts. Pagination is required.
	// Documentation: https://www.kucoin.com/docs-new/api-3470131
	// +---------------------+------------+
	// | Extra API Info      | Value      |
	// +---------------------+------------+
	// | API-DOMAIN          | SPOT       |
	// | API-CHANNEL         | PRIVATE    |
	// | API-PERMISSION      | GENERAL    |
	// | API-RATE-LIMIT-POOL | MANAGEMENT |
	// | API-RATE-LIMIT      | 20         |
	// +---------------------+------------+
	GetSpotSubAccountsSummaryV2(req *GetSpotSubAccountsSummaryV2Req, ctx context.Context) (*GetSpotSubAccountsSummaryV2Resp, error)

	// AddSubAccountFuturesPermission Add SubAccount Futures Permission
	// Description: This endpoint can be used to add sub-accounts Futures permission. Before using this endpoints, you need to ensure that the master account apikey has Futures permissions and the Futures function has been activated.
	// Documentation: https://www.kucoin.com/docs-new/api-3470332
	// +---------------------+------------+
	// | Extra API Info      | Value      |
	// +---------------------+------------+
	// | API-DOMAIN          | SPOT       |
	// | API-CHANNEL         | PRIVATE    |
	// | API-PERMISSION      | FUTURES    |
	// | API-RATE-LIMIT-POOL | MANAGEMENT |
	// | API-RATE-LIMIT      | 15         |
	// +---------------------+------------+
	AddSubAccountFuturesPermission(req *AddSubAccountFuturesPermissionReq, ctx context.Context) (*AddSubAccountFuturesPermissionResp, error)

	// AddSubAccountMarginPermission Add SubAccount Margin Permission
	// Description: This endpoint can be used to add sub-accounts Margin permission. Before using this endpoints, you need to ensure that the master account apikey has Margin permissions and the Margin function has been activated.
	// Documentation: https://www.kucoin.com/docs-new/api-3470331
	// +---------------------+------------+
	// | Extra API Info      | Value      |
	// +---------------------+------------+
	// | API-DOMAIN          | SPOT       |
	// | API-CHANNEL         | PRIVATE    |
	// | API-PERMISSION      | MARGIN     |
	// | API-RATE-LIMIT-POOL | MANAGEMENT |
	// | API-RATE-LIMIT      | 15         |
	// +---------------------+------------+
	AddSubAccountMarginPermission(req *AddSubAccountMarginPermissionReq, ctx context.Context) (*AddSubAccountMarginPermissionResp, error)
}

type SubAccountAPIImpl struct {
	transport interfaces.Transport
}

func NewSubAccountAPIImp(transport interfaces.Transport) *SubAccountAPIImpl {
	return &SubAccountAPIImpl{transport: transport}
}

func (impl *SubAccountAPIImpl) GetFuturesSubAccountListV2(req *GetFuturesSubAccountListV2Req, ctx context.Context) (*GetFuturesSubAccountListV2Resp, error) {
	resp := &GetFuturesSubAccountListV2Resp{}
	err := impl.transport.Call(ctx, "futures", false, "Get", "/api/v1/account-overview-all", req, resp, false)
	return resp, err
}

func (impl *SubAccountAPIImpl) GetSpotSubAccountListV1(ctx context.Context) (*GetSpotSubAccountListV1Resp, error) {
	resp := &GetSpotSubAccountListV1Resp{}
	err := impl.transport.Call(ctx, "spot", false, "Get", "/api/v1/sub-accounts", nil, resp, false)
	return resp, err
}

func (impl *SubAccountAPIImpl) GetSpotSubAccountDetail(req *GetSpotSubAccountDetailReq, ctx context.Context) (*GetSpotSubAccountDetailResp, error) {
	resp := &GetSpotSubAccountDetailResp{}
	err := impl.transport.Call(ctx, "spot", false, "Get", "/api/v1/sub-accounts/{subUserId}", req, resp, false)
	return resp, err
}

func (impl *SubAccountAPIImpl) DeleteSubAccountApi(req *DeleteSubAccountApiReq, ctx context.Context) (*DeleteSubAccountApiResp, error) {
	resp := &DeleteSubAccountApiResp{}
	err := impl.transport.Call(ctx, "spot", false, "Delete", "/api/v1/sub/api-key", req, resp, false)
	return resp, err
}

func (impl *SubAccountAPIImpl) GetSubAccountApiList(req *GetSubAccountApiListReq, ctx context.Context) (*GetSubAccountApiListResp, error) {
	resp := &GetSubAccountApiListResp{}
	err := impl.transport.Call(ctx, "spot", false, "Get", "/api/v1/sub/api-key", req, resp, false)
	return resp, err
}

func (impl *SubAccountAPIImpl) AddSubAccountApi(req *AddSubAccountApiReq, ctx context.Context) (*AddSubAccountApiResp, error) {
	resp := &AddSubAccountApiResp{}
	err := impl.transport.Call(ctx, "spot", false, "Post", "/api/v1/sub/api-key", req, resp, false)
	return resp, err
}

func (impl *SubAccountAPIImpl) ModifySubAccountApi(req *ModifySubAccountApiReq, ctx context.Context) (*ModifySubAccountApiResp, error) {
	resp := &ModifySubAccountApiResp{}
	err := impl.transport.Call(ctx, "spot", false, "Post", "/api/v1/sub/api-key/update", req, resp, false)
	return resp, err
}

func (impl *SubAccountAPIImpl) GetSpotSubAccountsSummaryV1(ctx context.Context) (*GetSpotSubAccountsSummaryV1Resp, error) {
	resp := &GetSpotSubAccountsSummaryV1Resp{}
	err := impl.transport.Call(ctx, "spot", false, "Get", "/api/v1/sub/user", nil, resp, false)
	return resp, err
}

func (impl *SubAccountAPIImpl) GetSpotSubAccountListV2(req *GetSpotSubAccountListV2Req, ctx context.Context) (*GetSpotSubAccountListV2Resp, error) {
	resp := &GetSpotSubAccountListV2Resp{}
	err := impl.transport.Call(ctx, "spot", false, "Get", "/api/v2/sub-accounts", req, resp, false)
	return resp, err
}

func (impl *SubAccountAPIImpl) AddSubAccount(req *AddSubAccountReq, ctx context.Context) (*AddSubAccountResp, error) {
	resp := &AddSubAccountResp{}
	err := impl.transport.Call(ctx, "spot", false, "Post", "/api/v2/sub/user/created", req, resp, false)
	return resp, err
}

func (impl *SubAccountAPIImpl) GetSpotSubAccountsSummaryV2(req *GetSpotSubAccountsSummaryV2Req, ctx context.Context) (*GetSpotSubAccountsSummaryV2Resp, error) {
	resp := &GetSpotSubAccountsSummaryV2Resp{}
	err := impl.transport.Call(ctx, "spot", false, "Get", "/api/v2/sub/user", req, resp, false)
	return resp, err
}

func (impl *SubAccountAPIImpl) AddSubAccountFuturesPermission(req *AddSubAccountFuturesPermissionReq, ctx context.Context) (*AddSubAccountFuturesPermissionResp, error) {
	resp := &AddSubAccountFuturesPermissionResp{}
	err := impl.transport.Call(ctx, "spot", false, "Post", "/api/v3/sub/user/futures/enable", req, resp, false)
	return resp, err
}

func (impl *SubAccountAPIImpl) AddSubAccountMarginPermission(req *AddSubAccountMarginPermissionReq, ctx context.Context) (*AddSubAccountMarginPermissionResp, error) {
	resp := &AddSubAccountMarginPermissionResp{}
	err := impl.transport.Call(ctx, "spot", false, "Post", "/api/v3/sub/user/margin/enable", req, resp, false)
	return resp, err
}

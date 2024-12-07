// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

package withdrawal

import (
	"context"
	"github.com/Kucoin/kucoin-universal-sdk/sdk/golang/internal/interfaces"
)

type WithdrawalAPI interface {

	// GetWithdrawalHistoryOld Get Withdrawal History - Old
	// Description: Request via this endpoint to get deposit list Items are paginated and sorted to show the latest first. See the Pagination section for retrieving additional entries after the first page.
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
	GetWithdrawalHistoryOld(req *GetWithdrawalHistoryOldReq, ctx context.Context) (*GetWithdrawalHistoryOldResp, error)

	// GetWithdrawalHistory Get Withdrawal History
	// Description: Request via this endpoint to get deposit list Items are paginated and sorted to show the latest first. See the Pagination section for retrieving additional entries after the first page.
	// +---------------------+------------+
	// | Extra API Info      | Value      |
	// +---------------------+------------+
	// | API-DOMAIN          | SPOT       |
	// | API-CHANNEL         | PRIVATE    |
	// | API-PERMISSION      | GENERAL    |
	// | API-RATE-LIMIT-POOL | MANAGEMENT |
	// | API-RATE-LIMIT      | 20         |
	// +---------------------+------------+
	GetWithdrawalHistory(req *GetWithdrawalHistoryReq, ctx context.Context) (*GetWithdrawalHistoryResp, error)

	// WithdrawalV1 Withdraw - V1
	// Description: Use this interface to withdraw the specified currency
	// +---------------------+------------+
	// | Extra API Info      | Value      |
	// +---------------------+------------+
	// | API-DOMAIN          | SPOT       |
	// | API-CHANNEL         | PRIVATE    |
	// | API-PERMISSION      | WITHDRAWAL |
	// | API-RATE-LIMIT-POOL | MANAGEMENT |
	// | API-RATE-LIMIT      | 5          |
	// +---------------------+------------+
	// Deprecated
	WithdrawalV1(req *WithdrawalV1Req, ctx context.Context) (*WithdrawalV1Resp, error)

	// GetWithdrawalQuotas Get Withdrawal Quotas
	// Description: This interface can obtain the withdrawal quotas information of this currency.
	// +---------------------+------------+
	// | Extra API Info      | Value      |
	// +---------------------+------------+
	// | API-DOMAIN          | SPOT       |
	// | API-CHANNEL         | PRIVATE    |
	// | API-PERMISSION      | GENERAL    |
	// | API-RATE-LIMIT-POOL | MANAGEMENT |
	// | API-RATE-LIMIT      | 20         |
	// +---------------------+------------+
	GetWithdrawalQuotas(req *GetWithdrawalQuotasReq, ctx context.Context) (*GetWithdrawalQuotasResp, error)

	// CancelWithdrawal Cancel Withdrawal
	// Description: This interface can cancel the withdrawal, Only withdrawals requests of PROCESSING status could be canceled.
	// +---------------------+------------+
	// | Extra API Info      | Value      |
	// +---------------------+------------+
	// | API-DOMAIN          | SPOT       |
	// | API-CHANNEL         | PRIVATE    |
	// | API-PERMISSION      | WITHDRAWAL |
	// | API-RATE-LIMIT-POOL | MANAGEMENT |
	// | API-RATE-LIMIT      | 20         |
	// +---------------------+------------+
	CancelWithdrawal(req *CancelWithdrawalReq, ctx context.Context) (*CancelWithdrawalResp, error)

	// WithdrawalV3 Withdraw(V3)
	// Description: Use this interface to withdraw the specified currency
	// +---------------------+------------+
	// | Extra API Info      | Value      |
	// +---------------------+------------+
	// | API-DOMAIN          | SPOT       |
	// | API-CHANNEL         | PRIVATE    |
	// | API-PERMISSION      | WITHDRAWAL |
	// | API-RATE-LIMIT-POOL | MANAGEMENT |
	// | API-RATE-LIMIT      | 5          |
	// +---------------------+------------+
	WithdrawalV3(req *WithdrawalV3Req, ctx context.Context) (*WithdrawalV3Resp, error)
}

type WithdrawalAPIImpl struct {
	transport interfaces.Transport
}

func NewWithdrawalAPIImp(transport interfaces.Transport) *WithdrawalAPIImpl {
	return &WithdrawalAPIImpl{transport: transport}
}

func (impl *WithdrawalAPIImpl) GetWithdrawalHistoryOld(req *GetWithdrawalHistoryOldReq, ctx context.Context) (*GetWithdrawalHistoryOldResp, error) {
	resp := &GetWithdrawalHistoryOldResp{}
	err := impl.transport.Call(ctx, "spot", false, "Get", "/api/v1/hist-withdrawals", req, resp, false)
	return resp, err
}

func (impl *WithdrawalAPIImpl) GetWithdrawalHistory(req *GetWithdrawalHistoryReq, ctx context.Context) (*GetWithdrawalHistoryResp, error) {
	resp := &GetWithdrawalHistoryResp{}
	err := impl.transport.Call(ctx, "spot", false, "Get", "/api/v1/withdrawals", req, resp, false)
	return resp, err
}

func (impl *WithdrawalAPIImpl) WithdrawalV1(req *WithdrawalV1Req, ctx context.Context) (*WithdrawalV1Resp, error) {
	resp := &WithdrawalV1Resp{}
	err := impl.transport.Call(ctx, "spot", false, "Post", "/api/v1/withdrawals", req, resp, false)
	return resp, err
}

func (impl *WithdrawalAPIImpl) GetWithdrawalQuotas(req *GetWithdrawalQuotasReq, ctx context.Context) (*GetWithdrawalQuotasResp, error) {
	resp := &GetWithdrawalQuotasResp{}
	err := impl.transport.Call(ctx, "spot", false, "Get", "/api/v1/withdrawals/quotas", req, resp, false)
	return resp, err
}

func (impl *WithdrawalAPIImpl) CancelWithdrawal(req *CancelWithdrawalReq, ctx context.Context) (*CancelWithdrawalResp, error) {
	resp := &CancelWithdrawalResp{}
	err := impl.transport.Call(ctx, "spot", false, "Delete", "/api/v1/withdrawals/{withdrawalId}", req, resp, false)
	return resp, err
}

func (impl *WithdrawalAPIImpl) WithdrawalV3(req *WithdrawalV3Req, ctx context.Context) (*WithdrawalV3Resp, error) {
	resp := &WithdrawalV3Resp{}
	err := impl.transport.Call(ctx, "spot", false, "Post", "/api/v3/withdrawals", req, resp, false)
	return resp, err
}

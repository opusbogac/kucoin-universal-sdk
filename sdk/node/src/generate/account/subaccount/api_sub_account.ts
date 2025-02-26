// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { Transport } from '@internal/interfaces/transport';
import { GetSpotSubAccountListV2Resp } from './model_get_spot_sub_account_list_v2_resp';
import { AddSubAccountApiResp } from './model_add_sub_account_api_resp';
import { AddSubAccountApiReq } from './model_add_sub_account_api_req';
import { ModifySubAccountApiResp } from './model_modify_sub_account_api_resp';
import { AddSubAccountReq } from './model_add_sub_account_req';
import { GetSubAccountApiListResp } from './model_get_sub_account_api_list_resp';
import { AddSubAccountMarginPermissionReq } from './model_add_sub_account_margin_permission_req';
import { GetSpotSubAccountDetailResp } from './model_get_spot_sub_account_detail_resp';
import { DeleteSubAccountApiReq } from './model_delete_sub_account_api_req';
import { GetSpotSubAccountListV1Resp } from './model_get_spot_sub_account_list_v1_resp';
import { GetSpotSubAccountListV2Req } from './model_get_spot_sub_account_list_v2_req';
import { GetFuturesSubAccountListV2Req } from './model_get_futures_sub_account_list_v2_req';
import { GetFuturesSubAccountListV2Resp } from './model_get_futures_sub_account_list_v2_resp';
import { AddSubAccountFuturesPermissionReq } from './model_add_sub_account_futures_permission_req';
import { AddSubAccountMarginPermissionResp } from './model_add_sub_account_margin_permission_resp';
import { GetSpotSubAccountsSummaryV1Resp } from './model_get_spot_sub_accounts_summary_v1_resp';
import { GetSpotSubAccountsSummaryV2Req } from './model_get_spot_sub_accounts_summary_v2_req';
import { AddSubAccountFuturesPermissionResp } from './model_add_sub_account_futures_permission_resp';
import { AddSubAccountResp } from './model_add_sub_account_resp';
import { DeleteSubAccountApiResp } from './model_delete_sub_account_api_resp';
import { GetSubAccountApiListReq } from './model_get_sub_account_api_list_req';
import { ModifySubAccountApiReq } from './model_modify_sub_account_api_req';
import { GetSpotSubAccountDetailReq } from './model_get_spot_sub_account_detail_req';
import { GetSpotSubAccountsSummaryV2Resp } from './model_get_spot_sub_accounts_summary_v2_resp';

export interface SubAccountAPI {
    /**
     * addSubAccount Add SubAccount
     * Description: This endpoint can be used to create sub-accounts.
     * Documentation: https://www.kucoin.com/docs-new/api-3470135
     * +---------------------+------------+
     * | Extra API Info      | Value      |
     * +---------------------+------------+
     * | API-DOMAIN          | SPOT       |
     * | API-CHANNEL         | PRIVATE    |
     * | API-PERMISSION      | GENERAL    |
     * | API-RATE-LIMIT-POOL | MANAGEMENT |
     * | API-RATE-LIMIT      | 15         |
     * +---------------------+------------+
     */
    addSubAccount(req: AddSubAccountReq): Promise<AddSubAccountResp>;

    /**
     * addSubAccountMarginPermission Add SubAccount Margin Permission
     * Description: This endpoint can be used to add sub-accounts Margin permission. Before using this endpoints, you need to ensure that the master account apikey has Margin permissions and the Margin function has been activated.
     * Documentation: https://www.kucoin.com/docs-new/api-3470331
     * +---------------------+------------+
     * | Extra API Info      | Value      |
     * +---------------------+------------+
     * | API-DOMAIN          | SPOT       |
     * | API-CHANNEL         | PRIVATE    |
     * | API-PERMISSION      | MARGIN     |
     * | API-RATE-LIMIT-POOL | MANAGEMENT |
     * | API-RATE-LIMIT      | 15         |
     * +---------------------+------------+
     */
    addSubAccountMarginPermission(
        req: AddSubAccountMarginPermissionReq,
    ): Promise<AddSubAccountMarginPermissionResp>;

    /**
     * addSubAccountFuturesPermission Add SubAccount Futures Permission
     * Description: This endpoint can be used to add sub-accounts Futures permission. Before using this endpoints, you need to ensure that the master account apikey has Futures permissions and the Futures function has been activated.
     * Documentation: https://www.kucoin.com/docs-new/api-3470332
     * +---------------------+------------+
     * | Extra API Info      | Value      |
     * +---------------------+------------+
     * | API-DOMAIN          | SPOT       |
     * | API-CHANNEL         | PRIVATE    |
     * | API-PERMISSION      | FUTURES    |
     * | API-RATE-LIMIT-POOL | MANAGEMENT |
     * | API-RATE-LIMIT      | 15         |
     * +---------------------+------------+
     */
    addSubAccountFuturesPermission(
        req: AddSubAccountFuturesPermissionReq,
    ): Promise<AddSubAccountFuturesPermissionResp>;

    /**
     * getSpotSubAccountsSummaryV2 Get SubAccount List - Summary Info
     * Description: This endpoint can be used to get a paginated list of sub-accounts. Pagination is required.
     * Documentation: https://www.kucoin.com/docs-new/api-3470131
     * +---------------------+------------+
     * | Extra API Info      | Value      |
     * +---------------------+------------+
     * | API-DOMAIN          | SPOT       |
     * | API-CHANNEL         | PRIVATE    |
     * | API-PERMISSION      | GENERAL    |
     * | API-RATE-LIMIT-POOL | MANAGEMENT |
     * | API-RATE-LIMIT      | 20         |
     * +---------------------+------------+
     */
    getSpotSubAccountsSummaryV2(
        req: GetSpotSubAccountsSummaryV2Req,
    ): Promise<GetSpotSubAccountsSummaryV2Resp>;

    /**
     * getSpotSubAccountDetail Get SubAccount Detail - Balance
     * Description: This endpoint returns the account info of a sub-user specified by the subUserId.
     * Documentation: https://www.kucoin.com/docs-new/api-3470132
     * +---------------------+------------+
     * | Extra API Info      | Value      |
     * +---------------------+------------+
     * | API-DOMAIN          | SPOT       |
     * | API-CHANNEL         | PRIVATE    |
     * | API-PERMISSION      | GENERAL    |
     * | API-RATE-LIMIT-POOL | MANAGEMENT |
     * | API-RATE-LIMIT      | 15         |
     * +---------------------+------------+
     */
    getSpotSubAccountDetail(req: GetSpotSubAccountDetailReq): Promise<GetSpotSubAccountDetailResp>;

    /**
     * getSpotSubAccountListV2 Get SubAccount List - Spot Balance(V2)
     * Description: This endpoint can be used to get paginated Spot sub-account information. Pagination is required.
     * Documentation: https://www.kucoin.com/docs-new/api-3470133
     * +---------------------+------------+
     * | Extra API Info      | Value      |
     * +---------------------+------------+
     * | API-DOMAIN          | SPOT       |
     * | API-CHANNEL         | PRIVATE    |
     * | API-PERMISSION      | GENERAL    |
     * | API-RATE-LIMIT-POOL | MANAGEMENT |
     * | API-RATE-LIMIT      | 20         |
     * +---------------------+------------+
     */
    getSpotSubAccountListV2(req: GetSpotSubAccountListV2Req): Promise<GetSpotSubAccountListV2Resp>;

    /**
     * getFuturesSubAccountListV2 Get SubAccount List - Futures Balance(V2)
     * Description: This endpoint can be used to get Futures sub-account information.
     * Documentation: https://www.kucoin.com/docs-new/api-3470134
     * +---------------------+---------+
     * | Extra API Info      | Value   |
     * +---------------------+---------+
     * | API-DOMAIN          | FUTURES |
     * | API-CHANNEL         | PRIVATE |
     * | API-PERMISSION      | GENERAL |
     * | API-RATE-LIMIT-POOL | FUTURES |
     * | API-RATE-LIMIT      | 6       |
     * +---------------------+---------+
     */
    getFuturesSubAccountListV2(
        req: GetFuturesSubAccountListV2Req,
    ): Promise<GetFuturesSubAccountListV2Resp>;

    /**
     * addSubAccountApi Add SubAccount API
     * Description: This endpoint can be used to create APIs for sub-accounts.
     * Documentation: https://www.kucoin.com/docs-new/api-3470138
     * +---------------------+------------+
     * | Extra API Info      | Value      |
     * +---------------------+------------+
     * | API-DOMAIN          | SPOT       |
     * | API-CHANNEL         | PRIVATE    |
     * | API-PERMISSION      | GENERAL    |
     * | API-RATE-LIMIT-POOL | MANAGEMENT |
     * | API-RATE-LIMIT      | 20         |
     * +---------------------+------------+
     */
    addSubAccountApi(req: AddSubAccountApiReq): Promise<AddSubAccountApiResp>;

    /**
     * modifySubAccountApi Modify SubAccount API
     * Description: This endpoint can be used to modify sub-account APIs.
     * Documentation: https://www.kucoin.com/docs-new/api-3470139
     * +---------------------+------------+
     * | Extra API Info      | Value      |
     * +---------------------+------------+
     * | API-DOMAIN          | SPOT       |
     * | API-CHANNEL         | PRIVATE    |
     * | API-PERMISSION      | GENERAL    |
     * | API-RATE-LIMIT-POOL | MANAGEMENT |
     * | API-RATE-LIMIT      | 30         |
     * +---------------------+------------+
     */
    modifySubAccountApi(req: ModifySubAccountApiReq): Promise<ModifySubAccountApiResp>;

    /**
     * getSubAccountApiList Get SubAccount API List
     * Description: This endpoint can be used to obtain a list of APIs pertaining to a sub-account.(Not contain ND Broker Sub Account)
     * Documentation: https://www.kucoin.com/docs-new/api-3470136
     * +---------------------+------------+
     * | Extra API Info      | Value      |
     * +---------------------+------------+
     * | API-DOMAIN          | SPOT       |
     * | API-CHANNEL         | PRIVATE    |
     * | API-PERMISSION      | GENERAL    |
     * | API-RATE-LIMIT-POOL | MANAGEMENT |
     * | API-RATE-LIMIT      | 20         |
     * +---------------------+------------+
     */
    getSubAccountApiList(req: GetSubAccountApiListReq): Promise<GetSubAccountApiListResp>;

    /**
     * deleteSubAccountApi Delete SubAccount API
     * Description: This endpoint can be used to delete sub-account APIs.
     * Documentation: https://www.kucoin.com/docs-new/api-3470137
     * +---------------------+------------+
     * | Extra API Info      | Value      |
     * +---------------------+------------+
     * | API-DOMAIN          | SPOT       |
     * | API-CHANNEL         | PRIVATE    |
     * | API-PERMISSION      | GENERAL    |
     * | API-RATE-LIMIT-POOL | MANAGEMENT |
     * | API-RATE-LIMIT      | 30         |
     * +---------------------+------------+
     */
    deleteSubAccountApi(req: DeleteSubAccountApiReq): Promise<DeleteSubAccountApiResp>;

    /**
     * @deprecated
     * getSpotSubAccountsSummaryV1 Get SubAccount List - Summary Info(V1)
     * Description: You can get the user info of all sub-account via this interface It is recommended to use the GET /api/v2/sub/user interface for paging query
     * Documentation: https://www.kucoin.com/docs-new/api-3470298
     * +---------------------+------------+
     * | Extra API Info      | Value      |
     * +---------------------+------------+
     * | API-DOMAIN          | SPOT       |
     * | API-CHANNEL         | PRIVATE    |
     * | API-PERMISSION      | GENERAL    |
     * | API-RATE-LIMIT-POOL | MANAGEMENT |
     * | API-RATE-LIMIT      | 20         |
     * +---------------------+------------+
     */
    getSpotSubAccountsSummaryV1(): Promise<GetSpotSubAccountsSummaryV1Resp>;

    /**
     * @deprecated
     * getSpotSubAccountListV1 Get SubAccount List - Spot Balance(V1)
     * Description: This endpoint returns the account info of all sub-users.
     * Documentation: https://www.kucoin.com/docs-new/api-3470299
     * +---------------------+------------+
     * | Extra API Info      | Value      |
     * +---------------------+------------+
     * | API-DOMAIN          | SPOT       |
     * | API-CHANNEL         | PRIVATE    |
     * | API-PERMISSION      | GENERAL    |
     * | API-RATE-LIMIT-POOL | MANAGEMENT |
     * | API-RATE-LIMIT      | 20         |
     * +---------------------+------------+
     */
    getSpotSubAccountListV1(): Promise<GetSpotSubAccountListV1Resp>;
}

export class SubAccountAPIImpl implements SubAccountAPI {
    constructor(private transport: Transport) {}

    addSubAccount(req: AddSubAccountReq): Promise<AddSubAccountResp> {
        return this.transport.call(
            'spot',
            false,
            'POST',
            '/api/v2/sub/user/created',
            req,
            AddSubAccountResp,
            false,
        );
    }

    addSubAccountMarginPermission(
        req: AddSubAccountMarginPermissionReq,
    ): Promise<AddSubAccountMarginPermissionResp> {
        return this.transport.call(
            'spot',
            false,
            'POST',
            '/api/v3/sub/user/margin/enable',
            req,
            AddSubAccountMarginPermissionResp,
            false,
        );
    }

    addSubAccountFuturesPermission(
        req: AddSubAccountFuturesPermissionReq,
    ): Promise<AddSubAccountFuturesPermissionResp> {
        return this.transport.call(
            'spot',
            false,
            'POST',
            '/api/v3/sub/user/futures/enable',
            req,
            AddSubAccountFuturesPermissionResp,
            false,
        );
    }

    getSpotSubAccountsSummaryV2(
        req: GetSpotSubAccountsSummaryV2Req,
    ): Promise<GetSpotSubAccountsSummaryV2Resp> {
        return this.transport.call(
            'spot',
            false,
            'GET',
            '/api/v2/sub/user',
            req,
            GetSpotSubAccountsSummaryV2Resp,
            false,
        );
    }

    getSpotSubAccountDetail(req: GetSpotSubAccountDetailReq): Promise<GetSpotSubAccountDetailResp> {
        return this.transport.call(
            'spot',
            false,
            'GET',
            '/api/v1/sub-accounts/{subUserId}',
            req,
            GetSpotSubAccountDetailResp,
            false,
        );
    }

    getSpotSubAccountListV2(req: GetSpotSubAccountListV2Req): Promise<GetSpotSubAccountListV2Resp> {
        return this.transport.call(
            'spot',
            false,
            'GET',
            '/api/v2/sub-accounts',
            req,
            GetSpotSubAccountListV2Resp,
            false,
        );
    }

    getFuturesSubAccountListV2(
        req: GetFuturesSubAccountListV2Req,
    ): Promise<GetFuturesSubAccountListV2Resp> {
        return this.transport.call(
            'futures',
            false,
            'GET',
            '/api/v1/account-overview-all',
            req,
            GetFuturesSubAccountListV2Resp,
            false,
        );
    }

    addSubAccountApi(req: AddSubAccountApiReq): Promise<AddSubAccountApiResp> {
        return this.transport.call(
            'spot',
            false,
            'POST',
            '/api/v1/sub/api-key',
            req,
            AddSubAccountApiResp,
            false,
        );
    }

    modifySubAccountApi(req: ModifySubAccountApiReq): Promise<ModifySubAccountApiResp> {
        return this.transport.call(
            'spot',
            false,
            'POST',
            '/api/v1/sub/api-key/update',
            req,
            ModifySubAccountApiResp,
            false,
        );
    }

    getSubAccountApiList(req: GetSubAccountApiListReq): Promise<GetSubAccountApiListResp> {
        return this.transport.call(
            'spot',
            false,
            'GET',
            '/api/v1/sub/api-key',
            req,
            GetSubAccountApiListResp,
            false,
        );
    }

    deleteSubAccountApi(req: DeleteSubAccountApiReq): Promise<DeleteSubAccountApiResp> {
        return this.transport.call(
            'spot',
            false,
            'DELETE',
            '/api/v1/sub/api-key',
            req,
            DeleteSubAccountApiResp,
            false,
        );
    }

    getSpotSubAccountsSummaryV1(): Promise<GetSpotSubAccountsSummaryV1Resp> {
        return this.transport.call(
            'spot',
            false,
            'GET',
            '/api/v1/sub/user',
            null,
            GetSpotSubAccountsSummaryV1Resp,
            false,
        );
    }

    getSpotSubAccountListV1(): Promise<GetSpotSubAccountListV1Resp> {
        return this.transport.call(
            'spot',
            false,
            'GET',
            '/api/v1/sub-accounts',
            null,
            GetSpotSubAccountListV1Resp,
            false,
        );
    }
}

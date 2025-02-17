import * as VIPLENDING from './viplending';
export const Viplending = {
    VIPLending: VIPLENDING,
};
export namespace Viplending {
    export type VIPLendingAPI = VIPLENDING.VIPLendingAPI;
    export namespace VIPLending {
        export type GetAccountDetailLtv = VIPLENDING.GetAccountDetailLtv;
        export type GetAccountDetailMargins = VIPLENDING.GetAccountDetailMargins;
        export type GetAccountDetailOrders = VIPLENDING.GetAccountDetailOrders;
        export type GetAccountDetailResp = VIPLENDING.GetAccountDetailResp;
        export type GetAccountsData = VIPLENDING.GetAccountsData;
        export type GetAccountsResp = VIPLENDING.GetAccountsResp;
    }
}

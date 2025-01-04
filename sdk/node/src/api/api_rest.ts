export interface KucoinRestService {
    /**
     * AccountService provides functions to access and manipulate account related data.
     */
    GetAccountService(): AccountService;

    /**
     * AffiliateService provides functions to access affiliate-related data.
     */
    GetAffiliateService(): AffiliateService;

    /**
     * BrokerService provides functions to access and manage broker-related data.
     */
    GetBrokerService(): BrokerService;

    /**
     * EarnService provides functions to access and manage earn-related data.
     */
    GetEarnService(): EarnService;

    /**
     * FuturesService provides functions to perform actions in the futures market.
     */
    GetFuturesService(): FuturesService;

    /**
     * MarginService provides functions to access and manage margin-related data.
     */
    GetMarginService(): MarginService;

    /**
     * SpotService provides functions to perform actions in the spot market.
     */
    GetSpotService(): SpotService;

    /**
     * VipLendingService provides functions to access and manage VIP lending-related data.
     */
    GetVipLendingService(): ViplendingService;
}

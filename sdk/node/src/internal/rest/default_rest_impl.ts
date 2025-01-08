import { KucoinRestService } from '@api/api_rest';
import { AccountService, AccountServiceImpl } from '@generate/service/account_api';
import { AffiliateService, AffiliateServiceImpl } from '@generate/service/affiliate_api';
import { BrokerService, BrokerServiceImpl } from '@generate/service/broker_api';
import { EarnService, EarnServiceImpl } from '@generate/service/earn_api';
import { FuturesService, FuturesServiceImpl } from '@generate/service/futures_api';
import { MarginService, MarginServiceImpl } from '@generate/service/margin_api';
import { SpotService, SpotServiceImpl } from '@generate/service/spot_api';
import { VIPLendingService, VIPLendingServiceImpl } from '@generate/service/viplending_api';
import { ClientOption } from '@model/client_option';
import { SdkVersion } from '@generate/version';
import { DefaultTransport } from '@internal/infra/default_transport';

export class DefaultKucoinRestAPIImpl implements KucoinRestService {
    private readonly accountService: AccountService;
    private readonly affiliateService: AffiliateService;
    private readonly brokerService: BrokerService;
    private readonly earnService: EarnService;
    private readonly futuresService: FuturesService;
    private readonly marginService: MarginService;
    private readonly spotService: SpotService;
    private readonly vipLendingService: VIPLendingService;

    constructor(options: ClientOption) {
        if (!options || !options.transportOption) {
            throw new Error('No transport option provided');
        }

        console.info(`SDK version: ${SdkVersion}`);

        const transport = new DefaultTransport(options, SdkVersion);

        this.accountService = new AccountServiceImpl(transport);
        this.affiliateService = new AffiliateServiceImpl(transport);
        this.brokerService = new BrokerServiceImpl(transport);
        this.earnService = new EarnServiceImpl(transport);
        this.futuresService = new FuturesServiceImpl(transport);
        this.marginService = new MarginServiceImpl(transport);
        this.spotService = new SpotServiceImpl(transport);
        this.vipLendingService = new VIPLendingServiceImpl(transport);
    }

    getAccountService(): AccountService {
        return this.accountService;
    }

    getAffiliateService(): AffiliateService {
        return this.affiliateService;
    }

    getBrokerService(): BrokerService {
        return this.brokerService;
    }

    getEarnService(): EarnService {
        return this.earnService;
    }

    getFuturesService(): FuturesService {
        return this.futuresService;
    }

    getMarginService(): MarginService {
        return this.marginService;
    }

    getSpotService(): SpotService {
        return this.spotService;
    }

    getVipLendingService(): VIPLendingService {
        return this.vipLendingService;
    }
}

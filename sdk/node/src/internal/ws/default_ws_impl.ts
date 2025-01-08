import { KucoinWSService } from '@api/api_ws';
import { ClientOption } from '@model/client_option';
import { SpotPublicWS, SpotPublicWSImpl } from '@generate/spot/spotpublic/ws_spot_public';
import { DomainType } from '@model/constant';
import { SpotPrivateWS, SpotPrivateWSImpl } from '@generate/spot/spotprivate/ws_spot_private';
import { MarginPublicWS, MarginPublicWSImpl } from '@generate/margin/marginpublic/ws_margin_public';
import {
    MarginPrivateWS,
    MarginPrivateWSImpl,
} from '@generate/margin/marginprivate/ws_margin_private';
import {
    FuturesPublicWS,
    FuturesPublicWSImpl,
} from '@generate/futures/futurespublic/ws_futures_public';
import {
    FuturesPrivateWS,
    FuturesPrivateWSImpl,
} from '@generate/futures/futuresprivate/ws_futures_private';
import { DefaultWsService } from '../infra/default_ws_service';
import { SdkVersion } from '@generate/version';

export class KucoinDefaultWsImpl implements KucoinWSService {
    private options: ClientOption;

    constructor(options: ClientOption) {
        this.options = options;
    }

    newSpotPublicWS(): SpotPublicWS {
        const wsService = new DefaultWsService(this.options, DomainType.Spot, false, SdkVersion);
        return new SpotPublicWSImpl(wsService);
    }

    newSpotPrivateWS(): SpotPrivateWS {
        const wsService = new DefaultWsService(this.options, DomainType.Spot, true, SdkVersion);
        return new SpotPrivateWSImpl(wsService);
    }

    newMarginPublicWS(): MarginPublicWS {
        const wsService = new DefaultWsService(this.options, DomainType.Spot, false, SdkVersion);
        return new MarginPublicWSImpl(wsService);
    }

    newMarginPrivateWS(): MarginPrivateWS {
        const wsService = new DefaultWsService(this.options, DomainType.Spot, true, SdkVersion);
        return new MarginPrivateWSImpl(wsService);
    }

    newFuturesPublicWS(): FuturesPublicWS {
        const wsService = new DefaultWsService(this.options, DomainType.Futures, false, SdkVersion);
        return new FuturesPublicWSImpl(wsService);
    }

    newFuturesPrivateWS(): FuturesPrivateWS {
        const wsService = new DefaultWsService(this.options, DomainType.Futures, true, SdkVersion);
        return new FuturesPrivateWSImpl(wsService);
    }
}

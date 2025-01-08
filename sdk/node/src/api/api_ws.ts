import { SpotPublicWS } from '@generate/spot/spotpublic/api_spot_public';
import { SpotPrivateWS } from '@generate/spot/spotprivate/api_spot_private';
import { MarginPublicWS } from '@generate/margin/marginpublic/api_margin_public';
import { MarginPrivateWS } from '@generate/margin/marginprivate/api_margin_private';
import { FuturesPublicWS } from '@generate/futures/futurespublic/api_futures_public';
import { FuturesPrivateWS } from '@generate/futures/futuresprivate/api_futures_private';

export interface KucoinWSService {
    /**
     * Returns the interface to interact with the Spot Trading WebSocket (public channel) API of KuCoin.
     */
    newSpotPublicWS(): SpotPublicWS;

    /**
     * Returns the interface to interact with the Spot Trading WebSocket (private channel) API of KuCoin.
     */
    newSpotPrivateWS(): SpotPrivateWS;

    /**
     * Returns the interface to interact with the Margin Trading WebSocket (public channel) API of KuCoin.
     */
    newMarginPublicWS(): MarginPublicWS;

    /**
     * Returns the interface to interact with the Margin Trading WebSocket (private channel) API of KuCoin.
     */
    newMarginPrivateWS(): MarginPrivateWS;

    /**
     * Returns the interface to interact with the Futures Trading WebSocket (public channel) API of KuCoin.
     */
    newFuturesPublicWS(): FuturesPublicWS;

    /**
     * Returns the interface to interact with the Futures Trading WebSocket (private channel) API of KuCoin.
     */
    newFuturesPrivateWS(): FuturesPrivateWS;
}

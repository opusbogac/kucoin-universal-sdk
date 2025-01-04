

export interface KucoinWSService {
	/**
	 * Returns the interface to interact with the Spot Trading WebSocket (public channel) API of KuCoin.
	 */
	NewSpotPublicWS(): SpotPublicWS;

	/**
	 * Returns the interface to interact with the Spot Trading WebSocket (private channel) API of KuCoin.
	 */
	NewSpotPrivateWS(): SpotPrivateWS;

	/**
	 * Returns the interface to interact with the Margin Trading WebSocket (public channel) API of KuCoin.
	 */
	NewMarginPublicWS(): MarginPublicWS;

	/**
	 * Returns the interface to interact with the Margin Trading WebSocket (private channel) API of KuCoin.
	 */
	NewMarginPrivateWS(): MarginPrivateWS;

	/**
	 * Returns the interface to interact with the Futures Trading WebSocket (public channel) API of KuCoin.
	 */
	NewFuturesPublicWS(): FuturesPublicWS;

	/**
	 * Returns the interface to interact with the Futures Trading WebSocket (private channel) API of KuCoin.
	 */
	NewFuturesPrivateWS(): FuturesPrivateWS;
}
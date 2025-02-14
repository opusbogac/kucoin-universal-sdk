import {
    ClientOptionBuilder,
    DefaultClient,
    GlobalApiEndpoint,
    GlobalBrokerApiEndpoint,
    GlobalFuturesApiEndpoint,
    WebSocketClientOptionBuilder,
    Account,
    Spot,
} from 'kucoin-universal-sdk';


function wsExample() {
    const key = process.env.API_KEY || '';
    const secret = process.env.API_SECRET || '';
    const passphrase = process.env.API_PASSPHRASE || '';

    const websocketClientOption = new WebSocketClientOptionBuilder().build();

    const clientOption = new ClientOptionBuilder()
        .setKey(key)
        .setSecret(secret)
        .setPassphrase(passphrase)
        .setSpotEndpoint(GlobalApiEndpoint)
        .setFuturesEndpoint(GlobalFuturesApiEndpoint)
        .setBrokerEndpoint(GlobalBrokerApiEndpoint)
        .setWebSocketClientOption(websocketClientOption)
        .build();

    const client = new DefaultClient(clientOption);
    const wsService = client.wsService();

    Spot.AccountEvent

    spotWsExample(wsService.newSpotPublicWS());
}


function spotWsExample(spotPublic: Spot.SpotPublicWS) {
    console.log(112);
}

wsExample()
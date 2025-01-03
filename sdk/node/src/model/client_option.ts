import { TransportOption } from './transport_option';
import { WebSocketClientOption } from './websocket_option';

/**
 * ClientOption holds the configuration details for a client including authentication keys, API endpoints, and transport options.
 */
interface ClientOption {
    /**
     * Key is the authentication key for the client
     */
    key: string;
    /**
     * Secret is the authentication secret for the client
     */
    secret: string;
    /**
     * Passphrase is the authentication passphrase for the client
     */
    passphrase: string;
    /**
     * BrokerName The name of the broker
     */
    brokerName: string;
    /**
     * BrokerPartner The partner associated with the broker
     */
    brokerPartner: string;
    /**
     * BrokerKey The secret key for the broker
     */
    brokerKey: string;
    /**
     * SpotEndpoint is the spot market API endpoint for the client
     */
    spotEndpoint: string;
    /**
     * FuturesEndpoint is the futures market API endpoint for the client
     */
    futuresEndpoint: string;
    /**
     * BrokerEndpoint is the broker API endpoint for the client
     */
    brokerEndpoint: string;
    /**
     * TransportOption is an optional configuration for HTTP network transport
     */
    transportOption?: TransportOption;
    /**
     * WebSocketClientOption is an optional configuration for websocket transport
     */
    webSocketClientOption?: WebSocketClientOption;
}

/**
 * ClientOptionBuilder is the builder for ClientOption
 */
class ClientOptionBuilder {
    private clientOption: ClientOption;

    constructor() {
        this.clientOption = {
            key: '',
            secret: '',
            passphrase: '',
            brokerName: '',
            brokerPartner: '',
            brokerKey: '',
            spotEndpoint: '',
            futuresEndpoint: '',
            brokerEndpoint: '',
        };
    }

    /**
     * WithKey sets the authentication key
     */
    withKey(key: string): ClientOptionBuilder {
        this.clientOption.key = key;
        return this;
    }

    /**
     * WithSecret sets the authentication secret
     */
    withSecret(secret: string): ClientOptionBuilder {
        this.clientOption.secret = secret;
        return this;
    }

    /**
     * WithPassphrase sets the authentication passphrase
     */
    withPassphrase(passphrase: string): ClientOptionBuilder {
        this.clientOption.passphrase = passphrase;
        return this;
    }

    /**
     * WithBrokerName sets the broker name
     */
    withBrokerName(brokerName: string): ClientOptionBuilder {
        this.clientOption.brokerName = brokerName;
        return this;
    }

    /**
     * WithBrokerPartner sets the broker partner
     */
    withBrokerPartner(brokerPartner: string): ClientOptionBuilder {
        this.clientOption.brokerPartner = brokerPartner;
        return this;
    }

    /**
     * WithBrokerKey sets the broker key
     */
    withBrokerKey(brokerKey: string): ClientOptionBuilder {
        this.clientOption.brokerKey = brokerKey;
        return this;
    }

    /**
     * WithSpotEndpoint sets the spot market API endpoint
     */
    withSpotEndpoint(endpoint: string): ClientOptionBuilder {
        this.clientOption.spotEndpoint = endpoint;
        return this;
    }

    /**
     * WithFuturesEndpoint sets the futures market API endpoint
     */
    withFuturesEndpoint(endpoint: string): ClientOptionBuilder {
        this.clientOption.futuresEndpoint = endpoint;
        return this;
    }

    /**
     * WithBrokerEndpoint sets the broker API endpoint
     */
    withBrokerEndpoint(endpoint: string): ClientOptionBuilder {
        this.clientOption.brokerEndpoint = endpoint;
        return this;
    }

    /**
     * WithTransportOption sets the HTTP transport options
     */
    withTransportOption(option: TransportOption): ClientOptionBuilder {
        this.clientOption.transportOption = option;
        return this;
    }

    /**
     * WithWebSocketClientOption sets the WebSocket client options
     */
    withWebSocketClientOption(option: WebSocketClientOption): ClientOptionBuilder {
        this.clientOption.webSocketClientOption = option;
        return this;
    }

    /**
     * Build builds and returns the ClientOption
     */
    build(): ClientOption {
        return this.clientOption;
    }
}

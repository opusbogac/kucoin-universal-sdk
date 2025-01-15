import { WebSocketMessageCallback, WebSocketService } from '@internal/interfaces/websocket';
import { ClientOption } from '@model/client_option';
import { DomainType } from '@model/constant';

import { DefaultTransport } from './default_transport';
import { TopicManager, CallbackManager } from './default_ws_callback';
import { WebSocketClient, WriteMsg } from './default_ws_client';
import { DefaultWsTokenProvider } from './default_ws_token_provider';
import { WebSocketClientOption, WebSocketEvent } from '../../model/websocket_option';

import { SubInfo } from '@internal/util/sub';
import { WsMessage } from '@model/common';
import { MessageType } from '@model/constant';

import { v4 as uuidv4 } from 'uuid';

/**
 * DefaultWsService implements the WebSocket service interface for handling real-time data communication.
 * It manages WebSocket connections, subscriptions, and message handling with automatic reconnection support.
 */
export class DefaultWsService implements WebSocketService {
    private readonly option: ClientOption;
    private readonly domain: DomainType;
    private readonly privateChannel: boolean;
    private readonly versionString: string;
    private readonly tokenTransport: DefaultTransport;
    private topicManager: TopicManager;
    private client: WebSocketClient;
    private stopSignal: boolean = false;
    private messageLoop?: NodeJS.Timeout;
    private recoveryLoop?: NodeJS.Timeout;

    /**
     * Creates a new instance of DefaultWsService
     * @param option - Client configuration options including WebSocket settings
     * @param domain - The domain type for the WebSocket connection
     * @param privateChannel - Whether this is a private channel connection
     * @param versionString - SDK version string
     */
    constructor(
        option: ClientOption,
        domain: DomainType,
        privateChannel: boolean,
        versionString: string,
    ) {
        if (!option.webSocketClientOption) {
            throw new Error('WebSocketClientOption is undefined');
        }
        this.wsOption = option.webSocketClientOption;
        this.domain = domain;
        this.privateChannel = privateChannel;
        this.versionString = versionString;
        this.tokenTransport = new DefaultTransport(option, versionString);
        this.topicManager = new TopicManager();
        this.client = new WebSocketClient(
            new DefaultWsTokenProvider(this.tokenTransport, domain, privateChannel),
            this.wsOption
        );
    }

    /**
     * Notifies subscribers of WebSocket events through the configured callback
     * @param event - Event type identifier
     * @param msg - Primary message content
     * @param msg2 - Optional secondary message content
     */
    private notifyEvent(event: WebSocketEvent, msg: string, msg2: string = ''): void {
        try {
            if (this.wsOption.eventCallback) {
                this.wsOption.eventCallback(event, msg);
            }
        } catch (err) {
            console.error('Exception in notify_event:', err);
        }
    }

    /**
     * Resubscribes to topics after a reconnection
     * @param callbackManager - The callback manager containing subscription information
     */
    private async resubscribe(callbackManager: CallbackManager): Promise<void> {
        const subInfoList = callbackManager.getSubInfo();
        for (const sub of subInfoList) {
            try {
                if (sub.callback) {
                    const subId = await this.subscribe(sub.prefix, sub.args, sub.callback);
                    this.notifyEvent(WebSocketEvent.EventReSubscribeOK, subId);
                }
            } catch (err) {
                this.notifyEvent(WebSocketEvent.EventReSubscribeError, `id: ${sub.toId()}, err: ${err}`);
            }
        }
    }

    /**
     * Starts the message processing loop
     * Continuously reads messages from the WebSocket connection and dispatches them to appropriate callbacks
     * Messages are processed every 1000ms (1 second)
     */
    private startMessageLoop(): void {
        this.messageLoop = setInterval(async () => {
            if (this.stopSignal) {
                if (this.messageLoop) clearInterval(this.messageLoop);
                return;
            }

            try {
                //  Read messages from the WebSocket client
                const messages = await this.client.read();
                if (!messages || messages.length === 0) return;
                
                for (const msg of messages) {
                    if (msg.type !== MessageType.Message) continue;

                    const callbackManager = this.topicManager.getCallbackManager(msg.topic);
                    if (!callbackManager) {
                        console.error(`Cannot find callback manager, id: ${msg.id}, topic: ${msg.topic}`);
                        continue;
                    }

                    const cb = callbackManager.get(msg.topic);
                    if (!cb) {
                        console.error(`Cannot find callback for id: ${msg.id}, topic: ${msg.topic}`);
                        continue;
                    }

                    try {
                        await cb.onMessage(msg);
                    } catch (err) {
                        console.error('Exception in callback:', err);
                        this.notifyEvent(WebSocketEvent.EventCallbackError, String(err));
                    }
                }
            } catch (err) {
                console.error('Error in message loop:', err);
            }
        }, 1000);
    }

    /**
     * Starts the recovery loop for handling reconnection scenarios
     * Monitors connection status and triggers resubscription when reconnected
     * Checks every 1000ms (1 second) for reconnection events
     */
    private startRecoveryLoop(): void {
        this.recoveryLoop = setInterval(async () => {
            if (this.stopSignal) {
                if (this.recoveryLoop) clearInterval(this.recoveryLoop);
                return;
            }

            if (this.client.isReconnected()) {
                console.info('WebSocket client reconnected, resubscribe...');
                
                const oldTopicManager = this.topicManager;
                this.topicManager = new TopicManager();
                
                // Create an array of promises for all resubscribe operations
                const resubscribePromises: Promise<void>[] = [];
                oldTopicManager.range((key, value) => {
                    resubscribePromises.push(this.resubscribe(value));
                    return true;
                });
                
                // Wait for all resubscribe operations to complete
                await Promise.all(resubscribePromises);
                
                this.client.clearReconnectedFlag();
            }
        }, 1000);
    }

    /**
     * Starts the WebSocket service
     * Initializes the client connection and starts message processing and recovery loops
     * @throws Error if client initialization fails
     */
    async start(): Promise<void> {
        try {
            await this.client.start();
            this.stopSignal = false;
            this.startMessageLoop();
            this.startRecoveryLoop();
        } catch (err) {
            console.error('Failed to start client:', err);
            throw err;
        }
    }

    /**
     * Stops the WebSocket service
     * Cleans up resources by stopping message and recovery loops
     * Closes the WebSocket connection
     */
    async stop(): Promise<void> {
        this.stopSignal = true;
        if (this.messageLoop) clearInterval(this.messageLoop);
        if (this.recoveryLoop) clearInterval(this.recoveryLoop);
        await this.client.stop();
    }

    /**
     * Subscribes to a topic with specified arguments
     * @param prefix - Topic prefix identifier
     * @param args - Array of subscription arguments
     * @param callback - Callback function to handle incoming messages for this subscription
     * @returns Promise resolving to subscription ID
     * @throws Error if subscription fails or is already subscribed
     */
    async subscribe(prefix: string, args: string[], callback: WebSocketMessageCallback): Promise<string> {
        try {
            // Create subscription info with prefix, args, and callback
            const subInfo = new SubInfo(prefix, args || [], callback);
            const subId = subInfo.toId();

            // Get callback manager for the prefix and attempt to add subscription
            const callbackManager = this.topicManager.getCallbackManager(prefix);
            const created = callbackManager.add(subInfo);
            
            // Check if already subscribed
            if (!created) {
                console.info(`Already subscribed: ${subId}`);
                throw new Error('Already subscribed');
            }

            // Create subscription message
            const subEvent = new WsMessage();
            subEvent.id = subId;
            subEvent.type = MessageType.SubscribeMessage;
            subEvent.topic = subInfo.subTopic();
            subEvent.privateChannel = this.privateChannel;
            subEvent.response = true;

            try {
                // Send subscription request
                await this.client.write(subEvent, this.wsOption.writeTimeout);
                return subId;
            } catch (err) {
                // Clean up on failure
                const callbackManager = this.topicManager.getCallbackManager(subInfo.prefix);
                callbackManager.remove(subId);
                throw err;
            }
        } catch (err) {
            console.error(`Subscribe error: ${err}`);
            throw err;
        }
    }

    /**
     * Unsubscribes from a topic using the subscription ID
     * @param id - Subscription ID to unsubscribe
     * @throws Error if unsubscribe operation fails
     */
    async unsubscribe(id: string): Promise<void> {
        return new Promise(async (resolve, reject) => {
            try {
                const subInfo = SubInfo.fromId(id);
                const callbackManager = this.topicManager.getCallbackManager(subInfo.prefix);

                const subEvent = new WsMessage();

                subEvent.id = uuidv4().toString();
                subEvent.type = MessageType.UnsubscribeMessage;
                subEvent.topic = subInfo.subTopic();
                subEvent.privateChannel = this.privateChannel;
                subEvent.response = true;

                try {
                    await this.client.write(subEvent, this.wsOption.writeTimeout);
                    callbackManager.remove(id);
                    console.info(`Unsubscribe success: ${id}`);
                    resolve();
                } catch (err) {
                    console.error(`Unsubscribe error: ${id}, error: ${err}`);
                    reject(err);
                }
            } catch (err) {
                reject(err);
            }
        });
    }
}

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
import { randomUUID } from 'crypto';
import { EventEmitter } from 'events';
import { Worker } from 'worker_threads';
import { Transform, TransformCallback } from 'stream';
import path from 'path';
import fs from 'fs';

/**
 * DefaultWsService implements the WebSocket service interface for handling real-time data communication.
 * It manages WebSocket connections, subscriptions, and message handling with automatic reconnection support.
 */
export class DefaultWsService implements WebSocketService {
    private readonly option: ClientOption;
    private readonly wsOption: WebSocketClientOption;
    private readonly domain: DomainType;
    private readonly privateChannel: boolean;
    private readonly versionString: string;
    private readonly tokenTransport: DefaultTransport;
    private topicManager: TopicManager;
    private client: WebSocketClient;
    private stopSignal: boolean = false;
    private messageLoop?: NodeJS.Timeout;
    private recoveryLoop?: NodeJS.Timeout;
    private readonly eventEmitter: EventEmitter;
    private messageWorker?: Worker;

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
        this.option = option;
        if (!option.webSocketClientOption) {
            throw new Error('WebSocketClientOption is undefined');
        }
        this.wsOption = option.webSocketClientOption;
        this.domain = domain;
        this.privateChannel = privateChannel;
        this.versionString = versionString;
        this.tokenTransport = new DefaultTransport(option, versionString);
        this.topicManager = new TopicManager();

        // init EventEmitter
        this.eventEmitter = new EventEmitter();

        // if config eventCallback, register as event listener
        if (this.wsOption.eventCallback) {
            this.eventEmitter.on('ws_event', (event: WebSocketEvent, msg: string, msg2: string) => {
                try {
                    this.wsOption.eventCallback!(event, msg);
                } catch (err) {
                    console.error('Exception in eventCallback:', err);
                }
            });
        }

        this.client = new WebSocketClient(
            new DefaultWsTokenProvider(this.tokenTransport, domain, privateChannel),
            this.wsOption,
            this.eventEmitter
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
            // use EventEmitter send event
            this.eventEmitter.emit('ws_event', event, msg, msg2);
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
                this.notifyEvent(
                    WebSocketEvent.EventReSubscribeError,
                    `id: ${sub.toId()}, err: ${err}`,
                );
            }
        }
    }

    /**
     * Starts the message processing loop using a dedicated Worker Thread
     */
    private startMessageLoop(): void {
        try {
            if (!this.client.worker) {
                throw new Error('Worker not initialized in client');
            }

            // Handle messages from worker
            this.client.worker.addListener('message', (msg: any) => {
                if (this.stopSignal) {
                    return;
                }

                if (msg.type !== 'message') {
                    return;
                }

                try {
                    const wsMessage = JSON.parse(msg.data);
                    if (!wsMessage || !wsMessage.topic) {
                        console.warn('[Main] Received message without topic:', wsMessage);
                        return;
                    }

                    const callbackManager = this.topicManager.getCallbackManager(wsMessage.topic);
                    if (!callbackManager) {
                        return;
                    }

                    const callback = callbackManager.get(wsMessage.topic);
                    if (!callback) {
                        return;
                    }

                    try {
                        callback.onMessage(wsMessage);
                    } catch (err) {
                        console.error('[Main] Error processing message in main thread:', err);
                        this.notifyEvent(WebSocketEvent.EventCallbackError, String(err));
                    }
                } catch (err) {
                    console.error('[Main] Error parsing message:', err);
                    this.notifyEvent(WebSocketEvent.EventCallbackError, String(err));
                }
            });

            // Handle worker errors
            this.client.worker.addListener('error', (error: Error) => {
                console.error('[Main] Worker thread error:', error);
                this.notifyEvent(WebSocketEvent.EventCallbackError, String(error));
            });

            // Handle worker exit
            this.client.worker.addListener('exit', (code: number) => {
                if (code !== 0 && !this.stopSignal) {
                    console.error('[Main] Worker stopped with non-zero exit code');
                }
            });

        } catch (error) {
            console.error('[Main] Error in message loop:', error);
            throw error;
        }
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

                try {
                    const resubscribePromises: Promise<void>[] = [];
                    oldTopicManager.range((key, value) => {
                        if (!value.isEmpty()) {
                            resubscribePromises.push(this.resubscribe(value));
                        }
                        return true;
                    });

                    await Promise.all(resubscribePromises);
                    console.log('All topics resubscribed successfully');
                } catch (err) {
                    console.error('Error during resubscribe:', err);
                    this.notifyEvent(
                        WebSocketEvent.EventReSubscribeError,
                        `Failed to resubscribe: ${err}`,
                    );
                    this.topicManager = oldTopicManager;
                }

                this.client.clearReconnectedFlag();
            }
        }, 1000);
    }

    /**
     * Starts the WebSocket service
     * Initializes the client connection and starts message processing and recovery loops
     * @throws Error if client initialization fails
     */
    start(): Promise<void> {
        return this.client
            .start()
            .then(() => {
                this.stopSignal = false;
                this.startMessageLoop();
                this.startRecoveryLoop();
            })
            .catch((err) => {
                console.error('Failed to start client:', err);
                throw err;
            });
    }

    /**
     * Stops the message processing and cleans up resources
     */
    stop(): Promise<void> {
        console.debug('Stopping WebSocket service...');
        this.stopSignal = true;
        
        return new Promise<void>((resolve) => {
            // Terminate worker and clear intervals
            if (this.messageWorker) {
                this.messageWorker.terminate();
                this.messageWorker = undefined;
            }
            if (this.messageLoop) {
                clearInterval(this.messageLoop);
                this.messageLoop = undefined;
            }
            if (this.recoveryLoop) {
                clearInterval(this.recoveryLoop);
                this.recoveryLoop = undefined;
            }

            // Stop the WebSocket client
            this.client.stop().then(() => {
                console.debug('WebSocket service stopped');
                resolve();
            });
        });
    }

    /**
     * Subscribes to a topic with specified arguments
     * @param prefix - Topic prefix identifier
     * @param args - Array of subscription arguments
     * @param callback - Callback function to handle incoming messages for this subscription
     * @returns Promise resolving to subscription ID
     * @throws Error if subscription fails or is already subscribed
     */
    subscribe(prefix: string, args: string[], callback: WebSocketMessageCallback): Promise<string> {
        // Create subscription info with prefix, args, and callback
        const subInfo = new SubInfo(prefix, args || [], callback);
        const subId = subInfo.toId();

        // Get callback manager for the prefix and attempt to add subscription
        const callbackManager = this.topicManager.getCallbackManager(prefix);
        const created = callbackManager.add(subInfo);

        // Check if already subscribed
        if (!created) {
            console.info(`Already subscribed: ${subId}`);
            return Promise.reject(new Error('Already subscribed'));
        }

        // Create subscription message
        const subEvent = new WsMessage();
        subEvent.id = subId;
        subEvent.type = MessageType.SubscribeMessage;
        subEvent.topic = subInfo.subTopic();
        subEvent.privateChannel = this.privateChannel;
        subEvent.response = true;

        return this.client
            .write(subEvent, this.wsOption.writeTimeout)
            .then(() => subId)
            .catch((err) => {
                // Clean up on failure
                const callbackManager = this.topicManager.getCallbackManager(subInfo.prefix);
                callbackManager.remove(subId);
                console.error(`Subscribe error: ${err}`);
                throw err;
            });
    }

    /**
     * Unsubscribes from a topic using the subscription ID
     * @param id - Subscription ID to unsubscribe
     * @throws Error if unsubscribe operation fails
     */
    unsubscribe(id: string): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                const subInfo = SubInfo.fromId(id);
                const callbackManager = this.topicManager.getCallbackManager(subInfo.prefix);

                const subEvent = new WsMessage();

                subEvent.id = randomUUID().toString();
                subEvent.type = MessageType.UnsubscribeMessage;
                subEvent.topic = subInfo.subTopic();
                subEvent.privateChannel = this.privateChannel;
                subEvent.response = true;

                callbackManager.remove(id);
                console.log('[DEBUG] callback removed for id:', id);

                this.client
                    .write(subEvent, this.wsOption.writeTimeout)
                    .then(() => {
                        console.log('[DEBUG] unsubscribe message sent successfully');
                        resolve();
                    })
                    .catch((e) => {
                        console.error('[DEBUG] Failed to send unsubscribe message:', e);
                        reject(e);
                    });
            } catch (e) {
                console.error('[DEBUG] unsubscribe error:', e);
                reject(e);
            }
        });
    }
}

import { EventEmitter } from 'events';
import path from 'path';
import { WsMessage } from '@model/common';
import { MessageType } from '@model/constant';
import {
    DEFAULT_WEBSOCKET_CLIENT_OPTION,
    WebSocketClientOption,
    WebSocketEvent,
} from '@model/websocket_option';
import {
    WebsocketTransport,
    WebsocketTransportEvents,
    WsToken,
    WsTokenProvider,
} from '@internal/interfaces/websocket';
import fs from 'fs';
import { Worker } from 'worker_threads';
import { logger } from '@src/common';
import { EventType } from './message_data';
import { TimeoutError, withTimeout } from '@internal/util/util';
import { Readable } from 'stream';

enum ConnectionState {
    DISCONNECTED = 0,
    CONNECTING = 1,
    CONNECTED = 2,
}

interface WorkerMessage {
    type: EventType;
    data: any;
    error: Error;
}

interface WriteMsg {
    msg: WsMessage;
    resolve: (value: void) => void;
    reject: (reason?: any) => void;
}

// WebSocketClient class, used to manage WebSocket connection and its related operations
export class WebSocketClient extends EventEmitter implements WebsocketTransport {
    private options: WebSocketClientOption;
    private state: ConnectionState;
    private tokenProvider: WsTokenProvider;
    private keepAliveInterval: any;
    private shutdown: boolean;
    private reconnecting = false;

    private tokenInfo: WsToken | null;
    private ackEvents: Map<string, WriteMsg>;

    private worker: Worker | null = null;
    private messageBuffer: Readable;

    constructor(tokenProvider: WsTokenProvider, options: WebSocketClientOption) {
        super();
        this.options = options;
        this.state = ConnectionState.DISCONNECTED;
        this.tokenProvider = tokenProvider;
        this.tokenInfo = null;
        this.shutdown = false;
        this.ackEvents = new Map();
        this.messageBuffer = new Readable({
            objectMode: true,
            highWaterMark:
                this.options.readMessageBuffer || DEFAULT_WEBSOCKET_CLIENT_OPTION.readMessageBuffer,
            read(size) {},
        });
        this.messageBuffer.on('data', (data) => {
            this.emit('message', data);
        });
    }

    start(): Promise<void> {
        if (this.state != ConnectionState.DISCONNECTED) {
            logger.warn('WebSocket client is already connected.');
            return Promise.resolve();
        }
        this.state = ConnectionState.CONNECTING;
        return this.dial()
            .then(() => {
                this.state = ConnectionState.CONNECTED;
                this.keepAliveInterval = setInterval(
                    () => this.keepAlive(),
                    this.tokenInfo!.pingInterval,
                );
                this.emit('event', WebSocketEvent.EventConnected, '');
            })
            .catch((err) => {
                this.state = ConnectionState.DISCONNECTED;
                logger.error('Failed to start webSocket client:', err);
                throw err;
            });
    }

    stop(): Promise<void> {
        this.shutdown = true;
        return this.close().finally(() => {
            this.emit('event', WebSocketEvent.EventClientShutdown, '');
        });
    }

    write(ms: WsMessage, timeout: number): Promise<void> {
        if (this.state != ConnectionState.CONNECTED || this.shutdown) {
            return Promise.reject(new Error('Not connected or shutting down'));
        }

        return withTimeout<void>((resolve, reject) => {
            try {
                this.ackEvents.set(ms.id, {
                    msg: ms,
                    resolve: resolve,
                    reject: reject,
                });

                // @ts-ignore
                this.worker.postMessage({
                    type: EventType.MESSAGE,
                    data: ms,
                });
            } catch (error) {
                logger.error('Failed to send message:', error);
                this.ackEvents.delete(ms.id);
                reject(error);
            }
        }, timeout).catch((err) => {
            if (err instanceof TimeoutError) {
                logger.error('Send message timeout, id:', ms.id);
                this.ackEvents.delete(ms.id);
                throw err;
            }
        });
    }

    on<K extends keyof WebsocketTransportEvents>(
        event: K,
        listener: WebsocketTransportEvents[K],
    ): this {
        return super.on(event, listener);
    }

    emit<K extends keyof WebsocketTransportEvents>(
        event: K,
        ...args: Parameters<WebsocketTransportEvents[K]>
    ): boolean {
        return super.emit(event, ...args);
    }

    private close(): Promise<void> {
        logger.info('closing websocket client');

        // clear intervals
        if (this.keepAliveInterval) {
            clearInterval(this.keepAliveInterval);
            this.keepAliveInterval = null;
        }

        // clear acks
        this.ackEvents.forEach((writeMsg) => {
            writeMsg.reject(new Error('WebSocket connection closed'));
        });
        this.ackEvents.clear();

        // set stats
        this.state = ConnectionState.DISCONNECTED;
        this.emit('event', WebSocketEvent.EventDisconnected, '');

        // delete worker
        if (this.worker) {
            this.worker.postMessage({ type: EventType.CLOSED });
            let worker = this.worker;
            this.worker = null;
            return new Promise<void>((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 1000);
            }).then(() => {
                return worker.terminate().then();
            });
        }

        return Promise.resolve();
    }

    // dial connects to the WebSocket server
    private dial(): Promise<void> {
        return this.tokenProvider.getToken().then((tokenInfos) => {
            this.tokenInfo = this.randomEndpoint(tokenInfos);

            // create WebSocket connection parameters
            const queryParams = new URLSearchParams({
                connectId: Date.now().toString(),
                token: this.tokenInfo.token,
            });

            // create WebSocket URL
            const wsUrl = `${this.tokenInfo.endpoint}?${queryParams.toString()}`;

            // Get the worker file path relative to the compiled js file
            const workerPath = path.join(__dirname, 'message_worker.js');

            if (!fs.existsSync(workerPath)) {
                throw new Error(
                    `Worker file not found at path: ${workerPath}. Please ensure the project is built.`,
                );
            }

            // Create a new worker thread
            this.worker = new Worker(workerPath);

            return withTimeout<void>((resolve, reject) => {
                if (!this.worker) {
                    reject(new Error('Failed to create worker'));
                    return;
                }

                this.worker.once('message', (message: WorkerMessage) => {
                    if (message.type === EventType.MESSAGE) {
                        try {
                            let m = WsMessage.fromJson(message.data);
                            if (m.type == MessageType.WelcomeMessage) {
                                logger.info(`receive welcome message, ready to process message`);

                                // Handle all worker messages through the message event
                                this.worker!.addListener('message', (message: WorkerMessage) => {
                                    switch (message.type) {
                                        case EventType.MESSAGE:
                                        case EventType.ERROR:
                                            this.onMessage(message);
                                            break;
                                        case EventType.CLOSED:
                                            this.onClose(message.data.code, message.data.reason);
                                            break;
                                    }
                                });
                                resolve();
                                return;
                            }
                        } catch (e) {
                            reject(e);
                            return;
                        }
                    }
                    reject(new Error(`Failed to init worker connection, msg:${message.error}`));
                });

                // Init underlying connection
                this.worker.postMessage({
                    type: EventType.INIT,
                    data: wsUrl,
                });
            }, this.options.dialTimeout).catch((err) => {
                logger.error(`failed to create worker`, err);
                return this.close().then(() => {
                    throw err;
                });
            });
        });
    }

    // receive message callback
    private onMessage(message: WorkerMessage): void {
        if (this.state != ConnectionState.CONNECTED) {
            logger.warn('Ignoring message as client is disconnected', message);
            return;
        }

        // error message
        if (message.type == EventType.ERROR) {
            logger.warn(`Got error message, error=${message.error}`);
            if (message.data?.id) {
                this.handleAckEvent(message.data.id, message.data.error);
            }
            return;
        }

        let m: WsMessage;
        try {
            m = JSON.parse(message.data);
        } catch (e) {
            logger.error('Failed to parse message:', e);
            return;
        }

        switch (m.type) {
            case MessageType.Message:
                if (!this.messageBuffer.push(m)) {
                    this.emit('event', WebSocketEvent.EventReadBufferFull, '');
                }
                break;
            case MessageType.PongMessage: {
                this.emit('event', WebSocketEvent.EventPongReceived, '');
                this.handleAckEvent(m.id, null);
                break;
            }
            case MessageType.AckMessage: {
                this.handleAckEvent(m.id, null);
                break;
            }
            case MessageType.ErrorMessage: {
                const errorMsg = String(m.data);
                this.emit('event', WebSocketEvent.EventErrorReceived, String(errorMsg));
                this.handleAckEvent(m.id, new Error(errorMsg));
                break;
            }
            default:
                logger.warn('Unknown message type:', m.type);
        }
    }

    private handleAckEvent(id: string, err: Error | null): void {
        const data = this.ackEvents.get(id);
        if (!data) {
            logger.warn('Unknown ack event id: ', id);
            return;
        }
        this.ackEvents.delete(id);
        if (err) {
            data.reject(err);
        } else {
            data.resolve();
        }
    }

    // close callback
    private onClose(code: number, reason: string): void {
        logger.warn(`WebSocket closed with code ${code}: ${reason}`);

        // Handle reconnection if needed
        if (!this.shutdown) {
            this.reconnect();
        }
    }

    private keepAlive(): void {
        const pingMsg = new WsMessage();
        pingMsg.id = Date.now().toString();
        pingMsg.type = MessageType.PingMessage;
        this.write(pingMsg, this.options.writeTimeout).catch((e) => {
            logger.error('keepalive ping error:', e);
        }).then(()=> {
            logger.debug('send ping success');
        });
    }

    private randomEndpoint(tokens: WsToken[]): WsToken {
        if (!tokens.length) {
            throw new Error('Tokens list is empty');
        }
        return tokens[Math.floor(Math.random() * tokens.length)];
    }

    private reconnect(): Promise<void> {
        if (this.reconnecting) {
            return Promise.resolve();
        }

        return Promise.resolve()
            .then(() => {
                this.reconnecting = true;
            })
            .then(() => {
                return this.close();
            })
            .then(() => {
                if (!this.shutdown && this.options.reconnect) {
                    this.emit('event', WebSocketEvent.EventTryReconnect, '');

                    const maxAttempts =
                        this.options.reconnectAttempts == -1
                            ? Number.MAX_VALUE
                            : this.options.reconnectAttempts;

                    return Promise.resolve().then(async () => {
                        for (let i = 0; i < maxAttempts; i++) {
                            logger.warn(`reconnecting... ${i}/${maxAttempts}`);
                            await new Promise((resolve) => {
                                setTimeout(resolve, this.options.reconnectInterval);
                            });
                            try {
                                await this.start();
                                logger.info('Successfully reconnected to WebSocket server');
                                this.emit('reconnected');
                                return;
                            } catch (e) {
                                logger.error(`reconnecting fail:`, e);
                            }
                        }
                        this.emit(
                            'event',
                            WebSocketEvent.EventClientFail,
                            'Failed to reconnect after all attempts',
                        );
                        logger.error('Failed to reconnect after all attempts.');
                    });
                }
            })
            .finally(async () => {
                this.reconnecting = false;
            });
    }
}

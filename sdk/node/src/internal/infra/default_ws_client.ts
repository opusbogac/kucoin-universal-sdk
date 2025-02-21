import WebSocket, { Data as WebSocketData } from 'ws';
import { EventEmitter } from 'events';
import path from 'path';
import { WsMessage } from '../../model/common';
import { MessageType } from '../../model/constant';
import { WebSocketClientOption } from '../../model/websocket_option';
import { WebSocketEvent } from '../../model/websocket_option';
import { WsToken, WsTokenProvider } from '../interfaces/websocket';
import fs from 'fs';
import { Worker } from 'worker_threads';
import { logger } from '@src/common';

/**
 * WriteMsg represents a message to be written to the WebSocket connection
 */
export interface WriteMsg {
    msg: WsMessage;
    resolve: (value: void | PromiseLike<void>) => void;
    reject: (reason?: any) => void;
}

const { Readable } = require('stream');
 
class BoundedReadable extends Readable {
    private readonly maxSize: number;

    constructor(maxSize: number) {
        super({
            objectMode: true,
            highWaterMark: maxSize
        });
        this.maxSize = maxSize;
    }
 
    addMessage(message: WsMessage): boolean {
        if (this.readableLength >= this.readableHighWaterMark) {
            logger.warn(`Dropping: ${JSON.stringify(message)}`);
            return false;
        }
 
        this.push(message);
        return true;
    }
 
    _read(): void {
        
    }

    destroy(): void {
        this.push(null);
        super.destroy();
    }
}


// WebSocketClient class, used to manage WebSocket connection and its related operations
export class WebSocketClient {
    private options: WebSocketClientOption;
    private conn: WebSocket | null;
    private connected: boolean;
    private shutdown: boolean;
    private disconnected: boolean;
    private reconnected: boolean;

    private tokenProvider: WsTokenProvider;

    private tokenInfo: WsToken | null;
    private closed: boolean;
    private reconnectClosed: boolean;

    private ackEvents: Map<string, WriteMsg>;
    private metric: { pingSuccess: number; pingErr: number };
    private keepAliveInterval: NodeJS.Timeout | null;
    private welcomeReceived: boolean;
    private eventEmitter: EventEmitter;
    private lastPingTime: number | null;

    public worker: Worker | null = null;
    public messageBuffer: BoundedReadable;

    constructor(
        tokenProvider: WsTokenProvider, 
        options: WebSocketClientOption,
        externalEventEmitter?: EventEmitter
    ) {
        this.options = options;
        this.conn = null;
        this.connected = false;
        this.shutdown = false;
        this.disconnected = false;
        this.reconnected = false;
        this.tokenProvider = tokenProvider;
        this.tokenInfo = null;
        this.closed = false;
        this.reconnectClosed = false;
        this.welcomeReceived = false;

        this.ackEvents = new Map();
        this.metric = { pingSuccess: 0, pingErr: 0 };
        this.keepAliveInterval = null;
        this.eventEmitter = externalEventEmitter || new EventEmitter();

        this.lastPingTime = null;
        this.messageBuffer = new BoundedReadable(this.options.readMessageBuffer || 1024);
        this.reconnect();
    }

    // # Start the WebSocket client
    start(): Promise<void> {
        if (this.connected) {
            logger.warn('WebSocket client is already connected.');
            return Promise.resolve();
        }

        return this.dial()
            .then(() => {
                this.connected = true;
                this.run();
            })
            .catch((err) => {
                logger.error('Failed to start WebSocket client:', err);
                throw err;
            });
    }

    // Start the message processing and keep-alive
    private run(): void {
        if (!this.worker) {
            throw new Error('Worker not initialized');
        }

        if (!this.keepAliveInterval) {
            this.keepAliveInterval = setInterval(() => this.keepAlive(), 1000);
        }
    }

    // Stop the WebSocket client
    stop(): Promise<void> {
        this.shutdown = true;
        this.clearResources();

        if (this.worker) {
            this.worker.postMessage({ command: 'close' });
            this.worker.terminate();
            this.worker = null;
        }

        return Promise.resolve();
    }

    // Clear all resources
    private clearResources(): void {
        // Clear intervals
        if (this.keepAliveInterval) {
            clearInterval(this.keepAliveInterval);
            this.keepAliveInterval = null;
        }

        // Clear message queues
        this.clearMessageQueues();

        if(this.messageBuffer)
        {
            this.messageBuffer.destroy();
        }

        // Reset state
        this.disconnected = true;
        this.connected = false;
        this.welcomeReceived = false;
        this.lastPingTime = null;
    }

    // dial connects to the WebSocket server
    private dial(): Promise<void> {
        return this.tokenProvider
            .getToken()
            .then((tokenInfos) => {
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
                    throw new Error(`Worker file not found at path: ${workerPath}. Please ensure the project is built.`);
                }

                // Create a new worker thread
                this.worker = new Worker(workerPath);

                return new Promise<void>((resolve, reject) => {
                    if (!this.worker) {
                        reject(new Error('Failed to create worker'));
                        return;
                    }

                    // Handle all worker messages through the message event
                    this.worker.addListener('message', (message: any) => {
                        switch (message.type) {
                            case 'open':
                                this.onOpen();
                                resolve();
                                break;
                            case 'message':
                                this.onMessage(message.data);
                                break;
                            case 'error':
                                this.onError(new Error(message.error));
                                break;
                            case 'close':
                                this.onClose(message.code, message.reason);
                                break;
                            case 'welcome':
                                break;
                        }
                    });

                    // Handle worker thread crashes
                    this.worker.addListener('error', (error: Error) => {
                        logger.error('Worker thread crashed:', error);
                        this.close();
                        this.disconnected = true;
                        this.connected = false;
                        reject(new Error(`Worker thread crashed: ${error.message}`));
                    });

                    // Handle worker thread exit
                    this.worker.addListener('exit', (code: number) => {
                        if (code !== 0) {  // Non-zero exit code means abnormal exit
                            logger.error('Worker thread exited with code:', code);
                            this.close();
                            this.disconnected = true;
                            this.connected = false;
                            reject(new Error(`Worker thread exited with code: ${code}`));
                        }
                    });

                    // Send connect command to worker
                    this.worker.postMessage({ 
                        command: 'connect',
                        wsUrl 
                    });

                    // Set timeout for welcome message
                    setTimeout(() => {
                        if (!this.welcomeReceived) {
                            this.close();  // Close the connection
                            this.disconnected = true;
                            this.connected = false;
                            reject(new Error('Did not receive welcome message'));
                        }
                    }, 5000);
                });
            })
            .catch((err) => {
                logger.error('Failed to dial WebSocket server:', err);
                throw err;
            });
    }

    // open callback
    private onOpen(): void {
        logger.info('WebSocket connection opened.');
        this.notifyEvent(WebSocketEvent.EventConnected, 'WebSocket connection opened.');
    }

    // error callback
    private onError(error: Error): void {
        logger.error('WebSocket error:', error);
        
        // Clear all pending ack events to prevent memory leak
        this.clearMessageQueues();
        
        // Update connection status
        this.disconnected = true;
        this.connected = false;
        
    }

    // close callback
    private onClose(code: number, reason: string): void {
        logger.debug(`WebSocket closed with code ${code}: ${reason}`);
        this.disconnected = true;

        // Clear resources
        this.clearResources();

        // Notify event
        this.notifyEvent(WebSocketEvent.EventDisconnected, `${code}:${reason}`);

        // Handle reconnection if needed
        if (!this.shutdown && !this.reconnectClosed) {
            this.reconnect();
        }
    }

    // receive message callback
    private onMessage(message: string): void {
        if (this.shutdown || this.closed) {
            logger.debug('Ignoring message as client is shutting down or closed');
            return;
        }

        let m: WsMessage;
        try {
            m = JSON.parse(message);
        } catch (e) {
            logger.error('Failed to parse message:', e);
            return;
        }

        switch (m.type) {
            case MessageType.WelcomeMessage:
                this.welcomeReceived = true;
                logger.info('Welcome message received.');
                break;
            case MessageType.Message:
                if(!this.messageBuffer.addMessage(m))
                {
                    this.notifyEvent(WebSocketEvent.EventReadBufferFull, '');
                }
                break;
            case MessageType.PongMessage:
                this.notifyEvent(WebSocketEvent.EventPongReceived, '');
                this.handleAckEvent(m);
                break;

            case MessageType.AckMessage:
            case MessageType.ErrorMessage:
                this.handleAckEvent(m);
                break;

            default:
                logger.warn('Unknown message type:', m.type);
        }
    }

    // Handle acknowledgment events (pong, ack, error)
    private handleAckEvent(m: WsMessage): void {
        if (!m.id) return;

        const data = this.ackEvents.get(m.id);
        if (!data) return;

        this.ackEvents.delete(m.id);

        if (m.type === MessageType.PongMessage) {
            logger.debug('[HandleAckEvent] Handling pong message');
            this.metric.pingSuccess++;
            data.resolve();
            return;
        }

        if (m.type === MessageType.ErrorMessage) {
            const error = m.data;
            this.notifyEvent(WebSocketEvent.EventErrorReceived, error);
            data.reject(new Error(error));
            this.metric.pingErr++;
        } else {
            data.resolve();
        }
    }

    // write message to work thread
    write(ms: WsMessage, timeout: number): Promise<void> {
        return new Promise((resolve, reject) => {
            // clean resource if error
            if (!this.connected || !this.worker) {
                return;
            }

            try {
                // Send message to worker directly
                this.worker.postMessage({
                    command: 'send',
                    data: ms
                });
                resolve();
            } catch (error) {
                logger.error('Failed to send message:', error);
                reject(error);
            }
        });
    }

    // keep-alive
    private keepAlive(): void {

        if (!this.tokenInfo || this.shutdown || this.closed) {
            return;
        }

        if (this.disconnected || !this.connected) {
            return;
        }

        const interval = this.tokenInfo.pingInterval / 1000;
        const timeout = this.tokenInfo.pingTimeout / 1000;
        const currentTime = Date.now() / 1000;
        const timeSinceLastPing = currentTime - (this.lastPingTime || 0);


        if (timeSinceLastPing >= interval) {
            const pingMsg = new WsMessage();
            pingMsg.id = Date.now().toString();
            pingMsg.type = MessageType.PingMessage;
            try {
                this.write(pingMsg, timeout).catch((e) => {
                    logger.error('[KeepAlive] Heartbeat ping error:', e);
                });
            } catch (e) {
                logger.error('[KeepAlive] Heartbeat ping error:', e);
                this.metric.pingErr++;
            }
            this.lastPingTime = currentTime;
        }
    }

    public close(): void {
        if (this.worker) {
            this.worker.postMessage({ command: 'close' });
            this.worker.terminate();
            this.worker = null;
        }
        // Clear intervals
        if (this.keepAliveInterval) {
            clearInterval(this.keepAliveInterval);
            this.keepAliveInterval = null;
        }

        // Clear message queues
        this.clearMessageQueues();

        // Reset state
        this.disconnected = true;
        this.connected = false;
        this.welcomeReceived = false;
        this.lastPingTime = null;
    }

    // Clear all message queues and cleanup resources
    private clearMessageQueues(): void {

        // Clear write message queue and reject pending promises
        this.ackEvents.forEach((writeMsg) => {
            writeMsg.reject(new Error('WebSocket connection closed'));
        });
        this.ackEvents.clear();
    }

    private notifyEvent(event: WebSocketEvent, msg: string, msg2: string = ''): void {
        try {
            this.eventEmitter.emit('ws_event', event, msg);
        } catch (err) {
            logger.error('Exception in notify_event:', err);
        }
    }

    private randomEndpoint(tokens: WsToken[]): WsToken {
        if (!tokens.length) {
            throw new Error('Tokens list is empty');
        }
        return tokens[Math.floor(Math.random() * tokens.length)];
    }

    // Check if the client has been reconnected
    public isReconnected(): boolean {
        return this.reconnected;
    }

    // Clear the reconnected flag
    public clearReconnectedFlag(): void {
        this.reconnected = false;
    }

    private async reconnect(): Promise<void> {
        const reconnectLoop = async () => {
            while (!this.reconnectClosed) {
                if (this.disconnected && !this.shutdown) {
                    try {
                        await this.close();
                    } catch (err) {
                        logger.error('Error closing connection:', err);
                    }
                    
                    this.notifyEvent(WebSocketEvent.EventTryReconnect, '');
                    this.disconnected = false;

                    let attempt = 0;
                    let reconnected = false;

                    while (
                        !reconnected &&
                        this.options.reconnect &&
                        (this.options.reconnectAttempts === -1 ||
                            attempt < this.options.reconnectAttempts)
                    ) {
                        logger.info(
                            `Reconnecting in ${this.options.reconnectInterval/1000} seconds... (attempt ${attempt + 1}/${this.options.reconnectAttempts})`,
                        );
                        await new Promise((resolve) =>
                            setTimeout(resolve, this.options.reconnectInterval),
                        );

                        try {
                            await this.dial();
                            this.connected = true;
                            this.closed = false;
                            this.run();
                            reconnected = true;
                            this.reconnected = true;
                            logger.info('Successfully reconnected to WebSocket server');
                        } catch (err) {
                            logger.error(`Reconnect attempt ${attempt + 1} failed:`, err);
                            attempt++;
                        }
                    }

                    if (!reconnected) {
                        this.notifyEvent(WebSocketEvent.EventClientFail, 'Failed to reconnect after all attempts');
                        logger.error('Failed to reconnect after all attempts.');
                    }
                }
                await new Promise((resolve) => setTimeout(resolve, 1000));
            }
        };

        reconnectLoop().catch((err) => {
            logger.error('Critical error in reconnect loop:', err);
            this.notifyEvent(WebSocketEvent.EventClientFail, `Critical error: ${err.message}`);
        });
    }
}

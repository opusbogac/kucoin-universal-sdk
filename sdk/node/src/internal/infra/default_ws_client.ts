import WebSocket, { Data as WebSocketData } from 'ws';
import { EventEmitter } from 'events';
import { Readable, Writable } from 'stream';
import path from 'path';

import { WsMessage } from '../../model/common';
import { MessageType } from '../../model/constant';
import { WebSocketClientOption } from '../../model/websocket_option';
import { WebSocketEvent } from '../../model/websocket_option';
import { WsToken, WsTokenProvider } from '../interfaces/websocket';
import fs from 'fs';
import { Worker } from 'worker_threads';

/**
 * WriteMsg represents a message to be written to the WebSocket connection
 */
export interface WriteMsg {
    msg: WsMessage;
    resolve: (value: void | PromiseLike<void>) => void;
    reject: (reason?: any) => void;
}

/**
 * MessageQueue implements a message queue using Node.js streams
 */
class MessageQueue extends Readable {
    private messages: WsMessage[] = [];
    private maxSize: number;

    constructor(maxSize: number = 1024) {
        super({
            objectMode: true,
            highWaterMark: maxSize
        });
        this.maxSize = maxSize;
    }

    _read(size: number): void {
        while (this.messages.length > 0 && size > 0) {
            const message = this.messages.shift();
            if (!this.push(message)) {
                break;
            }
            size--;
        }
    }

    enqueue(message: WsMessage): boolean {
        if (this.messages.length >= this.maxSize) {
            return false;
        }
        this.messages.push(message);
        this._read(1);
        return true;
    }

    clear(): void {
        this.messages = [];
    }
}

/**
 * MessageWriter implements a message writer using Node.js streams
 */
class MessageWriter extends Writable {
    constructor(private worker: Worker) {
        super({
            objectMode: true,
            highWaterMark: 256
        });
    }

    _write(message: WsMessage, encoding: string, callback: (error?: Error | null) => void): void {
        try {
            // Send message through worker
            this.worker.postMessage({
                command: 'send',
                data: message
            });
            callback();
        } catch (error) {
            callback(error as Error);
        }
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

    private readMsgQueue: MessageQueue;
    private writeMsgQueue: MessageQueue;

    private ackEvents: Map<string, WriteMsg>;
    private metric: { pingSuccess: number; pingErr: number };
    private keepAliveInterval: NodeJS.Timeout | null;
    private welcomeReceived: boolean;
    private eventEmitter: EventEmitter;
    private lastPingTime: number | null;

    private messageWriter: MessageWriter | null = null;
    public worker: Worker | null = null;

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

        // Message queues
        this.readMsgQueue = new MessageQueue(options.readMessageBuffer);
        this.writeMsgQueue = new MessageQueue(options.writeMessageBuffer);


        this.ackEvents = new Map();
        this.metric = { pingSuccess: 0, pingErr: 0 };
        this.keepAliveInterval = null;
        this.eventEmitter = externalEventEmitter || new EventEmitter();

        this.lastPingTime = null;
        this.reconnect();
    }

    // # Start the WebSocket client
    start(): Promise<void> {
        if (this.connected) {
            console.warn('WebSocket client is already connected.');
            return Promise.resolve();
        }

        return this.dial()
            .then(() => {
                this.connected = true;
                this.notifyEvent(WebSocketEvent.EventConnected, '');
                this.run();
            })
            .catch((err) => {
                console.error('Failed to start WebSocket client:', err);
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

        // Initialize message writer
        this.messageWriter = new MessageWriter(this.worker);
        this.writeMsgQueue.pipe(this.messageWriter);
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

                    // Handle worker messages
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
                        }
                    });

                    // Handle worker errors
                    this.worker.addListener('error', (error: Error) => {
                        console.error('Worker error:', error);
                        reject(error);
                    });

                    // Handle worker exit
                    this.worker.addListener('exit', (code: number) => {
                        if (code !== 0) {
                            console.error(`Worker stopped with exit code ${code}`);
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
                            reject(new Error('Did not receive welcome message'));
                        }
                    }, 5000);
                });
            })
            .catch((err) => {
                console.error('Failed to dial WebSocket server:', err);
                throw err;
            });
    }

    // open callback
    private onOpen(): void {
        console.log('WebSocket connection opened.');
        this.notifyEvent(WebSocketEvent.EventConnected, 'WebSocket connection opened.');
    }

    // error callback
    private onError(error: Error): void {
        console.error('WebSocket error:', error);
        this.disconnected = true;
    }

    // close callback
    private onClose(code: number, reason: string): void {
        console.debug(`WebSocket closed with code ${code}: ${reason}`);
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
            console.debug('Ignoring message as client is shutting down or closed');
            return;
        }

        let m: WsMessage;
        try {
            m = JSON.parse(message);
        } catch (e) {
            console.error('Failed to parse message:', e);
            return;
        }

        switch (m.type) {
            case MessageType.WelcomeMessage:
                this.welcomeReceived = true;
                console.log('Welcome message received.');
                break;

            case MessageType.Message:
                if (!this.shutdown && !this.closed) {
                    this.notifyEvent(WebSocketEvent.EventMessageReceived, '');
                    // queue message
                    if (this.readMsgQueue.enqueue(m)) {
                        this.readMsgQueue._read(1);
                    } else {
                        this.notifyEvent(WebSocketEvent.EventReadBufferFull, '');
                        console.warn('Read buffer full');
                    }
                }
                break;

            case MessageType.PongMessage:
                this.notifyEvent(WebSocketEvent.EventPongReceived, '');
                console.debug('PONG received');
                this.handleAckEvent(m);
                break;

            case MessageType.AckMessage:
            case MessageType.ErrorMessage:
                this.handleAckEvent(m);
                break;

            default:
                console.warn('Unknown message type:', m.type);
        }
    }

    // Handle acknowledgment events (pong, ack, error)
    private handleAckEvent(m: WsMessage): void {
        if (!m.id) return;

        const data = this.ackEvents.get(m.id);
        if (!data) return;

        this.ackEvents.delete(m.id);

        if (m.type === MessageType.PongMessage) {
            console.debug('[HandleAckEvent] Handling pong message');
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

    /**
     * Read a single message from the queue and remove it
     * @returns The first message in the queue, or undefined if queue is empty
     */
    read(): WsMessage | undefined {
        return this.readMsgQueue.read();
    }

    // write message
    write(ms: WsMessage, timeout: number): Promise<void> {
        return new Promise((resolve, reject) => {

            if (!this.connected) {
                reject(new Error('Not connected'));
                return;
            }

            const msg: WriteMsg = { msg: ms, resolve, reject };
            if (!ms.id) {
                reject(new Error('Message ID is undefined'));
                return;
            }

            // write message to queue and check if it reaches the max size
            if (this.writeMsgQueue.enqueue(ms)) {
                this.ackEvents.set(ms.id, msg);
                this.writeMsgQueue._read(1);
            } else {
                reject(new Error('Write buffer is full'));
            }
        });
    }

    // keep-alive
    private keepAlive(): void {

        if (!this.tokenInfo || this.shutdown || this.closed) {
            console.debug('[KeepAlive] Skip - basic check failed');
            return;
        }

        if (this.disconnected || !this.connected) {
            console.debug('[KeepAlive] Skip - connection is not active');
            return;
        }

        const interval = this.tokenInfo.pingInterval / 1000;
        const timeout = this.tokenInfo.pingTimeout / 1000;
        const currentTime = Date.now() / 1000;
        const timeSinceLastPing = currentTime - (this.lastPingTime || 0);


        if (timeSinceLastPing >= interval) {
            const pingMsg = this.newPingMessage();
            try {
                this.write(pingMsg, timeout).catch((e) => {
                    console.error('[KeepAlive] Heartbeat ping error:', e);
                    this.disconnected = true;
                });
            } catch (e) {
                console.error('[KeepAlive] Heartbeat ping error:', e);
                this.metric.pingErr++;
                this.disconnected = true;
            }
            this.lastPingTime = currentTime;
        } else {
            console.debug('[KeepAlive] Skip - interval not reached');
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
        // Clear read message queue
        this.readMsgQueue.clear();

        // Clear write message queue and reject pending promises
        this.writeMsgQueue.clear();
        this.ackEvents.forEach((writeMsg) => {
            writeMsg.reject(new Error('WebSocket connection closed'));
        });
        this.ackEvents.clear();
    }

    private notifyEvent(event: WebSocketEvent, msg: string, msg2: string = ''): void {
        try {
            this.eventEmitter.emit('ws_event', event, msg);
        } catch (err) {
            console.error('Exception in notify_event:', err);
        }
    }

    private randomEndpoint(tokens: WsToken[]): WsToken {
        if (!tokens.length) {
            throw new Error('Tokens list is empty');
        }
        return tokens[Math.floor(Math.random() * tokens.length)];
    }

    private newPingMessage(): WsMessage {
        const pingMessage = new WsMessage();
        pingMessage.id = Date.now().toString();
        pingMessage.type = MessageType.PingMessage;
        return pingMessage;
    }

    // Check if the client has been reconnected
    isReconnected(): boolean {
        return this.reconnected;
    }

    // Clear the reconnected flag
    clearReconnectedFlag(): void {
        this.reconnected = false;
    }

    private async reconnect(): Promise<void> {
        const reconnectLoop = async () => {
            while (!this.reconnectClosed) {
                if (this.disconnected && !this.shutdown) {
                    console.log('Broken WebSocket connection, starting reconnection');
                    try {
                        await this.close();
                    } catch (err) {
                        console.error('Error closing connection:', err);
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
                        console.log(
                            `Reconnecting in ${this.options.reconnectInterval/1000} seconds... (attempt ${attempt + 1}/${this.options.reconnectAttempts})`,
                        );
                        await new Promise((resolve) =>
                            setTimeout(resolve, this.options.reconnectInterval),
                        );

                        try {
                            await this.dial();
                            this.notifyEvent(WebSocketEvent.EventConnected, '');
                            this.connected = true;
                            this.closed = false;
                            this.run();
                            reconnected = true;
                            this.reconnected = true;
                            console.log('Successfully reconnected to WebSocket server');
                        } catch (err) {
                            console.error(`Reconnect attempt ${attempt + 1} failed:`, err);
                            attempt++;
                        }
                    }

                    if (!reconnected) {
                        this.notifyEvent(WebSocketEvent.EventClientFail, 'Failed to reconnect after all attempts');
                        console.error('Failed to reconnect after all attempts.');
                    }
                }
                await new Promise((resolve) => setTimeout(resolve, 1000));
            }
        };

        reconnectLoop().catch((err) => {
            console.error('Critical error in reconnect loop:', err);
            this.notifyEvent(WebSocketEvent.EventClientFail, `Critical error: ${err.message}`);
        });
    }
}

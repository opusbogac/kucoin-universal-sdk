import WebSocket, { Data as WebSocketData } from 'ws';
import { EventEmitter } from 'events';
import { Queue } from 'queue-typescript';

import { WsMessage } from '../../model/common';
import { MessageType } from '../../model/constant';
import { WebSocketClientOption } from '../../model/websocket_option';
import { WebSocketEvent } from '../../model/websocket_option';
import { WsToken, WsTokenProvider } from '../interfaces/websocket';

export class WriteMsg {
    public msg: WsMessage;
    public ts: number;
    public timeout: number;
    public exception: Error | null;
    public eventEmitter: EventEmitter;

    constructor(msg: WsMessage, timeout: number) {
        this.msg = msg;
        this.ts = Date.now();
        this.timeout = timeout;
        this.exception = null;
        this.eventEmitter = new EventEmitter();
    }

    setException(exception: Error): void {
        this.exception = exception;
        this.eventEmitter.emit('error', exception);
    }

    complete(): void {
        this.eventEmitter.emit('complete');
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

    private readMsg: Queue<WsMessage>;
    private writeMsg: Queue<WriteMsg>;
    private readMsgMaxSize: number;
    private writeMsgMaxSize: number;

    private ackEvents: Map<string, WriteMsg>;
    private metric: { pingSuccess: number; pingErr: number };
    private keepAliveInterval: NodeJS.Timeout | null;
    private writeInterval: NodeJS.Timeout | null;
    private welcomeReceived: boolean;
    private eventEmitter: EventEmitter;
    private lastPingTime: number | null;

    constructor(tokenProvider: WsTokenProvider, options: WebSocketClientOption) {
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
        this.readMsg = new Queue<WsMessage>();
        this.writeMsg = new Queue<WriteMsg>();
        this.readMsgMaxSize = options.readMessageBuffer;
        this.writeMsgMaxSize = options.writeMessageBuffer;

        this.ackEvents = new Map();
        this.metric = { pingSuccess: 0, pingErr: 0 };
        this.keepAliveInterval = null;
        this.writeInterval = null;
        this.eventEmitter = new EventEmitter();

        this.lastPingTime = null;
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
                this.reconnect();
            })
            .catch((err) => {
                console.error('Failed to start WebSocket client:', err);
                throw err;
            });
    }

    // Start the message processing and keep-alive
    private run(): void {
        //
        if (!this.keepAliveInterval) {
            this.keepAliveInterval = setInterval(() => this.keepAlive(), 1000);
        }

        if (!this.writeInterval) {
            this.writeInterval = setInterval(() => this.writeMessage(), 100);
        }
    }

    // Stop the WebSocket client
    public async stop(): Promise<void> {
        // Set shutdown flag to prevent reconnection attempts
        this.shutdown = true;
        this.reconnectClosed = true;

        // Clear intervals
        if (this.keepAliveInterval) {
            clearInterval(this.keepAliveInterval);
            this.keepAliveInterval = null;
        }
        if (this.writeInterval) {
            clearInterval(this.writeInterval);
            this.writeInterval = null;
        }

        // Wait for any pending messages to be processed
        await new Promise<void>((resolve) => {
            setTimeout(async () => {
                try {
                    await this.close();
                } catch (error) {
                    console.error('Error during WebSocket close:', error);
                }
                resolve();
            }, 100);
        });
    }

    // dial connects to the WebSocket server
    private dial(): Promise<void> {
        return this.tokenProvider
            .getToken()
            .then((tokenInfos) => {
                this.tokenInfo = this.randomEndpoint(tokenInfos);

                // create WebSocket connection
                const queryParams = new URLSearchParams({
                    connectId: Date.now().toString(),
                    token: this.tokenInfo.token,
                });

                // create WebSocket connection
                const wsUrl = `${this.tokenInfo.endpoint}?${queryParams.toString()}`;
                this.conn = new WebSocket(wsUrl);

                return new Promise<void>((resolve, reject) => {
                    if (!this.conn) return reject(new Error('No connection'));

                    this.conn.on('open', () => {
                        this.onOpen();
                        resolve();
                    });

                    this.conn.on('message', (data: WebSocketData) =>
                        this.onMessage(data.toString()),
                    );
                    this.conn.on('error', (error: Error) => this.onError(error));
                    this.conn.on('close', (code: number, reason: string) =>
                        this.onClose(code, reason.toString()),
                    );

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
        console.log(`WebSocket closed with status code ${code}, message: ${reason}`);
        this.connected = false;
        this.disconnected = true;

        // Clear any pending messages and intervals
        this.clearMessageQueues();
        if (this.keepAliveInterval) {
            clearInterval(this.keepAliveInterval);
            this.keepAliveInterval = null;
        }
        if (this.writeInterval) {
            clearInterval(this.writeInterval);
            this.writeInterval = null;
        }

        // Notify event
        this.notifyEvent(WebSocketEvent.EventDisconnected, reason);
    }

    // receive message callback
    private onMessage(message: string): void {
        if (this.shutdown || this.closed) {
            console.debug('Ignoring message as client is shutting down or closed');
            return;
        }

        console.debug('onMessage Received type:message    message:' + message);
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
                    if (this.readMsg.length < this.readMsgMaxSize) {
                        this.readMsg.enqueue(m);
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
            data.complete();
            return;
        }

        if (m.type === MessageType.ErrorMessage) {
            const error = m.data;
            this.notifyEvent(WebSocketEvent.EventErrorReceived, error);
            data.setException(new Error(error));
            this.metric.pingErr++;
        } else {
            data.complete();
        }
    }

    /**
     * Read a single message from the queue and remove it
     * @returns The first message in the queue, or undefined if queue is empty
     */
    read(): WsMessage | undefined {
        if (this.readMsg.length === 0) {
            return undefined;
        }
        return this.readMsg.dequeue();
    }

    // write message
    write(ms: WsMessage, timeout: number): Promise<void> {
        return new Promise((resolve, reject) => {
            console.log('Write message:', ms);
            if (!this.connected) {
                reject(new Error('Not connected'));
                return;
            }

            const msg = new WriteMsg(ms, timeout);
            if (!ms.id) {
                reject(new Error('Message ID is undefined'));
                return;
            }

            // write message to queue and check if it reaches the max size
            if (this.writeMsg.length < this.writeMsgMaxSize) {
                this.writeMsg.enqueue(msg);
                this.ackEvents.set(ms.id, msg);

                // Listen for message completion
                msg.eventEmitter.once('complete', () => {
                    resolve();
                });

                msg.eventEmitter.once('error', (error) => {
                    reject(error);
                });

                // Trigger message sending
                setImmediate(() => this.writeMessage());
            } else {
                reject(new Error('Write buffer is full'));
            }
        });
    }

    // send message
    private writeMessage(): void {
        if (this.closed || !this.conn) return;

        // Process all messages in the queue
        while (this.writeMsg.length > 0) {
            const msg = this.writeMsg.dequeue();
            if (!msg) break;

            try {
                // Send the complete message as JSON string
                this.conn.send(JSON.stringify(msg.msg));
                console.debug('Message sent:', msg.msg);
                msg.ts = Date.now();

                // Only complete non-ping messages immediately
                // Ping messages will be completed when we receive the pong response
                if (msg.msg.type !== MessageType.PingMessage) {
                    msg.complete();
                }
            } catch (e) {
                console.error('Failed to send message:', e);
                if (msg.msg.id) {
                    this.ackEvents.delete(msg.msg.id);
                }
                msg.setException(e as Error);
            }
        }
    }

    // keep-alive
    private keepAlive(): void {
        console.debug('[KeepAlive] Start checking...');

        if (!this.tokenInfo || this.shutdown || this.closed) {
            console.debug('[KeepAlive] Skip - tokenInfo/shutdown/closed check failed');
            return;
        }

        const interval = this.tokenInfo.pingInterval / 1000;
        const timeout = this.tokenInfo.pingTimeout / 1000;
        const currentTime = Date.now() / 1000;
        const timeSinceLastPing = currentTime - (this.lastPingTime || 0);

        console.debug(
            `[KeepAlive] Current: ${currentTime}, LastPing: ${this.lastPingTime}, Interval: ${interval}, TimeSince: ${timeSinceLastPing}`,
        );

        if (timeSinceLastPing >= interval) {
            console.debug('[KeepAlive] Sending ping message...');
            const pingMsg = this.newPingMessage();
            try {
                this.write(pingMsg, timeout).catch((e) =>
                    console.error('[KeepAlive] Heartbeat ping error:', e),
                );
                console.debug('[KeepAlive] Ping sent');
            } catch (e) {
                console.error('[KeepAlive] Heartbeat ping error:', e);
                this.metric.pingErr++;
            }
            this.lastPingTime = currentTime;
        } else {
            console.debug('[KeepAlive] Skip - interval not reached');
        }
    }

    private reconnect(): void {
        const reconnectLoop = async () => {
            while (!this.reconnectClosed) {
                if (this.disconnected && !this.shutdown) {
                    console.log('Broken WebSocket connection, starting reconnection');
                    await this.close();
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
                            `Reconnecting in ${this.options.reconnectInterval} seconds... (attempt ${attempt})`,
                        );
                        await new Promise((resolve) =>
                            setTimeout(resolve, this.options.reconnectInterval * 1000),
                        );

                        try {
                            await this.dial();
                            this.notifyEvent(WebSocketEvent.EventConnected, '');
                            this.connected = true;
                            this.run();
                            reconnected = true;
                            this.reconnected = true;
                        } catch (err) {
                            console.error(`Reconnect attempt ${attempt} failed:`, err);
                            attempt++;
                        }
                    }

                    if (!reconnected) {
                        this.notifyEvent(WebSocketEvent.EventClientFail, '');
                        console.error('Failed to reconnect after all attempts.');
                    }
                }
                await new Promise((resolve) => setTimeout(resolve, 1000));
            }
        };

        reconnectLoop().catch((err) => {
            console.error('Error in reconnect loop:', err);
        });
    }

    // Clear all message queues and cleanup resources
    private clearMessageQueues(): void {
        // Clear read message queue
        while (this.readMsg.length > 0) {
            this.readMsg.dequeue();
        }

        // Clear write message queue and reject pending promises
        while (this.writeMsg.length > 0) {
            const writeMsg = this.writeMsg.dequeue();
            if (writeMsg) {
                writeMsg.setException(new Error('WebSocket connection closed'));
                writeMsg.complete();
            }
        }

        // Clear ack events
        this.ackEvents.forEach((writeMsg) => {
            writeMsg.setException(new Error('WebSocket connection closed'));
            writeMsg.complete();
        });
        this.ackEvents.clear();
    }

    // close the WebSocket connection and clean up resources
    close(): Promise<void> {
        return new Promise<void>((resolve) => {
            // Clear intervals
            if (this.keepAliveInterval) {
                clearInterval(this.keepAliveInterval);
                this.keepAliveInterval = null;
            }
            if (this.writeInterval) {
                clearInterval(this.writeInterval);
                this.writeInterval = null;
            }

            // Clear message queues
            this.clearMessageQueues();

            // Close WebSocket connection
            if (this.conn) {
                // Listen for close event before closing
                this.conn.once('close', () => {
                    this.conn = null;
                    this.connected = false;
                    this.closed = true;
                    resolve();
                });

                // Close the connection
                this.conn.close();
            } else {
                // If no connection exists, resolve immediately
                this.connected = false;
                this.closed = true;
                resolve();
            }
        });
    }

    private notifyEvent(event: WebSocketEvent, msg: string, msg2: string = ''): void {
        this.eventEmitter.emit(event, msg, msg2);
    }

    //
    private randomEndpoint(tokens: WsToken[]): WsToken {
        if (!tokens.length) {
            throw new Error('Tokens list is empty');
        }
        return tokens[Math.floor(Math.random() * tokens.length)];
    }

    //
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
}

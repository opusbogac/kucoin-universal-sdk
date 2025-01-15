import WebSocket from 'ws';
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
    private eventEmitter: EventEmitter;

    constructor(msg: WsMessage, timeout: number) {
        this.msg = msg;
        this.ts = Date.now();
        this.timeout = timeout;
        this.exception = null;
        this.eventEmitter = new EventEmitter();
    }

    // TODO:
    setException(exception: Error): void {
        this.exception = exception;
        this.eventEmitter.emit('complete');
    }

    // TODO:
    waitForCompletion(): Promise<void> {
        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                reject(new Error('Operation timed out'));
            }, this.timeout);

            this.eventEmitter.once('complete', () => {
                clearTimeout(timeout);
                if (this.exception) {
                    reject(this.exception);
                } else {
                    resolve();
                }
            });
        });
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
    async start(): Promise<void> {
        if (this.connected) {
            console.warn("WebSocket client is already connected.");
            return;
        }

        try {
            await this.dial();
            this.connected = true;
            this.notifyEvent(WebSocketEvent.EventConnected, "");
            this.run();
            this.reconnect();
        } catch (err) {
            console.error("Failed to start WebSocket client:", err);
            throw err;
        }
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
    async stop(): Promise<void> {
        this.notifyEvent(WebSocketEvent.EventClientShutdown, "");
        this.shutdown = true;
        await this.close();
    }

    // dial connects to the WebSocket server
    private async dial(): Promise<void> {
        try {
            // get token
            const tokenInfos = await this.tokenProvider.getToken();
            this.tokenInfo = this.randomEndpoint(tokenInfos);
            
            // create WebSocket connection
            const queryParams = new URLSearchParams({
                connectId: Date.now().toString(),
                token: this.tokenInfo.token
            });

            //  create WebSocket connection
            const wsUrl = `${this.tokenInfo.endpoint}?${queryParams.toString()}`;
            this.conn = new WebSocket(wsUrl);

            await new Promise<void>((resolve, reject) => {
                if (!this.conn) return reject(new Error('No connection'));

                this.conn.on('open', () => {
                    this.onOpen();
                    resolve();
                });

                this.conn.on('message', (data) => this.onMessage(data.toString()));
                this.conn.on('error', (error) => this.onError(error));
                this.conn.on('close', (code, reason) => this.onClose(code, reason.toString()));

                setTimeout(() => {
                    if (!this.welcomeReceived) {
                        reject(new Error("Did not receive welcome message"));
                    }
                }, 5000);
            });
        } catch (err) {
            this.connected = false;
            console.error("Failed to connect or validate welcome message:", err);
            throw err;
        }
    }

    // open callback
    private onOpen(): void {
        console.log("WebSocket connection opened.");
        this.notifyEvent(WebSocketEvent.EventConnected, "WebSocket connection opened.");
    }

    // error callback
    private onError(error: Error): void {
        console.error("WebSocket error:", error);
        this.disconnected = true;
    }

    // close callback
    private onClose(code: number, reason: string): void {
        this.connected = false;
        this.disconnected = true;
        console.log(`WebSocket closed with status code ${code}, message: ${reason}`);
    }

    // receive message callback
    private onMessage(message: string): void {
        console.debug("Received message:", message);
        const m = WsMessage.fromJson(message);

        switch (m.type) {
            case MessageType.WelcomeMessage:
                this.welcomeReceived = true;
                console.log("Welcome message received.");
                break;

            case MessageType.Message:
                this.notifyEvent(WebSocketEvent.EventMessageReceived, "");
                // queue message
                if (this.readMsg.length < this.readMsgMaxSize) {
                    this.readMsg.enqueue(m);
                } else {
                    this.notifyEvent(WebSocketEvent.EventReadBufferFull, "");
                    console.warn("Read buffer full");
                }
                break;

            case MessageType.PongMessage:
                this.notifyEvent(WebSocketEvent.EventPongReceived, "");
                console.debug("PONG received");
                this.handleAckEvent(m);
                break;

            case MessageType.AckMessage:
            case MessageType.ErrorMessage:
                this.handleAckEvent(m);
                break;

            default:
                console.warn("Unknown message type:", m.type);
        }
    }

    // TODO: 
    private handleAckEvent(m: WsMessage): void {
        const data = m.id ? this.ackEvents.get(m.id) : undefined;
        if (!data) {
            console.warn("Cannot find ack event, id:", m.id);
            return;
        }

        if (m.id) {
            this.ackEvents.delete(m.id);
        }
        if (m.type === MessageType.ErrorMessage) {
            const error = m.data;
            this.notifyEvent(WebSocketEvent.EventErrorReceived, error);
            data.setException(new Error(error));
        } else {
            data.complete();
        }
    }

    // read message
    read(): WsMessage[] {
        return this.readMsg.toArray();
    }

    // write message
    async write(ms: WsMessage, timeout: number): Promise<void> {
        console.log("Write message:", ms);
        if (!this.connected) {
            throw new Error("Not connected");
        }

        const msg = new WriteMsg(ms, timeout);
        if (ms.id) {
            this.ackEvents.set(ms.id, msg);
        } else {
            throw new Error("Message ID is undefined");
        }

        try {
            // write message to queue and check if it reaches the max size
            if (this.writeMsg.length < this.writeMsgMaxSize) {
                this.writeMsg.enqueue(msg);
            } else {
                throw new Error("Write buffer is full");
            }
            await msg.waitForCompletion();
        } catch (e) {
            this.ackEvents.delete(ms.id);
            throw e;
        }
    }

    // send message TODO:
    private writeMessage(): void {
        if (this.closed || !this.conn) return;

        const msg = this.writeMsg.dequeue();
        if (msg) {
            try {
                // Send the complete message as JSON string
                this.conn.send(JSON.stringify(msg.msg));
                console.debug("Message sent:", msg.msg);
                msg.ts = Date.now();
                msg.complete();
            } catch (e) {
                console.error("Failed to send message:", e);
                if (msg.msg.id) {
                    this.ackEvents.delete(msg.msg.id);
                }
                msg.setException(e as Error);
            }
        }
    }

    // keep-alive
    private async keepAlive(): Promise<void> {
        if (!this.tokenInfo || this.shutdown || this.closed) return;

        const interval = this.tokenInfo.pingInterval / 1000;
        const timeout = this.tokenInfo.pingTimeout / 1000;
        const currentTime = Date.now() / 1000;

        if (currentTime - (this.lastPingTime || 0) >= interval) {
            const pingMsg = this.newPingMessage();
            try {
                await this.write(pingMsg, timeout);
                this.metric.pingSuccess++;
            } catch (e) {
                console.error("Heartbeat ping error:", e);
                this.metric.pingErr++;
            }
            this.lastPingTime = currentTime;
        }
    }

    private reconnect(): void {
        const reconnectLoop = async () => {
            while (!this.reconnectClosed) {
                if (this.disconnected && !this.shutdown) {
                    console.log("Broken WebSocket connection, starting reconnection");
                    await this.close();
                    this.notifyEvent(WebSocketEvent.EventTryReconnect, "");
                    this.disconnected = false;

                    let attempt = 0;
                    let reconnected = false;

                    while (!reconnected && 
                           this.options.reconnect && 
                           (this.options.reconnectAttempts === -1 || attempt < this.options.reconnectAttempts)) {
                        console.log(`Reconnecting in ${this.options.reconnectInterval} seconds... (attempt ${attempt})`);
                        await new Promise(resolve => setTimeout(resolve, this.options.reconnectInterval * 1000));

                        try {
                            await this.dial();
                            this.notifyEvent(WebSocketEvent.EventConnected, "");
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
                        this.notifyEvent(WebSocketEvent.EventClientFail, "");
                        console.error("Failed to reconnect after all attempts.");
                    }
                }
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        };

        reconnectLoop().catch(err => {
            console.error("Error in reconnect loop:", err);
        });
    }

    // TODO:
    private clearMessageQueues(): void {
        // clear message queues
        while (this.readMsg.length > 0) {
            this.readMsg.dequeue();
        }

        while (this.writeMsg.length > 0) {
            this.writeMsg.dequeue();
        }
    }

    // close the WebSocket connection
    // TODO: need to confirm the logic of closing the connection, and release the resources that have been opened
    private async close(): Promise<void> {
        if (this.connected) {
            this.shutdown = true;
            this.disconnected = true;
            this.reconnectClosed = true;
            this.connected = false;

            this.ackEvents.forEach(msg => msg.complete());
            this.ackEvents.clear();
            this.clearMessageQueues();

            if (this.conn) {
                this.conn.close();
                this.conn = null;
                this.closed = true;
                console.log("WebSocket connection closed.");
            }

            if (this.keepAliveInterval) clearInterval(this.keepAliveInterval);
            if (this.writeInterval) clearInterval(this.writeInterval);


            console.log("Closing token provider...");
            this.tokenProvider.close();
            this.notifyEvent(WebSocketEvent.EventDisconnected, "");
            console.log("WebSocket client closed.");
        }
    }

    // TODO:
    private notifyEvent(event: WebSocketEvent, msg: string, msg2: string = ""): void {
        try {
            if (this.options.eventCallback) {
                this.options.eventCallback(event, msg);
            }
        } catch (e) {
            console.error("Exception in notify_event:", e);
        }
    }

    //  
    private randomEndpoint(tokens: WsToken[]): WsToken {
        if (!tokens.length) {
            throw new Error("Tokens list is empty");
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

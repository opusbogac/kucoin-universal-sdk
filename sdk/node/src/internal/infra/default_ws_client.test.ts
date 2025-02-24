import { WebSocket, WebSocketServer } from 'ws';
import { createServer, Server } from 'http';
import { DEFAULT_WEBSOCKET_CLIENT_OPTION, MessageType, WsMessage } from '@src/model';
import { randomUUID } from 'crypto';
import { WsToken, WsTokenProvider } from '@internal/interfaces/websocket';
import { WebSocketClient } from '@internal/infra/default_ws_client';

const DEFAULT_TOKEN_INFO: WsToken = {
    token: '',
    pingInterval: 1000,
    endpoint: '',
    protocol: '',
    encrypt: true,
    pingTimeout: 1000,
};

function createMessage(id: string, type: MessageType): WsMessage {
    let m = new WsMessage();
    m.id = id;
    m.type = type;
    return m;
}

function createWebSocketServer(handler: (ws: WebSocket) => void): Server {
    const server = createServer();
    const wss = new WebSocketServer({ server });
    wss.on('connection', handler);
    server.listen(0);
    return server;
}

function mockWebSocketHandler1(ws: WebSocket) {
    console.log('[server] New connection');

    ws.send(JSON.stringify(createMessage(randomUUID(), MessageType.WelcomeMessage)));

    ws.on('message', (message) => {
        const m: WsMessage = JSON.parse(message.toString());

        switch (m.type) {
            case MessageType.PingMessage:
                ws.send(JSON.stringify(createMessage(m.id, MessageType.PongMessage)));
                break;

            case MessageType.SubscribeMessage:
                console.log('[server] Received subscribe message');
                ws.send(JSON.stringify(createMessage(m.id, MessageType.AckMessage)));

                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        ws.send(JSON.stringify(createMessage(i.toString(), MessageType.Message)));
                    }
                }, 10);
                break;
        }
    });

    ws.on('close', () => {
        console.log('[server] Connection closed');
    });
}

export function mockWebSocketHandlerTimeout(ws: WebSocket) {
    ws.on('message', (message) => {});

    ws.on('close', () => {});
}

export function mockWebSocketHandler2(ws: WebSocket) {
    console.log('[server2] New connection');

    ws.send(JSON.stringify(createMessage(randomUUID(), MessageType.WelcomeMessage)));

    ws.on('message', (message) => {
        const m: WsMessage = JSON.parse(message.toString());

        switch (m.type) {
            case MessageType.PingMessage:
                ws.send(JSON.stringify(createMessage(m.id, MessageType.PongMessage)));
                break;

            case MessageType.SubscribeMessage:
                console.log('[server2] Received subscribe message');
                ws.close();
                break;
        }
    });

    ws.on('close', () => {
        console.log('[server2] Connection closed');
    });
}

class mockProvider implements WsTokenProvider {
    constructor(private wsToken: WsToken) {}

    getToken(): Promise<WsToken[]> {
        return Promise.resolve([this.wsToken]);
    }

    close(): Promise<void> {
        return Promise.resolve(undefined);
    }
}

function testByMockServer(handler: (ws: WebSocket) => void): Promise<number> {
    let server = createWebSocketServer(handler);
    return new Promise((resolve, reject) => {
        server.on('listening', () => {
            let port = 0;
            const address = server.address();
            if (typeof address === 'object' && address) {
                port = address.port;
            }
            resolve(port);
        });

        server.on('error', (err) => {
            reject(err);
        });
    });
}

describe('WS Transport Test', () => {
    test('test client connect error', () => {
        return testByMockServer(mockWebSocketHandler2)
            .then(() => {
                let option = DEFAULT_WEBSOCKET_CLIENT_OPTION;
                option.dialTimeout = 1000;

                let client = new WebSocketClient(
                    new mockProvider(DEFAULT_TOKEN_INFO),
                    DEFAULT_WEBSOCKET_CLIENT_OPTION,
                );
                client.on('event', function (event, mes) {
                    console.log('[client] Received event', event, mes);
                });

                return client.start();
            })
            .catch((err) => {
                expect(err).toBeDefined();
            });
    });

    test('test client connect/disconnect', () => {
        return testByMockServer(mockWebSocketHandlerTimeout).then((port) => {
            let option = DEFAULT_WEBSOCKET_CLIENT_OPTION;
            let token = DEFAULT_TOKEN_INFO;
            token.endpoint = `http://127.0.0.1:${port}`;
            let client = new WebSocketClient(
                new mockProvider(DEFAULT_TOKEN_INFO),
                DEFAULT_WEBSOCKET_CLIENT_OPTION,
            );
            client.on('event', function (event, mes) {
                console.log('[client] Received event', event, mes);
            });

            return client.start().then(() => {
                return client.stop();
            });
        });
    });

    test('test client timeout', () => {
        return testByMockServer(mockWebSocketHandlerTimeout).then((port) => {
            let option = DEFAULT_WEBSOCKET_CLIENT_OPTION;
            let token = DEFAULT_TOKEN_INFO;
            token.endpoint = `http://127.0.0.1:${port}`;
            let client = new WebSocketClient(
                new mockProvider(DEFAULT_TOKEN_INFO),
                DEFAULT_WEBSOCKET_CLIENT_OPTION,
            );
            client.on('event', function (event, mes) {
                console.log('[client] Received event', event, mes);
            });

            return client.start().then(() => {
                return client.stop();
            });
        });
    });
});

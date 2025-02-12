import { parentPort } from 'worker_threads';
import { WsMessage } from '@model/common';
import WebSocket from 'ws';

// Log worker initialization
console.log('[Worker] Initializing worker thread');

if (!parentPort) {
    console.error('[Worker] parentPort is null - worker must be run as a worker thread');
    process.exit(1);
}

let ws: WebSocket | null = null;

// Parse WebSocket message
function parseMessage(data: WebSocket.Data): any {
    try {
        const message = JSON.parse(data.toString());
        // Add topic field if not present
        if (!message.topic && message.type) {
            message.topic = message.type;
        }
        return message;
    } catch (error) {
        console.error('[Worker] Error parsing message:', error);
        return null;
    }
}

// Handle messages from the main thread
parentPort.on('message', (message: any) => {
    try {
        if (message.command === 'connect') {
            // Create WebSocket connection
            ws = new WebSocket(message.wsUrl);

            // Handle WebSocket events
            ws.on('open', () => {
                console.log('[Worker] WebSocket connection opened');
                parentPort!.postMessage({ type: 'open' });
            });

            ws.on('message', (data: WebSocket.Data) => {
                const parsedMessage = parseMessage(data);
                if (parsedMessage) {
                    console.log('[Worker] Received message:', parsedMessage);
                    parentPort!.postMessage({ 
                        type: 'message',
                        data: JSON.stringify(parsedMessage)
                    });
                }
            });

            ws.on('error', (error: Error) => {
                console.error('[Worker] WebSocket error:', error);
                parentPort!.postMessage({ 
                    type: 'error',
                    error: error.message
                });
            });

            ws.on('close', (code: number, reason: string) => {
                console.log('[Worker] WebSocket closed:', code, reason);
                parentPort!.postMessage({ 
                    type: 'close',
                    code,
                    reason
                });
            });
        } else if (message.command === 'send' && ws) {
            // Send message through WebSocket
            const data = message.data;
            if (typeof data === 'object') {
                ws.send(JSON.stringify(data));
            } else {
                ws.send(data);
            }
        } else if (message.command === 'close' && ws) {
            // Close WebSocket connection
            ws.close();
            ws = null;
        }
    } catch (error) {
        console.error('[Worker] Error handling message:', error);
        parentPort!.postMessage({ 
            type: 'error',
            error: error instanceof Error ? error.message : String(error)
        });
    }
});

// Handle errors
parentPort.on('error', (error) => {
    console.error('[Worker] Error event:', error);
});

// Handle close
parentPort.on('close', () => {
    console.log('[Worker] Close event: Worker is shutting down');
    if (ws) {
        ws.close();
        ws = null;
    }
});

// Keep the worker alive
process.on('exit', () => {
    console.log('[Worker] Process exit event received');
    if (ws) {
        ws.close();
        ws = null;
    }
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
    console.error('[Worker] Uncaught exception:', error);
    if (ws) {
        ws.close();
        ws = null;
    }
});

// Handle unhandled rejections
process.on('unhandledRejection', (reason) => {
    console.error('[Worker] Unhandled rejection:', reason);
});

// Log worker startup
console.log('[Worker] Started and ready to process messages at:', new Date().toISOString());

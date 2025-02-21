const { parentPort } = require('worker_threads');
const WebSocket = require('ws');
const { logger } = require('../../common/logger/logger');

// Log worker initialization
logger.info('[Worker] Initializing worker thread');

if (!parentPort) {
    logger.error('[Worker] parentPort is null - worker must be run as a worker thread');
    process.exit(1);
}

let ws = null;

// Parse WebSocket message
function parseMessage(data) {
    try {
        const message = JSON.parse(data.toString());
        // TODO remove
        // Add topic field if not present
        if (!message.topic && message.type) {
            message.topic = message.type;
        }
        return message;
    } catch (error) {
        // TODO notify user
        logger.error('[Worker] Error parsing message:', error);
        return null;
    }
}

// Handle messages from the main thread
parentPort.on('message', (message) => {
    try {
        if (message.command === 'connect') {
            // Create WebSocket connection
            ws = new WebSocket(message.wsUrl);

            // Handle WebSocket events
            ws.on('open', () => {
                logger.info('[Worker] WebSocket connection opened');
                parentPort.postMessage({ type: 'open' });
            });

            ws.on('message', (data) => {
                const parsedMessage = parseMessage(data);
                if (parsedMessage) {
                    parentPort.postMessage({
                        type: 'message',
                        // TODO fix
                        data: JSON.stringify(parsedMessage),
                    });
                }
            });

            ws.on('error', (error) => {
                logger.error('[Worker] WebSocket error:', error);
                parentPort.postMessage({
                    type: 'error',
                    error: error.message,
                });
            });

            ws.on('close', (code, reason) => {
                logger.info('[Worker] WebSocket closed:', code, reason);
                parentPort.postMessage({
                    type: 'close',
                    code,
                    reason,
                });
            });
        } else if (message.command === 'send' && ws) {
            // Send message through WebSocket
            const data = message.data;
            // TODO remove
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
        logger.error('[Worker] Error handling message:', error);
        parentPort.postMessage({
            type: 'error',
            error: error instanceof Error ? error.message : String(error),
        });
    }
});

// Handle close
parentPort.on('close', () => {
    logger.info('[Worker] Close event: Worker is shutting down');
    if (ws) {
        ws.close();
        ws = null;
    }
});

// Log worker startup
logger.info('[Worker] Started and ready to process messages at:', new Date().toISOString());

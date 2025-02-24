const { parentPort } = require('worker_threads');
const WebSocket = require('ws');
const { logger } = require('../../common/logger/logger');
const { EventType } = require('./message_data');

/**
 * @typedef {Object} Message
 * @property {string} type
 * @property {any} data
 * @property {Error} error
 */

logger.info('[Worker] Initializing worker thread');
if (!parentPort) {
    logger.error('[Worker] parentPort is null - worker must be run as a worker thread');
    process.exit(1);
}

let ws = null;

// Handle messages from the main thread
parentPort.on(
    'message',
    /** @param {Message} message */ (message) => {
        try {
            switch (message.type) {
                case EventType.INIT: {
                    ws = new WebSocket(message.data);

                    ws.on('open', () => {
                        logger.info('[Worker] WebSocket connection opened');
                        parentPort.postMessage({
                            type: EventType.INIT_RESULT,
                            data: null,
                            error: null,
                        });
                    });

                    ws.on('error', (err) => {
                        // TODO Test error
                        logger.error('[Worker] WebSocket connection error:', err);
                        parentPort.postMessage({
                            type: EventType.INIT_RESULT,
                            data: null,
                            error: err,
                        });
                    });

                    ws.on('message', (data) => {
                        parentPort.postMessage({
                            type: EventType.MESSAGE,
                            data: data,
                            error: null,
                        });
                    });

                    ws.on('close', (code, reason) => {
                        logger.info('[Worker] WebSocket closed:', code, reason);
                        parentPort.postMessage({
                            type: EventType.CLOSED,
                            data: { code: code, reason: reason },
                            error: code !== 1000 ? new Error(`WebSocket closed: ${reason}`) : null,
                        });
                        ws = null;
                    });
                    break;
                }
                case EventType.MESSAGE: {
                    if (!ws || ws.readyState !== WebSocket.OPEN) {
                        logger.error(`[Worker] websocket not initialized`);
                        parentPort.postMessage({
                            type: EventType.ERROR,
                            data: message.data,
                            error: new Error(`Websocket not initialized`),
                        });
                        return;
                    }

                    ws.send(JSON.stringify(message.data), (err) => {
                        // write fail, notify master
                        if (err) {
                            logger.error(`[Worker] Websocket write error:${err}]`);
                            parentPort.postMessage({
                                type: EventType.ERROR,
                                data: message.data,
                                error: err,
                            });
                        }
                    });
                    break;
                }
                case EventType.CLOSED: {
                    logger.info('[Worker] Close event: Worker is shutting down');
                    if (ws) {
                        ws.close();
                        ws = null;
                    }
                    break;
                }
                default: {
                    break;
                }
            }
        } catch (error) {
            logger.error('[Worker] Unexpected error:', error);
            parentPort.postMessage({
                type: message.type === EventType.INIT ? EventType.INIT_RESULT : EventType.ERROR,
                data: message.data,
                error: error,
            });
        }
    },
);
// Log worker startup
logger.info('[Worker] Started and ready to process messages at:', new Date().toISOString());

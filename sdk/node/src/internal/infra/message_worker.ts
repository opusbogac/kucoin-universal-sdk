import { parentPort } from 'worker_threads';
import { WsMessage } from '@model/common';
import { MessageType } from '@model/constant';

// Log worker initialization
console.log('[Worker] Initializing worker thread');

if (!parentPort) {
    console.error('[Worker] parentPort is null - worker must be run as a worker thread');
    process.exit(1);
}

// Handle messages from the main thread
parentPort.on('message', (message: WsMessage) => {
    console.log('[Worker] Received message:', {
        type: message.type,
        topic: message.topic,
        timestamp: new Date().toISOString()
    });

    try {
        // Process all message types
        switch (message.type) {
            case MessageType.Message:
                // Market data message
                console.log('[Worker] Processing market data message for topic:', message.topic);
                parentPort!.postMessage({
                    ...message,
                    processedAt: new Date().toISOString()
                });
                break;

            case MessageType.SubscribeMessage:
            case MessageType.UnsubscribeMessage:
                // Subscription related messages
                console.log(`[Worker] Processing ${message.type} message for topic:`, message.topic);
                parentPort!.postMessage(message);
                break;

            case MessageType.WelcomeMessage:
            case MessageType.PingMessage:
            case MessageType.PongMessage:
            case MessageType.AckMessage:
                // System messages
                console.log(`[Worker] Processing system message type:`, message.type);
                parentPort!.postMessage(message);
                break;

            case MessageType.ErrorMessage:
                // Error messages
                console.error('[Worker] Received error message:', message);
                parentPort!.postMessage(message);
                break;

            default:
                // Other message types
                console.log('[Worker] Processing unknown message type:', message.type);
                parentPort!.postMessage(message);
        }
        
        console.log('[Worker] Successfully processed message');
    } catch (error) {
        console.error('[Worker] Error processing message:', error);
    }
});

// Handle errors
parentPort.on('error', (error) => {
    console.error('[Worker] Error event:', error);
});

// Handle close
parentPort.on('close', () => {
    console.log('[Worker] Close event: Worker is shutting down');
});

// Keep the worker alive
process.on('exit', () => {
    console.log('[Worker] Process exit event received');
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
    console.error('[Worker] Uncaught exception:', error);
});

// Handle unhandled rejections
process.on('unhandledRejection', (reason) => {
    console.error('[Worker] Unhandled rejection:', reason);
});

// Log worker startup
console.log('[Worker] Started and ready to process messages at:', new Date().toISOString());

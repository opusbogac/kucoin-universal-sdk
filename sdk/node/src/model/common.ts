import { plainToInstance } from 'class-transformer';

/**
 * RestRateLimit represents the rate limiting information for a REST API.
 */
export interface RestRateLimit {
    /**
     * Total resource pool quota
     */
    limit: number;
    /**
     * Resource pool remaining quota
     */
    remaining: number;
    /**
     * Resource pool quota reset countdown (milliseconds)
     */
    reset: number;
}

/**
 * RestResponse represents a generic response from the REST API.
 */
export class RestResponse {
    /**
     * Optional rate limit information
     */
    rateLimit?: RestRateLimit;
    /**
     * Response code
     */
    code?: string;
    /**
     * Response data (typed)
     */
    data?: any;
    /**
     * Optional response message
     */
    message?: string;

    static fromJson(json: string): RestResponse {
        return plainToInstance(RestResponse, JSON.parse(json));
    }
}

/**
 * Function to check if a RestResponse indicates an error.
 */
export function checkRestResponseError(resp: RestResponse): Error | null {
    /**
     * Code for success
     */
    const CodeSuccess = '200000';
    if (resp.code === CodeSuccess) {
        return null;
    }
    return new Error(
        `Server returned error, code: {${resp.code}}, message: {${resp.message || 'unknown'}}`,
    );
}

/**
 * WsMessage represents a message between the WebSocket client and server.
 */
export class WsMessage {
    /**
     * A unique identifier for the message
     */
    id?: string;
    /**
     * The type of the message (e.g., WelcomeMessage)
     */
    type?: string;
    /**
     * Sequence number to track the order of messages
     */
    sn?: number;
    /**
     * The topic or channel the message is associated with
     */
    topic: string;
    /**
     * The subject of the message, providing additional context
     */
    subject: string;
    /**
     * Indicates if the message belongs to a private channel
     */
    privateChannel?: boolean;
    /**
     * Specifies whether the message is a response
     */
    response?: boolean;
    /**
     * Raw JSON payload containing additional message data
     */
    data: any;

    constructor() {
        this.topic = '';
        this.subject = '';
    }

    static fromJson(json: string): WsMessage {
        return plainToInstance(WsMessage, JSON.parse(json));
    }
}

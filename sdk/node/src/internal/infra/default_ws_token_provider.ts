import { DomainType } from '../../model/constant';
import { WsToken, WsTokenProvider } from '../interfaces/websocket';
import { DefaultTransport } from './default_transport';
import { RestResponse } from '../../model/common';

const PATH_PRIVATE = '/api/v1/bullet-private';
const PATH_PUBLIC = '/api/v1/bullet-public';

/**
 * TokenResponse interface defining the structure of the WebSocket token response
 */
interface TokenResponse {
    commonResponse?: RestResponse;
    token?: string;
    instanceServers?: WsToken[];
}

/**
 * Implementation of TokenResponse with validation and serialization methods
 */
export class TokenResponseImpl implements TokenResponse {
    commonResponse?: RestResponse;
    token?: string;
    instanceServers?: WsToken[];

    constructor(data?: Partial<TokenResponse>) {
        if (data) {
            this.commonResponse = data.commonResponse;
            this.token = data.token;
            this.instanceServers = data.instanceServers;
        }
    }

    /**
     * Sets the common response for the token response
     * @param response - RestResponse object to set
     */
    setCommonResponse(response: RestResponse): void {
        this.commonResponse = response;
    }

    /**
     * Creates a TokenResponse instance from a JSON string
     * @param jsonStr - JSON string to parse
     * @returns TokenResponseImpl instance or null if parsing fails
     */
    static fromJSON(jsonStr: string): TokenResponseImpl | null {
        try {
            return TokenResponseImpl.fromDict(JSON.parse(jsonStr));
        } catch {
            return null;
        }
    }

    /**
     * Creates a TokenResponse instance from a dictionary object
     * @param obj - Object to convert to TokenResponse
     * @returns TokenResponseImpl instance or null if conversion fails
     */
    static fromDict(obj: Record<string, any> | null): TokenResponseImpl | null {
        if (!obj) return null;

        return new TokenResponseImpl({
            token: obj.token,
            instanceServers: Array.isArray(obj.instanceServers)
                ? obj.instanceServers.map((item: any) => ({
                      token: item.token || '',
                      pingInterval: item.pingInterval || 0,
                      endpoint: item.endpoint || '',
                      protocol: item.protocol || '',
                      encrypt: item.encrypt || false,
                      pingTimeout: item.pingTimeout || 0,
                  }))
                : undefined,
        });
    }

    fromJson(input: string): TokenResponseImpl {
        const jsonObject = JSON.parse(input);
        return this.fromObject(jsonObject);
    }

    toJson(): string {
        return JSON.stringify({
            token: this.token,
            instanceServers: this.instanceServers,
        });
    }

    fromObject(jsonObject: Object): TokenResponseImpl {
        const data = jsonObject as Partial<TokenResponse>;
        return new TokenResponseImpl(data);
    }
}

/**
 * Default implementation of the WebSocket token provider
 * Handles token retrieval and management for WebSocket connections
 */
export class DefaultWsTokenProvider implements WsTokenProvider {
    private readonly transport: DefaultTransport;
    private readonly domain: DomainType;
    private readonly isPrivate: boolean;

    constructor(transport: DefaultTransport, domain: DomainType, isPrivate: boolean) {
        this.transport = transport;
        this.domain = domain;
        this.isPrivate = isPrivate;
    }

    /**
     * Retrieves WebSocket tokens from the server
     * @returns Promise resolving to array of WsToken objects
     * @throws Error if token retrieval fails
     */
    async getToken(): Promise<WsToken[]> {
        const path = this.isPrivate ? PATH_PRIVATE : PATH_PUBLIC;

        try {
            const response = new TokenResponseImpl();
            const result = (await this.transport.call(
                this.domain,
                false,
                'POST',
                path,
                null,
                response,
                false,
            )) as TokenResponseImpl;

            if (result.instanceServers && result.token) {
                // Assign token to each instance server
                const token: string = result.token;
                result.instanceServers.forEach((server) => {
                    server.token = token;
                });
                return result.instanceServers;
            }

            return [];
        } catch (error) {
            throw error;
        }
    }

    /**
     * Closes the token provider and its associated transport
     * @returns A promise that resolves when the transport is closed
     */
    async close(): Promise<void> {
        this.transport.close();
    }
}

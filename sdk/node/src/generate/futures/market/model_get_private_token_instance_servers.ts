// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Serializable } from '@internal/interfaces/serializable';

export class GetPrivateTokenInstanceServers
    implements Serializable<GetPrivateTokenInstanceServers>
{
    /**
     * Websocket domain URL, It is recommended to use a dynamic URL as the URL may change
     */
    endpoint?: string;
    /**
     * Whether to encrypt. Currently only supports wss, not ws
     */
    encrypt?: boolean;
    /**
     * Network Protocol
     */
    protocol?: GetPrivateTokenInstanceServers.ProtocolEnum;
    /**
     * Recommended ping interval(millisecond)
     */
    pingInterval?: number;
    /**
     * Heartbeat timeout(millisecond)
     */
    pingTimeout?: number;
    fromJson(input: string): GetPrivateTokenInstanceServers {
        const jsonObject = JSON.parse(input);
        return plainToInstance(GetPrivateTokenInstanceServers, jsonObject);
    }

    toJson(): string {
        return JSON.stringify(instanceToPlain(this));
    }

    fromObject(jsonObject: Object): GetPrivateTokenInstanceServers {
        return plainToInstance(GetPrivateTokenInstanceServers, jsonObject);
    }
}

export namespace GetPrivateTokenInstanceServers {
    export enum ProtocolEnum {
        /**
         * websocket
         */
        WEBSOCKET = <any>'websocket',
    }
}

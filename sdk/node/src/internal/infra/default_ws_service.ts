import { WebSocketMessageCallback, WebSocketService } from '@internal/interfaces/websocket';
import { ClientOption } from '@model/client_option';
import { DomainType } from '@model/constant';

export class DefaultWsService implements WebSocketService {
    private readonly option: ClientOption;
    private readonly domain: DomainType;
    private readonly privateChannel: boolean;
    private readonly versionString: string;

    constructor(
        option: ClientOption,
        domain: DomainType,
        privateChannel: boolean,
        versionString: string,
    ) {
        this.option = option;
        this.domain = domain;
        this.privateChannel = privateChannel;
        this.versionString = versionString;
    }

    start(): Promise<void> {
        return Promise.resolve(undefined);
    }

    stop(): Promise<void> {
        return Promise.resolve(undefined);
    }

    subscribe(topic: string, args: string[], callback: WebSocketMessageCallback): Promise<string> {
        return Promise.resolve('');
    }

    unsubscribe(id: string): Promise<void> {
        return Promise.resolve(undefined);
    }
}

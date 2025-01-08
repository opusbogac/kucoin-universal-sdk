import { Transport } from '@internal/interfaces/transport';
import { Serializable } from '@internal/interfaces/serializable';
import { Response } from '@internal/interfaces/response';
import { ClientOption } from '@model/client_option';

export class DefaultTransport implements Transport {

    private readonly option: ClientOption;
    private readonly version: String;

    constructor(option: ClientOption, version: String) {
        this.option = option;
        this.version = version;
    }

    call(
        domain: string,
        isBroker: boolean,
        method: string,
        path: string,
        requestObj: Serializable<any> | null,
        responseObj: Response<any, any>,
        requestJson: boolean,
        args?: any,
    ): Promise<Response<any, any>> {
        return Promise.resolve(undefined);
    }

    close(): Promise<void> {
        return Promise.resolve(undefined);
    }
}

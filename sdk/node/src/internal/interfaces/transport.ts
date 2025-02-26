import { Response, Serializable, StaticDeserializable } from '@internal/interfaces/serializable';
import { RestResponse } from '@src/model';

/**
 * Transport interface represents a generic transport layer.
 */
export interface Transport {
    /**
     * Makes a call to a remote service with the provided parameters.
     * @param domain The domain name of the remote service.
     * @param isBroker Indicates if the domain is a broker.
     * @param method HTTP method (GET, POST, etc.).
     * @param path The endpoint path for the request.
     * @param requestObj Request payload to be sent.
     * @param responseObj An instance of a Response subclass, to be filled with data from the remote call
     * @param requestJson Indicates if the request payload should be JSON-encoded.
     * @param args Additional arguments or options for the transport layer
     * @returns A Promise that resolves to a `Response` object containing the result of the remote
     * call, or rejects with an error if the all fails.
     */
    call<T extends Response<RestResponse>>(
        domain: string,
        isBroker: boolean,
        method: string,
        path: string,
        requestObj: Serializable | null,
        responseObj: StaticDeserializable<T>,
        requestJson: boolean,
        args?: any,
    ): Promise<any>;

    /**
     * Closes the transport and releases any resources.
     * @returns A Promise that resolves when the transport is closed.
     */
    close(): Promise<void>;
}

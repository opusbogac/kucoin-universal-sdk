import { RestResponse } from '@model/common';
import { Serializable } from '@internal/interfaces/serializable';

/**
 * Abstract class Response
 * Represents a response handler with a method to set common response data.
 */
export abstract class Response<T> extends Serializable<T> {
    /**
     * Set common response data.
     */
    abstract setCommonResponse(response: RestResponse): void;
}

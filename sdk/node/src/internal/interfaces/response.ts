import { Serializable } from '@internal/interfaces/serializable';

/**
 * Represents a response handler with a method to set common response data.
 */
export interface Response<T, R> extends Serializable<T> {
    /**
     * Set common response data.
     */
    setCommonResponse(response: R): void;
}

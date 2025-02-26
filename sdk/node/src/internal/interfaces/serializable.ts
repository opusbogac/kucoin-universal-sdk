/**
 * The interface for objects with static deserialization methods.
 */
export interface StaticDeserializable<T> {
    /**
     * Parses a JSON string and returns an instance of the object.
     */
    fromJson(input: string): T;

    /**
     * Populates an instance of the object based on a plain object.
     */
    fromObject(jsonObject: Object): T;
}

/**
 * The interface for serializable objects.
 */
export interface Serializable {
    /**
     * Converts the current object into a JSON string.
     */
    toJson(): string;
}

/**
 * Represents a response handler with a method to set common response data.
 */
export interface Response<R> extends Serializable {
    /**
     * Set common response data.
     */
    setCommonResponse(response: R): void;
}

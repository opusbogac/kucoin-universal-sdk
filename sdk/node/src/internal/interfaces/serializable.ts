/**
 * The interface for serializable objects.
 */
export interface Serializable<T> {
    /**
     * Parses a JSON string and populates the object's properties.
     */
    fromJson(input: string): T;

    /**
     * Converts the current object into a JSON string.
     */
    toJson(): string;

    /**
     * Populates the object's properties.
     */
    fromObject(jsonObject: Object): T;
}

/**
 * An abstract base class for serializable objects.
 */
export abstract class Serializable<T> {
    /**
     * Parses a JSON string and populates the object's properties.
     */
    abstract fromJson(input: string): T;

    /**
     * Converts the current object into a JSON string.
     */
    abstract toJson(): string;

    /**
     * Populates the object's properties.
     */
    abstract fromObject(jsonObject: Object): T;
}

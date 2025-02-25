function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export function withTimeout<T>(
    executor: (resolve: (value: T) => void, reject: (reason?: any) => void) => void,
    timeoutMs: number,
): Promise<T> {
    return new Promise<T>((outerResolve, outerReject) => {
        let handled = false;
        const timeout = setTimeout(() => {
            if (!handled) {
                handled = true;
                outerReject(new Error(`Timeout after ${timeoutMs}ms`));
            }
        }, timeoutMs);

        executor(
            (value) => {
                if (!handled) {
                    handled = true;
                    clearTimeout(timeout);
                    outerResolve(value);
                }
            },
            (error) => {
                if (!handled) {
                    handled = true;
                    clearTimeout(timeout);
                    outerReject(error);
                }
            },
        );
    });
}

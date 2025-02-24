import { logger } from '@src/common';

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export function retryPromise(fn: any, maxRetries: number, delay: number) {
    return new Promise((resolve, reject) => {
        function attempt(remaining: number) {
            fn()
                .then(resolve)
                .catch(async (err: any) => {
                    if (remaining <= 1) {
                        reject(err);
                    } else {
                        logger.warn(`Retrying... ${maxRetries - remaining + 1}/${maxRetries}`);
                        await sleep(delay);
                        attempt(remaining - 1);
                    }
                });
        }

        attempt(maxRetries);
    });
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

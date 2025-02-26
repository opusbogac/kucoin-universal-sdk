const LOG_LEVELS = ['debug', 'info', 'warn', 'error'];

let options = {
    level: 'info',
    format: (level, message) => {
        const time = new Date().toISOString();
        let metaStr = '';
        return `${time} [${level.toUpperCase()}] ${message} `;
    },
};

const logger = {
    log: (level, message, ...meta) => {
        if (shouldLog(level)) {
            console.log(options.format(level, message), ...meta);
        }
    },
    info: (message, ...meta) => logger.log('info', message, ...meta),
    warn: (message, ...meta) => logger.log('warn', message, ...meta),
    error: (message, ...meta) => logger.log('error', message, ...meta),
    debug: (message, ...meta) => logger.log('debug', message, ...meta),
    setGlobalLogger: (newLogger, newOptions) => {
        Object.assign(logger, newLogger);
        options = newOptions || options;
    },
};

function shouldLog(level) {
    const currentIndex = LOG_LEVELS.indexOf(options.level);
    const levelIndex = LOG_LEVELS.indexOf(level);
    return levelIndex >= currentIndex;
}

module.exports = { logger };

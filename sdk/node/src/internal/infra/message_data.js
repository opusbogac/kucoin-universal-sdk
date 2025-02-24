/**
 * @readonly
 * @enum {string}
 */
const EventType = Object.freeze({
    INIT: 'init',
    INIT_RESULT: 'init_result',
    MESSAGE: 'message',
    ERROR: 'error',
    CLOSED: 'close',
});
module.exports = { EventType };

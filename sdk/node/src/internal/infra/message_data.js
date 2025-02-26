/**
 * @readonly
 * @enum {string}
 */
const EventType = Object.freeze({
    INIT: 'init',
    MESSAGE: 'message',
    ERROR: 'error',
    CLOSED: 'close',
});
module.exports = { EventType };

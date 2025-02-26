import { EventEmitter } from 'events';

import {WebSocketMessageCallback} from '@internal/interfaces/websocket';
const EMPTY_ARGS_STR = "EMPTY_ARGS";

export class SubInfo {
    prefix: string;
    args: string[];
    callback: WebSocketMessageCallback | null;

    constructor(prefix: string, args: string[], callback: WebSocketMessageCallback | null) {
        this.prefix = prefix;
        this.args = args;
        this.callback = callback;
    }

    toId(): string {
        let argsStr: string;
        if (!this.args.length) {
            argsStr = EMPTY_ARGS_STR;
        } else {
            const sortedArgs = this.args.slice().sort();
            argsStr = sortedArgs.join(",");
        }
        return `${this.prefix}@@${argsStr}`;
    }

    static fromId(id: string, callback: WebSocketMessageCallback | null = null): SubInfo {
        const parts = id.split("@@");
        if (parts.length !== 2) {
            throw new Error(`SubInfo.fromId: invalid id format: ${id}`);
        }

        const prefix = parts[0];
        let args: string[];
        if (parts[1] === EMPTY_ARGS_STR) {
            args = [];
        } else {
            args = parts[1].split(",");
        }
        return new SubInfo(prefix, args, callback);
    }

    topics(): string[] {
        if (!this.args.length) {
            return [this.prefix];
        }
        return this.args.map(arg => `${this.prefix}:${arg}`);
    }

    subTopic(): string {
        if (!this.args.length) {
            return this.prefix;
        }
        return `${this.prefix}:${this.args.join(",")}`;
    }
}
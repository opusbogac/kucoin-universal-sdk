// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import {
    OrderbookLevel5EventCallbackWrapper,
    OrderbookLevel5EventCallback,
} from './model_orderbook_level5_event';
import { KlinesEventCallbackWrapper, KlinesEventCallback } from './model_klines_event';
import { TickerEventCallback, TickerEventCallbackWrapper } from './model_ticker_event';
import {
    SymbolSnapshotEventCallback,
    SymbolSnapshotEventCallbackWrapper,
} from './model_symbol_snapshot_event';
import {
    OrderbookLevel1EventCallbackWrapper,
    OrderbookLevel1EventCallback,
} from './model_orderbook_level1_event';
import { AllTickersEventCallback, AllTickersEventCallbackWrapper } from './model_all_tickers_event';
import {
    OrderbookIncrementEventCallback,
    OrderbookIncrementEventCallbackWrapper,
} from './model_orderbook_increment_event';
import { TradeEventCallbackWrapper, TradeEventCallback } from './model_trade_event';
import {
    OrderbookLevel50EventCallback,
    OrderbookLevel50EventCallbackWrapper,
} from './model_orderbook_level50_event';
import {
    MarketSnapshotEventCallback,
    MarketSnapshotEventCallbackWrapper,
} from './model_market_snapshot_event';
import { WebSocketService } from '@internal/interfaces/websocket';

export interface SpotPublicWS {
    /**
     * allTickers Get All Tickers
     * Subscribe to this topic to get the push of all market symbols BBO change.
     * push frequency: once every 100ms
     */
    allTickers(callback: AllTickersEventCallback): Promise<string>;

    /**
     * klines Klines
     * Subscribe to this topic to get K-Line data.
     * push frequency: real-time
     */
    klines(symbol: string, type: string, callback: KlinesEventCallback): Promise<string>;

    /**
     * marketSnapshot Market Snapshot
     * Subscribe this topic to get the snapshot data of for the entire market.
     * push frequency: once every 2s
     */
    marketSnapshot(market: string, callback: MarketSnapshotEventCallback): Promise<string>;

    /**
     * orderbookIncrement Orderbook - Increment
     * The system will return the increment change orderbook data(All depth), A topic supports up to 100 symbols. If there is no change in the market, data will not be pushed
     * push frequency: real-time
     */
    orderbookIncrement(
        symbol: Array<string>,
        callback: OrderbookIncrementEventCallback,
    ): Promise<string>;

    /**
     * orderbookLevel1 Orderbook - Level1
     * The system will return the 1 best ask/bid orders data, A topic supports up to 100 symbols. If there is no change in the market, data will not be pushed
     * push frequency: once every 10ms
     */
    orderbookLevel1(symbol: Array<string>, callback: OrderbookLevel1EventCallback): Promise<string>;

    /**
     * orderbookLevel50 Orderbook - Level50
     * The system will return the 50 best ask/bid orders data, A topic supports up to 100 symbols. If there is no change in the market, data will not be pushed
     * push frequency: once every 100ms
     */
    orderbookLevel50(
        symbol: Array<string>,
        callback: OrderbookLevel50EventCallback,
    ): Promise<string>;

    /**
     * orderbookLevel5 Orderbook - Level5
     * The system will return the 5 best ask/bid orders data,A topic supports up to 100 symbols. If there is no change in the market, data will not be pushed
     * push frequency: once every 100ms
     */
    orderbookLevel5(symbol: Array<string>, callback: OrderbookLevel5EventCallback): Promise<string>;

    /**
     * symbolSnapshot Symbol Snapshot
     * Subscribe to get snapshot data for a single symbol.
     * push frequency: once every 2s
     */
    symbolSnapshot(symbol: string, callback: SymbolSnapshotEventCallback): Promise<string>;

    /**
     * ticker Get Ticker
     * Subscribe to this topic to get the specified symbol push of BBO changes.
     * push frequency: once every 100ms
     */
    ticker(symbol: Array<string>, callback: TickerEventCallback): Promise<string>;

    /**
     * trade Trade
     * Subscribe to this topic to get the matching event data flow of Level 3. A topic supports up to 100 symbols.
     * push frequency: real-time
     */
    trade(symbol: Array<string>, callback: TradeEventCallback): Promise<string>;

    /**
     * Unsubscribe from topics
     */
    unSubscribe(id: string): Promise<void>;

    /**
     * Start websocket
     */
    start(): Promise<void>;

    /**
     * Stop websocket
     */
    stop(): Promise<void>;
}

export class SpotPublicWSImpl implements SpotPublicWS {
    private wsService: WebSocketService;

    constructor(wsService: WebSocketService) {
        this.wsService = wsService;
    }

    allTickers(callback: AllTickersEventCallback): Promise<string> {
        let topicPrefix = '/market/ticker:all';

        let args: string[] = [];

        return this.wsService.subscribe(
            topicPrefix,
            args,
            new AllTickersEventCallbackWrapper(callback),
        );
    }

    klines(symbol: string, type: string, callback: KlinesEventCallback): Promise<string> {
        let topicPrefix = '/market/candles';

        let args: string[] = [[symbol, type].join('_')];

        return this.wsService.subscribe(
            topicPrefix,
            args,
            new KlinesEventCallbackWrapper(callback),
        );
    }

    marketSnapshot(market: string, callback: MarketSnapshotEventCallback): Promise<string> {
        let topicPrefix = '/market/snapshot';

        let args: string[] = [market];

        return this.wsService.subscribe(
            topicPrefix,
            args,
            new MarketSnapshotEventCallbackWrapper(callback),
        );
    }

    orderbookIncrement(
        symbol: Array<string>,
        callback: OrderbookIncrementEventCallback,
    ): Promise<string> {
        let topicPrefix = '/market/level2';

        let args: string[] = symbol;

        return this.wsService.subscribe(
            topicPrefix,
            args,
            new OrderbookIncrementEventCallbackWrapper(callback),
        );
    }

    orderbookLevel1(
        symbol: Array<string>,
        callback: OrderbookLevel1EventCallback,
    ): Promise<string> {
        let topicPrefix = '/spotMarket/level1';

        let args: string[] = symbol;

        return this.wsService.subscribe(
            topicPrefix,
            args,
            new OrderbookLevel1EventCallbackWrapper(callback),
        );
    }

    orderbookLevel50(
        symbol: Array<string>,
        callback: OrderbookLevel50EventCallback,
    ): Promise<string> {
        let topicPrefix = '/market/level2';

        let args: string[] = symbol;

        return this.wsService.subscribe(
            topicPrefix,
            args,
            new OrderbookLevel50EventCallbackWrapper(callback),
        );
    }

    orderbookLevel5(
        symbol: Array<string>,
        callback: OrderbookLevel5EventCallback,
    ): Promise<string> {
        let topicPrefix = '/spotMarket/level2Depth5';

        let args: string[] = symbol;

        return this.wsService.subscribe(
            topicPrefix,
            args,
            new OrderbookLevel5EventCallbackWrapper(callback),
        );
    }

    symbolSnapshot(symbol: string, callback: SymbolSnapshotEventCallback): Promise<string> {
        let topicPrefix = '/market/snapshot';

        let args: string[] = [symbol];

        return this.wsService.subscribe(
            topicPrefix,
            args,
            new SymbolSnapshotEventCallbackWrapper(callback),
        );
    }

    ticker(symbol: Array<string>, callback: TickerEventCallback): Promise<string> {
        let topicPrefix = '/market/ticker';

        let args: string[] = symbol;

        return this.wsService.subscribe(
            topicPrefix,
            args,
            new TickerEventCallbackWrapper(callback),
        );
    }

    trade(symbol: Array<string>, callback: TradeEventCallback): Promise<string> {
        let topicPrefix = '/market/match';

        let args: string[] = symbol;

        return this.wsService.subscribe(topicPrefix, args, new TradeEventCallbackWrapper(callback));
    }

    unSubscribe(id: string): Promise<void> {
        return this.wsService.unsubscribe(id);
    }

    start(): Promise<void> {
        return this.wsService.start();
    }

    stop(): Promise<void> {
        return this.wsService.stop();
    }
}

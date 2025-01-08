// Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

import { Transport } from '@internal/interfaces/transport';

import { MarketAPIImpl, MarketAPI } from '@generate/spot/market/api_market';
import { OrderAPIImpl, OrderAPI } from '@generate/spot/order/api_order';

export interface SpotService {
    getOrderApi(): OrderAPI;

    getMarketApi(): MarketAPI;
}

export class SpotServiceImpl implements SpotService {
    private readonly transport: Transport;
    private readonly Order: OrderAPI;
    private readonly Market: MarketAPI;

    constructor(transport: Transport) {
        this.transport = transport;
        this.Order = new OrderAPIImpl(transport);
        this.Market = new MarketAPIImpl(transport);
    }

    getOrderApi(): OrderAPI {
        return this.Order;
    }

    getMarketApi(): MarketAPI {
        return this.Market;
    }
}

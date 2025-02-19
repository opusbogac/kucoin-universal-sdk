/**
 * DISCLAIMER:
 * This strategy is provided for educational and illustrative purposes only. It is not intended to be used as financial
 * or investment advice. Trading cryptocurrencies involves significant risk, and you should carefully consider your
 * investment objectives, level of experience, and risk appetite. Past performance of any trading strategy is not
 * indicative of future results.
 *
 * The authors and contributors of this example are not responsible for any financial losses or damages that may occur
 * from using this code. Use it at your own discretion and consult with a professional financial advisor if necessary.
 */

import {
    Account,
    ClientOptionBuilder,
    DefaultClient,
    GlobalApiEndpoint,
    GlobalBrokerApiEndpoint,
    GlobalFuturesApiEndpoint,
    Spot,
    TransportOptionBuilder,
} from 'kucoin-universal-sdk';

enum Action {
    BUY = "buy",
    SELL = "sell",
    SKIP = "skip"
}

async function simpleMovingAverageStrategy(api: Spot.MarketAPI, symbol: string, shortWindow: number, longWindow: number, endTime: number): Promise<Action> {
    const startTime = endTime - longWindow * 60;
    console.info(`Querying kline data: Start=${new Date(startTime * 1000)}, End=${new Date(endTime * 1000)}`);

    const getKlineReq = Spot.Market.GetKlinesReq.builder()
        .setSymbol(symbol)
        .setType(Spot.Market.GetKlinesReq.TypeEnum._1MIN)
        .setStartAt(startTime)
        .setEndAt(endTime)
        .build();

    const klineResp = await api.getKlines(getKlineReq);
    const prices = klineResp.data.map((data: any) => parseFloat(data[2]));

    const shortMa = prices.slice(-shortWindow).reduce((sum, price) => sum + price, 0) / shortWindow;
    const longMa = prices.slice(-longWindow).reduce((sum, price) => sum + price, 0) / longWindow;

    console.info(`Short MA: ${shortMa}, Long MA: ${longMa}`);

    if (shortMa > longMa) return Action.BUY;
    if (shortMa < longMa) return Action.SELL;
    return Action.SKIP;
}

async function getLastTradePrice(marketApi: Spot.MarketAPI, symbol: string): Promise<number> {
    const getStatReq = Spot.Market.Get24hrStatsReq.builder().setSymbol(symbol).build();
    const statResp = await marketApi.get24hrStats(getStatReq);
    return parseFloat(statResp.last);
}

async function checkAvailableBalance(accountApi: Account.AccountAPI, lastTradePrice: number, amount: number, action: Action): Promise<boolean> {
    const currency = action === Action.BUY ? "USDT" : "DOGE";
    console.info(`Checking balance for ${currency}`);

    const getAccountReq = Account.Account.GetSpotAccountListReq.builder()
        .setType(Account.Account.GetSpotAccountListReq.TypeEnum.TRADE)
        .setCurrency(currency)
        .build();

    const getAccountResp = await accountApi.getSpotAccountList(getAccountReq);
    const availableBalance = getAccountResp.data.reduce((sum: number, account: any) => sum + parseFloat(account.available), 0);
    console.info(`Available ${currency} balance: ${availableBalance}`);

    return action === Action.BUY ? lastTradePrice * amount <= availableBalance : amount <= availableBalance;
}

async function placeOrder(orderApi: Spot.OrderAPI, symbol: string, action: Action, lastTradePrice: number, amount: number, priceDelta: number) {
    const openOrderReq = Spot.Order.GetOpenOrdersReq.builder().setSymbol(symbol).build();
    const openOrderResp = await orderApi.getOpenOrders(openOrderReq);

    if (openOrderResp.data.length > 0) {
        console.info(`Found open orders for ${symbol}. Cancelling...`);
        const cancelAllReq = Spot.Order.CancelAllOrdersBySymbolReq.builder().setSymbol(symbol).build();
        await orderApi.cancelAllOrdersBySymbol(cancelAllReq);
    }

    const side = action === Action.BUY ? Spot.Order.AddOrderSyncReq.SideEnum.BUY : Spot.Order.AddOrderSyncReq.SideEnum.SELL;
    const price = lastTradePrice * (action === Action.BUY ? (1 - priceDelta) : (1 + priceDelta));

    console.info(`Placing ${side} order for ${symbol} at ${price}`);

    const addOrderReq = Spot.Order.AddOrderSyncReq.builder()
        .setClientOid(crypto.randomUUID())
        .setSide(side)
        .setSymbol(symbol)
        .setType(Spot.Order.AddOrderSyncReq.TypeEnum.LIMIT)
        .setRemark("ma")
        .setPrice(price.toFixed(2))
        .setSize(amount.toFixed(8))
        .build();

    await orderApi.addOrderSync(addOrderReq);
}

async function maExample() {
    // Retrieve API secret information from environment variables
    const key = process.env.API_KEY || '';
    const secret = process.env.API_SECRET || '';
    const passphrase = process.env.API_PASSPHRASE || '';

    // Set specific options, others will fall back to default values
    const httpTransportOption = new TransportOptionBuilder()
        .setKeepAlive(true)
        .setMaxConnsPerHost(10)
        .setMaxIdleConns(10)
        .build();

    // Create a client using the specified options
    const clientOption = new ClientOptionBuilder()
        .setKey(key)
        .setSecret(secret)
        .setPassphrase(passphrase)
        .setSpotEndpoint(GlobalApiEndpoint)
        .setFuturesEndpoint(GlobalFuturesApiEndpoint)
        .setBrokerEndpoint(GlobalBrokerApiEndpoint)
        .setTransportOption(httpTransportOption)
        .build();

    const client = new DefaultClient(clientOption);
    const marketApi = client.restService().getSpotService().getMarketApi();
    const accountApi = client.restService().getAccountService().getAccountApi();
    const orderApi = client.restService().getSpotService().getOrderApi();

    const SYMBOL = "DOGE-USDT";
    const ORDER_AMOUNT = 10;
    const PRICE_DELTA = 0.1;

    console.info("Starting the moving average strategy using K-line data. Press Ctrl+C to stop.");
    try {
        while (true) {
            const currentTime = Math.floor(Date.now() / 1000);
            const action = await simpleMovingAverageStrategy(marketApi, SYMBOL, 10, 30, currentTime);
            if (action !== Action.SKIP) {
                const lastPrice = await getLastTradePrice(marketApi, SYMBOL);
                console.info(`Last trade price for ${SYMBOL}: ${lastPrice}`);
                const sufficientBalance = await checkAvailableBalance(accountApi, lastPrice, ORDER_AMOUNT, action);
                if (sufficientBalance) {
                    console.info("Sufficient balance available. Attempting to place the order...");
                    await placeOrder(orderApi, SYMBOL, action, lastPrice, ORDER_AMOUNT, PRICE_DELTA);
                } else {
                    console.info("Insufficient balance. Skipping the trade...");
                }
            }
            console.info("Waiting for 1 minute before the next run...");
            await new Promise(resolve => setTimeout(resolve, 60000));
        }
    } catch (err) {
        console.error("Strategy stopped due to error:", err);
    }
}

maExample()
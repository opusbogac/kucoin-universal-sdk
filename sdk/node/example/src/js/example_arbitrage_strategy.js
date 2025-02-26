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
const {
    Account,
    Futures,
    Margin,
    Spot,
    ClientOptionBuilder,
    DefaultClient,
    GlobalApiEndpoint,
    GlobalBrokerApiEndpoint,
    GlobalFuturesApiEndpoint,
    TransportOptionBuilder,
} = require('kucoin-universal-sdk');

const crypto = require("crypto");

/** @typedef {import('kucoin-universal-sdk').AccountService} AccountService */
/** @typedef {import('kucoin-universal-sdk').SpotService} SpotService */
/** @typedef {import('kucoin-universal-sdk').FuturesService} FuturesService */
/** @typedef {import('kucoin-universal-sdk').MarginService} MarginService */

const SPOT_SYMBOL = "DOGE-USDT";
const FUTURES_SYMBOL = "DOGEUSDTM";
const BASE_CURRENCY = "USDT";
const MAX_PLACE_ORDER_WAIT_TIME_SEC = 15;

const MarketSide = {
    BUY: "buy",
    SELL: "sell"
};

const MarketType = {
    SPOT: "SPOT",
    MARGIN: "MARGIN",
    FUTURES: "FUTURES"
};

/**
 * @param {AccountService} accountService
 */
async function checkAvailableBalance(accountService, price, amount, marketType) {
    /**
     * Checks if the available balance is sufficient for the trade.
     */
    const tradeValue = price * amount;

    if (marketType === MarketType.SPOT) {
        const getSpotAccountResp = await accountService.getAccountApi().getSpotAccountList(
            Account.Account.GetSpotAccountListReq.builder()
                .setType(Account.Account.GetSpotAccountListReq.TypeEnum.TRADE)
                .setCurrency(BASE_CURRENCY)
                .build()
        );
        const spotAvailableBalance = getSpotAccountResp.data.reduce((sum, accountData) => sum + parseFloat(accountData.available), 0);
        console.info(`[SPOT] Available ${BASE_CURRENCY} balance: ${spotAvailableBalance.toFixed(2)}, Required: ${tradeValue.toFixed(2)}`);
        return spotAvailableBalance >= tradeValue;
    } else if (marketType === MarketType.FUTURES) {
        const futuresAvailableBalance = (await accountService.getAccountApi().getFuturesAccount(
            Account.Account.GetFuturesAccountReq.builder()
                .setCurrency(BASE_CURRENCY)
                .build()
        )).availableBalance;
        console.info(`[FUTURES] Available ${BASE_CURRENCY} balance: ${futuresAvailableBalance.toFixed(2)}, Required: ${tradeValue.toFixed(2)}`);
        return futuresAvailableBalance >= tradeValue;
    } else {
        const marginAvailableBalance = parseFloat((await accountService.getAccountApi().getCrossMarginAccount(
            Account.Account.GetCrossMarginAccountReq.builder()
                .setQueryType(Account.Account.GetCrossMarginAccountReq.QueryTypeEnum.MARGIN)
                .setQuoteCurrency(Account.Account.GetCrossMarginAccountReq.QuoteCurrencyEnum.USDT)
                .build()
        )).totalAssetOfQuoteCurrency);
        console.info(`[MARGIN] Available ${BASE_CURRENCY} balance: ${marginAvailableBalance.toFixed(2)}, Required: ${tradeValue.toFixed(2)}`);
        return marginAvailableBalance >= tradeValue;
    }
}

/**
 * @param {SpotService} spotService
 * @param {FuturesService} futuresService
 */
async function getLastTradedPrice(spotService, futuresService) {
    /**
     * Fetches the last traded price for the specified spot and futures symbols.
     */
    const spotPrice = parseFloat(
        (await spotService.getMarketApi().getTicker(Spot.Market.GetTickerReq.builder().setSymbol(SPOT_SYMBOL).build())).price
    );

    const futuresPrice =
        (await futuresService.getMarketApi().getSymbol(Spot.Market.GetSymbolReq.builder().setSymbol(FUTURES_SYMBOL).build()))
            .lastTradePrice;

    console.info(`[PRICE] Spot Price: ${spotPrice.toFixed(5)}, Futures Price: ${futuresPrice.toFixed(5)}`);

    return [spotPrice, futuresPrice];
}

/**
 * @param {SpotService} spotService
 * @param {FuturesService} futuresService
 * @param {MarginService} marginService
 * @param {AccountService} accountService
 */
async function fundingRateArbitrageStrategy(
    futuresService,
    spotService,
    marginService,
    accountService,
    amount,
    threshold
) {
    /**
     * Funding Rate Arbitrage Strategy.
     */
    try {
        // Step 1: Fetch funding rate
        const fundingRateReq = Futures.FundingFees.GetCurrentFundingRateReq.builder().setSymbol(FUTURES_SYMBOL).build();
        const fundingRate =
            (await futuresService.getFundingFeesApi().getCurrentFundingRate(fundingRateReq)).value * 100;
        console.info(`[STRATEGY] Funding rate for ${FUTURES_SYMBOL}: ${fundingRate.toFixed(6)}%`);

        // Step 2: Check if funding rate meets the threshold for arbitrage
        if (Math.abs(fundingRate) < threshold) {
            console.info(
                `[STRATEGY] No arbitrage opportunity: Funding rate (${fundingRate.toFixed(
                    6
                )}%) below threshold (${threshold}).`
            );
            return;
        }

        // Step 3: Fetch the latest spot and futures prices
        const [spotPrice, futuresPrice] = await getLastTradedPrice(spotService, futuresService);

        // Calculate futures order amount in contracts
        const futuresMultiplier =
            (await futuresService.getMarketApi().getSymbol(Futures.Market.GetSymbolReq.builder().setSymbol(FUTURES_SYMBOL).build()))
                .multiplier;
        const futuresAmount = Math.ceil(amount / futuresMultiplier);

        // Step 4: Execute arbitrage based on funding rate direction
        if (fundingRate > 0) {
            console.info("[STRATEGY] Positive funding rate detected. Executing LONG spot and SHORT futures arbitrage.");

            // Ensure sufficient balance for the spot and futures accounts
            if (!(await checkAvailableBalance(accountService, spotPrice, amount, MarketType.SPOT))) {
                console.warn("[STRATEGY] Insufficient balance in spot account.");
                return;
            }
            if (!(await checkAvailableBalance(accountService, futuresPrice, amount, MarketType.FUTURES))) {
                console.warn("[STRATEGY] Insufficient balance in futures account.");
                return;
            }

            // Execute orders
            if (!(await addSpotOrderWaitFill(spotService, SPOT_SYMBOL, MarketSide.BUY, amount, spotPrice))) {
                console.warn("[STRATEGY] Failed to execute spot order.");
                return;
            }
            if (!(await addFuturesOrderWaitFill(futuresService, FUTURES_SYMBOL, MarketSide.SELL, futuresAmount, futuresPrice))) {
                console.warn("[STRATEGY] Failed to execute futures order.");
                return;
            }
        } else {
            console.info(
                "[STRATEGY] Negative funding rate detected. Executing SHORT margin and LONG futures arbitrage."
            );

            // Ensure sufficient balance for the margin and futures accounts
            if (!(await checkAvailableBalance(accountService, spotPrice, amount, MarketType.MARGIN))) {
                console.warn("[STRATEGY] Insufficient balance in margin account.");
                return;
            }
            if (!(await checkAvailableBalance(accountService, futuresPrice, amount, MarketType.FUTURES))) {
                console.warn("[STRATEGY] Insufficient balance in futures account.");
                return;
            }

            // Execute orders
            if (!(await addMarginOrderWaitFill(marginService, SPOT_SYMBOL, amount, spotPrice))) {
                console.warn("[STRATEGY] Failed to execute margin order.");
                return;
            }
            if (!(await addFuturesOrderWaitFill(futuresService, FUTURES_SYMBOL, MarketSide.BUY, futuresAmount, futuresPrice))) {
                console.warn("[STRATEGY] Failed to execute futures order.");
                return;
            }
        }

        console.info("[STRATEGY] Arbitrage execution completed successfully.");
    } catch (error) {
        console.error(`[STRATEGY] Error executing arbitrage strategy: ${error}`);
    }
}

/**
 * @param {SpotService} spotService
 */
async function addSpotOrderWaitFill(spotService, symbol, side, amount, price) {
    /**
     * Places a spot order and waits for it to be filled
     * within a specified timeout.
     */
    const addOrderSyncReq = Spot.Order.AddOrderSyncReq.builder()
        .setClientOid(crypto.randomUUID())
        .setSide(side === MarketSide.BUY ? Spot.Order.AddOrderSyncReq.SideEnum.BUY : Spot.Order.AddOrderSyncReq.SideEnum.SELL)
        .setSymbol(symbol)
        .setType(Spot.Order.AddOrderSyncReq.TypeEnum.LIMIT)
        .setRemark("arbitrage")
        .setPrice(price.toFixed(4))
        .setSize(amount.toFixed(4))
        .build();

    const order = await spotService.getOrderApi().addOrderSync(addOrderSyncReq);
    console.info(
        `[SPOT ORDER] Placed ${side.toUpperCase()} order for ${amount} ${symbol} at ${price.toFixed(6)}. Order ID: ${order.orderId}`
    );

    const deadline = Date.now() + MAX_PLACE_ORDER_WAIT_TIME_SEC * 1000;
    while (Date.now() < deadline) {
        const orderDetail = await spotService
            .getOrderApi()
            .getOrderByOrderId(Spot.Order.GetOrderByOrderIdReq.builder().setSymbol(symbol).setOrderId(order.orderId).build());

        if (!orderDetail.active) {
            console.info(
                `[SPOT ORDER] Order filled successfully: ${side.toUpperCase()} ${amount} ${symbol}. Order ID: ${order.orderId}`
            );
            return true;
        }

        console.info("[SPOT ORDER] Checking order status in 1 second...");
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    console.warn(
        `[SPOT ORDER] Order not filled within ${MAX_PLACE_ORDER_WAIT_TIME_SEC} seconds. Cancelling order...`
    );

    const cancelResp = await spotService
        .getOrderApi()
        .cancelOrderByOrderIdSync(Spot.Order.CancelOrderByOrderIdSyncReq.builder().setOrderId(order.orderId).setSymbol(symbol).build());

    if (cancelResp.status !== Spot.Order.CancelOrderByOrderIdSyncResp.StatusEnum.DONE) {
        throw new Error(`[SPOT ORDER] Failed to cancel order. Order ID: ${order.orderId}`);
    }

    console.info(`[SPOT ORDER] Order cancelled successfully. Order ID: ${order.orderId}`);
    return false;
}

/**
 * @param {FuturesService} futuresService
 */
async function addFuturesOrderWaitFill(futuresService, symbol, side, amount, price) {
    /**
     * Places a futures order and waits for it to be filled within a specified timeout.
     */
    const addOrderReq = Futures.Order.AddOrderReq.builder()
        .setClientOid(crypto.randomUUID())
        .setSide(side === MarketSide.BUY ? Futures.Order.AddOrderReq.SideEnum.BUY : Futures.Order.AddOrderReq.SideEnum.SELL)
        .setSymbol(symbol)
        .setType(Futures.Order.AddOrderReq.TypeEnum.LIMIT)
        .setRemark("arbitrage")
        .setPrice(price.toFixed(4))
        .setLeverage(1)
        .setSize(amount)
        .build();

    const order = await futuresService.getOrderApi().addOrder(addOrderReq);
    console.info(
        `[FUTURES ORDER] Placed ${side.toUpperCase()} order for ${amount} ${symbol} at ${price.toFixed(6)}. Order ID: ${order.orderId}`
    );

    const deadline = Date.now() + MAX_PLACE_ORDER_WAIT_TIME_SEC * 1000;
    while (Date.now() < deadline) {
        console.info("[FUTURES ORDER] Checking order status in 1 second...");
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const orderDetail = await futuresService
            .getOrderApi()
            .getOrderByOrderId(Futures.Order.GetOrderByOrderIdReq.builder().setOrderId(order.orderId).build());

        if (orderDetail.status === Futures.Order.GetOrderByOrderIdResp.StatusEnum.DONE) {
            console.info(
                `[FUTURES ORDER] Order filled successfully: ${side.toUpperCase()} ${amount} ${symbol}. Order ID: ${order.orderId}`
            );
            return true;
        }
    }

    console.warn(
        `[FUTURES ORDER] Order not filled within ${MAX_PLACE_ORDER_WAIT_TIME_SEC} seconds. Cancelling order...`
    );

    const cancelResp = await futuresService
        .getOrderApi()
        .cancelOrderById(Futures.Order.CancelOrderByIdReq.builder().setOrderId(order.orderId).build());

    if (!cancelResp.cancelledOrderIds.includes(order.orderId)) {
        throw new Error(`[FUTURES ORDER] Failed to cancel order. Order ID: ${order.orderId}`);
    }

    console.info(`[FUTURES ORDER] Order cancelled successfully. Order ID: ${order.orderId}`);
    return false;
}

/**
 * @param {MarginService} marginService
 */
async function addMarginOrderWaitFill(marginService, symbol, amount, price) {
    /**
     * Places a margin order and waits for it to be filled within a specified timeout.
     */
    const addOrderReq = Margin.Order.AddOrderReq.builder()
        .setClientOid(crypto.randomUUID())
        .setSide(Margin.Order.AddOrderReq.SideEnum.BUY)
        .setSymbol(symbol)
        .setType(Margin.Order.AddOrderReq.TypeEnum.LIMIT)
        .setIsIsolated(false)
        .setAutoBorrow(true)
        .setAutoRepay(true)
        .setPrice(price.toFixed(4))
        .setSize(amount.toFixed(4))
        .build();

    const order = await marginService.getOrderApi().addOrder(addOrderReq);
    console.info(
        `[MARGIN ORDER] Placed SELL order for ${amount} ${symbol} at ${price.toFixed(6)}. Order ID: ${order.orderId}`
    );

    const deadline = Date.now() + MAX_PLACE_ORDER_WAIT_TIME_SEC * 1000;
    while (Date.now() < deadline) {
        console.info("[MARGIN ORDER] Checking order status in 1 second...");
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const orderDetail = await marginService
            .getOrderApi()
            .getOrderByOrderId(Margin.Order.GetOrderByOrderIdReq.builder().setSymbol(symbol).setOrderId(order.orderId).build());

        if (!orderDetail.active) {
            console.info(
                `[MARGIN ORDER] Order filled successfully: SELL ${amount} ${symbol}. Order ID: ${order.orderId}`
            );
            return true;
        }
    }

    console.warn(
        `[MARGIN ORDER] Order not filled within ${MAX_PLACE_ORDER_WAIT_TIME_SEC} seconds. Cancelling order...`
    );

    const cancelResp = await marginService
        .getOrderApi()
        .cancelOrderByOrderId(Margin.Order.CancelOrderByOrderIdReq.builder().setOrderId(order.orderId).setSymbol(symbol).build());

    if (!cancelResp.orderId) {
        throw new Error(`[MARGIN ORDER] Failed to cancel order. Order ID: ${order.orderId}`);
    }

    console.info(`[MARGIN ORDER] Order cancelled successfully. Order ID: ${order.orderId}`);
    return false;
}

async function main() {
    /**
     * Main function to run the funding rate arbitrage strategy for a specific duration.
     */
    console.info("Initializing APIs...");

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
    const kucoinRestService = client.restService();

    const futuresService = kucoinRestService.getFuturesService();
    const spotService = kucoinRestService.getSpotService();
    const marginService = kucoinRestService.getMarginService();
    const accountService = kucoinRestService.getAccountService();

    const amount = 100; // Amount to trade
    const threshold = 0.005; // Minimum profit threshold

    console.info("Starting funding rate arbitrage strategy...");
    await fundingRateArbitrageStrategy(futuresService, spotService, marginService, accountService, amount, threshold);
}

main().catch((error) => {
    console.error("Error running arbitrage strategy:", error);
});

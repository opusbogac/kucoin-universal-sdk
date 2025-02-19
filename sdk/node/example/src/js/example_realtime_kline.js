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
    ClientOptionBuilder,
    DefaultClient,
    GlobalApiEndpoint,
    GlobalBrokerApiEndpoint,
    GlobalFuturesApiEndpoint,
    WebSocketClientOptionBuilder,
} = require("kucoin-universal-sdk");

const klineData = {};

const timeInterval = 60;

function onTradeData(topic, subject, tradeEvent) {
    const symbol = tradeEvent.symbol;
    const price = parseFloat(tradeEvent.price);
    const size = parseFloat(tradeEvent.size);
    const timestamp = Math.floor(Number(tradeEvent.time) / 1_000_000_000);

    const periodStart = Math.floor(timestamp / timeInterval) * timeInterval;
    const periodEnd = periodStart + timeInterval;

    if (!klineData[periodStart]) {
        klineData[periodStart] = {};
    }

    if (!klineData[periodStart][symbol]) {
        klineData[periodStart][symbol] = {
            open: price,
            high: price,
            low: price,
            close: price,
            volume: size,
            startTime: periodStart,
            endTime: periodEnd,
        };
    } else {
        const kline = klineData[periodStart][symbol];
        kline.high = Math.max(kline.high, price);
        kline.low = Math.min(kline.low, price);
        kline.close = price;
        kline.volume += size;
    }

    console.info(
        `KLine for ${symbol} @ ${new Date(periodStart * 1000).toISOString()}:`,
        klineData[periodStart][symbol]
    );
}

function printKlineData() {
    const sortedKeys = Object.keys(klineData)
        .map(Number)
        .sort((a, b) => a - b);

    for (const periodStart of sortedKeys) {
        console.info(`\nTime Period: ${new Date(periodStart * 1000).toISOString()}`);
        for (const symbol in klineData[periodStart]) {
            const kline = klineData[periodStart][symbol];
            console.info(`  Symbol: ${symbol}`);
            console.info(`    Open: ${kline.open}`);
            console.info(`    High: ${kline.high}`);
            console.info(`    Low: ${kline.low}`);
            console.info(`    Close: ${kline.close}`);
            console.info(`    Volume: ${kline.volume}`);
            console.info(`    Start Time: ${new Date(kline.startTime * 1000).toISOString()}`);
            console.info(`    End Time: ${new Date(kline.endTime * 1000).toISOString()}`);
        }
    }
}

async function main() {
    console.info("Initializing WebSocket connection...");

    // Retrieve API secret information from environment variables
    const key = process.env.API_KEY || "";
    const secret = process.env.API_SECRET || "";
    const passphrase = process.env.API_PASSPHRASE || "";

    // Set specific options, others will fall back to default values
    const wsClientOption = new WebSocketClientOptionBuilder().build();

    // Create a client using the specified options
    const clientOption = new ClientOptionBuilder()
        .setKey(key)
        .setSecret(secret)
        .setPassphrase(passphrase)
        .setSpotEndpoint(GlobalApiEndpoint)
        .setFuturesEndpoint(GlobalFuturesApiEndpoint)
        .setBrokerEndpoint(GlobalBrokerApiEndpoint)
        .setWebSocketClientOption(wsClientOption)
        .build();

    const client = new DefaultClient(clientOption);

    const spotPublic = client.wsService().newSpotPublicWS();
    await spotPublic.start();

    // Subscribe to trade data
    const subId = spotPublic.trade(["BTC-USDT", "ETH-USDT"], onTradeData);

    // Keep the connection open for 180 seconds
    await new Promise((resolve) => setTimeout(resolve, 180_000));

    // Unsubscribe and stop WebSocket connection
    await spotPublic.unSubscribe(await subId);
    await spotPublic.stop();

    // Print collected K-Line data
    printKlineData();
}

main().catch((error) => {
    console.error("Error running WebSocket client:", error);
});

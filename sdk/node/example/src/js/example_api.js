const {
    Account,
    ClientOptionBuilder,
    DefaultClient,
    Futures,
    GlobalApiEndpoint,
    GlobalBrokerApiEndpoint,
    GlobalFuturesApiEndpoint,
    Spot,
    TransportOptionBuilder,
} = require('kucoin-universal-sdk');

const { randomUUID } = require('crypto');

async function restExample() {
    console.log('Starting REST example');

    // Retrieve API secret information from environment variables
    const key = process.env.API_KEY || '';
    const secret = process.env.API_SECRET || '';
    const passphrase = process.env.API_PASSPHRASE || '';

    // Optional: Retrieve broker secret information from environment variables
    const brokerName = process.env.BROKER_NAME || '';
    const brokerKey = process.env.BROKER_KEY || '';
    const brokerPartner = process.env.BROKER_PARTNER || '';

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
        .setBrokerName(brokerName)
        .setBrokerKey(brokerKey)
        .setBrokerPartner(brokerPartner)
        .setSpotEndpoint(GlobalApiEndpoint)
        .setFuturesEndpoint(GlobalFuturesApiEndpoint)
        .setBrokerEndpoint(GlobalBrokerApiEndpoint)
        .setTransportOption(httpTransportOption)
        .build();

    const client = new DefaultClient(clientOption);

    // Get the Restful Service
    const kucoinRestService = client.restService();

    await accountServiceExample(kucoinRestService.getAccountService());
    await spotServiceExample(kucoinRestService.getSpotService());
    await futuresServiceExample(kucoinRestService.getFuturesService());
}

async function accountServiceExample(accountService) {
    // Get account api
    const accountApi = accountService.getAccountApi();
    // Get summary information
    const accountInfoResp = accountApi.getAccountInfo().then((info) => {
        console.log(`Account info: level: ${info.level}, SubAccountSize: ${info.subQuantity}`);
    });

    // Get fee api
    const feeApi = accountService.getFeeApi();
    const getActualFeeReq = Account.GetSpotActualFeeReq.builder()
        .setSymbols('BTC-USDT,ETH-USDT')
        .build();

    const getActualFeeResp = feeApi.getSpotActualFee(getActualFeeReq).then((resp) => {
        if (resp.data) {
            resp.data.forEach((feeData) => {
                console.log(
                    `Fee info: symbol: ${feeData.symbol}, TakerFee: ${feeData.takerFeeRate}, MakerFee: ${feeData.makerFeeRate}`,
                );
            });
        }
    });

    await Promise.all([accountInfoResp, getActualFeeResp]).catch((err) => {
        console.error('Account API error:', err);
    });
}

async function spotServiceExample(spotService) {
    const orderApi = spotService.getOrderApi();

    // Add limit order
    const addOrderReq = Spot.AddOrderSyncReq.builder()
        .setClientOid(randomUUID().toString())
        .setSide(Spot.AddOrderSyncReq.SideEnum.BUY)
        .setSymbol('BTC-USDT')
        .setType(Spot.AddOrderSyncReq.TypeEnum.LIMIT)
        .setRemark('sdk_example')
        .setPrice('10000')
        .setSize('0.001')
        .build();

    const addOrderResp = await orderApi.addOrderSync(addOrderReq);
    console.log(`Add order success, id: ${addOrderResp.orderId}, oid: ${addOrderResp.clientOid}`);

    // Query order detail
    const orderId = addOrderResp.orderId;
    const queryOrderDetailReq = Spot.GetOrderByOrderIdReq.builder()
        .setOrderId(orderId)
        .setSymbol('BTC-USDT')
        .build();
    const orderDetailResp = await orderApi.getOrderByOrderId(queryOrderDetailReq);
    console.log(`Order detail: ${JSON.stringify(orderDetailResp)}`);

    // Cancel order
    const cancelOrderReq = Spot.CancelOrderByOrderIdSyncReq.builder()
        .setOrderId(orderId)
        .setSymbol('BTC-USDT')
        .build();
    const cancelOrderResp = await orderApi.cancelOrderByOrderIdSync(cancelOrderReq);
    console.log(`Cancel order success, id: ${cancelOrderResp.orderId}`);
}

async function futuresServiceExample(futuresService) {
    const marketApi = futuresService.getMarketApi();
    const allSymbolResp = await marketApi.getAllSymbols();

    const maxQuery = Math.min(allSymbolResp.data.length, 10);
    for (let i = 0; i < maxQuery; i++) {
        const symbol = allSymbolResp.data[i];
        const start = Date.now() - 10 * 60 * 1000;
        const end = Date.now();

        const getKlineReq = Futures.GetKlinesReq.builder()
            .setSymbol(symbol.symbol)
            .setGranularity(Futures.GetKlinesReq.GranularityEnum._1)
            .setFrom(start)
            .setTo(end)
            .build();

        const getKlineResp = await marketApi.getKlines(getKlineReq);
        const rows = getKlineResp.data.map((row) => {
            const timestamp = new Date(row[0]).toISOString();
            return `[Time: ${timestamp}, Open: ${row[1]}, High: ${row[2]}, Low: ${row[3]}, Close: ${row[4]}, Volume: ${row[5]}]`;
        });
        console.log(`Symbol: ${symbol.symbol}, Kline: ${rows.join(', ')}`);
    }
}

restExample().catch((err) => {
    console.error('Error occurred:', err);
});

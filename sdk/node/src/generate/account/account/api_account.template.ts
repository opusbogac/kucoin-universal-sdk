
describe('Auto Test', ()=> {
    let api: AccountAPI;

    beforeAll(()=> {
        api = ??
    });
    test('getFuturesAccount request test', ()=> {
    /**
    * getFuturesAccount
    * Get Account - Futures
    * /api/v1/account-overview
    */
    let builder = GetFuturesAccount.builder();
    builder.setCurrency(?)
    let req = builder.Build()
    let resp = this.api.getFuturesAccount(req)
    })

    test('getSpotAccountDetail request test', ()=> {
    /**
    * getSpotAccountDetail
    * Get Account Detail - Spot
    * /api/v1/accounts/{accountId}
    */
    let builder = GetSpotAccountDetail.builder();
    builder.setAccountId(?)
    let req = builder.Build()
    let resp = this.api.getSpotAccountDetail(req)
    })

    test('getSpotAccountList request test', ()=> {
    /**
    * getSpotAccountList
    * Get Account List - Spot
    * /api/v1/accounts
    */
    let builder = GetSpotAccountList.builder();
    builder.setCurrency(?).setType(?)
    let req = builder.Build()
    let resp = this.api.getSpotAccountList(req)
    })

    test('getSpotLedger request test', ()=> {
    /**
    * getSpotLedger
    * Get Account Ledgers - Spot/Margin
    * /api/v1/accounts/ledgers
    */
    let builder = GetSpotLedger.builder();
    builder.setCurrency(?).setDirection(?).setBizType(?).setStartAt(?).setEndAt(?).setCurrentPage(?).setPageSize(?)
    let req = builder.Build()
    let resp = this.api.getSpotLedger(req)
    })

    test('getSpotHFLedger request test', ()=> {
    /**
    * getSpotHFLedger
    * Get Account Ledgers - Trade_hf
    * /api/v1/hf/accounts/ledgers
    */
    let builder = GetSpotHFLedger.builder();
    builder.setCurrency(?).setDirection(?).setBizType(?).setLastId(?).setLimit(?).setStartAt(?).setEndAt(?)
    let req = builder.Build()
    let resp = this.api.getSpotHFLedger(req)
    })

    test('getSpotAccountType request test', ()=> {
    /**
    * getSpotAccountType
    * Get Account Type - Spot
    * /api/v1/hf/accounts/opened
    */
    let resp = this.api.getSpotAccountType()
    })

    test('getIsolatedMarginAccountDetailV1 request test', ()=> {
    /**
    * getIsolatedMarginAccountDetailV1
    * Get Account Detail - Isolated Margin - V1
    * /api/v1/isolated/account/{symbol}
    */
    let builder = GetIsolatedMarginAccountDetailV1.builder();
    builder.setSymbol(?)
    let req = builder.Build()
    let resp = this.api.getIsolatedMarginAccountDetailV1(req)
    })

    test('getIsolatedMarginAccountListV1 request test', ()=> {
    /**
    * getIsolatedMarginAccountListV1
    * Get Account List - Isolated Margin - V1
    * /api/v1/isolated/accounts
    */
    let builder = GetIsolatedMarginAccountListV1.builder();
    builder.setBalanceCurrency(?)
    let req = builder.Build()
    let resp = this.api.getIsolatedMarginAccountListV1(req)
    })

    test('getMarginAccountDetail request test', ()=> {
    /**
    * getMarginAccountDetail
    * Get Account Detail - Margin
    * /api/v1/margin/account
    */
    let resp = this.api.getMarginAccountDetail()
    })

    test('getFuturesLedger request test', ()=> {
    /**
    * getFuturesLedger
    * Get Account Ledgers - Futures
    * /api/v1/transaction-history
    */
    let builder = GetFuturesLedger.builder();
    builder.setCurrency(?).setType(?).setOffset(?).setForward(?).setMaxCount(?).setStartAt(?).setEndAt(?)
    let req = builder.Build()
    let resp = this.api.getFuturesLedger(req)
    })

    test('getApikeyInfo request test', ()=> {
    /**
    * getApikeyInfo
    * Get Apikey Info
    * /api/v1/user/api-key
    */
    let resp = this.api.getApikeyInfo()
    })

    test('getAccountInfo request test', ()=> {
    /**
    * getAccountInfo
    * Get Account Summary Info
    * /api/v2/user-info
    */
    let resp = this.api.getAccountInfo()
    })

    test('getMarginHFLedger request test', ()=> {
    /**
    * getMarginHFLedger
    * Get Account Ledgers - Margin_hf
    * /api/v3/hf/margin/account/ledgers
    */
    let builder = GetMarginHFLedger.builder();
    builder.setCurrency(?).setDirection(?).setBizType(?).setLastId(?).setLimit(?).setStartAt(?).setEndAt(?)
    let req = builder.Build()
    let resp = this.api.getMarginHFLedger(req)
    })

    test('getIsolatedMarginAccount request test', ()=> {
    /**
    * getIsolatedMarginAccount
    * Get Account - Isolated Margin
    * /api/v3/isolated/accounts
    */
    let builder = GetIsolatedMarginAccount.builder();
    builder.setSymbol(?).setQuoteCurrency(?).setQueryType(?)
    let req = builder.Build()
    let resp = this.api.getIsolatedMarginAccount(req)
    })

    test('getCrossMarginAccount request test', ()=> {
    /**
    * getCrossMarginAccount
    * Get Account - Cross Margin
    * /api/v3/margin/accounts
    */
    let builder = GetCrossMarginAccount.builder();
    builder.setQuoteCurrency(?).setQueryType(?)
    let req = builder.Build()
    let resp = this.api.getCrossMarginAccount(req)
    })

})
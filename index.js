let request = require('request');
let cheerio = require('cheerio');

request('http://markets.wsj.com/?mod=Home_MDW_MDC', function(error, response, html) {
    if (!error && response.statusCode == 200) {
        let $ = cheerio.load(html);
        let majorStockIndexes = [];
        let currencies = [];
        let futures = [];
        let govermentbonds = [];
        let majorStockIndexesregional = [];
        let majorStockIndexesIssues = [];
        let majorStockIndexesStock = [];
        let exchangeTradedFund = [];

        $('#majorStockIndexes_moduleId td.firstCol').each(function(i, element) {
            let name = $(this).text().trim();
            let last = $(this).next().text().trim();
            let change = $(this).next().next().text().trim();
            let CHG = $(this).next().next().next().text().trim();
            let metadata = [
                "majorStockIndexes", {
                    name: name,
                    last: last,
                    change: change,
                    CHG: CHG

                }
            ]
            majorStockIndexes.push(metadata);
        });

        $('#majorCurrencies_Id td.firstCol').each(function(i, element) {
            let nameC = $(this).text().trim();
            let lastC = $(this).next().next().text().trim();
            let changeC = $(this).next().next().next().text().trim();
            let metadataC = [
                "currencies", {
                    name: nameC,
                    last: lastC,
                    change: changeC
                }
            ]
            currencies.push(metadataC);
        });

        $('#futuresTable_Id td.firstCol').each(function(i, element) {
            let nameF = $(this).text().trim();
            let lastF = $(this).next().next().text().trim();
            let changeF = $(this).next().next().next().text().trim();
            let CHGF = $(this).next().next().next().next().text().trim();
            let metadataF = [
                "DataFutures", {
                    name: nameF,
                    last: lastF,
                    change: changeF,
                    CHG: CHGF
                }
            ]
            futures.push(metadataF);
        });
        $('#governmentDebt_Id td.firstCol').each(function(i, element) {
            let nameG = $(this).text().trim();
            let changeG = $(this).next().next().next().text().trim();
            let yieldG = $(this).next().next().next().next().text().trim();
            let metadataG = [
                "govermentbonds", {
                    name: nameG,
                    PriceCHG: changeG,
                    Yield: yieldG
                }
            ]
            govermentbonds.push(metadataG);
        });

        $('#majorRegionalStockIndexes_Id td.firstCol').each(function(i, element) {
            let nameR = $(this).text().trim();
            let lastR = $(this).next().text().trim();
            let changeR = $(this).next().next().text().trim();
            let CHGR = $(this).next().next().next().text().trim();
            let metadataR = [
                "majorStockIndexesregional", {
                    name: nameR,
                    last: lastR,
                    change: changeR,
                    CHG: CHGR
                }
            ]

            majorStockIndexesregional.push(metadataR);
        });

        $('.marketsDiary td.firstCol').each(function(i, element) {
            let nameI = $(this).text().trim();
            let lastI = $(this).next().text().trim();
            let changeI = $(this).next().next().text().trim();
            let CHGI = $(this).next().next().next().text().trim();
            let metadataI = {

                issue: nameI,
                NYSE: lastI,
                NASDAQ: changeI,
                NYSE_AMER: CHGI
            }

            majorStockIndexesIssues.push(metadataI);
        });

        $('#stocksOnTheMove_Id td.firstCol').each(function(i, element) {
            let nameS = $(this).text().trim();
            let lastS = $(this).next().text().trim();
            let changeS = $(this).next().next().text().trim();
            let CHGS = $(this).next().next().next().next().text().trim();

            let metadatastock = [
                'Stocks on the Move', {

                    Name: nameS,
                    Volume: lastS,
                    Last: changeS,
                    Change: changeS,
                    CHG: CHGS
                }
            ]
            majorStockIndexesStock.push(metadatastock);
        });



        $('#bestPerformingETF_Id td.firstCol').each(function(i, element) {
            let nameETF = $(this).text().trim();
            let lastETF = $(this).next().text().trim();
            let changeETF = $(this).next().next().text().trim();
            let CHGETF = $(this).next().next().next().text().trim();
            let metadatastocketf = [
                'ExchangeTradedFund', {

                    Name: nameETF,
                    Last: lastETF,
                    Change: changeETF,
                    CHG: CHGETF
                }
            ]
            exchangeTradedFund.push(metadatastocketf);

        })


        $('#worstPerformingETF_Id td.firstCol').each(function(i, element) {
            let nameETF = $(this).text().trim();
            let lastETF = $(this).next().text().trim();
            let changeETF = $(this).next().next().text().trim();
            let CHGETF = $(this).next().next().next().text().trim();
            let metadatastocketf = [
                'ExchangeTradedFund', {

                    Name: nameETF,
                    Last: lastETF,
                    Change: changeETF,
                    CHG: CHGETF
                }
            ]
            exchangeTradedFund.push(metadatastocketf);
        })

        console.log(majorStockIndexes);
        console.log(currencies);
        console.log(futures);
        console.log(govermentbonds);
        console.log(majorStockIndexesregional);
        console.log(majorStockIndexesIssues);
        console.log(majorStockIndexesStock);
        console.log(exchangeTradedFund);
    }
});
/*var fs = require('fs');
var keyword_extractor = require("keyword-extractor");

let request = require('request');
let cheerio = require('cheerio');
request('http://markets.wsj.com/us', function(error, response, html) {
    var json = {
        name: ""
    };
    if (!error && response.statusCode == 200) {
        let $ = cheerio.load(html);

        $('body').each(function(i, element) {
            let name = $(this).text().trim().split('\n');
            json.name = name;

            fs.writeFile('price.json', JSON.stringify(json, null, 4), function(err) {
                console.log('Price saved in price.json file');
            });
        });


    }
});*/
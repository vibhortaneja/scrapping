
var request = require('request');
var cheerio = require('cheerio');

request('http://markets.wsj.com/?mod=Home_MDW_MDC', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    var majorStockIndexes = [];
    
    $('#majorStockIndexes_moduleId td.firstCol').each(function(i, element){
      var name = $(this).text().trim();
      var last = $(this).next().text().trim();
      var change= $(this).next().next().text().trim();
      var CHG= $(this).next().next().next().text().trim();
      var metadata={
      	name:name,
      	last:last,
      	change:change,
      	CHG: CHG

      }
     majorStockIndexes.push(metadata); 
    });
    console.log(majorStockIndexes)
    metadata.mj=majorStockIndexes;
  }
});
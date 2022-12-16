const fetch = require("node-fetch");
const binanceRestUrl = "https://api.binance.com/api/v3/ticker/price";

async function retrieveSymbols(){
    const cryptoCurrencySymbols =
    await fetch("https://api.binance.com/api/v3/ticker/price")
          .then(res => res.json())
          .then( tickers => tickers.map(ticker => ticker.symbol));
    cryptoCurrencySymbols.sort();
    //cryptoCurrencySymbols.splice(100);
    let tickers = [];
    for(let symbol of cryptoCurrencySymbols){
        let ticker = fetch(`${binanceRestUrl}?symbol=${symbol}`).then(res => res.json());
        ticker.then(console.log);
        tickers.push(ticker);
    }
    await Promise.all(tickers);
}

retrieveSymbols().then(()=>{
    console.log("Application is done!")
})

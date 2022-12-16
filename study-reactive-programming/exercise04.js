const fetch = require("node-fetch");
let tickers = []
setInterval( async ()=>{
    let ticker = await fetch("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT")
                     .then(res => res.json());
    tickers.push(ticker);
}, 1_000)

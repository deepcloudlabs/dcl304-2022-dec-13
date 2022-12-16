const {Observable, map, filter} = require("rxjs");

const Websocket = require("ws");
const wsUrl = "wss://stream.binance.com:9443/ws/btcusdt@trade";

const ws = new Websocket(wsUrl);

const observable = new Observable(observer => {

    ws.on("message", frame => {
        let trade = JSON.parse(frame);
        observer.next(trade);
    });

});

let subscription = observable.pipe(
    filter(trade => Number(trade.q) >= 1),
    map(trade =>  {
        let newTrade = {}
        newTrade.symbol= trade.s;
        newTrade.price= Number(trade.p);
        newTrade.quantity= Number(trade.q);
        newTrade.volume = newTrade.price * newTrade.quantity;
        newTrade.timestamp = new Date(trade.T);
        return newTrade;
    })
).subscribe(console.log);

setTimeout(()=>{
    subscription.unsubscribe();
},60_000);

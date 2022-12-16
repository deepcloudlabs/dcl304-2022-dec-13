const Websocket = require("ws");
const wsUrl = "wss://stream.binance.com:9443/ws/btcusdt@trade";

const ws = new Websocket(wsUrl);

ws.on("message", frame => {
   let trade = JSON.parse(frame);
   console.log(frame.toString());
});
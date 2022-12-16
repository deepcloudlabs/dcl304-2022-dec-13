const {WebSocketServer} = require("ws");
const Websocket = require("ws");
const {Observable} = require("rxjs");
const wsUrl = "wss://stream.binance.com:9443/ws/btcusdt@trade";
const ws = new Websocket(wsUrl);

class PlainWebSocketService {
    constructor() {
        this.webSocketServer = new WebSocketServer({
            "port": 8200,
            "path": "/events"
        });
        this.sessions = [];
        this.webSocketServer.on("connection", (session) => {
            console.log(`New client has arrived through plain Websocket.`);
            session.on("close", () => {
                console.log(`Websocket connection is closed.`);
            });
            this.sessions.push(session);
        });
    }

    sendMessage = (message) => {
        this.sessions.forEach(session => session.send(message.toString()));
    }
}

let plainWebSocketService = new PlainWebSocketService();

ws.on("message", frame => {
    let trade = JSON.parse(frame);
    plainWebSocketService.sendMessage(frame);
});


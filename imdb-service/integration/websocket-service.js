const {WebSocketServer} = require("ws");

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
        this.sessions.forEach(session => session.send(message));
    }
}

module.exports = {PlainWebSocketService};
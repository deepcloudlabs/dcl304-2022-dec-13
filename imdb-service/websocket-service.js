const ws = require("ws");
const wsServer = new ws.WebSocketServer({
    "port": 8200,
    "path": "/events"
});
wsServer.on("connection", (ws) => {
    console.log(`new ws connection is open.`);
    ws.on("close",()=>{
        console.log(`connection is closed.`);
    });
});

module.exports = wsServer;
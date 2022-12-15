const ws = require("ws");

const websocket = new ws.WebSocket("ws://localhost:8200/events");

websocket.on("open",(msg)=>{
    console.log("connected to the server.")
    websocket.on("message", (msg) => {
        let movie = JSON.parse(msg.toString());
        console.log(`New movie has arrived: ${movie.title}`);
    });
});

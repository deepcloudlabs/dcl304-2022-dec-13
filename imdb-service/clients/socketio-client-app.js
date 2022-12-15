const io = require("socket.io-client");
const client = io.connect("http://localhost:8100");
client.on("connect", () => {
    console.log("Connected to the websocket server.");
    client.on("movie-events", event => {
        const movie = JSON.parse(event);
        console.log(`New movie has arrived: ${movie.title}.`)
    })
})
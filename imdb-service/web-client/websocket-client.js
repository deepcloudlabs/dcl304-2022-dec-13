const ws = new WebSocket("ws://localhost:8200/events");
ws.onopen = () => {
    console.log("Connected to the server");
};

ws.onmessage = (event) => {
    const movie = JSON.parse(event.data);
    console.log(`New movie has arrived from websocket server: ${movie.title}.`)
};

ws.onclose = () => {
    console.log("Disconnected from the server");
};
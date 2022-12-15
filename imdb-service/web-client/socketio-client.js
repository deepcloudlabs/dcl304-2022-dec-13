const socket = io("http://localhost:8100");

socket.on('connect', () => {
    console.log("Connected to the socketio server.");
    socket.on('movie-events', (event) => {
        const movie = JSON.parse(event);
        console.log(`New movie has arrived from socketio server: ${movie.title}.`)
    });
});
const socketio = require("socket.io");

class SocketIOServiceImpl {
    constructor(server) {
        this.sessions = [];
        this.io = socketio(server);
        this.io.on("connection", (session) => {
            console.log(`New client has arrived through a websocket connection with session id [${session.id}].`);
            this.sessions.push(session);
            this.io.on("disconnect", () => {
                console.log(`connection is closed: ${session.id}`);
                let new_sessions = this.sessions.filter(_session => _session.id !== session.id);
                this.sessions.splice(0);
                new_sessions.forEach(_session => this.sessions.push(_session))
            });
        });
    }
}

module.exports = {SocketIOServiceImpl};
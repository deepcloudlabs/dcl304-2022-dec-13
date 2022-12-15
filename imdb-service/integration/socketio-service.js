const socketIo = require("socket.io");

class SocketIOServiceImpl {
    constructor(server) {
        this.sessions = [];
        this.io = socketIo.listen(server,{
            "cors": {
                "origins": "*",
                "methods": ["GET", "POST", "PUT"]
            }
        });
        this.io.on("connection", (session) => {
            console.log(`new ws connection is open: ${session.id}`);
            this.sessions.push(session);
            this.io.on("disconnect",()=>{
                console.log(`connection is closed: ${session.id}`);
                let new_sessions = this.sessions.filter(_session => _session.id !== session.id);
                this.sessions.splice(0);
                new_sessions.forEach(_session => this.sessions.push(_session))
            });
        });
    }
}



module.exports = {SocketIOServiceImpl};
const socketIo = require("socket.io");
const server = require("./express-server");

let sessions = [];

const io = socketIo.listen(server,{
    "cors": {
        "origins": "*",
        "methods": ["GET", "POST", "PUT"]
    }
});
io.on("connection", (session) => {
    console.log(`new ws connection is open: ${session.id}`);
    sessions.push(session);
    io.on("disconnect",()=>{
        console.log(`connection is closed: ${session.id}`);
        sessions = sessions.filter(_session => _session.id !== session.id);
    });
});

module.exports = sessions;
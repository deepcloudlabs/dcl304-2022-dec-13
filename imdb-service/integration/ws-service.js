class SocketIOService {
    constructor(sessions) {
        this.sessions = sessions;
        console.log(SocketIOService);
        console.log(sessions)
    }

    sendMessage(topic, message){
        this.sessions.forEach(session => session.emit(topic, message));
    }
}

module.exports = {SocketIOService}
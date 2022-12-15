class SocketIOService {
    constructor(sessions) {
        this.sessions = sessions;
    }

    sendMessage(topic, message){
        this.sessions.forEach(session => session.emit(topic, message));
    }
}

module.exports = {SocketIOService}
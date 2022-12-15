// How to Write Node Module, ES Module
// Node Architecture
// Node Threads: Main Thread -> Event Loop, GC/JIT Threads
//               libuv -> Thread Pool, default 4-threads
//               $export UV_THREADPOOL_SIZE=32
//               node server.js

const port = 8100;
const {api} = require("./api-config")
const {Movie} = require("../persistence/imdb-schema")
const {SocketIOServiceImpl} = require("../integration/socketio-service")
const {apiQuery}= require("./imdb-api-query");
const {ImdbApiCommand} = require("./imdb-api-command")
const {SocketIOService} = require("../integration/ws-service");
const {kafkaProducer} = require("../integration/kafka-producer")


let server = api.listen(port, () => {
    console.log(`Api is running at ${port}`);
});
const socketIOServiceImpl = new SocketIOServiceImpl(server);
const socketIOService = new SocketIOService(socketIOServiceImpl.sessions);
const imdbApiCommand = new ImdbApiCommand(Movie, socketIOService, kafkaProducer);
api.use("/", apiQuery);
api.use("/", imdbApiCommand.router);

exports.server = server
// How to Write Node Module, ES Module
// Node Architecture
// Node Threads: Main Thread -> Event Loop, GC/JIT Threads
//               libuv -> Thread Pool, default 4-threads
//               $export UV_THREADPOOL_SIZE=32
//               node server.js
//region REST API (express.js) CONFIGURATION ✔

//endregion



//region MONGODB INTEGRATION (mongoose |-> mongodb driver) ✔

//endregion



//region KAFKA INTEGRATION (kafkajs) ✘

//endregion ()

//region WEBSOCKET (ws) ✔
// const ws = require("./websocet-service")
//endregion

//region WEBSOCKET (SOCKET-IO) ✘

//endregion

require("./express-server")
// How to Write Node Module, ES Module
// Node Architecture

//region REST API (express.js)
const port = 8100;
const express = require("express");
const api = express();
//endregion

//region REST API DOCUMENTATION (swagger-ui, OpenAPI)
const swaggerUi = require("swagger-ui-express");
const swaggerApiDocument = require("./swagger.json");
api.use("/api-docs", swaggerUi.serve,swaggerUi.setup(swaggerApiDocument) );
//endregion

//region MONGODB INTEGRATION (mongoose |-> mongodb driver) ✔

//endregion

//region KAFKA INTEGRATION (kafkajs)

//endregion ()

//region WEBSOCKET (ws)

//endregion

//region WEBSOCKET (SOCKET-IO)

//endregion

api.listen(port,()=>{
  console.log(`Api is running at ${port}`);
});
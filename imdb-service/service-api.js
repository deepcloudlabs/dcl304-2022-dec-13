// How to Write Node Module, ES Module
// Node Architecture

//region REST API (express.js) CONFIGURATION ✔
const port = 8100;
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const api = express();
api.use(logger('dev'))
api.use(bodyParser.json({limit: "5mb"}));
//endregion

//region REST API DOCUMENTATION (swagger-ui, OpenAPI) ✔
const swaggerUi = require("swagger-ui-express");
const swaggerApiDocument = require("./swagger.json");
api.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerApiDocument));
//endregion

//region MONGODB INTEGRATION (mongoose |-> mongodb driver) ✔

//endregion

//region REST API ENDPOINTS
const query = require("./imdb-api-query");
//const command = require("./imdb-api-command")
api.use("/", query);
//api.use("/", command);
//endregion

//region KAFKA INTEGRATION (kafkajs)

//endregion ()

//region WEBSOCKET (ws)

//endregion

//region WEBSOCKET (SOCKET-IO)

//endregion

api.listen(port, () => {
    console.log(`Api is running at ${port}`);
});
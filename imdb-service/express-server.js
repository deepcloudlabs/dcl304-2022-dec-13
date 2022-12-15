const port = 8100;
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const api = express();
api.use(logger('dev'))
api.use(bodyParser.json({limit: "5mb"}));

//region REST API DOCUMENTATION (swagger-ui, OpenAPI) ✔
const swaggerUi = require("swagger-ui-express");
const swaggerApiDocument = require("./swagger.json");
api.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerApiDocument));
//endregion

//region REST API ENDPOINTS ✔
const query = require("./imdb-api-query");
const command = require("./imdb-api-command")
api.use("/", query);
api.use("/", command);
//endregion

let server = api.listen(port, () => {
    console.log(`Api is running at ${port}`);
});

module.exports = server
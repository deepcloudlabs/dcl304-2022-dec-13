const {api} = require("./api-config")
const swaggerUi = require("swagger-ui-express");
const swaggerApiDocument = require("../resources/swagger.json");
api.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerApiDocument));

module.exports = {swaggerApiDocument}
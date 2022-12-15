const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const api = express();
api.use(logger('dev'))
api.use(bodyParser.json({limit: "5mb"}));
api.use(cors({origin: '*'}));
exports.api = api
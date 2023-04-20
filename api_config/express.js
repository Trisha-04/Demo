const express = require("express");
const bodyParser = require("body-parser");
const compress = require("compression");
const routes = require("../src/route");

const app = express();
app.use(bodyParser.json());
app.use(compress());
routes(app);
module.exports = app;

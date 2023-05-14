const express = require("express");
const cors = require("cors");
const app = express();
const validId = require("./utils/validId");

app.use(cors());
app.use(express.json());

module.exports = app;

const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const app = express();

const { connect } = require("./db/db");

app.use(logger("dev"));
app.use(express.json());
app.use(cors());

connect();

module.exports = app;

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config;
}
const cors = require("cors");
const express = require("express");
const app = express();
const routers = require("./routes");
const DATABASE_URL = process.env.DATABASE_URL;

const errorHandler = require("./middlewares/errorHandler");

//body parser
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routers);
app.use(errorHandler);

module.exports = { app, DATABASE_URL };

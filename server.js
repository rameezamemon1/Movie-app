const dotenv = require("dotenv");
const app = require("./app");
const mongoose = require("mongoose");
const express = require("express");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE

app.use(express.static("public"))

mongoose.connect(DB, { useUnifiedTopology: true }).then(() => {
  console.log("DB connection is established!");
});

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

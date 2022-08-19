const dotenv = require("dotenv");
const app = require("./app");const path = require("path");

const mongoose = require("mongoose");
const express = require("express");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE;

mongoose.connect(DB, { useUnifiedTopology: true }).then(() => {
  console.log("DB connection is established!");
});

// console.log(__dirname + '/public/index.html')
// app.get('/', function (req, res) {

//   res.sendFile(__dirname + '/public/index.html')

// })
app.use(express.static(path.join(__dirname, 'public'))); //  "public" off of current is root

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

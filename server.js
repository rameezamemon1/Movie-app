const dotenv = require("dotenv");
const app = require("./app");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE;
app.get('/', function (req, res) {

  res.sendFile(__dirname + '/public/index.html')

})

mongoose.connect(DB, { useUnifiedTopology: true }).then(() => {
  console.log("DB connection is established!");
});

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

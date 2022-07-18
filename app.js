const express = require("express");
var bodyParser = require("body-parser");
const app = express();
var cors = require("cors");

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes

app.listen(process.env.PORT, () => {
  console.log("app is listening on " + process.env.PORT);
});
app.use("/",  (req, res) => {
  res.send('testing heroku website today')
});
module.exports = app;

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
  res.send('testing heroku website todayss')
});
app.use("/user", require("./routes.js/userRoutes"));
app.use("/event", require("./routes.js/eventRoutes"));
app.use("/project", require("./routes.js/Project"));
app.use("/student", require("./routes.js/Student"));
module.exports = app;

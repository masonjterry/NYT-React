const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("client/build"));
// app.use(routes);

mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://heroku_0p76l345:hr8u7fvf67m7b2om59mnr248jb@ds215388.mlab.com:15388/heroku_0p76l345");

app.listen(PORT, function() {
  console.log(`Listening on ${PORT}!`);
});

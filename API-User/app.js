const express = require("express");
const bodyParser = require('body-parser');
const passport = require("passport");

require('./middleware/passport');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "*");
  next(); 
});
//passw mysql: C5f6HMl1wA
require('./routes')(app);

app.listen(3000, () => {
  console.log("App listening on port 3000!!!!");
});

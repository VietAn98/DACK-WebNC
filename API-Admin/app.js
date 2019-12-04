const express = require("express");
const bodyParser = require('body-parser');
const passport = require("passport");

require('./middleware/passport');
const app = express();

var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");

  // allow options method work, ask experts for more
  if (req.method === "OPTIONS") {
    return res.status(200).json({});
  }
  next();
};

app.use(allowCrossDomain);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "*");
    next(); 
  });

require("./routes")(app);

app.listen(3303, () => {
    console.log("App listening on port 3303!!!!");
  });
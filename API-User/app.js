const express = require("express");
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//passw mysql: C5f6HMl1wA

require('./routes')(app);


app.listen(3000, () => {
  console.log("App listening on port 3000!!!!");
});

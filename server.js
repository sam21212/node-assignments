var express = require("express");
var app = express();
const bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/company');

app.listen(3000, function() {
  console.log("The Node Server is running on port 3000");

});
require('./app/routes.js')(app);


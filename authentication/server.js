const express = require("express");
const app = express();
const passport = require('passport');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

Token = require('./app/models/tokenModel');
app.use(bodyParser.json());
app.use(passport.initialize());  
mongoose.connect('mongodb://localhost/company');

app.listen(3000, function() {
  console.log("The Node Server is running on port 3000");

});
require('./config/passport')(passport);

app.use('/',
  passport.authenticate('bearer', { session: false }),
  function(req, res, next) {
  	next();
});

require('./app/routes/project.js')(app);
require('./app/routes/employee.js')(app);

app.use(function(req, res) {
	res.status(404).json({url:req.originalUrl + ' Not Found'});
})

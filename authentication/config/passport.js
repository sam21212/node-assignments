const Strategy = require('passport-http-bearer').Strategy;

Token = require('../app/controller/tokenController');
module.exports = function(passport) {
	passport.use(new Strategy(
  	function(token, cb) {
    	Token.findByToken(token, function(err, user) {
      	if (err) { return cb(err); }
      	if (Object.keys(user).length === 0) { return cb(null, false); }
      	return cb(null, user);
    });
  }));
}

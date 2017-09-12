const Token = (module.exports = require("../models/tokenModel"));

module.exports.findByToken = function(token, callback) {
	Token.find({token: token}, callback);
}

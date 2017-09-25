const Token = require("../models/tokenModel");
module.exports = Token;

module.exports.findByToken = (token, callback) => {
	Token.find({token: token}, callback);
}

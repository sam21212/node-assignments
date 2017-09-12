const mongoose = require("mongoose");

const tokenSchema = mongoose.Schema({
  token: {
  	type: String,
  	required: true
  }
});

const Token = (module.exports = mongoose.model("Token", tokenSchema));

const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  'name': {
    type: String,
    required: true
  },
  'Reporting_Manager': { type: mongoose.Schema.Types.ObjectId }
});

var Employee = (module.exports = mongoose.model("Employee", employeeSchema));

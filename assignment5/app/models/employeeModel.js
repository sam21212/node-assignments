const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema({
  'name': {
    type: String,
    required: true
  },
  'reporting_manager': { type: mongoose.Schema.Types.ObjectId }
});

const Employee= mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;
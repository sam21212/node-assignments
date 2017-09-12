const Employee = (module.exports = require("../models/employeeModel"));

module.exports.getEmployees = function(callback, limit) {
  Employee.find(callback).limit(limit);
};
module.exports.addEmployee = function(employee, callback) {
  Employee.create(employee, callback);
};
module.exports.getEmployeebyId = function(id, callback) {
  Employee.find({ _id: id }).exec(callback);
};
module.exports.deleteEmployee = function(id, callback) {
  Employee.remove({ _id: id }, callback);
};

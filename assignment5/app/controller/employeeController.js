const Employee = require("../models/employeeModel");
module.exports = Employee;

module.exports.getEmployees = (callback, limit) => {
  Employee.find(callback).limit(limit);
};
module.exports.addEmployee = (employee, callback) => {
  Employee.create(employee, callback);
};
module.exports.getEmployeebyId = (id, callback) => {
  Employee.findById(id).exec(callback);
};
module.exports.deleteEmployee = (id, callback) => {
  Employee.remove({ _id: id }, callback);
};

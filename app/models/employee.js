var mongoose = require('mongoose');

var employeeSchema = mongoose.Schema({
	'name': {
		type: String,
		required: true
	},
	'Reporting_Manager': {type: mongoose.Schema.Types.ObjectId}
});

var Employee = module.exports = mongoose.model('Employee', employeeSchema);

module.exports.getemployees = function(callback ,limit) {
	Employee.find(callback).limit(limit);
}
module.exports.addemployee = function(employee, callback) {
	Employee.create(employee, callback);
}
module.exports.getemployeebyid = function(id, callback) {
	Employee.find({_id:id}).exec(callback);
}
module.exports.deleteemployee = function(id, callback) {
	Employee.remove({_id:id}, callback);
}

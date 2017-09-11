var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({
	'Project_Name': {
		type: String,
		required: true
	},
	'Developers': [{type: mongoose.Schema.Types.ObjectId}],
	'Project_Manager': {
		type: String
	}
});

var Project = module.exports = mongoose.model('Project', projectSchema);

module.exports.getprojects = function(callback, limit) {
	Project.find(callback).limit(limit);
}
module.exports.addproject = function(project, callback) {
	Project.create(project, callback);
}
module.exports.getprojectbyid = function(id, callback) {
	Project.find({_id:id}).exec(callback);
}
module.exports.deleteproject = function(id, callback) {
	Project.remove({_id:id}, callback);
}
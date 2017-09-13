const Project = (module.exports = require("../models/projectModel"));

module.exports.getProjects = function(callback, limit) {
  Project.find(callback).limit(limit);
};
module.exports.addProject = function(project, callback) {
  Project.create(project, callback);
};
module.exports.getProjectById = function(id, callback) {
  Project.find({ _id: id }).exec(callback);
};
module.exports.deleteProject = function(id, callback) {
  Project.remove({ _id: id }, callback);
};
module.exports.getProjectDevelopers = function(id, callback) {
  Project.find({ Developers: id }, callback);
};

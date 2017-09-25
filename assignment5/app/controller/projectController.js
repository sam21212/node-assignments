const Project = require("../models/projectModel");
module.exports = Project;

module.exports.getProjects = (callback, limit) =>  {
  Project.find(callback).limit(limit);
};
module.exports.addProject = (project, callback) =>  {
  Project.create(project, callback);
};
module.exports.getProjectById = (id, callback) => {
  Project.findById(id).exec(callback);
};
module.exports.deleteProject = (id, callback) =>  {
  Project.remove({ _id: id }, callback);
};
module.exports.getProjectDevelopers = (id, callback) =>  {
  Project.find({ developers: id }, callback);
};

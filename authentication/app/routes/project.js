Project = require('../controller/projectController');
const errorHandler = require('../errorHandler'); 

module.exports = function(app) {

  app.get("/api/projects", function(req, res) {
    Project.getProjects(function(err, project) {
      if (err) throw err;
      res.status(200).json(project);
    });
  });

  app.post("/api/projects", function(req, res) {
    Project.addProject(req.body, function(err, project) {
      if (err) {
        res.status(400).json(Project.schema.obj);
        return errorHandler.getMessage(err, req, res);
      }
      res.status(200).json(project);
    });
  });

  app.get("/api/projects/:_id", function(req, res) {
    Project.getProjectById(req.params._id, function(err, project) {
      if (err) return errorHandler.getMessage(err, req, res);
      res.status(200).json(project);
    });
  });

  app.put("/api/projects/:_id", function(req, res) {
    var id = req.params._id;
    Project.findById(req.params._id, function(err, project) {
      if (err) return errorHandler.getMessage(err, req, res);
      project.set(req.body);
      project.save(function(err) {
        if (err) {
          res.status(400).json(Project.schema.obj);
          return errorHandler.getMessage(err, req, res);
        }
        res.status(200).json({ Message: "updated Succesfully" });
      });
    });
  });

  app.get("/api/projects/:_id/employees", function(req, res) {
    var result = [];
    Project.getProjectDevelopers(req.params._id, function(err, project) {
      if (err) return errorHandler.getMessage(err, req, res);
      res.status(200).json(project);
    });
  });

  app.delete("/api/projects/:_id", function(req, res) {
    Project.deleteProject(req.params._id, function(err) {
      if (err) return errorHandler.getMessage(err, req, res);
      res.status(200).json({ Message: "Deleted Project" });
    });
  });
};

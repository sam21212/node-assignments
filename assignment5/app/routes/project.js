Project = require('../controller/projectController');
const errorHandler = require('../errorHandler'); 

module.exports = (app) {

  app.get("/projects", (req, res) => {
    Project.getProjects((err, project) => {
      if (err) throw err;
      res.status(200).json(project);
    });
  });

  app.post("/projects", (req, res) => {
    Project.addProject(req.body, (err, project) => {
      if (err) return res.status(400).json(Project.schema.obj);      
      res.status(200).json(project);
    });
  });

  app.get("/projects/:_id", (req, res) => {
    Project.getProjectById(req.params._id, (err, project) => {
      if(project === [])
        return errorHandler.getMessage(err, req, res);
      if (err) return errorHandler.getMessage(err, req, res);
      res.status(200).json(project);
    });
  });

  app.put("/projects/:_id", (req, res) => {
    var id = req.params._id;
    Project.update({_id: req.params._id}, req.body, (err, project) => {
      if (err) return res.status(400).json(Project.schema.obj);
      res.status(200).json({ Message: "updated Succesfully" });
    });
  });

  app.get("/projects/:_id/employees", (req, res) => {
    var result = [];
    Project.getProjectDevelopers(req.params._id, (err, project) => {
      if (err) return errorHandler.getMessage(err, req, res);
      res.status(200).json(project);
    });
  });

  app.delete("/projects/:_id", (req, res) => {
    Project.deleteProject(req.params._id, (err) => {
      if (err) return errorHandler.getMessage(err, req, res);
      res.status(200).json({ Message: "Deleted Project" });
    });
  });
};

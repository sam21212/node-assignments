Employee = require('../controller/employeeController');
Project = require('../controller/projectController');

const errorHandler = require('../errorHandler'); 
module.exports = function(app) {
  app.post("/api/employees", function(req, res) {
    Employee.addEmployee(req.body, function(err, employee) {
      if (err) res.status(400).json(Employee.schema.obj);
      res.status(200).json(employee);
    });
  });

  app.get("/api/employees/:_id", function(req, res, next) {
    Employee.getEmployeebyId(req.params._id, function(err, employee) {
      if (err) return errorHandler.getMessage(err, req, res);
      res.status(200).json(employee);
    });
  });

  app.put("/api/employees/:_id", function(req, res) {
    Employee.findById(req.params._id, function(err, employee) {
      if (err) return errorHandler.getMessage(err, req, res);
      employee.set(req.body);
      employee.save(function(err) {
        if (err) res.status(400).json(Employee.schema.obj);     
        res.status(200).json({ message: "updated Succesfully" });
      });
    });
  });

  app.get("/api/employees", function(req, res) {
    Employee.getEmployees(function(err, employee) {
      if (err) throw err;
      res.status(200).json(employee);
    });
  });

  app.delete("/api/employees/:_id", function(req, res) {
    var id = req.params._id;
    Employee.deleteEmployee(id, function(err) {
      if(err) return errorHandler.getMessage(err, req, res)
        Project.update({'Developers': id}, {$pullAll: {'Developers': [id] }}, {multi: true}, function(err) {
          if(err) throw err;
          console.log("Removed Employee from Projects");
        });
        Employee.update({'Reporting_Manager': id}, {$set: {'Reporting_Manager': null}}, {multi: true}, function(err) {
          if(err) throw err;
          console.log('Removed Employee as Repoting Manager');
        });
      res.status(200).json({ Message: "Deleted Employee" });
    });
  });
};

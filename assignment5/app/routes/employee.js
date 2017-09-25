Employee = require('../controller/employeeController');
Project = require('../controller/projectController');

const errorHandler = require('../errorHandler'); 
module.exports = (app) => {

  app.post("/employees", (req, res) => {  
    Employee.addEmployee(req.body, (err, employee) => {
      if (err)  return res.status(400).json(Employee.schema.obj);
      res.status(200).json(employee);
    });
  });

  app.get("/employees/:_id", (req, res) => {
    Employee.getEmployeebyId(req.params._id, (err, employee) => {
      if(employee === [])
        return errorHandler.getMessage(err, req, res);
      if (err) return errorHandler.getMessage(err, req, res);
      res.status(200).json(employee);
    });
  });

  app.put("/employees/:_id", (req, res) => {
    Employee.update({_id: req.params._id}, req.body, (err, employee) => {
      if(err) return errorHandler.getMessage(err, req, res);
      res.status(200).send(employee);
    });
  });

  app.get("/employees", (req, res) => {
    Employee.getEmployees((err, employee) => {
      if (err) throw err;
      res.status(200).json(employee);
    });
  });

  app.delete("/employees/:_id", (req, res) => {
    var id = req.params._id;
    Employee.deleteEmployee(id, (err) => {
      if(err) return errorHandler.getMessage(err, req, res)
        Project.update({'developers': id}, {$pullAll: {'developers': [id] }}, {multi: true}, (err) => {
          if(err) throw err;
          console.log("Removed Employee from Projects");
        });
        Employee.update({'Reporting_Manager': id}, {$set: {'Reporting_Manager': null}}, {multi: true}, (err) => {
          if(err) throw err;
          console.log('Removed Employee as Repoting Manager');
        });
      res.status(200).json({ Message: "Deleted Employee" });
    });
  });
};

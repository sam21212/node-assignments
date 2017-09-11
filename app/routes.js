Project = require('./models/project');
Employee = require('./models/employee')
module.exports = function(app) {
	app.get('/', function(req, res) {
		res.send('Hello');
	});
	app.get('/api/project', function(req, res) {
		Project.getprojects(function(err, project) {
			if(err) throw err;
			res.json(project);
		});
	});
	app.post('/api/project', function(req, res) {
		var project = req.body 
		Project.addproject(project, function(err, project) {
			if(err) throw err;
			res.json(project);
		});
	});
	app.get('/api/project/:_id', function(req, res) {
		var id = req.params._id
		Project.getprojectbyid(id, function(err, project) {
			if(err) throw err;
			res.send(project).json();
		});
	});
	app.put('/api/project/:_id', function(req, res) {
		var id = req.params._id;
		Project.findById(id, function(err, project) {
			if(err) throw err;
			var body = req.body;
			project.set(body);
			project.save(function(err) {
				if(err) throw err;
				res.json({message: "updated Succesfully"});
			});
		});
	});
	app.get('/api/employees', function(req, res) {
		Employee.getemployees(function(err, employee) {
			if(err) throw err;
			res.json(employee);
		});
	});
	app.post('/api/employees', function(req, res) {
		Employee.addemployee(project, function(err, employee) {
			if(err) throw err;
			res.json(employee);
		});
	});
	app.get('/api/employees/:_id', function(req, res) {
		var id = req.params._id
		Employee.getemployeebyid(id, function(err, employee) {
			if(err) throw err;
			res.send(employee).json();
		});
	});
	app.put('/api/employees/:_id', function(req, res) {
		var id = req.params._id
		Employee.findById(id, function(err, employee) {
		if(err) throw err;
		var body = req.body;
		employee.set(body);
		employee.save(function(err) {
			if(err) throw err;
			res.json({message: "updated Succesfully"});
		});
		});
	});
	app.get('/api/:_id', function(req, res) {
		var id = req.params._id;
		var result = [];
		Project.getprojects(function(err, project) {
			for(var list = 0; list < project.length; list++) {
				for(var developer = 0; developer < project[list].Developers.length; developer++) {			
					if(id == project[list].Developers.toString())
						result.push(project[list]._id);
				}
			}
			res.send(result);
		});
	});
	app.delete('/api/employees/:_id', function(req, res) {
		var id = req.params._id;
		Employee.deleteemployee(id, function(err) {
			if(err) throw err;
			res.send({"message": "Deleted Employee"});
		});
	});
	app.delete('/api/project/:_id', function(req, res) {
		var id = req.params._id;
		Project.deleteproject(id, function(err) {
			if(err) throw err;
			res.send({"Message": "Deleted Project"});
		});
	})
}
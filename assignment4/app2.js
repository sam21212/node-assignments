var express = require("express");
var request = require("request");
var app = express();
var bodyParser = require('body-parser').json();

var AllClientOptions = {
  url: "https://api.createsend.com/api/v3.1/clients.json?pretty=true",
  auth: {
    username: "9a86a35217185b745506196eb27709a0",
    password: "x"
  }
};

var CreateClientOptions = {
  url: "https://api.createsend.com/api/v3.1/clients.json",
  auth: {
    username: "9a86a35217185b745506196eb27709a0",
    password: "x"
  }
};

app.listen(3000, function() {
  console.log("The Node Server is running on port 3000");
});

app.get("/", function(req, res) {
  request.get(AllClientOptions, function(error, resp, body) {
    if (error) console.log("Error");
    res.send(body);
  });
});

app.get("/getclients/:id", function(req, res) {
  var userid = req.params.id;
  var url =
    "https://api.createsend.com/api/v3.1/clients/" +
    userid.toString() +
    ".json";
  request.get(
    {
      url: url,
      auth: {
        username: "9a86a35217185b745506196eb27709a0",
        password: "x",
        sendImmediately: false
      }
    },
    function(error, resp, body) {
      if (error) return console.log("Error");
      res.send(body);
    }
  );
});

app.get("/listClient/:list", function(req, res) {
  var userid = req.params.list;
  var url =
    "https://api.createsend.com/api/v3.1/clients/" +
    userid.toString() +
    "/lists.json";
  request.get(
    {
      url: url,
      auth: {
        username: "9a86a35217185b745506196eb27709a0",
        password: "x",
        sendImmediately: false
      }
    },
    function(error, resp, body) {
      if (error) return console.log("Error");
      res.send(body);
    }
  );
});

app.get("/listClient/:user", function(req, res) {
  var usertodelete = req.params.user;
  var url =
    "https://api.createsend.com/api/v3.1/clients/" +
    usertodelete.toString() +
    ".json";
  request.delete(
    {
      url: url,
      auth: {
        username: "9a86a35217185b745506196eb27709a0",
        password: "x",
        sendImmediately: false
      }
    },
    function(error, resp, body) {
      if (error) return console.log("Error");
      res.send(body);
    }
  );
});

app.post('/createClient', bodyParser, function(req, res) {
  request.post({
	  url: "https://api.createsend.com/api/v3.1/clients.json",
	  json: true,
	  auth: {
	    username: "9a86a35217185b745506196eb27709a0",
	    password: "x"
	  },
	    body: req.body
	},
	    function(error, resp, body) {
    	  if(error) console.log(error);
    	  res.send(body);
    });  
});

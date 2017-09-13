const express = require("express");
const request = require("request");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.listen(3000, function() {
  console.log("The Node Server is running on port 3000");
});

app.get("/clients", function(req, res) {
  request.get(
    {
      url: "https://api.createsend.com/api/v3.1/clients.json?pretty=true",
      headers: {
        Authorization: req.headers.authorization
      }
    },
    function(error, resp, body) {
      if (error) throw error;
      res.status(200).send(body);
    }
  );
});

app.get("/clients/:id", function(req, res) {
  var userId = req.params.id;
  var url =
    "https://api.createsend.com/api/v3.1/clients/" +
    userId.toString() +
    ".json";
  request.get(
    {
      url: url,
      headers: {
        Authorization: req.headers.authorization
      }
    },
    function(err, resp, body) {
      if (err) throw err;
      res.status(200).send(body);
    }
  );
});

app.get("/clients/:id", function(req, res) {
  var userId = req.params.id;
  var url =
    "https://api.createsend.com/api/v3.1/clients/" +
    userId.toString() +
    "/lists.json";
  request.put(
    {
      url: url,
      headers: {
        Authorization: req.headers.authorization
      },
      body: req.body
    },
    function(error, resp, body) {
      if (error) throw err;
      res.status(200).send(body);
    }
  );
});

app.get("/clients/:user", function(req, res) {
  var idToDelete = req.params.user;
  var url =
    "https://api.createsend.com/api/v3.1/clients/" +
    idToDelete.toString() +
    ".json";
  request.delete(
    {
      url: url,
      headers: {
        Authorization: req.headers.authorization
      }
    },
    function(error, resp, body) {
      if (error) throw error
      res.status(200).send(body);
    }
  );
});

app.post("/clients", function(req, res) {
  request.post(
    {
      url: "https://api.createsend.com/api/v3.1/clients.json",
      json: true,
      headers: {
        Authorization: req.headers.authorization
      },
      body: req.body
    },
    function(error, resp, body) {
      if (error) throw error;
      res.status(200).send(body);
    }
  );
});

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + 'Not Found'});
})
var fs = require("fs");

var ReadFile1 = function() {
  return new Promise((resolve, reject) => {
    fs.readFile("file1.txt", "utf-8", (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};
var AppendFile1 = function(data) {
  return new Promise((resolve, reject) => {
    fs.appendFile("file2.txt", data, err => {
      if (err) reject(err);
      resolve();
    });
  });
};
var ReadFile2 = function() {
  return new Promise((resolve, reject) => {
    fs.readFile("file2.txt", "utf-8", (err, data) => {
      if (err) console.log(err);
      else resolve(data);
    });
  });
};
var WriteFile3 = function(data) {
  return new Promise((resolve, reject) => {
    fs.writeFile("file3.txt", data, err => {
      if (err) reject(err);
      resolve();
    });
  });
};
ReadFile1()
  .then(function(result) {
    return AppendFile1(result);
  })
  .then(function() {
    return ReadFile2();
  })
  .then(function(result) {
    return WriteFile3(result);
  })
  .then(function() {
    console.log("Done");
  });

const fs = require("fs");

var fileArray = ["file1.txt", "file2.txt", "file3.txt"];

function printData(err, data) {
  if (err) console.log(err);
  else console.log(data);
}
fs.readFile("file1.txt", "utf-8", function(err, data) {
  printData(err, data);

  fs.appendFile("file2.txt", data, function(err) {
    if (err) console.log(err);
    else console.log("Appended File 1 to file 2");

    fs.readFile("file2.txt", "utf-8", function(err, data) {
      printData(err, data);

      fs.writeFile("file3.txt", data, function(err) {
        if (err) return console.log(err);

        console.log("written content of file 3 to file 3");
      });
    });
  });
});

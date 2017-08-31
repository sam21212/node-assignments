var http = require('http');
var util = require('util');

var secondlargest = require('./secondlargestarray');

var frequency = require('./calculateFrequency');

var flatten = require('./flatten_object');

var unflatten = require('./unflatten');

var array = [2, 4, 3, 1, 5, 6];

var string = 'shali is running fast';

var nestedObject = {
  flatJSON: false,
  i: { am: { not: { so: { flat: true, unflat: false } }, a: "tree" } },
  dates: [{ day: 1 }, { day: 8947 }]
};

var flatObject = {
  flatJSON: false,
  'i.am.not.so.flat': true,
  'i.am.not.so.unflat': false,
  'i.am.a': 'tree',
  'dates.0.day': 1,
  'dates.1.day': 8947
};

http.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      'The Second largest element in ' +
        array +
        ' is ' +
        secondlargest.secondLargest(array) +
        '</br>'
    );
    res.write(
      'The frequency of each element in ' +
        string +
        ' is ' +
        util.inspect(frequency.calculateFrequency(string)) +
        '</br>'
    );
    res.write(
      'Flat Object of ' +
        util.inspect(nestedObject) +
        ' is ' +
        util.inspect(flatten.flatten(nestedObject)) +
        '/br>'
    );
    res.write(
      'Nested Object of ' +
        util.inspect(flatObject) +
        ' is ' +
        util.inspect(unflatten.unflatten(flatObject))
    );
    res.end();
  }).listen(8080);


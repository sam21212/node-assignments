exports.secondLargest = function(array) {
  var len = array.length,
    max = array[0],
    secondMax = -1;
  for (var iteration = 1; iteration < len; iteration++) {
    if (array[iteration] > max) {
      secondMax = max;
      max = array[iteration];
    } else if (array[iteration] > secondMax) secondMax = array[iteration];
  }
  return secondMax;
};

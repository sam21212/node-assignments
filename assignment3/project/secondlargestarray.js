exports.secondLargest=function(array) {
  var len = array.length,
    max = array[0],
    second_max = -1;
  for (var iter = 1; iter < len; iter++) {
    if (array[iter] > max) {
      second_max = max;
      max = array[iter];
    } else if (array[iter] > second_max) second_max = array[iter];
  }
  return second_max;
};
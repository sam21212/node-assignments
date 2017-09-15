function secondLargest(array) {
  if(array instanceof Array && array instanceof Object)
  {
    var len = array.length,
      max = array[0],
      second_max = -1;
    for (var iter = 0; iter < len; iter++) {
      if(typeof array[iter]!= 'number')
        return NaN;
    }
    for (var iter = 1; iter < len; iter++) {
      if (array[iter] > max) {
        second_max = max;
        max = array[iter];
      } else if (array[iter] > second_max) second_max = array[iter];
    }
    return second_max;
  }
  else
    return NaN;
}
module.exports = secondLargest;

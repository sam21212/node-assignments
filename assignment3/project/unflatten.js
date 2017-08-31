function merge(ans, array, value) {
  var len = array.length - 1;
  for (var iteration = 0; iteration < len; iteration++) {
    var key = array[iteration];
    if (!(key in ans)) {
      if (array[iteration + 1] >= "0" && array[iteration + 1] <= "9") ans[key] = [];
      else ans[key] = {};
    }
    ans = ans[key];
  }
  ans[array[len]] = value;
}
exports.unflatten=function(flatObject) {
  var ans = {};
  for (var key in flatObject) {
    var array = [];
    array = key.split(".");
    merge(ans, array, flatObject[key]);
  }
  return ans;
}

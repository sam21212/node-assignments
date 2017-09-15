function merge(ans, array, value) {
  var len = array.length - 1;
  for (var iter = 0; iter < len; iter++) {
    var key = array[iter];
    if (!(key in ans)) {
      if (array[iter + 1] >= "0" && array[iter + 1] <= "9") ans[key] = [];
      else ans[key] = {};
    }
    ans = ans[key];
  }
  ans[array[len]] = value;
}
function unflatten(flatObject) {
  if(flatObject instanceof Array == false && flatObject instanceof Object == true)
  {
    var ans = {};
    for (var key in flatObject) {
      var array = [];
      array = key.split('.');
      merge(ans, array, flatObject[key]);
    }
    return ans;
  }
  else
    return NaN;
}
module.exports = unflatten;
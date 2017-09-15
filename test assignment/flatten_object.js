function flatten(unflatObject) {
  var ans = {};
  for (var key in unflatObject) {
    if (typeof unflatObject[key] == "object") {
      var flatobject = flatten(unflatObject[key]);
      for (var item in flatobject) {
        ans[key + '.' + item] = flatobject[item];
      }
    } 
    else ans[key] = unflatObject[key];
  }
  return ans;
}
module.exports = flatten; 
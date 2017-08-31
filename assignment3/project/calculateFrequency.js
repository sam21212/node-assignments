exports.calculateFrequency = function(string) {
  var frequency = {};
  for (var iteration = 0; iteration < string.length; iteration++) {
    var character = string.charAt(iteration);
    if (character >= "a" && character <= "z") {
      if (frequency[character]) frequency[character]++;
      else frequency[character] = 1;
    }
  }
  return frequency;
};

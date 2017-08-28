function calculateFrequency(string) {
  var frequency = {};
  for (var iter = 0; iter < string.length; iter++) {
    var character = string.charAt(iter);
    if (character >= "a" && character <= "z") {
      if (frequency[character]) frequency[character]++;
      else frequency[character] = 1;
    }
  }
  return frequency;
}
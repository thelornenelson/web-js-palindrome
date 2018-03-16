function isPalindrome(s) {
  s = s.toLowerCase().replace(/ /g, "");
  var stringReverse = s.split("").reverse().join("");
  return s == stringReverse;
}

module.exports = isPalindrome;

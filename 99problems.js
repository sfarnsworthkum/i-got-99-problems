//Longest Vowel Chain
//The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only and no spaces, return the length of the longest vowel substring.
function solve(s) {
  var max = 0;
  var count = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i].match(/[aeiou]/)) {
      max = Math.max(++count, max);
    } else {
      count = 0;
    }
  }
  return max;
}

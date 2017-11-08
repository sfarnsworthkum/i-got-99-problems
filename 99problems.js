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

//rotateArray
//Write a function called rotateArray which accepts an array and a number (let's call it n) and rotates the array n times. The function should return the array.

// rotateArray([1,2,3,4,5,6,7], 3) // [5,6,7,1,2,3,4]
// rotateArray([4,1,2,10,6,3], 1) // [3,4,1,2,10,6]
// rotateArray([4,1,2,10,6,3], 100) // [2,10,6,3,4,1]

// Time Complexity - O(n)
// Space Complexity - O(1)

function rotateArray(arr, n) {
  // if(n > arr.length) {
  //   num = n % arr.length;
  // } else {
  // num = n;
  // }
  let num = n > arr.length ? n % arr.length : n;
  arr.unshift(...arr.splice(arr.length - num));
  return arr;
}

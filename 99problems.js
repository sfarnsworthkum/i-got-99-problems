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

//removeElement
// Write a function called removeElement which accepts an array and a value. The function should return a count of the number of elements in the array which are not equal to the value.
// Examples:

// removeElement([3,2,2,1], 2) // 2
// removeElement([10,4,1,2,5,1,2,4,2,1,5,5], 5) // 9
// removeElement([12,3,11,6,1,2,3,6,1], 11) // 8

// Time Complexity - O(n)
// Space Complexity - O(1)
function removeElement(arr, el) {
  var count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== el) {
      count++;
    }
  }
  return count;
}

// Write a function called stairs which accepts n number of stairs. Imagine that a person is standing at the bottom of the stairs and wants to reach the top and the person can climb either 1 stair or 2 stairs at a time. Your function should return the number of ways the person can reach the top by only climbing 1 or 2 stairs at a time.

// stairs(1) // 1
// stairs(2) // 2 (1,1 or 2)
// stairs(3) // 3 (1,1,1 or 1,2 or 2,1)
// stairs(5) // 8
// stairs(10) // 89
// stairs(12) // 233
// stairs(44) // 1134903170
// stairs(332) // 1.751455877444437e+69

// BONUS

// Time Complexity - O(n)
// Space Complexity - O(n)
function stairs(n) {
  //tabulation, building the table up to n
  var stepsArr = [0, 1, 2];
  for (var i = 3; i <= n; i++) {
    //fib sequence
    stepsArr[i] = stepsArr[i - 2] + stepsArr[i - 1];
  }

  return stepsArr[n];
}

//memoization top down
//could still refactor

function stairs(n) {
  var result = {};
  return str(n);

  function str(n) {
    if (n < 3) {
      return n;
    }
    if (result[n]) {
      return result[n];
    }
    var res = str(n - 1) + str(n - 2);
    result[n] = res;
    return res;
  }
}

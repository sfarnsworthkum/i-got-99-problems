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
//movezeroes
// Write a function called moreZeroes which accepts an array and moves all 0's to the end of it while maintaining the relative order of the non-zero elements. The function should return the array.

// moveZeroes([0,1,0,3,12]) // [1,3,12,0,0]
// moveZeroes([1,3,10,2]) // [1,3,10,2]
// moveZeroes([4,1,2,0,0,1,2,1,0]) // [4,1,2,1,2,1,0,0,0]
// moveZeroes([6,1,2,3,5,1,0]) // [6,1,2,3,5,1,0]
// moveZeroes([0,6,1,2,3,5,1,0]) // [6,1,2,3,5,1,0,0]
// moveZeroes([12,2,0,0,2,1]) // [12,2,2,1,0,0]

// Time Complexity - O(n)
// Space Complexity - O(1)
function moveZeroes(arr) {
  var i = 0;
  var j = 1;
  while (j <= arr.length - 1) {
    if (arr[i] === 0 && arr[j] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    } else if (arr[i] === 0 && arr[j] === 0) {
      j++;
    } else if (arr[i] !== 0) {
      i++;
      j++;
    }
  }
  return arr;
}

// Write a function called matchingDigits which accepts two positive integers. The function should find out if the two numbers have the same frequency of digits, if so return true, otherwise return false. You can assume all inputs will be positive integers.

// matchingDigits(141, 411) // true
// matchingDigits(34, 14) // false
// matchingDigits(3589578, 5879385) // true
// matchingDigits(22, 222) // false
// matchingDigits(8675309, 9035768) // true
// matchingDigits(8686867, 686868) // false

// Time complexity : O(N + M), where N and M are the total number of digits in each input.
function matchingDigits(int1, int2) {
  var arr1 = int1.toString().split("");
  var arr2 = int2.toString().split("");
  var countObj = {};
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    countObj[arr1[i]] = (countObj[arr1[i]] || 0) + 1;
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!countObj[arr2[i]]) {
      return false;
    }
    if (countObj[arr2[i]]) {
      countObj[arr2[i]]--;
      if (countObj[arr2[i]] < 0) {
        return false;
      }
    }
  }

  return true;
}

//Delete occurences of an ele ment if it occurs more than n times
//Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
function deleteNth(arr, x) {
  var obj = {};
  return arr.filter(function(number) {
    obj[number] = obj[number] ? obj[number] + 1 : 1;
    return obj[number] <= x;
  });
}

//find the unique number
//There is an array with some numbers. All numbers are equal except for one. Try to find it!

function findUniq(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1] && arr[i] !== arr[i + 2]) {
      return arr[i];
    }
    if (arr[i] !== arr[i + 1] && arr[i] === arr[i + 2]) {
      return arr[i + 1];
    }
    if (arr[i] === arr[i + 1] && arr[i] !== arr[i + 2]) {
      return arr[i + 2];
    }
  }
}

//Detect Pangram

//A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

//Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  string = string.toLowerCase();
  var alpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  var pt = 0;
  while (pt < string.length) {
    if (alpha.indexOf(string[pt]) >= 0) {
      alpha.splice(alpha.indexOf(string[pt]), 1);
    }
    pt++;
  }
  if (alpha.length > 0) {
    console.log(alpha);
    return false;
  }
  console.log(alpha);
  return true;
}

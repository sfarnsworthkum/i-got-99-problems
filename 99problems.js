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

//Snail
//Write a function called snail which Given an n x n array, returns the array elements arranged from outermost elements to the middle element, traveling clockwise.
function snail(arr) {
  var endArr = [];
  while (arr.length > 0) {
    endArr = endArr.concat(arr.shift(arr[0]));
    for (var i = 0; i < arr.length; i++) {
      endArr.push(arr[i].pop());
    }
    if (arr.length === 0) {
      return endArr;
    }
    endArr = endArr.concat(arr.pop().reverse());
    for (var i = arr.length - 1; i >= 0; i--) {
      endArr.push(arr[i].shift());
    }
  }
  return endArr;
}
//allLongest
//
// Write a function called allLongest which accepts an array of strings and returns another array containing all of its longest strings.

// allLongest(["a","bb","cc","dd"]) // ["bb","cc","dd"]
// allLongest(['Elie', 'Matt', 'Tim'] // ["Elie", "Matt"]

function allLongest(arr) {
  var longest = 0;
  var current = 0;
  for (var i = 0; i < arr.length; i++) {
    current = arr[i].length;
    if (current >= longest) {
      longest = current;
    }
  }
  return arr.filter(el => el.length === longest);
}
// isSimilar

// Write a function called isSimilar which accepts two arrays. This function should return true if one array can be created from another by swapping at most one pair of elements. This function should return false if these arrays can not be the same in one swap.

// isSimilar([3,2,1],[1,2,3]) // true
// isSimilar([1,2,3,4],[4,2,3,1]) // true
// isSimilar([0,1,2,3,4],[3,1,2,0,4]) // true
// isSimilar([1,2,3,4,5],[1,2,3,4,5]) // true
// isSimilar([4,1,2,3], [1,2,3,4]) // false
// isSimilar([1,2,3,4,5], [1,2,3,4,5,6]) // false
// isSimilar([1,2,3,4,5,6], [1,2,3,4,5,7]) // false
// isSimilar([3,2,1,5,6],[1,2,3,4,5]) // false

// Constraints:

// Time Complexity - O(n)
function isSimilar(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  var counter = 0;
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      return false;
    }
    if (arr2.indexOf(arr1[i]) !== i) {
      counter++;
      if (counter > 2) {
        return false;
      }
    }
  }
  return true;
}
//not O(N)...

// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function. Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

// maxSubarraySum([100,200,300,400], 2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
// maxSubarraySum([2,3], 3) // null

// Time Complexity - O(n)

function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let total = 0;
  for (let i = 0; i < num; i++) {
    total += arr[i];
  }
  let currentTotal = total;
  for (let i = num; i < arr.length; i++) {
    currentTotal += arr[i] - arr[i - num];
    total = Math.max(total, currentTotal);
  }
  return total;
}


//----------------------Python break -----------------------

//Decending order 

def Descending_Order(num):
    digits = [x for x in str(num)]
    digits.sort(reverse = True)
    return int(''.join(digits))

//back to JS

//real size of dimentional array

function realSize(arrays) {
  var sum = 0;
  for (var i = 0; i < arrays.length; i++) {
    if (typeof arrays[i] != "number") {
      sum += realSize(arrays[i]);
    } else {
      sum += 1;
    }
  }
  return sum;
  
}

//longestFall
//longestFall

// Given an array of integers, determine the length of the longest consecutive decrease of integers.

// Input: array of integers
// Output: integer

// Constraints:
// Time Complexity: O(N)
// Space Complexity: O(1)
function longestFall(nums) {
  let count = 1;
  let maxCount = 0;
  
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i-1]) count++;
    if (nums[i] >= nums[i-1]) count = 1;
    maxCount = Math.max(count, maxCount);
  }
  return maxCount;
}

//constructNote

// You are trying to construct a message but you only have a limited collection of letters.  Determine if the message can be built with the letters that you are given.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Input: message {string}, letters {string}

// Output: boolean

// Constraints: 
// if M is the length of messages and N is the length of letters:

// Time Complexity: O(M+N) 
// Space Complexity: O(N) 

function constructNote(message, letters) {
    var lettersArr = letters.split('');
    var messageArr = message.split('');
    var countObj = {};
    for (let i = 0; i < lettersArr.length; i++) {
        countObj[lettersArr[i]] = (countObj[lettersArr[i]] || 0) + 1;
    }
    for (let i = 0; i < messageArr.length; i++) {
        if(countObj[messageArr[i]]) {
            countObj[messageArr[i]]--;
            if(countObj[messageArr[i]] < 0) {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
}

//convert linked list to string 

function stringify(list) {
  var arr = [];
  while(list) {
    arr.push(list.data);
    list = list.next;
  }
  arr.push('null');
  return arr.join(' -> ');  
}

//not as readable but slick 
function stringify(list) {
  return list === null ? "null" : `${list.data} -> ${stringify(list.next)}`;
}

//hamming distance 
//
// This function takes in two strings of equal length, and calculates the distance between them. Here, "distance" is defined as the number of characters that differ at the same position. The function should ignore case.

// If the inputs do not have the same length, the function should return "Input strings must have the same length."
function hammingDistance(str1, str2) {
  if(str1.length !== str2.length) {
    return "Input strings must have the same length.";
  } else {
    var lowStr1 = str1.toLowerCase();
    var lowStr2 = str2.toLowerCase();
    var count = 0;
    for (var i = 0; i < lowStr1.length; i++) {
      if(lowStr1[i] !== lowStr2[i]) {
        count++;
      }  
    }
    return count;
  } 
}

//oneCharDifference


//which checks whether there two strings differ by a single character.

//The difference may consist of one character being added, removed, or replaced, in which case the function must return true. In all other cases it must return false. As with hammingDistance, this function should ignore case.
function oneCharDifference(str1, str2) {
  if (str1.length === str2.length) {
    return hammingDistance(str1, str2) === 1;
  } else {
    if (str1.length > str2.length) {
      var largerStr = str1;
      var smStr = str2
    } else {
      largerStr = str2;
      smStr = str1
    } if(largerStr.length - smStr.length > 1) {
      return false;
    } else {
      var count = 0;
      for (var i = 0; i < smStr.length; i++) {
        if (smStr[i].toLowerCase() !== largerStr[i + count].toLowerCase()) {
          count++;
          if (count === 2 || smStr[i].toLowerCase() !== largerStr[i + 1].toLowerCase()) {
            return false;
          }
        } 
      }
    }
  }
}

//some recursion problems

//Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
function fib(num){
    //returns nth number in fib sequence
    if (num === 1){
      return 1;
     }
    if (num === 0) {
      return 0;
    }
    return (fib(num - 1) + fib(num - 2));
}

fib(4) // 3
fib(10) // 55
fib(28) // 317811
fib(35) // 9227465


    




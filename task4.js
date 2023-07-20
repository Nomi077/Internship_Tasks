// Problem 1: Find the Maximum Write a JavaScript function named findMax that takes an array
//  of numbers as input and returns the maximum value from the array. If the array is empty,
//  the function should return null.
// Example:
// findMax([3, 5, 1, 9, 2]); // Output: 9
// findMax([]); // Output: null

arr = [1, 7, 5, 2, 3, 4, 5];
/*
function findMax(arr) {
  if (arr.length == 0) {
    return null;
  }
  max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax([]));
*/
//Problem 2: Count Occurrences Write a JavaScript function named countOccurrences that takes an
// array of elements and a target element as input and returns the number of occurrences of
// the target element in the array.
// Example:
// countOccurrences([1, 2, 3, 4, 2, 1, 2], 2); // Output: 3
// countOccurrences(['a', 'b', 'c', 'a'], 'a'); // Output: 2

num = 3;
function countOccurrences(arr, num) {
  counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (num == arr[i]) {
      counter++;
    }
  }
  return counter;
}
console.log(countOccurrences([3, 5, 6, 7, 3, 4, 3, 3], 3));

// Problem 3: Reverse String Write a JavaScript function named `reverseString` that takes a string
// as input and returns a reversed version of the input string.
// Example:
// reverseString('Hello'); // Output: 'olleH'
// reverseString('JavaScript'); // Output: 'tpircSavaJ'
str = "hello";
console.log(str.length);
function reverseString(str) {
  var new_str = "";
  for (let i = str.length - 1; i >= 0; i--) {
    new_str += str[i];
  }
  return new_str;
}
console.log(reverseString("hello"));

// Problem 4: Prime Numbers Write a JavaScript function named isPrime that takes a number as
// input and returns true if the number is prime, and false otherwise.
// A prime number is a positive integer greater than 1 that is divisible only by 1 and itself.
// Example:
// isPrime(7); // Output: true
// isPrime(12); // Output: false

number = 3;
function isPrime(number) {
  if (number > 1 && number % 1 == 0 && number % number == 0) {
    if (number % 2 == 0) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}
console.log(isPrime(7));

// Problem 5: Palindrome Check Write a JavaScript function named isPalindrome that takes a
// string as input and returns true if the string is a palindrome, and false otherwise.
//  A palindrome is a word, phrase, number, or other sequence of characters that reads the
//   same forward and backward, ignoring spaces, punctuation, and capitalization.
// Example:
// isPalindrome('racecar'); // Output: true
// isPalindrome('Hello'); // Output: false
let str2 = "racecar";
function isPalindrome(str2) {
  let new_str1 = "";
  for (let i = str2.length - 1; i >= 0; i--) {
    new_str1 += str2[i];
  }
  if (new_str1 == str2) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("racacar"));

// Problem 6: FizzBuzz Write a JavaScript function named fizzBuzz that takes a number as input
//  and returns:
// •	"Fizz" if the number is divisible by 3.
// •	"Buzz" if the number is divisible by 5.
// •	"FizzBuzz" if the number is divisible by both 3 and 5.
// •	The number itself if none of the above conditions are met.
// Example:
// fizzBuzz(3); // Output: "Fizz"
// fizzBuzz(10); // Output: "Buzz"
// fizzBuzz(15); // Output: "FizzBuzz"
number0 = 3;
function fizzBuzz(number0) {
  if (number % 3 == 0 && number % 5) {
    return "fizzBuzz";
  } else if (number % 3 == 0) {
    return "fizz";
  } else if (number % 5 == 0) {
    return "buzz";
  } else {
    return "wrong input";
  }
}
console.log(fizzBuzz(50));
// Problem 7: Factorial Write a JavaScript function named factorial that takes a positive integer as input and
//  returns the factorial of that number. The factorial of a non-negative
//  integer n is the product of all positive integers less than or equal to n.
// Example:
// factorial(5); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)
// factorial(0); // Output: 1 (0! is defined as 1)
var fac = 4;
function factorial(fac) {
  let newfac = 1;
  for (let i = fac; i > 1; i--) {
    newfac = newfac * i;
  }
  return newfac;
}
console.log(factorial(0));
// Problem 8: Fibonacci Sequence Write a JavaScript function named fibonacci that takes a positive
// integer n as input and returns an array containing the first n numbers in the Fibonacci sequence.
// The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding ones.
// Example:
// fibonacci(5); // Output: [0, 1, 1, 2, 3]
// fibonacci(8); // Output: [0, 1, 1, 2, 3, 5, 8, 13]

function fibonacci() {
  let number1 = 1;
  var new_num = [0, 1];

  if (number1 >= 0) {
    for (let i = 0; i < number1 - 2; i++) {
      let new_num1 = 0;
      new_num1 = new_num[i] + new_num[i + 1];
      new_num.push(new_num1);
    }
    return new_num;
  } else {
    return "Error";
  }
}
console.log(fibonacci());

// Problem 9: Capitalize Words Write a JavaScript function named capitalizeWords
// that takes a string as input and returns a new string where each word in the
// input string is capitalized.
// Example:
// capitalizeWords('hello world'); // Output: 'Hello World'
// capitalizeWords('javascript is awesome'); // Output: 'Javascript Is Awesome'

function capitalizeWords(string) {
  const updatedString = string.replace(/\b\w/g, (x) => x.toUpperCase());
  return updatedString;
}
console.log(capitalizeWords(" hello world"));

// Problem 10: Array Sum Write a JavaScript function named arraySum that takes
// an array of numbers as input and returns the sum of all the numbers in the
// array.
// Example:
// arraySum([1, 2, 3, 4, 5]); // Output: 15 (1 + 2 + 3 + 4 + 5 = 15)
// arraySum([-1, 0, 1]); // Output: 0 (-1 + 0 + 1 = 0)
var arr = [];
function arraySum(arr) {
  console.log(arr.length);
  sum1 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum1 = sum1 + arr[i];
  }
  return sum1;
}
console.log(arraySum([1, 2, 3, 4, 5]));

/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Convert the string to lowercase for case-insensitive comparison
  const lowerCaseStr = str.toLowerCase();

  // Remove non-alphanumeric characters from the string
  const alphanumericStr = lowerCaseStr.replace(/[^a-z0-9]/g, "");

  // Compare the string with its reverse
  const reversedStr = alphanumericStr.split("").reverse().join("");

  return alphanumericStr === reversedStr;
}

module.exports = isPalindrome;

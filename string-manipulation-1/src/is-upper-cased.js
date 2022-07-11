/* exported isUpperCased */
// Pseudocode
// Function has a string named word as a parameter.
// The function will utilize the toUpperCase() function used in the
//   previous exercise.
// The original parameter string will be compared to the capitalized
//   version of itself. If the condition is met, the function will
//   return true. Otherwise, it will return false.

function isUpperCased(word) {
  var capWord = word.toUpperCase();
  if (word === capWord) {
    return true;
  }
  return false;
}

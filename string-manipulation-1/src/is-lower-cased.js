/* exported isLowerCased */
// Pseudocode
// Function has a string named word as a parameter.
// The function will utilize the toLowerCase() function used in the
//   capitalize function.
// The original parameter string will be compared to the lower case
//   version of itself. If the condition is met, the function will
//   return true. Otherwise, it will return false.

function isLowerCased(word) {
  var lowWord = word.toLowerCase();
  if (word === lowWord) {
    return true;
  }
  return false;
}

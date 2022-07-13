/* exported lastChars */
// Pseudocode
// The function lastChars() takes in two parameters: length and string
// The function returns a truncated string, which is last length characters of
//   the parameter string.
// The function will utilize a conditional to ensure that the length parameter
//   is longer than the length of the parameter string.
// If this condition is met, the function will utilize the slice method of the
//   string object to return all characters from index starting from length
//   subtracted from string length to the last index of the parameter string.
// If the condition is not met, the function will return the parameter string.

function lastChars(length, string) {
  if (length < string.length) {
    return string.slice(string.length - length, string.length);
  }
  return string;
}

/* exported firstChars */
// Pseudocode
// The function firstChars() takes in two parameters: length and string
// The function returns a truncated string, which is first length characters of
//   the parameter string.
// The funtion will utilize the slice method of the string object, to return
//   every character from index 0 of the string to the length index of the string.

function firstChars(length, string) {
  return string.slice(0, length);
}

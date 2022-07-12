/* exported truncate */
// Pseudocode
// The function truncate() takes in two parameters: length and string
// The function returns a truncated string, which is the parameter length
//   of the string and an appended ellipsis
// The function will first create an empty string literal names truncatedString
// The function will use the string method, slice, to add the appropriate length
//   and ellipsis to the truncatedString.
// Finally, the function returns truncatedString

function truncate(length, string) {
  var truncatedString = '';
  truncatedString += (string.slice(0, length) + '...');
  return truncatedString;
}

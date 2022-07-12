/* exported ransomCase */
// Pseudocode
// The function ransomCase() takes in one parameter: string
// The function returns the same string with every-other character uppercased
// The function will first create an empty string literal named ransomStr
// The function iterate through the parameter string, and check perform a
//   modulo operation on the index to check if its even or odd.
// If the index is even, it will be lowerCased and concatentated with ransomStr.
// If the index is off, it will be uppercased and concatentated with ransomStr.
// Finally the function will return ransomStr.

function ransomCase(string) {
  var ransomStr = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      ransomStr += string[i].toLowerCase();
    } else {
      ransomStr += string[i].toUpperCase();
    }
  }
  return ransomStr;
}

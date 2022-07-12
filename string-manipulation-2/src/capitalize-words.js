/* exported capitalizeWords */
// Pseudocode
// The function capitalizeWords() takes one parameter: string
// The function will return a new string in which every word in the parameter
//   string is capitalized.
// The function will create an empty string literal named capStr
// The function will perform the toUpperCase() method on the first index of the
//   parameter string and concatenate it into the parameter string.
// The function will then iterate through the remainder of the parameter string,
//   only, capitalizing characters that are no preceded by an empty space.
// If a character is not preceded by an empty space, the function will perform the
//   toLowerCase() method on it.
// Finally, the function will return capStr;

function capitalizeWords(string) {
  var capStr = '';
  capStr += string[0].toUpperCase();

  for (let i = 1; i < string.length; i++) {
    if (string[i - 1] === ' ') {
      capStr += string[i].toUpperCase();
    } else {
      capStr += string[i].toLowerCase();
    }
  }
  return capStr;
}

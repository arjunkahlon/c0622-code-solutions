/* exported swapChars */
// Pseudocode
// The function swapChars() takes in three parameters: firstIndex, secondIndex,
//   and a string.
// The function returns a new string, in which the character value of the firstIndex
//   is swapped with the character value at the secondIndex
// The funtion will create an empty string named swapStr
// The function will then iterate through the parameter string, and check each
//   value of the loop index against the firstIndex parameter. If a match is found,
//   the value held at the secondIndex of the parameter string will be concatenated
//   with swapStr.
// Else, the function will compare the current loop index to the secondIndex parameter. If a
//   match is found, the value held at the firstIndex of the parameter string will
//   be concatenated with swapStr.
// Else(Default) The value held at the current loop index will be concatenated with
//   swapStr.
// Finally, the function returns swapStr.
function swapChars(firstIndex, secondIndex, string) {
  var swapStr = '';
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      swapStr += string[secondIndex];
    } else if (i === secondIndex) {
      swapStr += string[firstIndex];
    } else {
      swapStr += string[i];
    }
  }
  return swapStr;
}

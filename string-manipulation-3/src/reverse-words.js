/* exported reverseWords */
/* ----------------------------------------------------------------------- */
// Pseudocode

// We begin by reversing the parameter string into a new string
// We then iterate through the reversed string, and concatenate each
//  indexed character value into a substring until we reach either an
//  empty space, or beyond the last index of the string.
// When this condition is met, we concatentate the substring with the
//  finalstring and store the result of the expression in the final string.
// We also account for the last substring which will not
//  have an empty space concatenated in front of it.
// Finally, we return the final string.
/* ----------------------------------------------------------------------- */

function reverseWords(string) {
  var reverseStr = '';
  var finalStr = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reverseStr += string[i];
  }

  for (let i = 0; i < reverseStr.length; i++) {
    var subStr = '';
    while (reverseStr[i] !== ' ' && i < reverseStr.length) {
      subStr += reverseStr[i];
      i++;
    }
    if (i < reverseStr.length - 1) {
      finalStr = ' ' + subStr + finalStr;
    } else {
      finalStr = subStr + finalStr;
    }
  }
  return finalStr;
}

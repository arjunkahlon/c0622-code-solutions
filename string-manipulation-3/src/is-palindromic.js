/* exported isPalindromic */
/* ----------------------------------------------------------------------- */
// Pseudocode

// First we will need to remove the empty characters as we are basing the
//  palindrome condition based sole on the alphabetical characters.
// Next we will reverse through the string of alphabetical characters, and
//  concatenate each index into a new string representing the reversed String.
// Finally, we will perform a stricly equal comparison betwen the alphabetical
//  string and the reversed string. If they are strictly equal, then the
//  palindrome condition is met.
/* ----------------------------------------------------------------------- */

function isPalindromic(string) {
  var newStr = '';
  var revStr = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      newStr += string[i];
    }
  }

  for (let i = newStr.length - 1; i >= 0; i--) {
    revStr += newStr[i];
  }

  if (newStr === revStr) {
    return true;
  }

  return false;
}

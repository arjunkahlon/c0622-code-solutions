/* exported isVowel */
// Pseudocode
// isVowel function will have one parameter, a char.
// The function will create a string filled with lower-case
//   and upper-case vowels.
// A for loop will iterate through this vowel string and compare
//   each individual indexed value to the passed in char parameter.
// If a match is found, the function will return true.
// By defuault, the fucntion will return false;

function isVowel(char) {
  var vowel = 'aAeEiIoOuUyYwW';
  for (var i = 0; i < vowel.length; i++) {
    if (char === vowel.charAt(i)) {
      return true;
    }
  }
  return false;
}

/* exported numVowels */
// Pseudocode
// The function numVowels() takes in one parameter: string
// The function returns the number of vowels characters in the string
// The function will first create a string called lowerString which will hold
//   a lower cased version of the parameter string.
// The function will then create a string named vowels which will hold lower case
//   vowels.
// The variable counter will be declared and intialized to 0.
// The function will iterate through a nested for loop. The outer for loop will
//   iterate through the numVowels string, while the inner for loop will compare
//   each index of the lowerString with the vowels String, and will increment the
//   counter variable when a match is found.
// Finally, counter will be returned by the function.

function numVowels(string) {
  var lowerString = string.toLowerCase();
  var vowels = 'aeiou';
  var counter = 0;

  for (let i = 0; i < lowerString.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (lowerString[i] === vowels[j]) {
        counter++;
      }
    }
  }
  return counter;
}

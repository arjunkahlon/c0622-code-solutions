/* exported isAnagram */
/* ----------------------------------------------------------------------- */
// Pseudocode

// I will attempt this algorithm first without using string prototype functions.
// We begin by combining both parameters into one combined string.
// Next, we remove the empty characters from the combined string to
//  create a clean string.
// With our cleaned combined string, we can logically conclude that for
//  the anagram condition to be met, there must by an even number of
//  occurences for each encountered character.
// Thus, we iterate the outer loop through each character of the string, with
//  the inner loop iterating through the word and comparing each character to the
//  character referenced by the outer loop. The counter variable is incremented
//  when a match is found.
// After the inner loop terminates, we return false if the counter variable is odd
// If the nested for loop termiantes and the counter condtional expression does not
//  return false, we return true from the function.
/* ----------------------------------------------------------------------- */

function isAnagram(firstString, secondString) {
  var combinedString = firstString + secondString;
  var cleanString = '';
  for (let i = 0; i < combinedString.length; i++) {
    if (combinedString[i] !== ' ') {
      cleanString += combinedString[i];
    }
  }

  for (let i = 0; i < cleanString.length; i++) {
    var counter = 0;
    for (let j = 0; j < cleanString.length; j++) {
      if (cleanString[i] === cleanString[j]) {
        counter++;
      }
    }
    if (counter % 2 !== 0) {
      return false;
    }
  }
  return true;
}

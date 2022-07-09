/* exported reverseWord */
// Pseudocode
// reverseWord function has a string parameter named word.
// reverseWord function returns the reverse order of the parameter string
// Function will create reverseString string to hold the reverse string
// reverseString will be initialized as empty
// The function will iterate backwards through the parameter string and
//   concatenate each index value with the reverseString variable.
// The function will return the reverseString

function reverseWord(word) {
  var reverseString = '';

  for (let i = word.length - 1; i >= 0; i--) {
    reverseString += word[i];
  }
  return reverseString;
}

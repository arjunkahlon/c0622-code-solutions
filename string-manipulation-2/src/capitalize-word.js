/* exported capitalizeWord */
// Pseudocode
// The function capitalizeWord() takes in one parameter: word
// The function returns the same word but with the first character capitalized.
// If the input string is any form of javascript, "JavaScript" is returned
// The function will first create an empty string literal names capWord
// The function will use the string method, slice, to add the appropriate length
//   and ellipsis to the truncatedString.
// Finally, the function returns truncatedString

function capitalizeWord(word) {
  var capWord = '';
  capWord += word[0].toUpperCase() + word.slice(1, word.length).toLowerCase();
  if (capWord === 'Javascript') {
    return 'JavaScript';
  }
  return capWord;
}

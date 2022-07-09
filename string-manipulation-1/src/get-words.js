/* exported getWords */
// Pseudocode
// The function getWords will have one parameter of type: string
// The function will return an array of JavaScript string
// Each word in the string parameter will be seperated by a space. This
//   space will be used to properly store each string in the proper index.
// The function will create an empty array literal called wordArr that will
//   contain a collection of the words from the input string.
// The function will also initialize an empty string named word which will
//   have non space characters concatenated until a space character is encountered.
// When the space character is encountered, the variable "word" will be pushed
//   into the wordArr. The variable "word" will then be reinitialized.
// The function will check if the index is equal to the length of the parameter
//   string. If this result of this coniditional is true, the variable "word" will
//   be pushed into wordArr.
// After the loops exits, the function will return the wordArr.
function getWords(string) {
  var wordArr = [];
  var word = '';

  if (string.length === 0) {
    return wordArr;
  }

  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) !== ' ') {
      word += string.charAt(i);
      if (i === string.length - 1) {
        wordArr.push(word);
      }
    } else {
      wordArr.push(word);
      word = '';
    }
  }
  return wordArr;
}

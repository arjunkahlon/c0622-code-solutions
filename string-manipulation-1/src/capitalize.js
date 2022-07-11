/* exported capitalize */
// Pseudocode
// Parameter named word is pased into function. Paramter is treated
//    a string.
// Since string values cannot be changed directly, the fucntion will declare
//    an empty string called newArr.
// Function calls toUpperCase() on the first indexed char value
//    and concatenates the upper case value to our newArr string.
// A for loop is declared with a variable i initialized to 1,
//    the conditional expression that i is less than the length of
//    the parameter, and an incrementExpression for the letter i.
// Function calls toLowerCase() to make the remaining indexed char values
//    lower case and concatenates each lower case value to newArr,
// For loop exits
// newArr is returned by function

function capitalize(word) {
  var newArr = '';

  newArr += word.charAt(0).toUpperCase();

  for (let i = 1; i < word.length; i++) {
    newArr += word.charAt(i).toLowerCase();
  }
  return newArr;
}

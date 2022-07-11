/* exported getKeys */
// Pseudocode
// The function getKeys is passed in a parameter object. The function iterates
//   through the properties of the object and stores the key names in an array
//   named keyArr.
// The function creates an array literal named keyArr.
// The function uses a for...in loop to iterate through the properties of the
//   object. It stores these properties (or keys) into the keyArr array.
// The function returns the keyArr array.

function getKeys(object) {
  var keyArr = [];

  for (var key in object) {
    keyArr.push(key);
  }
  return keyArr;
}

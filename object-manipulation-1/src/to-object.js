/* exported toObject */
// Pseudocode
// The function toObject passes in an array of strings and returns an object.
// The first index of string array is the name of the property of the object
//   we are creating. The second index of the array is the value we will be
//   assigning to the property.
// The function first declared an object literal named object.
// The function then uses bracket notation to set the key and corresponding
//   valaue, by utilizing the array indexes 0 and 1.
// Finally the function returns the object.

function toObject(keyValuePair) {
  var object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}

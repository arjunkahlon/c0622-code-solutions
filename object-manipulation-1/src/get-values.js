/* exported getValues */
// Pseudocode
// The function getValues is passed in a parameter object. The function iterates
//   through the properties of the object and stores the values of each property.
// The function creates an array literal named valuesArr.
// The function uses a for...in loop to iterate through the properties of the
//   object. It stores these values of each property into the valuesArr array.
// The function returns the valuesArr array.

function getValues(object) {
  var valuesArr = [];

  for (var key in object) {
    valuesArr.push(object[key]);
  }
  return valuesArr;
}

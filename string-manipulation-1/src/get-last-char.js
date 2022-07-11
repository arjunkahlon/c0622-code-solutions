/* exported getLastChar */
// Pseudocode
// Parameter named string is passed into function
// Function treats passed in string as an indexed array
// Function accesses last index of the parameter at
// ......index: string.length - 1.
// Value stored at last index is returned by function

function getLastChar(string) {
  return string[string.length - 1];
}

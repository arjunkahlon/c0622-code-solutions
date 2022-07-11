/* exported setValue */
// Pseudocode
// The function setValue() has three parameters: an object, a key representing
//   the property we will be setting, and the value we will be setting to the
//   above-mentioned property.
// Since our function will not always know the name of the property, we will be
//   using bracket notation to set the value. We accomplish this by setting the
//   value to the key property of the object parameters.
//   No return is necessary as objects are a reference type.

function setValue(object, key, value) {
  object[key] = value;
}

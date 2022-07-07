/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  return (Array.from(person.firstName)[0]) + (Array.from(person.lastName[0]));
}

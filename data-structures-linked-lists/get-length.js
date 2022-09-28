/* exported getLength */

function getLength(list) {

  let listCopy = list;
  if (!listCopy.next) {
    return 1;
  }

  let counter = 1;

  while (listCopy.next) {
    counter++;
    listCopy = listCopy.next;
  }
  return counter;
}

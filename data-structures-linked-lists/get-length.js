/* exported getLength */

function getLength(list) {

  if (!list.next) {
    return 1;
  }

  let counter = 1;

  while (list.next) {
    counter++;
    list = list.next;
  }
  return counter;
}

/* exported includes */

function includes(list, value) {
  let listCopy = list;

  if (list.data === value) {
    return true;
  }

  while (listCopy.next !== null) {
    listCopy = listCopy.next;
    if (listCopy.data === value) {
      return true;
    }
  }
  return false;
}

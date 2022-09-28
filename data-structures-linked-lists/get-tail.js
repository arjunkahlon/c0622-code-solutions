/* exported getTail */

function getTail(list) {
  if (!list.next) {
    return list.data;
  }

  while (list.next) {
    list = list.next;
  }

  return list.data;
}

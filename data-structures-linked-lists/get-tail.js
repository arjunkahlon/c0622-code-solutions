/* exported getTail */

function getTail(list) {
  if (!list.next) {
    return list.data;
  }

  let listCopy = list;

  while (listCopy.next) {
    listCopy = listCopy.next;
  }

  return listCopy.data;
}

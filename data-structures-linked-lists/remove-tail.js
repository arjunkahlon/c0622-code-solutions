/* exported removeTail */
// Loop checking the next of the current next.
// Once you reach the second to last, set the
// next of the second to last to null. This will
// remove the tail.

function removeTail(list) {

  if (!list.next) {
    return;
  }

  while (list.next.next !== null) {
    list = list.next;
  }
  list.next = null;
}

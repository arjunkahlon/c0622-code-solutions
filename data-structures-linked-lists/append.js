/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {

  const appendList = new LinkedList(value);

  while (list.next) {
    list = list.next;
    if (!list.next) {
      list.next = appendList;
      break;
    }
  }
}

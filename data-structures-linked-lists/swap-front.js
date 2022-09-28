/* exported swapFront */
// Store the 2nd node
// Store the 3rd and remaining list
// Set the next of the 2nd mode to the parameter list to move it to front
// Set the next of the parameter list to the 3rd node.

function swapFront(list) {
  if (!list.next) {
    return list;
  }

  const nextNode = list.next;
  const nodeAfterNext = list.next.next;

  nextNode.next = list;
  list.next = nodeAfterNext;

  return nextNode;

}

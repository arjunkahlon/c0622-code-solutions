/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }

  queue.enqueue(queue.dequeue());
}

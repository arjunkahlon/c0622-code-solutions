/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return undefined;
  }

  let counter = 0;

  while (counter < index) {
    queue.enqueue(queue.dequeue());
    counter++;
  }
  return queue.dequeue();
}

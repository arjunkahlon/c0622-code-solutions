/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }

  let queueCurr = queue.dequeue();

  if (queue.peek() === undefined) {
    return queueCurr;
  }

  while (queueCurr >= queue.peek()) {
    queue.enqueue(queueCurr);
    queueCurr = queue.dequeue();
  }

  return queueCurr;
}

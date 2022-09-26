/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  }

  let max = stack.pop();

  while (stack.peek() !== undefined) {
    const topValue = stack.pop();
    if (topValue > max) {
      max = topValue;
    }
  }
  return max;
}
